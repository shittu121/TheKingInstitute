import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/Navbar";


const sulphurSans = localFont({
  src: "./fonts/SulphurPoint-Regular.otf",
  variable: "--font-sulphur-sans",
  weight: "100 900",
});
const sourceMono = localFont({
  src: "./fonts/SulphurPoint-Regular.otf",
  variable: "--font-source-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "THE KING INSTITUTE",
  description: "Hands-On Programming Courses, Real-World Skills. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sulphurSans.variable} ${sourceMono.variable} antialiased font-[family-name:var(--font-sulphur-sans)] text-center text-[30px]`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
