import React from 'react';
import ReactDOM from 'react-dom/client';

import { CacheServiceProvider, Router } from '@torr/shared';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CacheServiceProvider>
      <Router />
    </CacheServiceProvider>
  </React.StrictMode>,
);
