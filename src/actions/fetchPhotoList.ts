import { CatchError } from "@/utils/error"

export async function fetchPhotoList() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      if (!response.ok) {
        throw new Error("Failed Load Posts")
      }
      return response.json()
    } catch (error) {
      return CatchError.getError(error)
    }
  }
  