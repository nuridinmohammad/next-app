import { fetchProducts } from "@/actions/fetchProducts"
import { Product } from "@/types/product"
import { Suspense } from "react"
import { Loading } from "./loading"

export default async function Products() {
  // await new Promise((resolve, reject) => setTimeout(resolve, 3000))
  const data = (await fetchProducts()) as {products:Product[]}
 
  return (
    <main>
     <Suspense fallback={<Loading/>}>
     {data?.products?.length &&
        data?.products?.map((item: Product, index: number) => (
          <>
            <p key={index}>{item.title}</p>
          </>
        ))}
     </Suspense>
      {data?.products?.length <= 0 && <p>No Data</p>}
    </main>
  )
}
