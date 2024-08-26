import { listMovies } from "./_actions/list-movies"
import { EmptyState } from "./_components/EmptyState"

export default async function Home() {
  const movies = await listMovies()

  if (!movies.products.length) return <EmptyState />

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
    </main>
  )
}
