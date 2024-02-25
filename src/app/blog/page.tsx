import { fetchAllPost } from "@/actions/fetchPosts"
import { Loading } from "@/components/loading"
import { BlogInterface } from "@/types/post"
import { CatchError } from "@/utils/error"
import Link from "next/link"
import React, { Suspense } from "react"



export default async function BlogPage() {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  const posts = (await fetchAllPost()) as unknown as BlogInterface[]
  return (
    <div>
      Blog Page
      <Suspense fallback={<Loading/>}>
        <ul>
          {posts.map((item: BlogInterface, index: number) => {
            return (
              <>
                <li key={index}>
                  {item.title}{" "}
                  <Link href={`/blog/${item.id}`} prefetch={true} className="underline bg-blue-300">
                    detail
                  </Link>
                </li>
              </>
            )
          })}
        </ul>
      </Suspense>
    </div>
  )
}
