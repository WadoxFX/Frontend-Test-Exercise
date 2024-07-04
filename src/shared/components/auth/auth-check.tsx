import { useAuth0 } from '@auth0/auth0-react'

const AuthСheck: React.FC<Children> = ({ children }) => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Loading...
      </div>
    )

  if (!isLoading && !isAuthenticated) {
    loginWithRedirect()

    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-600">
        Redirect...
      </div>
    )
  }

  return <>{children}</>
}

export default AuthСheck
