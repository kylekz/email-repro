"use client";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";
import { trpc } from "./trpc-client";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  const [queryClient] = useState(
    new QueryClient({
      queryCache: new QueryCache(),
    })
  );

  const [trpcClient] = useState(
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
          transformer: superjson,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
