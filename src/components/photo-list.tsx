import { fetchPhotoList } from "@/actions/fetchPhotoList"
import { PhotoInterface } from "@/types/photo"
import Link from "next/link"
import React, { Suspense } from "react"
import { Loading } from "./loading"

export async function PhotoList() {
  const photoList = (await fetchPhotoList()) as unknown as PhotoInterface[]
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <ul>
          {photoList.map((item, index) => {
            return (
              <li key={index}>
                {item.title} <Link href={`/product/photo/${item.id}`}>see photo</Link>
              </li>
            )
          })}
        </ul>
      </Suspense>
    </div>
  )
}
