"use server";

import { trpcAction } from "@/lib/server/typed-action";
import { trpc } from "./trpc-server";

export async function email() {
  return trpcAction(() => trpc.router.send());
}
