import { createLazyFileRoute } from '@tanstack/react-router';

import { PageLayout } from '@torr/shared';
import { Search as SearchScreen } from '@torr/screens';

export const Route = createLazyFileRoute('/search')({
  component: Search,
});

function Search() {
  return (
    <PageLayout withTopPadding>
      <PageLayout.Header backButton title="Search" />
      <SearchScreen />
    </PageLayout>
  );
}
