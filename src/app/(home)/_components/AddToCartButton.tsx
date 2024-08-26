"use client"

import { Button } from "@/components/Button"
import { Product } from "@/domain/Product"
import { useCartContext } from "@/features/cart/cart-context"
import Image from "next/image"

type AddToCartButtonProps = {
  product: Product
}
export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart, cart } = useCartContext()
  const itemInCart = cart.items.find((item) => item.id === product.id)

  return (
    <Button
      onClick={() => {
        addToCart(product)
      }}
      variant={itemInCart ? "success" : "default"}
    >
      <span className="text-xs font-normal flex gap-1">
        <Image
          src="/assets/cart-plus.svg"
          width={14}
          height={14}
          alt="Ícone de carrinho"
        />
        {itemInCart?.quantity ?? 0}
      </span>
      ADICIONAR AO CARRINHO
    </Button>
  )
}
