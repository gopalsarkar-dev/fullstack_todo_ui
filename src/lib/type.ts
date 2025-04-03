import { z } from "zod";
import { loginSchema, profileSchema, registerSchema } from "./fromSchema";

export type LoginPropsType = z.infer<typeof loginSchema>;

export type RegisterPropsType = z.infer<typeof registerSchema>;

export type ProfilePropsType = z.infer<typeof profileSchema>;
