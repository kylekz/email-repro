import { AppRouter } from "@/lib/server/routers";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({});
