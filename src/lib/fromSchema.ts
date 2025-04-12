import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().endsWith(".com", { message: "Only .com allowed" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

export const registerSchema = z.object({
  first_name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." }),
  email: z.string().endsWith(".com", { message: "Only .com allowed" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

export const profileSchema = z.object({
  first_name: z
    .string()
    .min(3, { message: "first_name must be at least 3 characters." }),
  email: z.string().endsWith(".com", { message: "Only .com allowed" }),
  last_name: z
    .string()
    .min(3, { message: "last_name must be 3 or more characters long" }),
});

export const addTodoDrawerSchema = z.object({
  todo_task: z
    .string()
    .min(10, { message: "todo_task must be 10 or more characters long" }),
});
