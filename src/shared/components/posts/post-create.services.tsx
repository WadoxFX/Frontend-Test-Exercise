import { useContext, useState } from 'react'

import { PostsContext } from './posts-provider'
import { Button, Input } from '../ui'

const CreatePost = () => {
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [error, setError] = useState<string>('')
  const { addPost } = useContext<PostsContextType>(PostsContext)

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      if (!title.length ?? !desc.length)
        return setError('Fill in all required fields!')

      addPost({ id: Date.now(), title, desc, date: new Date() })
      
      setTitle('')
      setDesc('')
      if (error) setError('')
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  }

  return (
    <form className="flex flex-col gap-2 max-w-80">
      <Input
        min={1}
        max={99}
        placeholder="Title*"
        iSize="medium"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        min={0}
        max={999}
        placeholder="Description*"
        iSize="medium"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      {error && <p className="text-red-600">{error}</p>}

      <Button
        className="rounded-full"
        size="large"
        variant="contained"
        onClick={onSubmit}
      >
        Create
      </Button>
    </form>
  )
}

export default CreatePost
