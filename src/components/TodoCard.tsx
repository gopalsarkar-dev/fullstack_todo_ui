"use client";

import { TodoType } from "@/lib/type";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { deleteTodoPath, updateCheckTodoPath } from "./action";
import todoDelete from "./hooks/todo/todoDelete";
import updateCheckTodo from "./hooks/todo/updateCheckTodo";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type TodoCardPropsType = {
  tinfo: TodoType;
};

const TodoCard = ({ tinfo }: TodoCardPropsType) => {
  const [load, setLoad] = useState(false);

  const checkTodoFn = async (cT: boolean) => {
    setLoad(true);

    const { message, success } = await updateCheckTodo(tinfo.id, cT);

    if (!success) {
      toast.error(message);
    }

    if (success) {
      toast.success(message);

      await updateCheckTodoPath();
    }

    setLoad(false);
  };

  const deleteTodoFn = async () => {
    setLoad(true);

    const { message, success } = await todoDelete(tinfo.id);

    if (!success) {
      toast.error(message);
    }

    if (success) {
      toast.success(message);

      await deleteTodoPath();
    }

    setLoad(false);
  };

  return (
    <>
      <Card className="shadow">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex w-full items-center gap-3">
            <Checkbox
              className="h-6 w-6 cursor-pointer"
              disabled={load}
              checked={tinfo.complete}
              onCheckedChange={checkTodoFn}
            />
            <Label
              className={`${tinfo.complete ? "line-through decoration-2" : ""} text-lg`}
            >
              {tinfo.todo_task}
            </Label>
          </div>

          <Button
            className="cursor-pointer"
            variant={"destructive"}
            onClick={deleteTodoFn}
            disabled={load}
          >
            <Trash2 /> <span className="hidden sm:block">Delete</span>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TodoCard;
