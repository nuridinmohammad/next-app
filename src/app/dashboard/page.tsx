import { checkMe } from "@/actions/auth/checkMe";
import { logoutAction } from "@/actions/auth/logoutAction";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import type { Metadata } from "next";

export default async function page() {
  const hasToken = cookies().get("token")!;
  const user = await checkMe(hasToken);

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <p>
        Hi!,
        {/* <Suspense fallback={<Loading />}> */}
        {user?.firstName + " " + user?.lastName}
        {/* </Suspense> */}
      </p>
      <form>
        <button
          formAction={async () => {
            "use server";
            logoutAction();
            redirect("/login");
          }}
          className="bg-red-400 px-2  rounded-full text-white"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
