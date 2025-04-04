"use client";

import { LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Button } from "../ui/button";

type LogoutPropsProvider = {
  children: ReactNode;
};

const LogoutButton = ({ children }: LogoutPropsProvider) => {
  const pathname = usePathname();
  const { push } = useRouter();

  if (pathname === "/" || pathname === "/profile") {
    return (
      <>
        {children}
        <Button
          variant={"destructive"}
          className="cursor-pointer"
          onClick={() => push("/auth/login")}
        >
          <LogOut /> <span className="hidden sm:block">Loout</span>
        </Button>
      </>
    );
  }
  return <></>;
};

export default LogoutButton;
