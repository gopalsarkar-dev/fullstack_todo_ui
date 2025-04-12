import LoginFrom from "@/components/from/LoginFrom";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Login || FS Todo",
  description: "",
});

const page = () => {
  return (
    <>
      <section className="grid h-[90dvh] place-content-center">
        <LoginFrom />
      </section>
    </>
  );
};

export default page;
