import "./globals.css";
import type { Metadata } from "next";
import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <KumaRegistry>
          <Navbar />
          {children}
          <Footer />
        </KumaRegistry>
      </body>
    </html>
  );
}
