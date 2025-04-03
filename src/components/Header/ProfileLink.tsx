import Link from "next/link";

const ProfileLink = () => {
  return (
    <>
      <Link href="/profile" className="underline">
        Hellow, <span>Gopal</span>
      </Link>
    </>
  );
};

export default ProfileLink;
