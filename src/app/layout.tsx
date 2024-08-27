import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import { Navbar } from "./_components/Navbar/Navbar"
import { CartProvider } from "@/features/cart/cart-context"

import "./globals.css"
import StyledComponentsRegistry from "@/lib/registry"

const openSans = Open_Sans({ subsets: ["latin"] })

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
      <body className={openSans.className}>
        <CartProvider>
          <StyledComponentsRegistry>
            <div className="max-w-5xl mx-auto">
              <Navbar />
              {children}
            </div>
          </StyledComponentsRegistry>
        </CartProvider>
      </body>
    </html>
  )
}
