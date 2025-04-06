import kyClient from "@/lib/ky/kyClient";
import { HTTPError } from "ky";

const logoutUser = async () => {
  try {
    await kyClient.post(`auth/logout`, {
      next: { tags: ["logoutUser"] },
      json: {
        refresh_token: "",
        mode: "session",
      },
    });

    return {
      success: true,
      message: "User Logout Successfully",
    };
  } catch (error) {
    if (error instanceof HTTPError) {
      const resError = await error.response.json<{
        errors: { message: string }[];
      }>();

      if (error.response.status === 400 || error.response.status === 401) {
        return {
          success: true,
          message: resError.errors[0].message,
        };
      } else {
        return {
          success: false,
          message: "Something went wrong",
        };
      }
    } else {
      return {
        success: false,
        message: "Network Error. Please check your connection.",
      };
    }
  }
};

export default logoutUser;
