"use client";

import { profileSchema } from "@/lib/fromSchema";
import { ProfilePropsType } from "@/lib/type";
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

const ProfileFrom = () => {
  const pFrom = useForm<ProfilePropsType>({
    resolver: zodResolver(profileSchema),
    defaultValues: { first_name: "", email: "", last_name: "" },
    mode: "all",
  });

  const handelLoginFn = (pinfo: ProfilePropsType) => {
    console.log(pinfo);
    pFrom.reset();
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
