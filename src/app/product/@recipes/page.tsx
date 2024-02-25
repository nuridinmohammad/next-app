import React from "react"

export default async function page() {
  // throw new Error("Error on RECIPES")
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return <div>Recipes</div>
}
