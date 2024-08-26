"use client"

import { Button } from "@/components/Button"
import { Product } from "@/domain/Product"
import { useCartContext } from "@/features/cart/cart-context"

type AddToCartButtonProps = {
  product: Product
}
export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCartContext()

  return (
    <Button
      onClick={() => {
        console.log("product :>> ", product)
        addToCart(product)
      }}
    >
      ADICIONAR AO CARRINHO
    </Button>
  )
}
