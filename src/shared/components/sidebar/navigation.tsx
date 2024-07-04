import clsx from 'clsx'
import { Link, useLocation } from '@tanstack/react-router'

import HomeIcon from '/home.svg'
import PostIcon from '/post.svg'

const navItems: NavItems = [
  { title: 'Home', link: '/', icon: HomeIcon },
  { title: 'Posts', link: '/posts', icon: PostIcon },
]

const Navigation = () => {
  const location = useLocation()
  return (
    <ul className="p-3 flex flex-col gap-3">
      {navItems.map((navItem: NavItem, index) => (
        <li key={index}>
          <Link
            className={clsx(
              'p-3 flex items-center gap-3 rounded-lg',
              location.href === navItem.link ? 'bg-gray-200' : null,
            )}
            to={navItem.link}
          >
            <img className="w-6 h-6" src={navItem.icon} alt={navItem.title} />
            {navItem.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
