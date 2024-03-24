import path from 'path';

import dotenv from 'dotenv';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// @ts-ignore
import { pwaOptions } from './application/public/config'

dotenv.config();

const port = parseInt(process.env.PORT ?? '3000');
const host = 'local.edo.com';
const isProdStand = Boolean(
  process.env.STAND?.match(/production|demo|staging/),
);
// Router configure
const routerOptions: Parameters<typeof TanStackRouterVite>[0] = {
  routesDirectory: './routes',
  generatedRouteTree: './shared/services/RouterService/routeTree.gen.ts',
};
// Svgr config
const svgrOptions = { svgrOptions: { icon: true } };

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
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
  build: {
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    sourcemap: !isProdStand,
    outDir: path.resolve(__dirname, '.dist'),
  },
});
