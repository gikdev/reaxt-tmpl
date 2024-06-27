import { Outlet } from "react-router"

export default function Base() {
  return (
    <main className="text-zinc-200 bg-zinc-800 container mx-auto min-h-dvh grid place-items-center">
      <Outlet />
    </main>
  )
}
