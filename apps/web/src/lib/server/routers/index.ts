import { inferRouterInputs } from "@trpc/server";
import { router } from "../trpc";
import { emailRouter } from "./email";

export const appRouter = router({
  router: emailRouter,
});

export type AppRouter = typeof appRouter;
export type RouterInputs = inferRouterInputs<AppRouter>;
