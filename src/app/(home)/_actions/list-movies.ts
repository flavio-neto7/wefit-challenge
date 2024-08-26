"use server"

import { cache } from "react"
import { listMoviesSchema } from "../_schema"

export const listMovies = cache(async () => {
  // fake wait
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const fetchMoviesListResponse = await fetch(process.env.MOVIES_API_URL!)
  if (!fetchMoviesListResponse.ok) {
    throw new Error("Failed to fetch movies list")
  }
  const moviesList = await fetchMoviesListResponse.json()

  return listMoviesSchema.parse(moviesList).products
})
