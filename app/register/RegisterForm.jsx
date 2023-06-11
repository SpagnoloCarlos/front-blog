"use client";
import { loginUser, registerUser } from "../../services/app.services";
import { Form, Formik } from "formik";
import { useAuth } from "@/store/auth";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  return (
    <Formik
      initialValues={{ username: "", password: "", email: "" }}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={async ({ username, password, email }) => {
        const response = await registerUser({ username, password, email });
        const { data } = response;
        if (data.status === 0) {
          const response = await loginUser({ username, password });
          const { data } = response;
          if (data.status === 0) {
            login({ data: data.data, token: data.token });
            router.push("/");
          }
        } else {
          console.log(data.msg);
        }
      }}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="password">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="p-2 border-gray-400 border-[1px] outline-transparent rounded-md focus:outline-gray-400 focus:border-gray-400 focus-visible:outline-gray-400 focus-visible:border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="p-2 border-gray-400 border-[1px] outline-transparent rounded-md focus:outline-gray-400 focus:border-gray-400 focus-visible:outline-gray-400 focus-visible:border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              className="p-2 border-gray-400 border-[1px] outline-transparent rounded-md focus:outline-gray-400 focus:border-gray-400 focus-visible:outline-gray-400 focus-visible:border-gray-400"
            />
          </div>
          <button
            type="submit"
            className="self-center px-4 py-2 mt-4 text-white transition-all bg-blue-500 rounded-md drop-shadow-md w-max hover:bg-blue-600"
          >
            Ingresar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
