import React from 'react';

import ReactDOM from 'react-dom/client';

import { ErrorBoundary, Router } from '@torr/shared';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  </React.StrictMode>,
);
