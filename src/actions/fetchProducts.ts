import { CatchError } from "@/utils/error"

export async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products", { cache: "force-cache" })
    if (!response.ok) {
      throw new Error("Error fetch All Product")
    }
    return response.json()
  } catch (error) {
    return CatchError.getError(error)
  }
}
