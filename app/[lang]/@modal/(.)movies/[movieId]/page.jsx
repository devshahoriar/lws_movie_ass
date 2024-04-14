import Image from 'next/image'
import { getDictionary } from '@/local/dictionaries'
import { Modal } from '@/components/Modal'

const page = async ({ params: { lang, movieId } }) => {
  const movies = await (() =>
    import('@/db/data.json').then((mod) => mod.default))()
  const dict = await getDictionary(lang)
  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    overview,
    vote_average,
    vote_count,
    popularity,
  } = movies.find((movie) => movie.id === Number(movieId)) || {}
  return (
    <Modal>
      <section>
        <div>
          <Image
            className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
            src={backdrop_path}
            alt=""
            width={1920}
            height={1080}
          />
        </div>
        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <Image width={1920} height={1080} src={poster_path} alt="" />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-slate-300 text-2xl">{title}</h2>
            <p className="my-2 text-slate-400 italic">{overview}</p>
            <ul className="text-slate-300 space-y-2 my-8">
              <li>
                {dict.res_date} : {release_date}
              </li>
              <li>
                {dict.avg_vote} : {vote_average}
              </li>
              <li>
                {dict.count_vote} : {vote_count}
              </li>
              <li>
                {dict.popularity} : {popularity}
              </li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              {dict.str_hd}
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              {dict.dow_hd}
            </button>
          </div>
        </div>
      </section>
    </Modal>
  )
}

export default page
