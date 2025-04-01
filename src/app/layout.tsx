import "./globals.css";

type RootLayoutProviderProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProviderProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
