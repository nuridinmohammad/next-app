"use client";
import { ButtonDelete } from "@/components/button-delete";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function DeletePage() {
  const router = useRouter();
  const params = useParams();
  return (
    <div className="absolute z-50 w-full min-h-screen bg-opacity-[0.2] bg-slate-400">
      <div className="bg-red-300 absolute z-50 top-1/3 left-1/3 w-[400px] h-[300px]">
        <div className="flex justify-between items-center p-5">
          <div>Delete Product</div>
          <button className="p-5" onClick={() => router.back()}>
            X
          </button>
        </div>
        <div>
          <h1>Are you sure delete this product?</h1>
          <div className="flex gap-3">
            <button onClick={() => router.back()}>cancel</button>
            <ButtonDelete id={params.id as string} />
          </div>
        </div>
      </div>
    </div>
  );
}
