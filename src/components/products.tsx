import { getData } from "@/actions/fetchData"
import { addProduct } from "@/actions/product"
import { Product } from "@/types/product"
import { revalidateTag } from "next/cache"
import { permanentRedirect, redirect } from 'next/navigation'

export default async function Products() {
  await new Promise((resolve, reject) => setTimeout(resolve, 3000))
  const data = (await getData("products")) as unknown as Product[]

  return (
    <main>
      <form
        action={async (formDate: FormData) => {
          "use server"
          const title = formDate.get("title")
          await addProduct(title as string)
          revalidateTag('datas')
          permanentRedirect("/datas")
        }}
      >
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </form>
      {data.map((item: Product, index: number) => (
        <>
          <p key={index}>{item.title}</p>
        </>
      ))}
    </main>
  )
}
