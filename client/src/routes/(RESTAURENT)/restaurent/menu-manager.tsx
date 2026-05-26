import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(RESTAURENT)/restaurent/menu-manager')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(RESTAURENT)/restaurent/menu-manager"!</div>
}
