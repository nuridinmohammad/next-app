"use client";

import { loginAction } from "@/actions/auth/loginAction";
import React, { useRef } from "react";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("./button").then((mod) => mod.Button));

export function Form() {
  const ref = useRef<HTMLFormElement>(null!);

  return (
    <form
      ref={ref}
      action={async (e) => {
        await loginAction(e);
        ref.current.reset();
        redirect("/dashboard");
      }}
      className="flex gap-2 justify-start items-center mt-2"
    >
      <input type="text" name="username" className=" rounded-full  px-1" />
      <input type="password" name="password" className=" rounded-full px-1" />
      <Button />
    </form>
  );
}
