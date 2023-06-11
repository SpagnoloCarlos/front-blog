import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 px-6 py-8 mx-auto my-12 bg-white rounded-md lg:w-10/12">
      <h1 className="text-3xl font-semibold text-center text-black">
        Registro
      </h1>
      <RegisterForm />
    </section>
  );
};

export default Register;
