"use server"
import { CatchError } from "@/utils/error"

export async function addProduct(title: string) {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    })
    if (!response) {
      throw new Error("Error ad product")
    }
  } catch (error) {
    return CatchError.getError(error)
  }
}
