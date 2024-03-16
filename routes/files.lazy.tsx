import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/files')({
  component: Files,
});

function Files() {
  return (
    <div>
      <h3>FILES</h3>
    </div>
  );
}
