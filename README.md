# Thuiskwartier

Vite/React frontend, served in production as a static site from Nginx.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Automatic deployment

`.github/workflows/deploy.yml` builds a Docker image and pushes it to GHCR on every push to `main`. After the image is pushed, the workflow applies the Kubernetes manifests and waits for the rollout to complete.

Required GitHub secret:

- `KUBE_CONFIG_B64` (recommended), or `KUBE_CONFIG` as a plain or base64-encoded kubeconfig.

Optional GitHub repository/environment variables:

- `K8S_NAMESPACE` (default: `default`)
- `K8S_APP_NAME` (default: `thuiskwartier-bolt`)
- `K8S_DEPLOYMENT_NAME` (default: `thuiskwartier-bolt`)
- `K8S_SERVICE_NAME` (default: `thuiskwartier-bolt`)
- `INGRESS_HOST` (default: `thuiskwartier.nl`)
- `INGRESS_CLASS` (default: `nginx`)
- `INGRESS_TLS_SECRET` (default: `thuiskwartier-tls`)
- `CERT_MANAGER_CLUSTER_ISSUER` (default: `certmanager-cert-manager`)

The cluster must already contain the `ghcr-pull-secret` image pull secret and have an Nginx ingress controller plus cert-manager available. The workflow does not create application secrets.
