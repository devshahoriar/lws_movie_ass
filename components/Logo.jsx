import Image from 'next/image'
import logo from '../assets/logo.svg'
import LinkLang from './LinkLang'

const Logo = () => {
  return (
    <LinkLang href="\">
      <Image src={logo} alt="logo" />
    </LinkLang>
  )
}

export default Logo
