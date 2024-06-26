import { RouterProvider, createRouter } from '@tanstack/react-router';

import { ErrorBoundary, NotFound } from '@torr/shared';

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const Router = () => {
  return (
    <RouterProvider
      router={router}
      defaultNotFoundComponent={NotFound}
      defaultErrorComponent={ErrorBoundary}
    />
  );
};
