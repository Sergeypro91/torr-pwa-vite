import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/show/$showId')({
  component: Show,
  loader: ({ params: { showId } }) => {
    console.log(`FETCH SHOW ID-${showId}`);

    return { showId };
  },
});

function Show() {
  const show = Route.useLoaderData();

  return (
    <div>
      <h3>Show id - {show.showId}</h3>
    </div>
  );
}
