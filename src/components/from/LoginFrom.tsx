"use client";

import { loginSchema } from "@/lib/fromSchema";
import { LoginPropsType } from "@/lib/type";
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

const LoginFrom = () => {
  const lFrom = useForm<LoginPropsType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "all",
  });

  const handelLoginFn = (linfo: LoginPropsType) => {
    console.log(linfo);
    lFrom.reset();
  };

  return (
    <>
      <Card className="w-[350px]">
        <Form {...lFrom}>
          <form onSubmit={lFrom.handleSubmit(handelLoginFn)}>
            {/* <CardHeader></CardHeader> */}
            <CardContent className="space-y-4">
              <CardTitle className="text-center text-2xl">Login From</CardTitle>
              <FormField
                control={lFrom.control}
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
                control={lFrom.control}
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
                  lFrom.formState.isSubmitted || !lFrom.formState.isValid
                }
              >
                Login
              </Button>
            </CardContent>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default LoginFrom;
