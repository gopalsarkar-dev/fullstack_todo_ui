import kyClient from "@/lib/ky/kyClient";
import { Data, DirectusResponse, RegisterPropsType } from "@/lib/type";
import { HTTPError } from "ky";

const signupUser = async (rinfo: RegisterPropsType) => {
  //   console.log(rinfo);

  try {
    const { data } = await kyClient
      .get(`users`, {
        next: { tags: ["signupUser"] },

        searchParams: {
          filter: JSON.stringify({
            email: {
              _eq: rinfo.email,
            },
          }),
        },
      })
      .json<DirectusResponse<Data[]>>();

    if (data.length === 0) {
      await kyClient.post(`users/register`, { json: rinfo });
      return {
        success: true,
        message: `${rinfo.first_name} SignUp Successfully `,
      };
    } else {
      return {
        success: false,
        message: `Email ${rinfo.email} already Exit`,
      };
    }
    // console.log(req);
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
    // console.log(error);
  }
};

export default signupUser;
