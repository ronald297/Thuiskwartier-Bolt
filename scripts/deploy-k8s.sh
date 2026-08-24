#!/usr/bin/env sh
set -eu

if ! command -v kubectl >/dev/null 2>&1; then
  echo "kubectl is required" >&2
  exit 1
fi

: "${APP_IMAGE:?APP_IMAGE is required}"

K8S_NAMESPACE="${K8S_NAMESPACE:-default}"
K8S_APP_NAME="${K8S_APP_NAME:-thuiskwartier-bolt}"
K8S_DEPLOYMENT_NAME="${K8S_DEPLOYMENT_NAME:-thuiskwartier-bolt}"
K8S_SERVICE_NAME="${K8S_SERVICE_NAME:-thuiskwartier-bolt}"
INGRESS_HOST="${INGRESS_HOST:-new.thuiskwartier.nl}"
INGRESS_CLASS="${INGRESS_CLASS:-nginx}"
INGRESS_TLS_SECRET="${INGRESS_TLS_SECRET:-thuiskwartier-bolt-tls}"
CERT_MANAGER_CLUSTER_ISSUER="${CERT_MANAGER_CLUSTER_ISSUER:-certmanager-cert-manager}"

tmp_deployment_manifest="$(mktemp)"
tmp_secret_manifest="$(mktemp)"
tmp_service_manifest="$(mktemp)"
tmp_ingress_manifest="$(mktemp)"
tmp_certificate_manifest="$(mktemp)"
trap 'rm -f "$tmp_deployment_manifest" "$tmp_secret_manifest" "$tmp_service_manifest" "$tmp_ingress_manifest" "$tmp_certificate_manifest"' EXIT

: "${VITE_SUPABASE_URL:?VITE_SUPABASE_URL is required}"
: "${VITE_SUPABASE_ANON_KEY:?VITE_SUPABASE_ANON_KEY is required}"

supabase_url_b64="$(printf '%s' "$VITE_SUPABASE_URL" | base64 | tr -d '\n')"
supabase_anon_key_b64="$(printf '%s' "$VITE_SUPABASE_ANON_KEY" | base64 | tr -d '\n')"

sed \
  -e "s|\${SUPABASE_URL_B64}|$supabase_url_b64|g" \
  -e "s|\${SUPABASE_ANON_KEY_B64}|$supabase_anon_key_b64|g" \
  k8s/secret.yaml > "$tmp_secret_manifest"
kubectl -n "$K8S_NAMESPACE" apply -f "$tmp_secret_manifest"

sed \
  -e "s|\${APP_IMAGE}|$APP_IMAGE|g" \
  -e "s|\${K8S_APP_NAME}|$K8S_APP_NAME|g" \
  -e "s|\${K8S_DEPLOYMENT_NAME}|$K8S_DEPLOYMENT_NAME|g" \
  k8s/deployment.yaml > "$tmp_deployment_manifest"
kubectl -n "$K8S_NAMESPACE" apply -f "$tmp_deployment_manifest"
kubectl -n "$K8S_NAMESPACE" rollout restart deployment/"$K8S_DEPLOYMENT_NAME"

sed \
  -e "s|\${K8S_APP_NAME}|$K8S_APP_NAME|g" \
  -e "s|\${K8S_SERVICE_NAME}|$K8S_SERVICE_NAME|g" \
  k8s/service.yaml > "$tmp_service_manifest"
kubectl -n "$K8S_NAMESPACE" apply -f "$tmp_service_manifest"

sed \
  -e "s|\${K8S_APP_NAME}|$K8S_APP_NAME|g" \
  -e "s|\${K8S_SERVICE_NAME}|$K8S_SERVICE_NAME|g" \
  -e "s|\${INGRESS_HOST}|$INGRESS_HOST|g" \
  -e "s|\${INGRESS_CLASS}|$INGRESS_CLASS|g" \
  -e "s|\${INGRESS_TLS_SECRET}|$INGRESS_TLS_SECRET|g" \
  k8s/ingress.yaml > "$tmp_ingress_manifest"
kubectl -n "$K8S_NAMESPACE" apply -f "$tmp_ingress_manifest"

sed \
  -e "s|\${K8S_APP_NAME}|$K8S_APP_NAME|g" \
  -e "s|\${INGRESS_HOST}|$INGRESS_HOST|g" \
  -e "s|\${INGRESS_TLS_SECRET}|$INGRESS_TLS_SECRET|g" \
  -e "s|\${CERT_MANAGER_CLUSTER_ISSUER}|$CERT_MANAGER_CLUSTER_ISSUER|g" \
  k8s/certificate.yaml > "$tmp_certificate_manifest"
kubectl -n "$K8S_NAMESPACE" apply -f "$tmp_certificate_manifest"

kubectl -n "$K8S_NAMESPACE" rollout status \
  deployment/"$K8S_DEPLOYMENT_NAME" --timeout=180s
