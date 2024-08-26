import { listMovies } from "./_actions/list-movies"
import { EmptyState } from "./_components/EmptyState"
import { ProductCard } from "./_components/ProductCard"

export default async function Home() {
  const movies = await listMovies()

  if (!movies.length) return <EmptyState />

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-4">
      <div className="grid gap-4">
        {movies.map((movie) => (
          <ProductCard key={movie.id} product={movie} />
        ))}
      </div>
    </main>
  )
}
