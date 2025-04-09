import CompleteTodo from "@/components/CompleteTodo";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "FSTodo || FSTodo Complete-Task",
  description: "Efficiently view and manage completed tasks in FSTodo",
});

const page = () => {
  return (
    <>
      <CompleteTodo />
    </>
  );
};

export default page;
