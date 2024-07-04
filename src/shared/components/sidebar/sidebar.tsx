import { useAuth0 } from '@auth0/auth0-react'

import Navigation from './navigation'
import { Button } from '../ui'

import DoorIcon from '/door.svg'

const Sidebar = () => {
  const { logout } = useAuth0()
  return (
    <aside className="h-screen sticky top-0 border-r-1 border-gray-border flex flex-col justify-between">
      <Navigation />
      <Button
        className="p-3 m-3 flex items-center gap-3 rounded-lg"
        onClick={() => logout()}
      >
        <img className="w-6 h-6" src={DoorIcon} alt="Logout" />
        Logout
      </Button>
    </aside>
  )
}

export default Sidebar
