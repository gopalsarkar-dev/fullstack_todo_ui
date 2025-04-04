"use client";

import { loginSchema } from "@/lib/fromSchema";
import { LoginPropsType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import loginUser from "../hooks/auth/loginUser";
import { toast } from "react-toastify";

const LoginFrom = () => {
  const lFrom = useForm<LoginPropsType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "all",
  });

  const handelLoginFn = async (linfo: LoginPropsType) => {
    const { message, success } = await loginUser(linfo);
    if (!success) {
      toast.error(message);
    }

    if (success) {
      toast.success(message);
      lFrom.reset();
    }
    // console.log(linfo);
  };

  return (
    <>
      <Form {...lFrom}>
        <form onSubmit={lFrom.handleSubmit(handelLoginFn)}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Login From</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
                className="w-full cursor-pointer font-bold"
                type="submit"
                disabled={
                  lFrom.formState.isSubmitted || !lFrom.formState.isValid
                }
              >
                Login
              </Button>
            </CardContent>
            <CardFooter className="flex items-center justify-center gap-1">
              Don't have an account?
              <Link href="/auth/register" className="font-bold hover:underline">
                SignUp
              </Link>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default LoginFrom;
