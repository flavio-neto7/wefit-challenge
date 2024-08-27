"use server"

import { z } from "zod"
import { cache } from "react"
import { Product } from '@/domain/Product'

const listProductsItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  image: z.string(),
})

const listProductsSchema = z.object({
  products: z.array(listProductsItemSchema),
})

export const listProducts = cache(async (): Promise<Product[]> => {
  // fake wait
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const fetchProductsListResponse = await fetch(process.env.MOVIES_API_URL!)
  if (!fetchProductsListResponse.ok) {
    throw new Error("Failed to fetch products list")
  }
  const productsList = await fetchProductsListResponse.json()

  return listProductsSchema.parse(productsList).products
})