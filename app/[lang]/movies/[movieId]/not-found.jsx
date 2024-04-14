'use client'
import LinkLang from '@/components/LinkLang'
import { useParams } from 'next/navigation'

const NotFound = () => {
  const { movieId } = useParams()

  return (
    <div className="h-[80vh] w-full flex flex-col justify-center items-center gap-3">
      <p className="text-4xl font-bold">This movie with {movieId} id was not found!</p>
     
      <LinkLang className="text-lg" href="/">
        Go to Home🏠
      </LinkLang>
    </div>
  )
}

export default NotFound
