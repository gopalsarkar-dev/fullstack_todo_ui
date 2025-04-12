"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const homeRedirectPath = async () => {
  revalidateTag("getCurrentUserProfile");
  redirect("/");
};

export const logoutRedirectPath = async () => {
  redirect("/auth/login");
};

export const updateProfilePath = async () => {
  revalidateTag("profileUpdata");
  revalidatePath("/profile");
};

export const updateCheckTodoPath = async () => {
  revalidateTag("updateCheckTodo");
  revalidatePath("/");
};

export const deleteTodoPath = async () => {
  revalidatePath("/");
  revalidateTag("todoDelete");
};
