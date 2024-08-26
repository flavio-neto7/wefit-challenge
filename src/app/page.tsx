import { listMovies } from "./_actions/list-movies"

export default async function Home() {
  const movies = await listMovies()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
    </main>
  )
}
