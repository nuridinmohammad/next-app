import { checkMe } from "@/actions/auth/checkMe";
import { logoutAction } from "@/actions/auth/logoutAction";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import { Logout } from "@/components/logout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App - Dashboard",
};

export default async function page() {
  const hasToken = cookies().get("token")!;
  const user = await checkMe(hasToken);

  return (
    <div className="flex flex-col">
      <h1>Welcome to Dashboard</h1>
      <div className="flex gap-3">
        <p>
          Hi!,
          <Suspense fallback={<p>Loading..</p>}>
          {user?.firstName + " " + user?.lastName}
          </Suspense>
        </p>
        <Logout/>
      </div>
    </div>
  );
}
