import Posts from '@/pages/posts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
  component: () => <Posts />,
})
