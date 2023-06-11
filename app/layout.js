// "use client";
import Header from "./components/header/Header";
// import Sidebar from "./components/sidebar/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogs",
  description: "Blog's project frontend and backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col w-full gap-6 px-4 mx-auto lg:w-10/12 md:flex-row">
          {children}
        </main>
      </body>
    </html>
  );
}
