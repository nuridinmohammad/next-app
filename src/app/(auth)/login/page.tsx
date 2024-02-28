
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { Form } from "@/components/form";

export default async function LoginPage() {
  const hasToken = cookies().get("token");
  if (hasToken?.value) {
    redirect("/dashboard");
  }
  return (
    <div>
      <h1>Login Page</h1>
      <Form />
    </div>
  );
}
