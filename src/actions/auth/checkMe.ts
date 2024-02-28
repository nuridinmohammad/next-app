import { config } from "@/constants";
import { CatchError } from "@/utils/catchError";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function checkMe(token: RequestCookie) {
  try {
    const response = await fetch(`${config.BASE_URL_API}/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message.message);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    return CatchError.getError(error);
  }
}
