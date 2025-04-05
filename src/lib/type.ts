import { z } from "zod";
import { loginSchema, profileSchema, registerSchema } from "./fromSchema";

export type LoginPropsType = z.infer<typeof loginSchema>;

export type RegisterPropsType = z.infer<typeof registerSchema>;

export type ProfilePropsType = z.infer<typeof profileSchema>;

export type DirectusResponse<D> = {
  data: D;
};

export type Data = {
  data: string;
};

export type UserProfileType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
};
