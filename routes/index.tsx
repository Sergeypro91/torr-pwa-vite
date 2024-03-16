import { createFileRoute } from '@tanstack/react-router';

import { Home } from '@torr/screens';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return <Home />;
}