"use client"

import Link from "next/link"
import { usePathname, useSearchParams, useSelectedLayoutSegment } from "next/navigation"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = useSelectedLayoutSegment()
  const searchParams = useSearchParams()

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", sortOrder)
    window.history.pushState(null, "", `?${params.toString()}`)
    // window.history.replaceState(null, "", `?${params.toString()}`)
  }

  return (
    <div>
      <h2>Dashboard Layout</h2>
      <div className="flex flex-col justify-start items-start">
      <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
      <button onClick={() => updateSorting("desc")}>Sort Descending</button>
      </div>
      <ul>
        <li>
          <Link href={"/dashboard/analytics"} className={`${pathname === "analytics" ? "bg-red-200" : ""}`}>
            Analytics
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/settings"} className={`${pathname === "settings" ? "bg-red-200" : ""}`}>
            Settings
          </Link>
        </li>
      </ul>

      {children}
    </div>
  )
}
