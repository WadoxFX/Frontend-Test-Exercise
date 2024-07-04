import PostsList from '@/shared/components/posts/posts-list'
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
  const { user } = useAuth0()

  if (!user) return null
  return (
    <div className="max-w-820px w-full m-auto mt-3 flex flex-col gap-5">
      <div className="flex gap-3 items-center bg-gray-200 p-4 rounded-xl w-full">
        <img className="w-16 rounded-full" src={user.picture} />
        <p className="text-gray-800">
          Hello, you have successfully logged into your personal account under
          the name: <span className="text-gray-800 italic">{user.name} </span>
          and email: <span className="text-gray-800 italic">{user.email}</span>
        </p>
      </div>
      <hr />
      <PostsList />
    </div>
  )
}

export default Home
