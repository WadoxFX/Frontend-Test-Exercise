import { useState, createContext } from 'react'

export const PostsContext = createContext<PostsContextType>({
  posts: [],
  addPost: () => {},
  editPost: () => {},
  delPost: () => {},
})

const PostsProvider: React.FC<Children> = ({ children }) => {
  const [posts, setPosts] = useState<Posts>([])

  const addPost = (post: Post) => setPosts([...posts, post])

  const editPost = (updatedPost: Post) =>
    setPosts((prevPosts) => {
      return prevPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post,
      )
    })

  const delPost = (id: number) =>
    setPosts((prev) => {
      return prev.filter((post) => post.id !== id)
    })

  return (
    <PostsContext.Provider value={{ posts, addPost, editPost, delPost }}>
      {children}
    </PostsContext.Provider>
  )
}

export default PostsProvider
