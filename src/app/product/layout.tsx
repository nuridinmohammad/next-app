import { Loading } from "@/components/loading"
import { Suspense } from "react"

export default function Layout({ modal, children, carts, recipes }: { modal: React.ReactNode; children: React.ReactNode; carts: React.ReactNode; recipes: React.ReactNode }) {
  const isAdmin = true
  // return <>{!isAdmin  ? recipes : carts } </>
  return (
    <>
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Suspense fallback={<Loading />}>{carts}</Suspense>
      <Suspense fallback={<Loading />}>{recipes}</Suspense>
    </>
  )
}
