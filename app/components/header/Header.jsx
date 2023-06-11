"use client";
import { useAuth } from "@/store/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserHeader from "./UserHeader";

const Header = () => {
  const { status, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleLogout = () => {
    logout();
    setCollapsed(false);
    router.push("/");
  };

  return (
    <header className="bg-gray-900 sticky top-0 z-[5]">
      {domLoaded && (
        <nav className="max-w-6xl px-[56px] py-4 mx-auto">
          <ul className="flex flex-row items-center justify-between gap-4 text-cyan-50">
            <li>
              <div className="flex flex-row gap-6">
                <Link href={"/"}>Inicio</Link>
                {status.state === "logged" && (
                  <Link href={"/new-post"}>Crear Post</Link>
                )}
              </div>
            </li>
            <UserHeader />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
