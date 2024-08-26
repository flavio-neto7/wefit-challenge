export type PlainCartItem = {
  id: number
  title: string
  image: string
  price: number
  quantity: number
  subtotal: number
}

export type PlainCart = {
  items: PlainCartItem[]
  totalPrice: number
  totalItens: number
}
