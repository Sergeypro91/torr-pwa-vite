import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT ?? '3000');
const host = process.env.HOST ?? 'localhost';
const isProdStand = Boolean(
  process.env.STAND?.match(/production|demo|staging/),
);

export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    react(),
    svgrPlugin({ svgrOptions: { icon: true } }),
    tsconfigPaths(),
  ],
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
