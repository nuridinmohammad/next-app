import { CatchError } from "@/utils/error"

  export async function fetchPhotoId(id: string) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/2`)
      if (!response.ok) {
        throw new Error(`Failed fetch Photo ${id}`)
      }
  
      return response.json()
    } catch (error) {
      return CatchError.getError(error)
    }
  }
  