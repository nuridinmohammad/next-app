"use server";

import { config } from "@/constants";
import { CatchError } from "@/utils/catchError";
import { cookies } from "next/headers";

export async function loginAction(e: FormData) {
  try {
    const response = await fetch(`${config.BASE_URL_API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e.get("username"),
        password: e.get("password"),
        expiresInMins: 60 * 24, // optional
      }),
    });
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message || "Failed to login");
    }
    const data = await response.json();
    cookies().set("token", data.token);
    return data;
  } catch (error) {
    console.log(error);
    return CatchError.getError(error);
  }
}
