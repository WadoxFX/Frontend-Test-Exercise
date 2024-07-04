import { useContext } from 'react'

import { calcDate } from '@/features/calc-date'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  CellContext,
} from '@tanstack/react-table'

import { PostsContext } from './posts-provider'
import PostsTable from './posts-table'

const PostsList = () => {
  const { posts } = useContext<PostsContextType>(PostsContext)

  const columns = [
    {
      header: 'Id',
      accessorKey: 'id',
    },
    {
      header: 'Title',
      accessorKey: 'title',
    },
    {
      header: 'Desc',
      accessorKey: 'desc',
    },
    {
      header: 'Date',
      accessorKey: 'date',
      cell: (info: CellContext<Post, Date>) => calcDate(info.getValue()),
    },
  ]

  const table = useReactTable({
    data: posts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [{ id: 'date', desc: true }],
    },
  })

  if (!posts.length) return <div>No posts</div>

  return <PostsTable table={table} />
}

export default PostsList
