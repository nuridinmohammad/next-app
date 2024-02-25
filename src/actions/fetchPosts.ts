import { CatchError } from "@/utils/error"

export async function fetchAllPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "force-cache" })
    if (!response.ok) {
      throw new Error("Error fetch All Post")
    }
    return response.json()
  } catch (error) {
    return CatchError.getError(error)
  }
}
