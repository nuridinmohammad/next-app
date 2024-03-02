import { config } from "@/constants"
import { CatchError } from "@/utils/catchError"
import { cookies } from "next/headers"
import { join } from "path"

export interface IFetcProducts {
  value?: string
  // skip?:number,
  // limit?:number,
  // category?:string
}

export async function fetchProducts({ value }: IFetcProducts) {
  console.log(value);
  
  try {
    const response = await fetch(`${config.BASE_URL_API}/products/search?q=${value}`, {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })
    if (!response.ok) {
      const { message } = await response.json()
      throw new Error(message)
    }

    return response.json()
  } catch (error) {
    console.log(error)
    return CatchError.getError(error)
  }
}

export async function fetchProduct(id: string) {
  try {
    const response = await fetch(`${config.BASE_URL_API}/products/${id}`, {
      method: "GET",
    })
    if (!response.ok) {
      const { message } = await response.json()
      throw new Error(message)
    }

    return response.json()
  } catch (error) {
    console.log(error)
    return CatchError.getError(error)
  }
}

export async function destroyProduct(id: string) {
  try {
    const response = await fetch(`${config.BASE_URL_API}/products/${id}`, {
      method: "DELETE",
      next: { tags: ["delete-product"] },
    })
    if (!response.ok) {
      const { message } = await response.json()
      throw new Error(message)
    }
    return await response.json()
  } catch (error) {
    console.log(error)
    return CatchError.getError(error)
  }
}
