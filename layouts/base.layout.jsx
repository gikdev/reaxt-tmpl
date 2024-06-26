import { Outlet } from "react-router"

export default function Base() {
  return (
    <section className="text-blue-400 bg-red-900">
      <Outlet />
    </section>
  )
}
