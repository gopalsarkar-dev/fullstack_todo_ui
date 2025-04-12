"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const ToggleIcon = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        variant={"outline"}
        size={"icon"}
        className="cursor-pointer"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div className="scale-100 rotate-0 transition-all duration-300 ease-in-out dark:scale-0 dark:-rotate-90">
          <Sun />
        </div>
        <div className="absolute scale-0 rotate-90 transition-all duration-300 ease-in-out dark:scale-100 dark:rotate-0">
          <MoonStar />
        </div>
      </Button>
    </>
  );
};

export default ToggleIcon;
