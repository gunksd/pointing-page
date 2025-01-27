import Link from 'next/link'
import { NavLink } from '@/types'

interface NavigationProps {
  links: NavLink[]
}

export default function Navigation({ links }: NavigationProps) {
  return (
    <nav className="fixed bottom-8 left-8 z-30">
      {links.map((item, index) => (
        <div key={index} className="my-4 text-sm text-white">
          <Link href={item.link} className="opacity-75 text-white tracking-wider hover:opacity-100 transition-opacity duration-300">
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  )
}

