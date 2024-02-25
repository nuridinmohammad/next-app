import { fetchPhotoId } from "@/actions/fetchPhotoId"
import { GlobalError } from "@/components/error"
import { Loading } from "@/components/loading"
import { PhotoInterface } from "@/types/photo"
import { ErrorBoundaryHandler } from "next/dist/client/components/error-boundary"
import Image from "next/image"
import React, { Suspense } from "react"

export default async function PhotoModal({ params }: { params: { id: string } }) {
  const photo = (await fetchPhotoId(params.id)) as unknown as PhotoInterface
  return (
    <>
      <div className="bg-red-400 w-20 h-auto">
        <Image src={photo.url} alt={photo.title} height={50} width={50} />
      </div>
    </>
  )
}
