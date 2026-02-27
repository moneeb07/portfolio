import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--ff-poppins",
});

export const metadata: Metadata = {
  title: "vCard - Personal Portfolio",
  description: "Personal portfolio website built with Next.js",
  icons: {
    icon: "/images/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <Sidebar />

          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
