"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

export default function Home() {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}));

  return (
    <button className="bg-red-700" onClick={() => invoke.mutate({ text: "Hello World" })}>
      Invoke Jobs
    </button>
  );
}
