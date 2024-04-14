import MovieCard from '../../components/MovieCard'

export default async function Home({ params: { lang } }) {
  const movies = await (() =>
    import('../../db/data.json').then((mod) => mod.default))()

  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies?.map((movie) => (
            <MovieCard lang={lang} key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  )
}
