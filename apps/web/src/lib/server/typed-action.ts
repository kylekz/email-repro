import * as z from "zod";
import { getErrorMessage } from "../error";
import { TRPCError } from "@trpc/server";
import { isRedirectError } from "next/dist/client/components/redirect";
import { isNotFoundError } from "next/dist/client/components/not-found";

/**
 * Helper to wrap a TRPC server call into a typed action.
 */
export async function trpcAction<T>(
  cb: () => Promise<T>
): Promise<TypedActionResult<T>> {
  try {
    const result = await cb();

    return {
      status: "success",
      data: result,
    } satisfies ActionResultSuccess<T>;
  } catch (err) {
    console.error(err);
    if (err instanceof TRPCError) {
      if (err.code === "BAD_REQUEST" && err.cause instanceof z.ZodError) {
        const zodErrors = err.cause.flatten();
        return {
          status: "error",
          validationErrors: zodErrors.fieldErrors,
        } satisfies ActionResultError;
      }

      // make sure nextjs app router errors are re-thrown
      if (isRedirectError(err.cause) || isNotFoundError(err.cause)) {
        throw err.cause;
      }

      return {
        status: "error",
        error: err.message,
      } satisfies ActionResultError;
    }

    return {
      status: "error",
      error: getErrorMessage(err),
    };
  }
}

export type ActionResultSuccess<T> = {
  status: "success";
  data: T;
};

export type ActionResultError = {
  status: "error";
  error?: string;
  validationErrors?: Record<string, string[] | undefined>;
};

export type ActionResultIdle = {
  status: "idle";
};

export type TypedActionResult<T> =
  | ActionResultSuccess<T>
  | ActionResultError
  | ActionResultIdle;
