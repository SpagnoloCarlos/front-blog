import { useAuth } from "@/store/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserHeader = () => {
  const { status, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setCollapsed(false);
    router.push("/");
  };

  return (
    <li className="relative">
      <div
        className="flex items-center justify-center w-[32px] aspect-square bg-white rounded-full cursor-pointer hover:bg-gray-200 transition"
        onClick={() => setCollapsed(!collapsed)}
      >
        <img src="/assets/images/icons/user.png" alt="Usuario" />
      </div>
      {collapsed && (
        <ul className="absolute left-[50%] translate-x-[-50%] flex flex-col text-black bg-white rounded-sm top-[3rem] w-max drop-shadow-lg">
          {status.state === "logged" ? (
            <>
              <li className="p-2 transition border-b cursor-pointer hover:bg-gray-100">
                <Link
                  href={`/account/${status.data["username"]}`}
                  onClick={() => setCollapsed(false)}
                  prefetch={false}
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
            </>
          ) : (
            <>
              <li className="p-2 transition border-b cursor-pointer hover:bg-gray-100">
                <Link
                  href={`/login`}
                  prefetch={false}
                  onClick={() => setCollapsed(false)}
                >
                  Iniciar sesión
                </Link>
              </li>
              <li className="p-2 transition border-b cursor-pointer hover:bg-gray-100">
                <Link
                  href={`/register`}
                  prefetch={false}
                  onClick={() => setCollapsed(false)}
                >
                  Registrarme
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </li>
  );
};

export default UserHeader;
