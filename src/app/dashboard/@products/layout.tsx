import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App - Dashboard",
};

export default function ProductsLayout({
  children,
  products,
}: {
  products: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {products}
    </div>
  );
}