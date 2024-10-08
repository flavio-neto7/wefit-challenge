import { CartItem } from "./CartItem"

export class Cart {
  constructor(private items: CartItem[] = []) {}

  addItem(item: CartItem) {
    const existingItem = this.items.find((i) => i.getId() === item.getId())
    if (existingItem) {
      existingItem.increaseQuantity()
    } else {
      this.items.push(item)
    }
  }

  increaseQuantity(itemId: number) {
    const item = this.items.find((i) => i.getId() === itemId)
    if (item) {
      item.increaseQuantity()
    }
  }

  decreaseQuantity(itemId: number) {
    const item = this.items.find((i) => i.getId() === itemId)
    if (item && item.getQuantity() > 1) {
      item.decreaseQuantity()
    }
  }

  removeItem(itemId: number) {
    this.items = this.items.filter((item) => item.getId() !== itemId)
  }

  clearCart() {
    this.items = []
  }

  get totalPrice() {
    return this.items.reduce((acc, item) => acc + item.getSubtotal(), 0)
  }

  get totalItens() {
    return this.items.length
  }

  getItems() {
    return this.items
  }

  toPlainObject() {
    return {
      items: this.items.map((i) => i.toPlainObject()),
      totalPrice: this.totalPrice,
      totalItens: this.totalItens,
    }
  }
}
