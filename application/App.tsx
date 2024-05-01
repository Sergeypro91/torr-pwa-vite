import React from 'react';

import { CacheServiceProvider, Router, useInitializeApp } from '@torr/shared';

export const App = () => {
  useInitializeApp();

  return (
    <CacheServiceProvider>
      <Router />
    </CacheServiceProvider>
  );
};

App.displayName = 'App';
