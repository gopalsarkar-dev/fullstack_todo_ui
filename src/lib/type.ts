import { z } from "zod";
import {
  addTodoDrawerSchema,
  loginSchema,
  profileSchema,
  registerSchema,
} from "./fromSchema";

export type LoginPropsType = z.infer<typeof loginSchema>;

export type RegisterPropsType = z.infer<typeof registerSchema>;

export type ProfilePropsType = z.infer<typeof profileSchema>;

export type AddTodoDrawerPropsType = z.infer<typeof addTodoDrawerSchema>;

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

export type TodoType = {
  id: string;
  user_created: string;
  todo_task: string;
  complete: boolean;
};
