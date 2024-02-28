import { config } from "@/constants";
import { CatchError } from "@/utils/catchError";

export async function fetchProducts(token: string) {
  try {
    const response = await fetch(`${config.BASE_URL_API}/products`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message);
    }
    
    return response.json();
  } catch (error) {
    console.log(error);
    return CatchError.getError(error);
  }
}

export async function fetchProduct(id:string) {
  try {
    const response = await fetch(`${config.BASE_URL_API}/products/${id}`, {
      method: "GET",
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message);
    }
    
    return response.json();
  } catch (error) {
    console.log(error);
    return CatchError.getError(error);
  }
}
