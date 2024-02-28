"use client";

import { useSearchParams } from "next/navigation";

export default function DashboardLayout({
  children,
  products,
  product,
}: {
  product: React.ReactNode;
  products: React.ReactNode;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("product");

  return (
    <div>
      {children}
      {search ? product : products}
    </div>
  );
}
