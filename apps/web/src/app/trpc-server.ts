import { appRouter } from "@/lib/server/routers";
import { createCallerFactory } from "@/lib/server/trpc";

const createCaller = createCallerFactory(appRouter);
export const trpc = createCaller({});
