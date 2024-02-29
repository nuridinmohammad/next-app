"use client";

import { loginAction } from "@/actions/auth/loginAction";
import React, { useRef } from "react";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { useFormState, useFormStatus } from "react-dom";

const Button = dynamic(() => import("./button").then((mod) => mod.Button));

async function increment(previousState: unknown, formData: FormData) {
  return formData.get("username");
}

export function Form() {
  const ref = useRef<HTMLFormElement>(null!);
  const [state, formAction] = useFormState(increment, "");
  console.log(state);

  return (
    <form
      ref={ref}
      // action={async (e) => {
      // await loginAction(e);
      // ref.current.reset();
      // redirect("/dashboard");
      // }}
      action={formAction}
      className="flex gap-2 justify-start items-center mt-2"
    >
      <input type="text" name="username" className=" rounded-full  px-1" />
      <input type="password" name="password" className=" rounded-full px-1" />
      <Button />
      <button>increment</button>
    </form>
  );
}
