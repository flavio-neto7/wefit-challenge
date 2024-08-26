import { listMovies } from "./_actions/list-movies"
import { EmptyState } from "./_components/EmptyState"
import { ProductCard } from "./_components/ProductCard"

export default async function Home() {
  const movies = await listMovies()

  if (!movies.length) return <EmptyState />

  return (
    <main className="min-h-screen p-4 pt-0">
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {movies.map((movie) => (
          <ProductCard key={movie.id} product={movie} />
        ))}
      </div>
    </main>
  )
}
