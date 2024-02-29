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
      <div className="flex gap-3 justify-start items-center">
        <div className="flex gap-40 justify-start items-center">
          <h1 className="text-2xl font-medium">Products</h1>
          <form
            action=""
            className="flex gap-2 justify-start items-center my-2"
          >
            <div className="border-2 rounded-full border-blue-400">
              <input
                type="text"
                name="username"
                className="rounded-full  px-1 border-none focus:outline-none"
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="ml-2 bg-blue-400 px-2  rounded-full text-white"
            >
              {false ? "Loading.." : "Search"}
            </button>
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
                  <Link
                    href={`/dashboard?product=${item.id}`}
                    className="underline hover:bg-blue-400"
                    prefetch={true}
                  >
                    detail
                  </Link>
                  -
                  <Link
                    href={`/dashboard/delete/${item.id}`}
                    className="w-auto bg-red-400 rounded-full"
                    prefetch={true}
                  >
                    delete
                  </Link>
                </div>
              </li>
            );
          })}
        </Suspense>
      </ul>
    </div>
  );
}
