import { getBlogBy } from "@/services/app.services";

import { Inter, Comic_Neue } from "next/font/google";
import Rating from "./Rating";
import Link from "next/link";

const comic = Comic_Neue({ subsets: ["latin"], weight: "400" });

const Post = async ({ params }) => {
  const { id } = params;
  const response = await getBlogBy(id);
  const {
    data: { data: post },
  } = response;
  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 px-6 py-8 mx-auto my-12 bg-white rounded-md lg:w-10/12">
      {Object.keys(post).length > 0 && (
        <>
          <h1 className="text-3xl font-semibold text-center text-black">
            {post.title}
          </h1>
          <h2 className="w-full text-center text-gray-800">{post.subtitle}</h2>
          <div className="flex flex-row items-center self-start gap-6">
            <Link
              href={`/profile/${post.author}`}
              prefetch={false}
              className="px-2 py-1 rounded-md bg-fuchsia-200 text-fuchsia-800"
            >
              {post.author}
            </Link>
            <h5 className={comic.className}>{post.createdAt} 🕒</h5>
            <div className="mb-1">
              <span
                className={`${
                  post.average >= 1 ? "text-orange-400" : "text-gray-500"
                } text-2xl`}
              >
                ★
              </span>
              <span
                className={`${
                  post.average >= 2 ? "text-orange-400" : "text-gray-500"
                } text-2xl`}
              >
                ★
              </span>
              <span
                className={`${
                  post.average >= 3 ? "text-orange-400" : "text-gray-500"
                } text-2xl`}
              >
                ★
              </span>
              <span
                className={`${
                  post.average >= 4 ? "text-orange-400" : "text-gray-500"
                } text-2xl`}
              >
                ★
              </span>
              <span
                className={`${
                  post.average >= 5 ? "text-orange-400" : "text-gray-500"
                } text-2xl`}
              >
                ★
              </span>
            </div>
          </div>
          <p>
            {post.content.split("\n").map((line) => (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;{line}
                <br />
              </>
            ))}
          </p>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-semibold text-blue-500">
              ¿Qué te pareció el post?
            </h3>
            <Rating blogId={id} initialRating={post.rating} />
          </div>
        </>
      )}
    </section>
  );
};

export default Post;
