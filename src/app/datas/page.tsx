import Products from '@/components/products'
import React, { Suspense } from 'react'
import Loading from '../blog/loading'
import Users from '@/components/users'

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
