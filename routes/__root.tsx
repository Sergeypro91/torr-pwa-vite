import {
  Outlet,
  ScrollRestoration,
  // TanStackRouterDevtools,
  createRootRoute,
} from '@torr/shared';
import { MainLayout } from '@torr/modules/layout';

export const Route = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
      <ScrollRestoration />
      {/*<TanStackRouterDevtools />*/}
    </MainLayout>
  ),
});
