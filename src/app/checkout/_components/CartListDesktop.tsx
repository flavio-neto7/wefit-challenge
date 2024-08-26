"use client"

import { useCartContext } from "@/features/cart/cart-context"
import { CartLineProductTitle } from "./CartLine/ProductTitle"
import { CartLineProductQuantity } from "./CartLine/ProductQuantity"
import { CartLineProductSubtotal } from "./CartLine/ProductSubtotal"
import { CartLineRemoveProduct } from "./CartLine/RemoveProduct"
import { CartLineProductPrice } from "./CartLine/ProductPrice"
import { CartLineProductImage } from "./CartLine/ProductImage"

export function CartListDesktop() {
  const { cart } = useCartContext()

  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-[30%_30%_30%_10%] text-sm text-muted font-bold mb-4">
        <p>PRODUTO</p>
        <p>QTD</p>
        <p>SUBTOTAL</p>
        <p></p>
      </div>
      <ul className="space-y-5">
        {cart.items.map((item) => (
          <li key={item.id} className="pb-5 border-b border-muted">
            <div className="hidden lg:grid grid-cols-[30%_30%_30%_10%] items-center">
              <div className="COL-1 flex items-center gap-4">
                <CartLineProductImage src={item.image} alt={item.title} />
                <div>
                  <CartLineProductTitle>{item.title}</CartLineProductTitle>
                  <div className="flex space-x-4 items-center">
                    <CartLineProductPrice>{item.price}</CartLineProductPrice>
                  </div>
                </div>
              </div>
              <div className="COL-2">
                <CartLineProductQuantity productId={item.id}>
                  {item.quantity}
                </CartLineProductQuantity>
              </div>
              <div className="COL-3">
                <CartLineProductSubtotal>
                  {item.subtotal}
                </CartLineProductSubtotal>
              </div>
              <div className="COL-4">
                <CartLineRemoveProduct productId={item.id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
