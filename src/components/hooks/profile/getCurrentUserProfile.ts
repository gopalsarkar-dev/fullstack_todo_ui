import kyServer from "@/lib/ky/kyServer";
import { DirectusResponse, UserProfileType } from "@/lib/type";
import { HTTPError } from "ky";
import { cookies } from "next/headers";

const getCurrentUserProfile = async () => {
  try {
    const token = (await cookies()).get("directus_session_token")
      ?.value as string;
    // console.log(token);

    const { data } = await kyServer
      .get(`users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: { tags: ["getCurrentUserProfile"] },
        searchParams: {
          fields: "id,first_name,last_name,email",
        },
      })
      .json<DirectusResponse<UserProfileType>>();
    // console.log(currInfo);

    return {
      data: data,
      error: null,
      isError: false,
    };
  } catch (error) {
    if (error instanceof HTTPError) {
      const resError = await error.response.json<{
        error: { message: string }[];
      }>();
      return {
        error: resError.error[0].message,
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

export default getCurrentUserProfile;
