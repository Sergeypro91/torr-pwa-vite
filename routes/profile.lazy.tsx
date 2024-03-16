import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/profile')({
  component: Profile,
});

function Profile() {
  return (
    <div>
      <h3>PROFILE</h3>
    </div>
  );
}
