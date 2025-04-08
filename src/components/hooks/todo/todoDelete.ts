import kyClient from "@/lib/ky/kyClient";
import { HTTPError } from "ky";

const todoDelete = async (dId: string) => {
  try {
    await kyClient
      .delete(`items/todos/${dId}`, { next: { tags: ["todoDelete"] } })
      .json();

    return {
      success: true,
      message: "Todo Deleted Successfully",
    };
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

export default todoDelete;
