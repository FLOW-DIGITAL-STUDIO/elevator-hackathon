import React from "react";
import "./globals.css";
import { Navbar } from "@/components/Navigation/Bar";

export const metadata = {
  title: "Players Manager | Liste",
  description: "View players list",
};

type TRootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout(props: TRootLayoutProps) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
