import CreatePost from '@/shared/components/posts/post-create.services'
import PostsSetting from '@/shared/components/posts/posts-setting'

const Posts = () => (
  <div className="mt-3 m-auto w-full max-w-820px flex flex-col gap-5">
    <CreatePost />
    <hr />
    <PostsSetting />
  </div>
)

export default Posts
