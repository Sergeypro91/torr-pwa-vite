import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/person/$personId')({
  component: Person,
  loader: ({ params: { personId } }) => {
    console.log(`FETCH PERSON ID-${personId}`);

    return { personId };
  },
});

function Person() {
  const person = Route.useLoaderData();

  return (
    <div>
      <h3>Person id - {person.personId}</h3>
    </div>
  );
}
