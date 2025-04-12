"use client";

import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import { logoutRedirectPath } from "../action";
import logoutUser from "../hooks/auth/logoutUser";
import { Button } from "../ui/button";

type LogoutPropsProvider = {
  children: ReactNode;
};

const LogoutButton = ({ children }: LogoutPropsProvider) => {
  const pathname = usePathname();

  const logoutFn = async () => {
    const { message, success } = await logoutUser();
    if (!success) {
      toast.error(message);
    }
    if (success) {
      toast.success(message);
      await logoutRedirectPath();
    }
  };

  if (
    pathname === "/" ||
    pathname === "/profile" ||
    pathname === "/complete" ||
    pathname === "/incomplete"
  ) {
    return (
      <>
        {children}
        <Button
          variant={"destructive"}
          className="cursor-pointer"
          onClick={logoutFn}
        >
          <LogOut /> <span className="hidden sm:block">Loout</span>
        </Button>
      </>
    );
  }
  return <></>;
};

export default LogoutButton;
