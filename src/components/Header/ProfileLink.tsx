import Link from "next/link";
import getCurrentUserProfile from "../hooks/profile/getCurrentUserProfile";

const ProfileLink = async () => {
  const { data, error, isError } = await getCurrentUserProfile();

  if (isError) {
    console.log(error);
    return null;
  }

  return (
    <>
      <Link href="/profile" className="underline">
        Hellow, <span>{data?.first_name}</span>
      </Link>
    </>
  );
};

export default ProfileLink;
