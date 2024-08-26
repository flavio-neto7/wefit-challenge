import Image from "next/image"

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/assets/loader.png"
        alt="Carregando"
        width={80}
        height={80}
        className="animate-spin"
      />
    </div>
  )
}
