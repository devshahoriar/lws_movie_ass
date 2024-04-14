'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

const LinkLang = ({ href, children, ...rest }) => {
  let { lang } = useParams()
  
  if (lang) {
    if (href === '\\') {
      href = `/${lang}`
    } else {
      href = `/${lang}/${href}`
    }
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}

export default LinkLang
