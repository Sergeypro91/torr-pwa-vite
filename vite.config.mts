import path from 'path';

import dotenv from 'dotenv';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

dotenv.config();

// @ts-ignore
import { pwaOptions } from './application/public/config';

// Define .env
const defineEnv = (mode: string) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    'process.env.PORT': JSON.stringify(env.PORT),
    'process.env.HOST': JSON.stringify(env.HOST),
    'process.env.STAND': JSON.stringify(env.STAND),
    'process.env.BASE_API_PROTOCOL': JSON.stringify(env.BASE_API_PROTOCOL),
    'process.env.BASE_API_URL': JSON.stringify(env.BASE_API_URL),
    'process.env.BASE_API_PORT': JSON.stringify(env.BASE_API_PORT),
    'process.env.BASE_API_ROUTE': JSON.stringify(env.BASE_API_ROUTE),
    'process.env.API_DOC_PATH': JSON.stringify(env.API_DOC_PATH),
    'process.env.IMAGE_API_ROUTE': JSON.stringify(env.IMAGE_API_ROUTE),
  }
}

const port = parseInt(process.env.PORT ?? '3000');
const host = process.env.HOST ?? 'localhost';
const routesDirectory = process.env.ROUTE_DIR ?? '';
const generatedRouteTree = process.env.ROUTE_TREE_DIR ?? '';
const isProdStand = Boolean(
  process.env.STAND?.match(/production|demo|staging/),
);
// Router configure
const routerOptions: Parameters<typeof TanStackRouterVite>[0] = {
  routesDirectory,
  generatedRouteTree,
};
// Svgr config
const svgrOptions = { svgrOptions: { icon: true } };

export default defineConfig(({ mode }) => {
  return {
    define: defineEnv(mode),
    plugins: [
      react(),
      tsconfigPaths(),
      VitePWA(pwaOptions),
      svgrPlugin(svgrOptions),
      TanStackRouterVite(routerOptions),
    ],
    assetsInclude: ['**/*.ttf'],
    root: 'application',
    logLevel: isProdStand ? 'error' : 'info',
    server: {
      port,
      host,
    },
    preview: {
      port: 8080,
    },
    build: {
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
      sourcemap: !isProdStand,
      outDir: path.resolve(__dirname, '.dist'),
      rollupOptions:{
        output: {
          chunkFileNames: 'assets/chunk/[hash].js',
          entryFileNames: 'assets/entry/[hash].js',
          assetFileNames: 'assets/[ext]/[hash].[ext]'
        }
      }
    },
  };
})
