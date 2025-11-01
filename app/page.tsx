"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}));

  return (
    <>
    <input
      className="border-2 border-black"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />

    <button className="bg-red-700" onClick={() => invoke.mutate({ value })}>
      Invoke Jobs
    </button>
    </>
  );
}
