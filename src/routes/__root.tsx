import Sidebar from '@/shared/components/sidebar/sidebar'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <main className="grid grid-cols-320px-auto gap-5">
      <Sidebar />
      <Outlet />
    </main>
  ),
})
