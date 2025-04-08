import kyClient from "@/lib/ky/kyClient";
import kyServer from "@/lib/ky/kyServer";
import { DirectusResponse, TodoType } from "@/lib/type";
import { HTTPError } from "ky";
import { cookies } from "next/headers";

const completeTodo = async () => {
  try {
    const token = (await cookies()).get("directus_session_token")
      ?.value as string;

    const { data } = await kyServer
      .get(`items/todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: { tags: ["completeTodo"] },
        searchParams: {
          filter: JSON.stringify({
            complete: {
              _eq: true,
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
        isError: true,
        data: null,
        error: "Network Error. Please check your connection.",
      };
    }
  }
};

export default completeTodo;
