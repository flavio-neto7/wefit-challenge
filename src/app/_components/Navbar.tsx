import Image from "next/image"

export function Navbar() {
  return (
    <nav className="px-4 py-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">WeMovies</h1>
      <div className="flex items-center space-x-2">
        <span className="text-xs font-semibold text-muted">0 itens</span>
        <Image src="/assets/cart.svg" alt="Carrinho" width={40} height={40} />
      </div>
    </nav>
  )
}
