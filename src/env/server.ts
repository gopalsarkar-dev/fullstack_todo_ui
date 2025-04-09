import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_API_URL: z.string().url({ message: "Invalid url" }),
  },
  experimental__runtimeEnv: process.env,

  emptyStringAsUndefined: true,
});
