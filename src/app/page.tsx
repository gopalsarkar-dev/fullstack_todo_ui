import AddTodoDrawer from "@/components/AddTodoDrawer";
import TodoDisplay from "@/components/TodoDisplay";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "FSTodo || FSTodo List-All",
  description: "View List-All FSTodo and manage our task efficiently",
});

const page = () => {
  return (
    <>
      <TodoDisplay />
      <AddTodoDrawer />
    </>
  );
};

export default page;
