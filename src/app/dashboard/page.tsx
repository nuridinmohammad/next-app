import React from "react"

export default async function page() {
  // throw new Error("Error Goblog")

  await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000)
  })

  return <div>Dashboard Page</div>
}
