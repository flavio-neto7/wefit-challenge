import Image from "next/image"

export function Cart() {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-right">
        <span className="text-sm font-semibold hidden lg:block">
          Meu Carrinho
        </span>
        <span className="text-xs font-semibold text-muted">0 itens</span>
      </div>
      <Image src="/assets/cart.svg" alt="Carrinho" width={40} height={40} />
    </div>
  )
}
