"use client"

import { Button } from "@/components/button"
import { fetchProducts } from "@/hooks"
import { Product } from "@/type"
import { cookies } from "next/headers"
import Link from "next/link"
import React, { Suspense, useEffect, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"

async function filtered(previousState: unknown, formData: FormData) {
  return {
    value: formData.get("value")
  }
}

export default function ProductsPage() {
  const [state, formAction] = useFormState(filtered, {value:''})
  const [data, setData] = useState<{
    products: Product[]
  }>({ products: [] })

  useEffect(() => {
    const response = async () => {
      const products = (await fetchProducts({
        value: state.value as string,
      })) as unknown as {
        products: Product[]
      }
      setData(products)
    }

    response()
    ;() => response()
  }, [state])

  return (
    <div className="ml-4 mt-4">
      <div className="flex gap-3 justify-start items-center">
        <div className="flex gap-40 justify-start items-center">
          <h1 className="text-2xl font-medium">Products</h1>
          <form
            action={(formData: FormData) => {
              formAction(formData)
            }}
            className="flex gap-2 justify-start items-center my-2"
          >
            <div className="border-2 rounded-full border-blue-400">
              <input type="text" name="value" className="rounded-full  px-1 border-none focus:outline-none" autoFocus />
            </div>

            <Button text="Search" />
          </form>
        </div>
      </div>

      <ul>
        <Suspense fallback={<p>Loading..</p>}>
          {data.products.map((item: Product, index: number) => {
            return (
              <li key={index} className="flex gap-2">
                {item.title} -{" "}
                <div className="flex gap-3">
                  <Link href={`/dashboard?product=${item.id}`} className="underline hover:bg-blue-400" prefetch={true}>
                    detail
                  </Link>
                  -
                  <Link href={`/dashboard/delete/${item.id}`} className="w-auto bg-red-400 rounded-full" prefetch={true}>
                    delete
                  </Link>
                </div>
              </li>
            )
          })}
        </Suspense>
      </ul>
    </div>
  )
}
