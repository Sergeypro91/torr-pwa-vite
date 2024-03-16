import { VitePWAOptions } from 'vite-plugin-pwa';

const manifest: VitePWAOptions['manifest'] = {
  theme_color: '#000000',
  background_color: '#000000',
  display: 'standalone',
  scope: '/',
  start_url: '/',
  name: 'Torr',
  short_name: 'Tor',
  description: 'Online torrent viewer',
  icons: [
    { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    {
      src: '/images/icons/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png',
    },
    {
      src: '/images/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/images/icons/icon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
    },
    {
      src: '/images/icons/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
    },
    {
      src: '/images/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
  screenshots: [
    {
      src: 'images/screenshots/screenshot-393x852.png',
      sizes: '393x852',
      type: 'image/png',
      form_factor: 'narrow',
    },
    {
      src: 'images/screenshots/screenshot-1152x834.png',
      sizes: '1152x834',
      type: 'image/png',
      form_factor: 'wide',
    },
  ],
};

const devOptions: VitePWAOptions['devOptions'] = {
  /**
   * true if need debug in dev mode
   */
  enabled: false,
};

const registerType: VitePWAOptions['registerType'] = 'prompt';

const includeAssets: VitePWAOptions['includeAssets'] = [
  'favicon.ico',
  'images/screenshots/screenshot-393x852.png',
  'images/screenshots/screenshot-1152x834.png',
];

export const pwaOptions: Partial<VitePWAOptions> = {
  manifest,
  devOptions,
  registerType,
  includeAssets,
};
