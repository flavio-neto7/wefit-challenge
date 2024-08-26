"use client"

import { useCartContext } from "@/features/cart/cart-context"
import { PriceFormatter } from "@/lib/formatters"

export function CartTotal() {
  const { cart } = useCartContext()
  return (
    <p className="text-2xl text-surface font-bold">
      {PriceFormatter.format(cart.totalPrice)}
    </p>
  )
}
