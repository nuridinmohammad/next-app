"use server"
import { CatchError } from "@/utils/error"
import { revalidatePath } from "next/cache"

export async function addProduct(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries())
  try {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawFormData),
    })
    if (!response.ok) {
      throw new Error("Error ad product")
    }
    revalidatePath("/product")
    return response.json()
  } catch (error) {
    return CatchError.getError(error)
  }
}
