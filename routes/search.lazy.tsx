import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/search')({
  component: Search,
});

function Search() {
  return (
    <div>
      <h3>SEARCH</h3>
    </div>
  );
}
