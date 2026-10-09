import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Pages project sites are served from /<repo>. The workflow sets this from
// actions/configure-pages. Local dev and preview stay at /.
function pagesBase(): string {
  const raw = process.env.PAGES_BASE_PATH
  if (!raw) return '/'
  return raw.endsWith('/') ? raw : `${raw}/`
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: pagesBase(),
})
