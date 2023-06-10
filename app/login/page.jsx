"use client";
import LoginPage from "./LoginForm";

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 px-6 py-8 mx-auto my-12 bg-white rounded-md lg:w-10/12">
      <h1 className="text-3xl font-semibold text-center text-black">
        Iniciar sesión
      </h1>
      <LoginPage />
    </section>
  );
};

export default Login;
