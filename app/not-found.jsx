'use client'
import LinkLang from '../components/LinkLang'

const notFound = () => {
  return (
    <div className="h-[80vh] w-full flex justify-center items-center text-6xl font-bold flex-col">
      <p>Page not found.😐</p>
      <LinkLang className="text-lg mt-4" href="/">
        Go to Home🏠
      </LinkLang>
    </div>
  )
}

export default notFound
