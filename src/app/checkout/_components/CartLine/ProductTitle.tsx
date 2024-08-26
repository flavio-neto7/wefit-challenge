type ProductTitleProps = {
  children: string
}
export function CartLineProductTitle({ children }: ProductTitleProps) {
  return <h3 className="text-surface text-sm font-bold">{children}</h3>
}
