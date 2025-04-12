"use client";
import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

const ReactToastify = () => {
  const { theme } = useTheme();

  return (
    <>
      <ToastContainer
        autoClose={500}
        theme={theme === "light" ? "light" : "dark"}
      />
    </>
  );
};

export default ReactToastify;
