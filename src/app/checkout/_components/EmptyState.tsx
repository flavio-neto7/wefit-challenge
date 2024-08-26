"use client"

import { Button } from "@/components/Button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function EmptyState() {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-16 gap-6 text-center rounded">
      <h2 className="text-surface font-bold text-xl">
        Parece que não há nada por aqui :(
      </h2>
      <Image
        src="/assets/reload-page.png"
        alt="Recarregar a página"
        width={178}
        height={265}
      />
      <Link href="/">
        <Button>Voltar para a Home</Button>
      </Link>
    </div>
  )
}
