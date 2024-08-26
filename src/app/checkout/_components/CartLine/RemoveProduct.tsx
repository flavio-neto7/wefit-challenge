"use client"

import { useCartContext } from "@/features/cart/cart-context"
import Image from "next/image"

type RemoveProductProps = {
  productId: number
}
export function CartLineRemoveProduct({ productId }: RemoveProductProps) {
  const { removeItem } = useCartContext()
  return (
    <button onClick={() => removeItem(productId)}>
      <Image
        src="/assets/remove.svg"
        width={16}
        height={18}
        alt="Remover Item"
      />
    </button>
  )
}
