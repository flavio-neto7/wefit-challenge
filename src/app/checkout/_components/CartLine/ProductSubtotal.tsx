import { PriceFormatter } from "@/lib/formatters"

type ProductSubtotalProps = {
  children: number
}
export function CartLineProductSubtotal({ children }: ProductSubtotalProps) {
  return <span className="text-surface">{PriceFormatter.format(children)}</span>
}
