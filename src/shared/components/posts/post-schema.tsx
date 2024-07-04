import React, { useContext, useState } from 'react'

import { calcDate } from '@/features/calc-date'
import { useToggle } from '@/shared/hooks/useToggle'

import { PostsContext } from './posts-provider'
import { Button, Input } from '../ui'

const PostSchema: React.FC<PostSchemaProps> = ({ post }) => {
  const [isOn, toggle] = useToggle<boolean>(false)
  const [newTitle, setNewTitle] = useState<string>(post.title)
  const [newDesc, setNewDesc] = useState<string>(post.desc)
  const { delPost, editPost } = useContext<PostsContextType>(PostsContext)

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const { title, desc, ...oldPost } = post
    editPost({ ...oldPost, title: newTitle, desc: newDesc })
  }
  return (
    <>
      <li
        key={post.id}
        className="grid grid-cols-5 gap-3 justify-between items-start"
      >
        <div>{post.id}</div>
        <div className=" break-all flex items-start">{post.title}</div>
        <p className=" break-all">{post.desc}</p>
        <data>{calcDate(post.date)}</data>
        <div>
          <Button onClick={toggle}>{isOn ? 'Close' : 'Edit'}</Button>
          <Button onClick={() => delPost(post.id)}>x</Button>
        </div>
      </li>
      {isOn && (
        <form className="flex flex-col mb-3">
          <div className="flex gap-3 my-3">
            <Input
              min={1}
              max={99}
              defaultValue={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="New title(optional)*"
            />
            <Input
              min={0}
              max={999}
              defaultValue={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="New description(optional)*"
            />
            <Button onClick={onSubmit} variant="outlined" size="medium">
              Save
            </Button>
          </div>
          <hr />
        </form>
      )}
    </>
  )
}

export default PostSchema
