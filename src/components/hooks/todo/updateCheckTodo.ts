import kyClient from "@/lib/ky/kyClient";
import { HTTPError } from "ky";

const updateCheckTodo = async (cI: string, cT: boolean) => {
  try {
    await kyClient
      .patch(`items/todos/${cI}`, {
        next: { tags: ["updateCheckTodo"] },
        json: {
          complete: cT,
        },
      })
      .json();

    if (!cT) {
      return {
        success: true,
        message: "Todo UnChecked Successfully",
      };
    } else {
      return {
        success: true,
        message: "Todo Checked Successfully",
      };
    }
  } catch (error) {
    if (error instanceof HTTPError) {
      const resError = await error.response.json<{
        error: { message: string }[];
      }>();

      if (error.response.status === 400 || error.response.status === 401) {
        return {
          success: false,
          message: "Something Went Wrang",
        };
      }

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

export default updateCheckTodo;
