'use client'

import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()

    return (
        <div onClick={() => router.push('/')} className="text-4xl cursor-pointer flex justify-center items-center gap-3 mb-4">
            <h1 className="font-bold">Internal</h1>
            <h1 className="italic">Frontier</h1>
        </div>
    )
}