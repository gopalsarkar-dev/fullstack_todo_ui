import kyServer from "@/lib/ky/kyServer";
import { DirectusResponse, TodoType } from "@/lib/type";
import { HTTPError } from "ky";
import { cookies } from "next/headers";

const getAllUserTodos = async () => {
  try {
    const token = (await cookies()).get("directus_session_token")
      ?.value as string;

    const { data } = await kyServer
      .get(`items/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: { tags: ["getAllUserTodos"] },
        searchParams: {
          filter: JSON.stringify({
            user_created: {
              _eq: "$CURRENT_USER",
            },
          }),
        },
      })
      .json<DirectusResponse<TodoType[]>>();

    return {
      data: data,
      isError: false,
      error: null,
    };
  } catch (error) {
    if (error instanceof HTTPError) {
      const resError = await error.response.json<{
        error: { message: string }[];
      }>();
      return {
        error: resError?.error?.[0]?.message,
        isError: true,
        data: null,
      };
    } else {
      return {
        error: "Network Error. Please check your connection.",
        isError: true,
        data: null,
      };
    }
  }
};

export default getAllUserTodos;
