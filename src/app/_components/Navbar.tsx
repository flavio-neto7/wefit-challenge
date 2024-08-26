import { Cart } from "./Cart"

export function Navbar() {
  return (
    <nav className="px-4 py-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">WeMovies</h1>
      <Cart />
    </nav>
  )
}
