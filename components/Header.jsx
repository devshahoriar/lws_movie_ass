'use client'
import sun from '@/assets/icons/sun.svg'
import ring from '@/assets/ring.svg'
import cart from '@/assets/shopping-cart.svg'
import Logo from '@/components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { lang } = useParams()
  const _hendelLangChange = (e) => {
    router.push(pathname.replace(lang, e.target.value))
  }

  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Logo />
        <ul className="flex items-center space-x-5">
          <li>
            <select
              onChange={_hendelLangChange}
              className="mb-2 focus:outline-none placeholder:border dark:bg-black dark:text-white dark:placeholder-white dark:border-white/20 dark:placeholder:bg-primary/20  rounded-lg "
              defaultValue={lang}
            >
              <option  value="en">
                EN
              </option>
              <option  value="bn">
                BN
              </option>
            </select>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={ring} width={24} height={24} alt="notification" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={sun} width={24} height={24} alt="light mode" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src={cart} width={24} height={24} alt="cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
