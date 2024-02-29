"use client";

import { destroyProduct } from "@/hooks";
import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormStatus } from "react-dom";

export function ButtonDelete({ id }: { id: string }) {
  const { pending } = useFormStatus();
  const router = useRouter();
  return (
    <form
    //   action={async (e) => {
    //     await destroyProduct(id);
    //     router.back();
    //   }}
    >
      <button
        type="submit"
        disabled={pending}
        formAction={async (e) => {
          await destroyProduct(id);
          router.back();
        }}
      >
        {pending ? "loading.." : "yes"}
      </button>
    </form>
  );
}
