# Plan B: Manual Static Deployment

Si el workflow automático sigue fallando, podemos usar este enfoque manual:

## Opción 1: Usar GitHub Pages como alternativa

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Install and Build
        run: |
          npm ci
          npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build/client
```

## Opción 2: Deployment manual a Azure

1. Comprimir manualmente el contenido de `build/client/`
2. Subir directamente al Azure Portal
3. Usar Azure CLI para deployment

## Opción 3: Configuración alternativa de Azure SWA

Cambiar a usar Blob Storage + CDN en lugar de Static Web Apps.
