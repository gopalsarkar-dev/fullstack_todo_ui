import ProfileFrom from "@/components/from/ProfileFrom";
import getCurrentUserProfile from "@/components/hooks/profile/getCurrentUserProfile";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const { data, error, isError } = await getCurrentUserProfile();

  if (isError) {
    console.log(error);
  }

  return {
    title: `FSTodo || ${data?.first_name} `,
    description: "View your personal profile information",
  };
};

const page = async () => {
  const { data, error, isError } = await getCurrentUserProfile();
  data?.first_name;
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
