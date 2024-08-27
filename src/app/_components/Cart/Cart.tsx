"use client"

import { useCartContext } from "@/features/cart/cart-context"
import Image from "next/image"
import { CartItemsDisplay, CartText, ContentWrapper, StyledLink } from "./styed"

export function Cart() {
  const { cart } = useCartContext()

  return (
    <StyledLink href="/checkout">
      <ContentWrapper>
        <CartText>Meu Carrinho</CartText>
        <CartItemsDisplay>{cart.totalItens} itens</CartItemsDisplay>
      </ContentWrapper>
      <Image src="/assets/cart.svg" alt="Carrinho" width={40} height={40} />
    </StyledLink>
  )
}
