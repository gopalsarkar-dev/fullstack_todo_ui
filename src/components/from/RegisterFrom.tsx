"use client";

import { registerSchema } from "@/lib/fromSchema";
import { RegisterPropsType } from "@/lib/type";
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
      <Form {...rFrom}>
        <form onSubmit={rFrom.handleSubmit(handelLoginFn)}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Signup From
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
            <CardFooter className="flex items-center justify-center gap-1">
              Already have an account?
              <Link href="/auth/login" className="font-bold hover:underline">
                LogIn
              </Link>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
};

export default RegisterFrom;
