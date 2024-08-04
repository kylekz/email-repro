"use client";

import { useTransition } from "react";
import { email } from "./actions";

export default function DashboardPage() {
  const [isPending, startTransition] = useTransition();

  async function send() {
    startTransition(async () => {
      await email();
    });
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <button onClick={send}>Send Email</button>
    </div>
  );
}
