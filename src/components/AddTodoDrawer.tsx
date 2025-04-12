"use client";

import { addTodoDrawerSchema } from "@/lib/fromSchema";
import { AddTodoDrawerPropsType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { SquarePlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { updateCheckTodoPath } from "./action";
import createTodo from "./hooks/todo/createTodo";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const AddTodoDrawer = () => {
  const adFrom = useForm<AddTodoDrawerPropsType>({
    resolver: zodResolver(addTodoDrawerSchema),
    defaultValues: { todo_task: "" },
    mode: "all",
  });

  const handelAddTodoFn = async (adInfo: AddTodoDrawerPropsType) => {
    const { message, success } = await createTodo(adInfo);

    if (!success) {
      toast.error(message);
    }
    if (success) {
      toast.success(message);
      adFrom.reset();
      await updateCheckTodoPath();
    }
  };

  return (
    <>
      <Drawer>
        <DrawerTrigger
          className={`${buttonVariants({ variant: "default" })} fixed right-14 bottom-14 cursor-pointer`}
        >
          <SquarePlus />
          <span className="hidden sm:block">Add Todo</span>
        </DrawerTrigger>
        <DrawerContent className="grid place-items-center">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">
              Add To Your Todo-Task
            </DrawerTitle>
            <DrawerDescription className="hidden" />
          </DrawerHeader>
          <Form {...adFrom}>
            <form
              onSubmit={adFrom.handleSubmit(handelAddTodoFn)}
              className="pb-5"
            >
              <Card className="w-[350px]">
                <CardContent className="space-y-4">
                  <FormField
                    control={adFrom.control}
                    name="todo_task"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your todo task..."
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DrawerClose asChild>
                    <Button
                      className="w-full cursor-pointer font-bold"
                      type="submit"
                      disabled={
                        adFrom.formState.isSubmitting ||
                        !adFrom.formState.isValid
                      }
                    >
                      Add Todo
                    </Button>
                  </DrawerClose>
                </CardContent>
              </Card>
            </form>
          </Form>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddTodoDrawer;
