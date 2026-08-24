#!/bin/sh
set -eu

: "${VITE_SUPABASE_URL:?VITE_SUPABASE_URL is required}"
: "${VITE_SUPABASE_ANON_KEY:?VITE_SUPABASE_ANON_KEY is required}"

json_escape() {
  printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}

supabase_url="$(json_escape "$VITE_SUPABASE_URL")"
supabase_anon_key="$(json_escape "$VITE_SUPABASE_ANON_KEY")"

printf '%s\n' \
  'window.__ENV__ = {' \
  "  VITE_SUPABASE_URL: \"$supabase_url\"," \
  "  VITE_SUPABASE_ANON_KEY: \"$supabase_anon_key\"" \
  '};' > /usr/share/nginx/html/env.js

exec nginx -g 'daemon off;'
