export class CartItem {
  constructor(
    private readonly id: number,
    private readonly title: string,
    private readonly image: string,
    private readonly price: number,
    private quantity: number = 1
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.price = price
    this.quantity = quantity
  }

  increaseQuantity(amount: number = 1) {
    this.quantity += amount
  }

  decreaseQuantity(amount: number = 1) {
    this.quantity -= amount
  }

  getSubtotal() {
    return this.price * this.quantity
  }

  toPlainObject() {
    return {
      id: this.id,
      title: this.title,
      image: this.image,
      price: this.price,
      quantity: this.quantity,
      subtotal: this.getSubtotal(),
    }
  }

  getId() {
    return this.id
  }

  getTitle() {
    return this.title
  }

  getImage() {
    return this.image
  }

  getPrice() {
    return this.price
  }

  getQuantity() {
    return this.quantity
  }
}
