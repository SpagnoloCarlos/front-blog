import Head from "next/head";
import BlogsHome from "./components/blogs/BlogsHome";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <section className="flex flex-col w-full gap-6 p-4 pb-2 my-8 bg-white rounded-lg border-[1px] border-gray-150">
        <h1 className="px-4 text-3xl font-semibold text-black">
          Últimas novedades
        </h1>
        <BlogsHome />
      </section>
      <Sidebar />
    </>
  );
}
