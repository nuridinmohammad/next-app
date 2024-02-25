import Link from "next/link"

export function NotFound() {
  return (
    <div>
      <h2>Not Found ROOT</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
