import { PriceFormatter } from "@/lib/formatters"
import { CartLine } from "./_components/CartLine"
import { Button } from "@/components/Button"

const fakeCartList = [
  {
    id: 3,
    title: "Homem Aranha",
    price: 29.9,
    image: "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png",
    quantity: 1,
  },
  {
    id: 6,
    title: "Batman",
    price: 21.9,
    image: "https://wefit-react-web-test.s3.amazonaws.com/the-batman.png",
    quantity: 1,
  },
]

export default function CheckoutPage() {
  return (
    <main className="min-h-screen p-4 pt-0">
      <div className="bg-white rounded p-4 flex flex-col gap-4">
        <ul className="space-y-5">
          {fakeCartList.map((product) => (
            <li key={product.id} className="pb-5 border-b border-muted">
              <CartLine item={product} />
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted font-bold">TOTAL</p>
          <p className="text-2xl text-surface font-bold">
            {PriceFormatter.format(29.9)}
          </p>
        </div>
        <Button className="w-full text-sm">FINALIZAR PEDIDO</Button>
      </div>
    </main>
  )
}
