"use client"

import { useCartContext } from "@/features/cart/cart-context"
import Image from "next/image"
import Link from "next/link"

export function Cart() {
  const { totalProducts } = useCartContext()
  return (
    <Link href="/checkout" className="flex items-center space-x-2">
      <div className="text-right">
        <span className="text-sm font-semibold hidden lg:block">
          Meu Carrinho
        </span>
        <span className="text-xs font-semibold text-muted">
          {totalProducts} itens
        </span>
      </div>
      <Image src="/assets/cart.svg" alt="Carrinho" width={40} height={40} />
    </Link>
  )
}
