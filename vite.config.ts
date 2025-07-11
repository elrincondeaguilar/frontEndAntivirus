import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  define: {
    "process.env": {}, // TODO:Evita el error en el navegador
  },
  publicDir: "public",
  build: {
    outDir: "build/client",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      // Configuración para Azure Static Web Apps
      ssr: false, // Deshabilitar SSR para despliegue estático
    }),
    tsconfigPaths(),
  ],
});
