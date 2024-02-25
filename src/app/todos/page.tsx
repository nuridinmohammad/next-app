import React from "react"

export default async function page() {
  const todos = await fetch("http://localhost:3000/api/todos")
  console.log(await todos.json())

  return <div>Todo Page</div>
}
