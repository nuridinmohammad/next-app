import React, { Suspense } from "react"
import { fetchAllPost } from "../page"
import { fetchPostById } from "@/actions/fetchBlogById"
import { BlogInterface } from "@/types/post"
import { Loading } from "@/components/loading"

export async function generateStaticParams() {
  const posts = (await fetchAllPost()) as unknown as BlogInterface[]
  return posts.map((post) => ({
    slug: post.id.toString(),
  }))
}

export default async function page({ params }: { params: { slug: string } }) {
  // throw new Error("Catch Error BLOG..")
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const post = (await fetchPostById(params.slug)) as unknown as BlogInterface
  return (
    <div>
      Blog
      <Suspense fallback={<Loading />}>
        <h2 className="text-2xl">{post?.title}</h2>
        <p>{post?.body}</p>
      </Suspense>
    </div>
  )
}
