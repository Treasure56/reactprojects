"use client";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function Button() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex justify-center items-center mx-auto p-4 ">
      <button
        className="bg-primary rounded-md mt-56 p-4 text-white"
        onClick={() => setOpen(true)}
      >
        Open modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)}></Modal>
    </div>
  );
}
