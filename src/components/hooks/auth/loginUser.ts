import kyClient from "@/lib/ky/kyClient";
import { Data, DirectusResponse, LoginPropsType } from "@/lib/type";
import { HTTPError } from "ky";

const loginUser = async (linfo: LoginPropsType) => {
  //   console.log(linfo);

  try {
    const { data } = await kyClient
      .get(`users`, {
        next: { tags: ["loginUser"] },
        searchParams: {
          filter: JSON.stringify({
            email: {
              _eq: linfo.email,
            },
          }),
        },
      })
      .json<DirectusResponse<Data[]>>();

    if (data.length !== 0) {
      await kyClient.post(`auth/login`, {
        json: {
          email: linfo.email,
          password: linfo.password,
          mode: "session",
        },
      });

      return {
        success: true,
        message: "User Login Successfully",
      };
    } else {
      return {
        success: false,
        message: `User ${linfo.email} Does not Exits`,
      };
    }
  } catch (error) {
    if (error instanceof HTTPError) {
      const resError = await error.response.json<{
        error: { message: string }[];
      }>();

      if (error.response.status === 400 || error.response.status === 401) {
        return {
          success: true,
          message: "Invalid password. Please check your credentials.",
        };
      }
      return {
        success: false,
        message: resError.error[0].message || "Something went wrong",
      };
    } else {
      return {
        success: false,
        message: "Network Error. Please check your connection.",
      };
    }
  }
};

export default loginUser;
