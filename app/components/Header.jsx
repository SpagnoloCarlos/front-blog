"use client";
import { useAuth } from "@/store/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    <header className="bg-gray-900 h-[56px] sticky top-0 z-[5]">
      {domLoaded && (
        <nav className="max-w-6xl px-4 py-4 mx-auto">
          <ul className="flex flex-row justify-between gap-4 text-cyan-50">
            <li>
              <div className="flex flex-row gap-6">
                <Link href={"/"}>Inicio</Link>
                {status.state === "logged" && (
                  <Link href={"/new-post"}>Crear Post</Link>
                )}
              </div>
            </li>
            {status.state === "logged" ? (
              <li className="relative">
                <span
                  className="cursor-pointer"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  Cuenta
                </span>
                {collapsed && (
                  <ul className="absolute right-0 flex flex-col text-black bg-white rounded-sm top-10 w-max drop-shadow-lg">
                    <li className="p-2 transition border-b cursor-pointer hover:bg-gray-100">
                      <Link
                        href={`/account/${status.data["userName"]}`}
                        onClick={() => setCollapsed(false)}
                      >
                        Mi cuenta
                      </Link>
                    </li>
                    <li
                      className="p-2 transition border-b cursor-pointer hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li>
                <Link href={"/login"}>Ingresar</Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
