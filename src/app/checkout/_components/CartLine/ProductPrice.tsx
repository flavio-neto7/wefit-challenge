import { PriceFormatter } from "@/lib/formatters"

type ProductPriceProps = {
  children: number
}
export function CartLineProductPrice({ children }: ProductPriceProps) {
  return (
    <p className="text-surface font-bold text-base">
      {PriceFormatter.format(children)}
    </p>
  )
}
