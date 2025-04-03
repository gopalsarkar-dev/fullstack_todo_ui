import ProfileFrom from "@/components/from/ProfileFrom";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "User Profile || FS Todo",
  description: "",
});
const page = () => {
  return (
    <>
      <section className="grid h-[90dvh] place-content-center">
        <ProfileFrom />
      </section>
    </>
  );
};

export default page;
