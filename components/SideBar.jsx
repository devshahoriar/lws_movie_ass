import trend from '@/assets/icons/trending.svg'
import newRelease from '@/assets/icons/newRelease.svg'
import commingSoon from '@/assets/icons/commingSoon.svg'
import favourite from '@/assets/icons/favourite.svg'
import watchLater from '@/assets/icons/watchLater.svg'
import Image from 'next/image'

const SideBar = ({ dict }) => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image src={trend} width={24} height={24} alt="" />
            <span>{dict.trend}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={newRelease} width={24} height={24} alt="" />
            <span>{dict.new_re}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={commingSoon} width={24} height={24} alt="" />
            <span>{dict.new_com}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={favourite} width={24} height={24} alt="" />
            <span>{dict.fev}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={watchLater} width={24} height={24} alt="" />
            <span>{dict.watch_later}</span>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default SideBar
