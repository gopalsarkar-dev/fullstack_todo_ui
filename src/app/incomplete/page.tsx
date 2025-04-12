import InCompleteTodo from "@/components/InCompleteTodo";
import SkeletonInfo from "@/components/skeleton/SkeletonInfo";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = (): Metadata => ({
  title: "FSTodo || FSTodo InComplete-Task",
  description: "Efficiently view and manage completed tasks in FSTodo",
});

const page = () => {
  return (
    <>
      <Suspense fallback={<SkeletonInfo />}>
        <InCompleteTodo />
      </Suspense>
    </>
  );
};

export default page;
