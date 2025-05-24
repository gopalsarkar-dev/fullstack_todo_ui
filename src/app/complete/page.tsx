import CompleteTodo from "@/components/CompleteTodo";
import SkeletonInfo from "@/components/skeleton/SkeletonInfo";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = (): Metadata => ({
  title: "FSTodo || FSTodo Complete-Task",
  description: "Efficiently view and manage completed tasks in FSTodo",
});

const page = () => {
  return (
    <>
      <Suspense fallback={<SkeletonInfo />}>
        <CompleteTodo />
      </Suspense>
    </>
  );
};

export default page;
