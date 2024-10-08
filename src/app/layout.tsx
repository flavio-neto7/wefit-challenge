import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "./_components/Navbar"
import { CartProvider } from "@/features/cart/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WeMovies",
  description: "Teste Front React WeFit",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <div className="max-w-5xl mx-auto">
            <Navbar />
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
