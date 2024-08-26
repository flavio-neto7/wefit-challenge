import Image from "next/image"

type ProductImageProps = {
  src: string
  alt: string
}
export function CartLineProductImage({ src, alt }: ProductImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={64}
      height={82}
      className="self-baseline"
    />
  )
}
