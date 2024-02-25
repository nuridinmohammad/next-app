import { CatchError } from "@/utils/error"

export async function fetchPostById(slug: string) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
      if (!response.ok) {
        throw new Error("Failed Load Post")
      }
      return response.json()
    } catch (error) {
      return CatchError.getError(error)
    }
  }
  