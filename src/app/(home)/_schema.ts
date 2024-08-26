import { z } from "zod"

const listMoviesItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  image: z.string(),
})
export type ListMoviesItem = z.infer<typeof listMoviesItemSchema>

export const listMoviesSchema = z.object({
  products: z.array(listMoviesItemSchema),
})
