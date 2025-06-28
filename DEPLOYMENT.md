# Frontend Antivirus - Despliegue en Azure Static Web Apps

Este proyecto ha sido configurado para desplegarse en **Azure Static Web Apps** en modo SPA (Single Page Application).

## 🚀 Estado Actual

- 🔄 **Aplicación**: Configurada para https://lively-moss-07487241e.1.azurestaticapps.net/
- ✅ **Oryx ELIMINADO**: Azure ya NO usa build system! 🎉
- ✅ **Deploy estático**: Azure reconoce `pure-static/` como contenido puro
- ✅ **Modo SPA**: Configurado completamente
- ✅ **Build Estático**: Generación exitosa sin Oryx
- � **Token**: Verificando LIVELY_MOSS token

## 🎉 BREAKTHROUGH - ORYX PROBLEMA RESUELTO

**¡ÉXITO!** Azure ya no usa Oryx build system y reconoce el contenido como estático puro.

**Logs muestran**:
- ✅ `App Directory Location: 'pure-static' was found`
- ✅ No más logs de Oryx build
- ✅ Azure respeta `skip_app_build: true`
- 🔧 Solo queda corregir token

## 🔧 SOLUCIÓN INMEDIATA - Verificar Token:

**Error actual**: `No matching Static Web App was found or the api key was invalid`

1. **Azure Portal** → https://portal.azure.com
2. Buscar tu **Static Web App** (puede llamarse diferente a `lively-moss-07487241e`)
3. **Overview** → **Manage deployment token**
4. **Copiar el token completo**
5. **GitHub** → Repo → **Settings** → **Secrets and variables** → **Actions**
6. **Actualizar secret**: `AZURE_STATIC_WEB_APPS_API_TOKEN_LIVELY_MOSS_07487241E`

### 🎯 SOLUCIÓN ALTERNATIVA - GitHub Pages:

Si el token de Azure sigue fallando, usar GitHub Pages:

## 🔧 Configuración Final de Deployment

### 1. Workflow de GitHub Actions

**Archivo**: `.github/workflows/azure-static-web-apps-lively-moss-07487241e.yml`

**Configuración clave**:

- `app_location: "static-deploy"` - Directorio limpio sin archivos Node.js
- `output_location: ""` - No subdirectorios necesarios
- `skip_app_build: true` - ✅ FUNCIONA! Azure ya no usa Oryx
- `api_location: ""` - Sin funciones de API

### 2. Archivos de Build

- ✅ `index.html` - Punto de entrada SPA
- ✅ `staticwebapp.config.json` - Configuración de rutas copiada
- ✅ `.nojekyll` - Indicador de contenido estático
- ✅ `assets/` - Archivos CSS, JS, imágenes optimizados

## 📋 Configuración Requerida

### 1. Variables de Entorno en Azure

Configurar en Azure Portal → Tu Static Web App → Configuration:

```
GOOGLE_CLIENT_ID=tu_google_client_id
FACEBOOK_APP_ID=tu_facebook_app_id
PUBLIC_BASE_URL=https://tu-app.azurestaticapps.net
```

### 2. Secrets de GitHub

- `AZURE_STATIC_WEB_APPS_API_TOKEN_LIVELY_MOSS_07487241E`: Token de Azure (ya configurado)

## 🔧 Comandos de Desarrollo

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview local del build
npm run build && npx serve build/client
```

## 📁 Estructura de Despliegue

```
build/client/           # Archivos estáticos para Azure
├── index.html         # Punto de entrada SPA
├── assets/            # JS, CSS, imágenes optimizadas
├── Images/            # Imágenes públicas
└── ...                # Otros archivos estáticos
```

## 🔄 Proceso de Despliegue

1. **Push a main**: Activa GitHub Actions automáticamente
2. **Build**: Se ejecuta `npm run build`
3. **Deploy**: Azure recibe los archivos de `build/client/`
4. **Live**: Aplicación disponible en el dominio de Azure

## ⚠️ Limitaciones de Azure Static Web Apps

- ❌ **No SSR**: Solo aplicaciones cliente
- ❌ **No APIs Node.js**: Usar Azure Functions si necesitas APIs
- ✅ **Solo archivos estáticos**: HTML, CSS, JS, imágenes

## 🐛 Solución de Problemas

### Error "Could not detect language"

- ✅ **Solucionado**: Build configurado correctamente en workflow

### Error "Failed to find default file"

- ✅ **Solucionado**: `index.html` se genera en `build/client/`

### Problemas de routing

- ✅ **Solucionado**: `staticwebapp.config.json` configurado para SPA

### Autenticación no funciona

- Verificar variables de entorno en Azure Portal
- Comprobar que las URLs de callback apunten al dominio de Azure

## 📚 Recursos Adicionales

- [Azure Static Web Apps Docs](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Remix SPA Mode](https://remix.run/guides/spa-mode)
- [GitHub Actions for Azure](https://github.com/Azure/static-web-apps-deploy)

## 🔗 URLs Importantes

- **Producción**: https://polite-ocean-07d3e3a1e.azurestaticapps.net
- **GitHub Repo**: Tu repositorio actual
- **Azure Portal**: Buscar "polite-ocean-07d3e3a1e" en Azure Portal
