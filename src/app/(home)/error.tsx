"use client"

import { Button } from "@/components/Button"
import Image from "next/image"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-16 gap-6 text-center rounded">
      <h2 className="text-surface font-bold text-xl">
        Aconteceu um erro ao carregar a página :(
      </h2>
      <Image
        src="/assets/reload-page.png"
        alt="Recarregar a página"
        width={178}
        height={265}
      />
      <Button onClick={() => reset()}>Recarregar página</Button>
    </div>
  )
}
