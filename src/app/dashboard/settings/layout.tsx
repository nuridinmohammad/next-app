"use client"

import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function SettingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div>
      <h3>Setting Layout</h3>
      <div className="flex flex-col items-start">
        <button type="button" onClick={() => router.push("/dashboard")}>
          Return dashboard
        </button>
        <button type="button" onClick={() => router.push("/blog", { kind: PrefetchKind.AUTO })}>
          To Blog
        </button>
      </div>
      <ul>
        <li>
          <Link href={"/dashboard/settings/profile"} className={`${pathname === "/dashboard/settings/profile" ? "bg-yellow-50" : ""}`}>
            Profile
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/settings/password"} className={`${pathname === "/dashboard/settings/password" ? "bg-yellow-50" : ""}`}>
            Password
          </Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
