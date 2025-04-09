import InCompleteTodo from "@/components/InCompleteTodo";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "FSTodo || FSTodo InComplete-Task",
  description: "Efficiently view and manage completed tasks in FSTodo",
});

const page = () => {
  return (
    <>
      <InCompleteTodo />
    </>
  );
};

export default page;
