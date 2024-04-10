import { createFileRoute } from '@tanstack/react-router';

import { Home } from '@torr/screens';
import { PageLayout } from '@torr/shared';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <PageLayout>
      <PageLayout.Header backButton title="Main" actions={<div>test</div>} />
      <Home />
    </PageLayout>
  );
}
