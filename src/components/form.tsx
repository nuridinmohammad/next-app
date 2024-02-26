"use client"
import { addProduct } from "@/actions/addProduct"
import React, { useRef } from "react"
import Button from "./button"

export default function Form() {
  const refForm = useRef<HTMLFormElement>(null!)

  return (
    <form
      ref={refForm}
      action={async (formData: FormData) => {
        const response = await addProduct(formData)
        if (!response) {
          alert("Error!")
        }
        refForm.current.reset()
      }}
    >
      <input type="text" name="title" required aria-disabled={"false"} />
      <input type="text" name="description" required aria-disabled={"false"} />
      <input type="text" name="price" required aria-disabled={"false"} />
      <input type="text" name="category" required aria-disabled={"false"} />

      <Button />
    </form>
  )
}
