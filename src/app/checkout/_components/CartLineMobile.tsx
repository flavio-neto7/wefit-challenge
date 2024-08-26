import { PlainCartItem } from "@/features/cart/types"
import { CartLineProductImage } from "./CartLine/ProductImage"
import { CartLineProductTitle } from "./CartLine/ProductTitle"
import { CartLineRemoveProduct } from "./CartLine/RemoveProduct"
import { CartLineProductPrice } from "./CartLine/ProductPrice"
import { CartLineProductQuantity } from "./CartLine/ProductQuantity"
import { CartLineProductSubtotal } from "./CartLine/ProductSubtotal"

type CartLineProps = {
  item: PlainCartItem
}

export function CartLineMobile({ item }: CartLineProps) {
  return (
    <div className="flex gap-4 lg:hidden">
      <CartLineProductImage src={item.image} alt={item.title} />
      <div className="flex flex-col w-full justify-between gap-4">
        <div className="flex justify-between">
          <CartLineProductTitle>{item.title}</CartLineProductTitle>
          <div className="flex space-x-4 items-center">
            <CartLineProductPrice>{item.price}</CartLineProductPrice>
            <CartLineRemoveProduct productId={item.id} />
          </div>
        </div>
        <div className="flex">
          <CartLineProductQuantity productId={item.id}>
            {item.quantity}
          </CartLineProductQuantity>
          <div className="flex-1 flex flex-col items-center sm:items-baseline ml-4">
            <p className="text-right font-bold">
              <span className="text-muted text-xs block">SUBTOTAL</span>
              <CartLineProductSubtotal>{item.subtotal}</CartLineProductSubtotal>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
