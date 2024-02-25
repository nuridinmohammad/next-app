import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex">
        <Link href="/product/admin" className="mr-3">
          Admin Page
        </Link>
        <span className="mx-5">{" "}|{" "}</span>
        <Link href="/product/user" className="ml-3">
          User Page
        </Link>
      </nav>
      <div>{children}</div>
    </>
  )
}
