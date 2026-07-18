import { cn } from '@/lib/utils'

export function Table({ children, className }) {
  return (
    <div className="overflow-x-auto">
      <table className={cn('w-full text-right', className)}>
        {children}
      </table>
    </div>
  )
}

export function TableHead({ children }) {
  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>{children}</tr>
    </thead>
  )
}

export function TableHeader({ children }) {
  return (
    <th className="px-4 py-3 text-sm font-semibold text-gray-600">
      {children}
    </th>
  )
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>
}

export function TableRow({ children, className }) {
  return (
    <tr className={cn('border-b border-gray-100 hover:bg-gray-50 transition', className)}>
      {children}
    </tr>
  )
}

export function TableCell({ children, className }) {
  return (
    <td className={cn('px-4 py-3 text-sm', className)}>
      {children}
    </td>
  )
}