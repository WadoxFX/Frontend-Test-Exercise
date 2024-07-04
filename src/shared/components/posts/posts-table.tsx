import { Table, flexRender } from '@tanstack/react-table'

interface PostTableProps {
  table: Table<Post>
}

const PostsTable: React.FC<PostTableProps> = ({ table }) => (
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              onClick={header.column.getToggleSortingHandler()}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
              {header.column.getIsSorted()
                ? header.column.getIsSorted() === 'desc'
                  ? ' 🔽'
                  : ' 🔼'
                : ''}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id} className="hover:bg-gray-100">
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className="px-2 py-4 text-sm text-gray-500 whitespace-break-spaces break-all min-w-32"
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

export default PostsTable
