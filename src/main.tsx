import App from '@/app/app'
import { Auth0Provider } from '@auth0/auth0-react'
import ReactDOM from 'react-dom/client'

import AuthСheck from './shared/components/auth/auth-check'
import PostsProvider from './shared/components/posts/posts-provider'

import '@/styles/globals.css'

const config = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: { redirect_uri: window.location.origin },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider {...config}>
    <AuthСheck>
      <PostsProvider>
        <App />
      </PostsProvider>
    </AuthСheck>
  </Auth0Provider>,
)
