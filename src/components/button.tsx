"use client"

import React from "react";
import { useFormStatus } from "react-dom";

export function Button() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="ml-2 bg-blue-400 px-2  rounded-full text-white">
      {pending ? "Loading.." : "Login"}
    </button>
  );
}
