"use client";

import { profileSchema } from "@/lib/fromSchema";
import { ProfilePropsType, UserProfileType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import profileUpdata from "../hooks/profile/profileUpdata";
import { toast } from "react-toastify";

type ProfileProviderProps = {
  pInfo: UserProfileType | null;
};

const ProfileFrom = ({ pInfo }: ProfileProviderProps) => {
  const pFrom = useForm<ProfilePropsType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      first_name: pInfo?.first_name || "",
      email: pInfo?.email || "",
      last_name: pInfo?.last_name || "",
    },
    mode: "all",
  });

  const handelLoginFn = async (pinfo: ProfilePropsType) => {
    // console.log(pinfo);

    const { message, success } = await profileUpdata(pinfo);

    if (!success) {
      toast.error(message);
    }

    if (success) {
      toast.success(message);
      pFrom.reset();
    }
  };

  return (
    <>
      <Form {...pFrom}>
        <form onSubmit={pFrom.handleSubmit(handelLoginFn)}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Update Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={pFrom.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your first_nane" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={pFrom.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your last_name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={pFrom.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full font-bold"
                type="submit"
                disabled={
                  pFrom.formState.isSubmitted || !pFrom.formState.isValid
                }
              >
                Update
              </Button>
            </CardContent>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default ProfileFrom;
