"use client";

import Product from "@/components/product";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("product")!;
  return (
    <div className="ml-4 mt-4">
      <Link href={"/dashboard"} className="hover:underline">
        Go back
      </Link>
      <h1 className="text-2xl font-medium">Product Detail</h1>
      <Suspense fallback={<p>Loading..</p>}>
        <Product id={search as string} />
      </Suspense>
    </div>
  );
}
