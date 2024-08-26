"use client"

import { Cart } from "@/domain/Cart"
import { CartItem } from "@/domain/CartItem"
import { useState, createContext, useContext, useEffect, useMemo } from "react"
import { PlainCartItem } from "./types"
import { Product } from "@/domain/Product"

type CartProviderProps = {
  children: React.ReactNode
}

type ContextValue = {
  cart: Cart
  addToCart: (product: Product) => void
  removeItem: (itemId: number) => void
  increaseQuantity: (itemId: number) => void
  decreaseQuantity: (itemId: number) => void
  loading: boolean
  totalProducts: number
}

const CartContext = createContext<ContextValue | null>(null)

const LOCAL_STORAGE_CART_KEY = "stored_cart"

export const CartProvider = ({ children }: CartProviderProps) => {
  const [localRetrievedShop, setLocalRetrievedShop] = useState(false)
  const [cart, setCart] = useState<Cart>(new Cart([]))
  const [loading, setLoading] = useState(false)

  const totalProducts = useMemo(() => {
    return cart.getItems().reduce((accumulator, currentItem) => {
      return accumulator + currentItem.getQuantity()
    }, 0)
  }, [cart])

  useEffect(() => {
    if (localStorage[LOCAL_STORAGE_CART_KEY]) {
      setLoading(true)
      const { cartItems } = extractLocalStoredShop(
        localStorage[LOCAL_STORAGE_CART_KEY]
      )

      setLocalRetrievedShop(true)
      setCart(new Cart(cartItems))
      setLoading(false)
    }
  }, [])

  // useEffect(() => {
  //   if (!cart.length && !checkout) {
  //     return;
  //   }
  //   if (localRetrievedShop) {
  //     setLocalRetrievedShop(false);
  //     return;
  //   }
  //   if (!checkout) {
  //     handleCreateRemoteCheckout();
  //   } else {
  //     handleUpdateRemoteCheckout();
  //   }
  // }, [cart]);

  function addToCart(product: Product) {
    console.log("product :>> ", product)
    const newItem = new CartItem(
      product.id,
      product.title,
      product.image,
      product.price
    )
    cart.addItem(newItem)
    console.log("cart :>> ", cart)
    setCart(new Cart(cart.getItems()))
  }

  function increaseQuantity(itemId: number) {
    const item = cart.getItems().find((item) => item.getId() === itemId)
    if (item) {
      item.increaseQuantity()
    }
    setCart(new Cart(cart.getItems()))
  }

  function decreaseQuantity(itemId: number) {
    const item = cart.getItems().find((item) => item.getId() === itemId)
    if (item) {
      item.decreaseQuantity()
    }
    setCart(new Cart(cart.getItems()))
  }

  function removeItem(itemId: number) {
    cart.removeItem(itemId)
    setCart(new Cart(cart.getItems()))
  }

  async function handleUpdateRemoteCheckout() {
    setLoading(true)
    const cartDtos = cart.getItems().map((cartItem) => cartItem.toPlainObject())
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify([cartDtos]))
    setLoading(false)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        loading,
        totalProducts,
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

function extractLocalStoredShop(localStorageObject: any) {
  const storedCartInfo = JSON.parse(localStorageObject)
  const [cartDtos] = storedCartInfo

  const cartItems: CartItem[] = cartDtos.map(
    (item: PlainCartItem) =>
      new CartItem(item.id, item.title, item.image, item.price, item.quantity)
  )

  return { cartItems }
}
