"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function DashboardLayout({
  children,
  products,
  modal,
  product,
}: {
  modal: React.ReactNode;
  product: React.ReactNode;
  products: React.ReactNode;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const productParams = searchParams.get("product");

  return (
    <div className="relative">
      <div>{modal}</div>
      <div>
        {children}
        {productParams ? product : products}
      </div>
    </div>
  );
}
