import { BlogInterface } from "@/types/post"
import { CatchError } from "@/utils/error"
import Link from "next/link"
import React from "react"

export async function fetchAllPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"force-cache"})
    if (!response.ok) {
      throw new Error("Error fetch All Post")
    }
    return response.json()
  } catch (error) {
    return CatchError.getError(error)
  }
}

export default async function page() {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  const posts = (await fetchAllPost()) as unknown as BlogInterface[]
  return (
    <div>
      Blog Page
      <ul>
        {posts.map((item: BlogInterface, index: number) => {
          return (
            <>
              <li key={index}>
                {item.title} <Link href={`/blog/${item.id}`} prefetch={true} className="underline bg-blue-300">detail</Link>
              </li>
            </>
          )
        })}
      </ul>
    </div>
  )
}
