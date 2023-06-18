import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elsayed | Blog",
  description: `Created by Elsayed Rapaa Developer
    Next.js & 
    React.js & 
    Tailwind CSS &
    Gray Matter & 
    Remark & 
    Remark HTML
    `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className}
          min-h-screen
          bg-neutral-900
        `}
      >
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
