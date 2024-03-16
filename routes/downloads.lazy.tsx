import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/downloads')({
  component: Downloads,
});

function Downloads() {
  return (
    <div>
      <h3>DOWNLOADS</h3>
    </div>
  );
}
