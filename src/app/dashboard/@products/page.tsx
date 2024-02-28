import { fetchProducts } from "@/hooks";
import { Product } from "@/type";
import { cookies } from "next/headers";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function ProductsPage() {
  const token = cookies().get("token");
  const data = (await fetchProducts(token!.value)) as unknown as {
    products: Product[];
  };

  return (
    <div className="ml-4 mt-4">
      <h1 className="text-2xl font-medium">Products</h1>
      <ul>
        <Suspense fallback={<p>Loading..</p>}>
          {data.products.map((item: Product, index: number) => {
            return (
              <li key={index}>
                {item.title} -{" "}
                <Link
                  href={`/dashboard?product=${item.id}`}
                  className="underline hover:bg-blue-400"
                  prefetch={true}
                >
                  detail
                </Link>
              </li>
            );
          })}
        </Suspense>
      </ul>
    </div>
  );
}
