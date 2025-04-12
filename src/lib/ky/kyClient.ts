import { env } from "@/env/client";
import ky from "ky";

const kyClient = ky.create({
  prefixUrl: env.NEXT_PUBLIC_DATABASE_API_URL,
  credentials: "include",
  mode: "cors",
});

export default kyClient;
