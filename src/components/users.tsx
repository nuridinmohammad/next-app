import { getData } from "@/actions/fetchData"
import { User } from "@/types/user"

export default async function Users() {
  await new Promise((resolve, reject)=> setTimeout(resolve, 5000))
  const data = await getData("users") as unknown as User[]

  return (
    <main>
      {data.map((item: User, index: number) => (
        <>
          <p key={index}>{item.username}</p>
        </>
      ))}
    </main>
  )
}