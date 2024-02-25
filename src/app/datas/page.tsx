import Products from '@/components/products'
import React, { Suspense } from 'react'
import Users from '@/components/users'
import { Loading } from '@/components/loading'

export default function page() {
  return (
    <div>
        <Suspense fallback={<Loading/>}>
            <Products/>
        </Suspense>
        <Suspense fallback={<Loading/>}>
            <Users/>
        </Suspense>
    </div>
  )
}
