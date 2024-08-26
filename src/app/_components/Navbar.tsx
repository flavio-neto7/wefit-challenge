import Link from "next/link"
import { Cart } from "./Cart"

export function Navbar() {
  return (
    <nav className="px-4 py-8 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-xl font-bold">WeMovies</h1>
      </Link>
      <Cart />
    </nav>
  )
}
