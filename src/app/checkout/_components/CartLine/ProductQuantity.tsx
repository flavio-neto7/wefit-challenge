"use client"

import { useCartContext } from "@/features/cart/cart-context"

type ProductQuantityProps = {
  productId: number
  children: number
}
export function CartLineProductQuantity({
  productId,
  children,
}: ProductQuantityProps) {
  const { increaseQuantity, decreaseQuantity } = useCartContext()

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => increaseQuantity(productId)}
        className="border-2 font-bold border-primary text-primary rounded-full h-5 w-5 flex items-center justify-center"
      >
        -
      </button>
      <p className="text-surface text-sm border border-light flex px-7 items-center rounded h-[26px]">
        {children}
      </p>
      <button
        onClick={() => decreaseQuantity(productId)}
        className="border-2 font-bold border-primary text-primary rounded-full h-5 w-5 flex items-center justify-center"
      >
        +
      </button>
    </div>
  )
}
