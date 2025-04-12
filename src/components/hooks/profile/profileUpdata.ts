import kyClient from "@/lib/ky/kyClient";
import { ProfilePropsType } from "@/lib/type";
import { HTTPError } from "ky";

const profileUpdata = async (pinfo: ProfilePropsType) => {
  try {
    await kyClient
      .patch(`users/me`, {
        next: { tags: ["profileUpdata"] },

        json: pinfo,
      })
      .json();

    return {
      success: true,
      message: "Updata Profile Successfully.",
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

export default profileUpdata;
