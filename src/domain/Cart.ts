import { CartItem } from "./CartItem"

export class Cart {
  private readonly items: CartItem[] = []

  constructor(items: CartItem[]) {
    this.items = items
  }

  addItem(item: CartItem) {
    const existingItem = this.items.find((i) => i.getId() === item.getId())
    if (existingItem) {
      existingItem.increaseQuantity()
    } else {
      this.items.push(item)
    }
  }

  removeItem(itemId: number) {
    this.items.filter((item) => item.getId() !== itemId)
  }

  getItems() {
    return this.items
  }
}
