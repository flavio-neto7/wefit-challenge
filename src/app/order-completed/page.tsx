import { Button } from "@/components/Button"
import Image from "next/image"
import Link from "next/link"

export default function OrderCompletedPage() {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-16 gap-6 text-center rounded">
      <h2 className="text-surface font-bold text-xl">
        Compra realizada com sucesso!
      </h2>
      <Image
        src="/assets/success.png"
        alt="Pedido realizado com sucesso"
        width={238}
        height={247}
      />
      <Link href="/">
        <Button>Voltar</Button>
      </Link>
    </div>
  )
}
