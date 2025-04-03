"use client";

import { registerSchema } from "@/lib/fromSchema";
import { RegisterPropsType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const RegisterFrom = () => {
  const rFrom = useForm<RegisterPropsType>({
    resolver: zodResolver(registerSchema),
    defaultValues: { username: "", email: "", password: "" },
    mode: "all",
  });

  const handelLoginFn = (rinfo: RegisterPropsType) => {
    console.log(rinfo);
    rFrom.reset();
  };

  return (
    <>
      <Card className="w-[350px]">
        <Form {...rFrom}>
          <form onSubmit={rFrom.handleSubmit(handelLoginFn)}>
            {/* <CardHeader></CardHeader> */}
            <CardContent className="space-y-4">
              <CardTitle className="text-center text-2xl">
                Signup From
              </CardTitle>
              <FormField
                control={rFrom.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={rFrom.control}
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
              <FormField
                control={rFrom.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full font-bold"
                type="submit"
                disabled={
                  rFrom.formState.isSubmitted || !rFrom.formState.isValid
                }
              >
                SignUp
              </Button>
            </CardContent>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default RegisterFrom;
