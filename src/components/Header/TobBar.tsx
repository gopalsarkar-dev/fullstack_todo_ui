import Link from "next/link";
import ToggleIcon from "./ToggleIcon";
import ProfileLink from "./ProfileLink";
import LogoutButton from "../logout/LogoutButton";

const TobBar = () => {
  return (
    <>
      <section className="border-foreground/15 fixed top-0 w-full border">
        <nav className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold">
            FSTodo
          </Link>
          <div className="flex items-center gap-4">
            <LogoutButton>
              <ProfileLink />
            </LogoutButton>
            <ToggleIcon />
          </div>
        </nav>
      </section>
    </>
  );
};

export default TobBar;
