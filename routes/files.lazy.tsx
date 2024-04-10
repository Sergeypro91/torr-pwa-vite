import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/files')({
  component: () => <div>Hello /files!</div>
})
