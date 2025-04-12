import AddTodoDrawer from "@/components/AddTodoDrawer";
import SkeletonInfo from "@/components/skeleton/SkeletonInfo";
import TodoDisplay from "@/components/TodoDisplay";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = (): Metadata => ({
  title: "FSTodo || FSTodo List-All",
  description: "View List-All FSTodo and manage our task efficiently",
});

const page = () => {
  return (
    <>
      <Suspense fallback={<SkeletonInfo />}>
        <TodoDisplay />
      </Suspense>
      <AddTodoDrawer />
    </>
  );
};

export default page;
