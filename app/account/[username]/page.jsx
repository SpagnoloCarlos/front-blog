"use client";

import { deleteBlogById, getBlogsByAuthor } from "@/services/app.services";
import { useAuth } from "@/store/auth";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Account = () => {
  const [blogs, setBlogs] = useState([]);
  const { status } = useAuth();

  const getBlogs = useCallback(async () => {
    const response = await getBlogsByAuthor(status.data["username"]);
    const {
      data: { data },
    } = response;
    setBlogs(data);
  }, [blogs]);

  useEffect(() => {
    getBlogs();
  }, []);

  const handleDelete = async (id) => {
    const response = await deleteBlogById(id);
    const { data } = response;
    if (data.status === 0) {
      getBlogs();
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 px-6 py-8 mx-auto my-12 bg-white rounded-md lg:w-10/12">
      <h1 className="text-3xl font-semibold text-center text-black">
        Mi cuenta
      </h1>
      <h2 className="self-start text-lg">Datos personales:</h2>
      <div className="flex flex-col w-full gap-4 p-4 rounded-md shadow-lg bg-slate-100">
        <p className="font-semibold">
          Usuario:{" "}
          <span className="font-normal">{status.data["username"]}</span>
        </p>
        <p className="font-semibold">
          E-mail: <span className="font-normal">{status.data["email"]}</span>
        </p>
      </div>
      <h2 className="self-start text-lg">Mis blogs:</h2>
      <div className="flex flex-col w-full gap-4 p-4 rounded-md shadow-lg bg-slate-100">
        {blogs?.length > 0 &&
          blogs.map(({ _id, title, author }) => (
            <div
              key={_id}
              className="flex flex-row justify-between w-full gap-4 rounded-md bg-slate-100"
            >
              <Link
                href={`/post/${author}/${_id}`}
                prefetch={false}
                className="text-black transition hover:text-blue-800"
              >
                {title}
              </Link>
              <p
                className="text-red-600 cursor-pointer"
                onClick={() => handleDelete(_id)}
              >
                Eliminar
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Account;
