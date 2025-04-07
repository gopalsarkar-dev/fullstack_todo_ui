import kyClient from "@/lib/ky/kyClient";
import { AddTodoDrawerPropsType } from "@/lib/type";
import { HTTPError } from "ky";

const createTodo = async (adInfo: AddTodoDrawerPropsType) => {
  //   console.log(adInfo);

  try {
    await kyClient
      .post(`items/todos`, { next: { tags: ["createTodo"] }, json: adInfo })
      .json();

    return {
      success: true,
      message: "Create Todo Successfully",
    };
  } catch (error) {
    if (error instanceof HTTPError) {
      const resError = await error.response.json<{
        error: { message: string }[];
      }>();
      return {
        success: false,
        message: resError.error[0].message,
      };
    } else {
      return {
        success: false,
        message: "Network Error. Please check your connection.",
      };
    }
  }
};

export default createTodo;
