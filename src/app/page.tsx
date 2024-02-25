"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Home() {
  // throw new Error("Error Goblog")
  function updateSorting(to: string) {
    window.location.pathname = `/${to}`
  }

  return (
    <div className="flex h-full flex-col items-center justify-between p-24">
      <ul>
        <li>
          <button onClick={()=> updateSorting('blog')}>Get Blog By Location</button>
        </li>

        <li>
          <Link href={'/blog'} >Get Blog By Link</Link>
        </li>
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link href={"/datas"} prefetch={true}>Datas</Link>
        </li>
        <li>
          <Link href={"/product"} >Product</Link>
        </li>
      </ul>
    </div>
  )
}
