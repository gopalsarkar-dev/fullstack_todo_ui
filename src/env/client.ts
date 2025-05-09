import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_DATABASE_API_URL: z.string().url(),

    NEXT_PUBLIC_SECRET_KEY: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_DATABASE_API_URL: process.env.NEXT_PUBLIC_DATABASE_API_URL,

    NEXT_PUBLIC_SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY,
  },
  emptyStringAsUndefined: true,
});
