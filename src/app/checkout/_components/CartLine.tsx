import Image from "next/image"
import { CartItem } from "../types"
import { PriceFormatter } from "@/lib/formatters"

type CartItemProps = {
  item: CartItem
}

export function CartLine({ item }: CartItemProps) {
  return (
    <div className="flex gap-4">
      <Image
        src={item.image}
        alt={item.title}
        width={64}
        height={82}
        className="self-baseline"
      />
      <div className="flex flex-col w-full justify-between gap-4">
        <div className="flex justify-between">
          <h3 className="text-surface text-sm font-bold max-w-[10ch]">
            {item.title}
          </h3>
          <div className="flex space-x-4 items-center">
            <p className="text-surface font-bold text-base">
              {PriceFormatter.format(item.price)}
            </p>
            <button>
              <Image
                src="/assets/remove.svg"
                width={16}
                height={18}
                alt="Remover Item"
              />
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center space-x-2">
            <button className="border-2 font-bold border-primary text-primary rounded-full h-5 w-5 flex items-center justify-center">
              -
            </button>
            <p className="text-surface text-sm border border-light flex px-7 items-center rounded h-[26px]">
              {item.quantity}
            </p>
            <button className="border-2 font-bold border-primary text-primary rounded-full h-5 w-5 flex items-center justify-center">
              +
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <p className="text-right font-bold">
              <span className="text-muted text-xs block">SUBTOTAL</span>
              <span className="text-surface">
                {PriceFormatter.format(item.price)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
