import ProfileFrom from "@/components/from/ProfileFrom";
import getCurrentUserProfile from "@/components/hooks/profile/getCurrentUserProfile";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "User Profile || FS Todo",
  description: "",
});
const page = async () => {
  const { data, error, isError } = await getCurrentUserProfile();

  if (isError) {
    console.log(error);
    return null;
  }
  return (
    <>
      <section className="grid h-[90dvh] place-content-center">
        <ProfileFrom pInfo={data} />
      </section>
    </>
  );
};

export default page;
