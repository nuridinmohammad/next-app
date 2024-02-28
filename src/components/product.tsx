import { fetchProduct, fetchProducts } from "@/hooks";
import { Product } from "@/type";
import Image from "next/image";
import React from "react";
import { Loading } from "./loading";

export default async function Product({ id }: { id: string }) {
  const product = (await fetchProduct(id)) as unknown as Product;

  return (
    <div>
      <Image
        alt={product.title}
        src={product.images[0]}
        height={200}
        width={200}
        priority
        onLoad={(e) => {
          if (!e.currentTarget) {
            return <Loading />;
          }
        }}
      />
      {/* <img src={product.images[0]} alt={product.title} height={200} width={200}  /> */}
      <div className="product">
        <h2 className="title">{product.title}</h2>
        <p>
          {" "}
          <strong>description</strong>:{product.description}
        </p>
        <div className="details">
          <p>
            <strong>Price:</strong>
            {product.price}
          </p>
          <p>
            <strong>Discount Percentage:</strong> {product.discountPercentage}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      </div>
    </div>
  );
}
