import kyClient from "@/lib/ky/kyClient";
import { HTTPError } from "ky";

const logoutUser = async () => {
  //   console.log("LogoutUser");

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
        error: { message: string }[];
      }>();
      return {
        success: false,
        message: resError.error[0].message,
      };
    } else {
      return {
        success: false,
        message: "NetWork Error",
      };
    }
  }
};

export default logoutUser;
