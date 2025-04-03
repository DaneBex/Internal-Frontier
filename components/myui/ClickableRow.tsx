'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { TableRow } from '../ui/table'

export default function ClickableRow({
  slug,
  children,
}: {
  slug: string
  children: ReactNode
}) {
  const router = useRouter()
console.log(slug)
  return (
    <TableRow
      onClick={() => router.push(slug)}
      className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full"
    >
      {children}
    </TableRow>
  )
}
