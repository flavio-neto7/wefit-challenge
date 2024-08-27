import Image from "next/image"

import { PriceFormatter } from "@/lib/formatters"
import { AddToCartButton } from "./AddToCartButton"
import { Product } from '@/domain/Product'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded p-4 bg-white text-center flex flex-col justify-center items-center space-y-2">
      <Image src={product.image} alt={product.title} width={147} height={188} />
      <h3 className="text-heading text-xs font-bold">{product.title}</h3>
      <p className="text-surface font-bold text-base">
        {PriceFormatter.format(product.price)}
      </p>
      <AddToCartButton product={product} />
    </div>
  )
}
