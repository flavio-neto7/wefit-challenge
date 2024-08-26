"use client"

import { Cart } from "@/domain/Cart"
import { CartItem } from "@/domain/CartItem"
import { useState, createContext, useContext, useEffect, useMemo } from "react"
import { PlainCart, PlainCartItem } from "./types"
import { Product } from "@/domain/Product"

type CartProviderProps = {
  children: React.ReactNode
}

type ContextValue = {
  cart: PlainCart
  addToCart: (product: Product) => void
  removeFromCart: (itemId: number) => void
  increaseQuantity: (itemId: number) => void
  decreaseQuantity: (itemId: number) => void
  clearCart: () => void
  loading: boolean
}

const CartContext = createContext<ContextValue | null>(null)

const LOCAL_STORAGE_CART_KEY = "stored_cart"

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartEntity, setCartEntity] = useState<Cart>(new Cart([]))
  const [loading, setLoading] = useState(false)
  const cartPlain = useMemo(() => {
    return cartEntity.toPlainObject()
  }, [cartEntity])

  function regenerateCart() {
    setCartEntity(new Cart(cartEntity.getItems()))
  }

  useEffect(() => {
    if (localStorage[LOCAL_STORAGE_CART_KEY]) {
      setLoading(true)
      const { cartItems } = extractFromLocalStored(
        localStorage[LOCAL_STORAGE_CART_KEY]
      )

      setCartEntity(new Cart(cartItems))
      setLoading(false)
    }
  }, [])

  function addToCart(product: Product) {
    const newItem = new CartItem(
      product.id,
      product.title,
      product.image,
      product.price
    )
    cartEntity.addItem(newItem)
    regenerateCart()
  }

  function increaseQuantity(itemId: number) {
    cartEntity.increaseQuantity(itemId)
    regenerateCart()
  }

  function decreaseQuantity(itemId: number) {
    cartEntity.decreaseQuantity(itemId)
    regenerateCart()
  }

  function removeFromCart(itemId: number) {
    cartEntity.removeItem(itemId)
    regenerateCart()
  }

  function clearCart() {
    cartEntity.clearCart()
    regenerateCart()
  }

  async function updateLocalStorage() {
    const cartDtos = cartEntity
      .getItems()
      .map((cartItem) => cartItem.toPlainObject())
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify([cartDtos]))
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartPlain,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const contextValue = useContext(CartContext)
  if (!contextValue) {
    throw new Error("Component must be wrapped in a CartProvider")
  }
  return { ...contextValue }
}

function extractFromLocalStored(localStorageObject: any) {
  const storedCartInfo = JSON.parse(localStorageObject)
  const [cartDtos] = storedCartInfo

  const cartItems: CartItem[] = cartDtos.map(
    (item: PlainCartItem) =>
      new CartItem(item.id, item.title, item.image, item.price, item.quantity)
  )

  return { cartItems }
}
