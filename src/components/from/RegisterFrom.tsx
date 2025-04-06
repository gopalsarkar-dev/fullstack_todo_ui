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
import signupUser from "../hooks/auth/signupUser";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterFrom = () => {
  const { push } = useRouter();

  const rFrom = useForm<RegisterPropsType>({
    resolver: zodResolver(registerSchema),
    defaultValues: { first_name: "", email: "", password: "" },
    mode: "all",
  });

  const handelLoginFn = async (rinfo: RegisterPropsType) => {
    const { message, success } = await signupUser(rinfo);
    if (!success) {
      toast.error(message);
    }
    if (success) {
      toast.success(message);
      rFrom.reset();
      push("/auth/login");
    }

    // console.log(rinfo);
  };

  return (
    <>
      <Form {...rFrom}>
        <form onSubmit={rFrom.handleSubmit(handelLoginFn)}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                SignUp From
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={rFrom.control}
                name="first_name"
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
                className="w-full cursor-pointer font-bold"
                type="submit"
                disabled={
                  rFrom.formState.isSubmitting || !rFrom.formState.isValid
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
