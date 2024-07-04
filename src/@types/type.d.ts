interface Children {
  children: React.ReactNode
}

type NavItems = NavItem[]
interface NavItem {
  title: string
  link: string
  icon: string
}

type Posts = Post[]
interface Post {
  id: number
  title: string
  desc: string
  date: Date
}

interface PostsContextType {
  posts: Posts
  addPost: (post: Post) => void
  editPost: (postId: Post) => void
  delPost: (id: number) => void
}

interface PostSchemaProps {
  post: Post
}
