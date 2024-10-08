"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/Button"
import { CartListDesktop } from "./_components/CartListDesktop"
import { CartListMobile } from "./_components/CartListMobile"
import { useCartContext } from "@/features/cart/cart-context"
import { EmptyState } from "./_components/EmptyState"
import { PriceFormatter } from "@/lib/formatters"

export default function CheckoutPage() {
  const { cart, clearCart } = useCartContext()
  const router = useRouter()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    clearCart()
    router.push("/order-completed")
  }

  if (cart.totalItens === 0 && !isCheckingOut) return <EmptyState />

  return (
    <main className="min-h-screen p-4 pt-0">
      <div className="bg-white rounded py-4 px-6 flex flex-col gap-4">
        <CartListMobile />
        <CartListDesktop />
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex justify-between w-full lg:w-fit lg:items-center lg:gap-4">
            <p className="text-sm text-muted font-bold">TOTAL</p>
            <p className="text-2xl text-surface font-bold">
              {PriceFormatter.format(cart.totalPrice)}
            </p>
          </div>
          <Button
            onClick={handleCheckout}
            className="w-full lg:w-fit lg:-order-1 text-sm"
          >
            FINALIZAR PEDIDO
          </Button>
        </div>
      </div>
    </main>
  )
}
