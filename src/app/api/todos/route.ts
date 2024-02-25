export async function GET() {
  const res = await fetch("https://dummyjson.com/todos", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY?.toString() || "",
    },
  })
  const data = await res.json()

  return Response.json({ data })
}
