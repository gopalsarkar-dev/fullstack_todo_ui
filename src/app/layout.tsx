import ThemeProvider from "@/components/Header/ThemeProvider";
import TopBar from "../components/Header/TobBar";
import "./globals.css";
type RootLayoutProviderProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProviderProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="mx-auto max-w-7xl px-6 py-4">{children}</main>

          <TopBar />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
