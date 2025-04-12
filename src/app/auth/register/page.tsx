import RegisterFrom from "@/components/from/RegisterFrom";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "SignUp || FS Todo",
  description: "",
});

const page = () => {
  return (
    <>
      <section className="grid h-[90dvh] place-content-center">
        <RegisterFrom />
      </section>
    </>
  );
};

export default page;
