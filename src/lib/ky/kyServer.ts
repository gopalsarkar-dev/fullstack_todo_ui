import { env } from "@/env/server";
import ky from "ky";

const kyServer = ky.create({
  prefixUrl: env.DATABASE_API_URL,
  credentials: "include",
  mode: "cors",
});

export default kyServer;
