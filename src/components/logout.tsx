"use client";

import { logoutAction } from "@/actions/auth/logoutAction";
import React from "react";
import { useFormStatus } from "react-dom";

export function Logout() {
  const { pending } = useFormStatus();
  return (
    <form action={logoutAction}>
      <button
        disabled={pending}
        className="bg-red-400 px-2  rounded-full text-white"
      >
        {pending ? "Loading.." : "Logout"}
      </button>
    </form>
  );
}
