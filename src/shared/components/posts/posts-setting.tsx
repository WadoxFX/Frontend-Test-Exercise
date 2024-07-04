import { useContext } from 'react'

import PostSchema from './post-schema'
import { PostsContext } from './posts-provider'

const PostsSetting = () => {
  const { posts } = useContext<PostsContextType>(PostsContext)
  return (
    <ul>
      {posts.map((post: Post) => (
        <PostSchema post={post} />
      ))}
    </ul>
  )
}

export default PostsSetting
