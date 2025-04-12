"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps } from "react";
import ReactToastify from "../ReactToastify";

type ThemeProviderType = ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...props }: ThemeProviderType) => {
  return (
    <NextThemesProvider {...props}>
      {children}

      <ReactToastify />
    </NextThemesProvider>
  );
};

export default ThemeProvider;
