import star from '@/assets/star.svg'
import Image from 'next/image'
import Img from '@/assets/movie-1.png'
import tag from '@/assets/tag.svg'
import Link from 'next/link'
import LinkLang from './LinkLang'
import { getDictionary } from '@/local/dictionaries'

const MovieCard = async ({ movie, lang }) => {
  const { poster_path, title } = movie || {}
  const dict = await getDictionary(lang)
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        src={poster_path}
        alt=""
        width={200}
        height={300}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1 line-clamp-1">{title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center space-x-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <Image key={i} src={star} alt="star" />
          ))}
        </div>
        <LinkLang
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`/movies/${movie.id}`}
          passHref
        >
          <Image src={tag} alt="" />
          <span>{dict.detls}</span>
        </LinkLang>
      </figcaption>
    </figure>
  )
}

export default MovieCard
