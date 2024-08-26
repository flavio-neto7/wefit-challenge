"use server"

import { cache } from "react"
import { z } from "zod"

const listMoviesItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  image: z.string(),
})

const listMoviesSchema = z.object({
  products: z.array(listMoviesItemSchema),
})

export const listMovies = cache(async () => {
  const fetchMoviesListResponse = await fetch(process.env.MOVIES_API_URL!)
  if (!fetchMoviesListResponse.ok) {
    throw new Error("Failed to fetch movies list")
  }
  const moviesList = await fetchMoviesListResponse.json()

  return listMoviesSchema.parse(moviesList)
})
