import Link from "next/link";

const ItemsBlog = ({ blog }) => {
  return (
    <Link
      href={`/post/${blog["author"]}/${blog["_id"]}`}
      as={`/post/${blog["author"]}/${blog["_id"]}`}
      className="flex flex-col items-start justify-between w-full gap-4 p-4 transition bg-white border-t cursor-pointer border-t-gray-100 md:w-full hover:drop-shadow-md"
    >
      <div>
        <h2 className="text-lg font-semibold text-blue-500">{blog?.title}</h2>
        <h3 className="text-gray-500">{blog?.subtitle}</h3>
      </div>
      <div className="flex items-center gap-2">
        <p className="px-2 py-1 rounded-md bg-fuchsia-200 text-fuchsia-800">
          {blog?.author}
        </p>
        <span className="text-sm text-gray-500"> - {blog?.createdAt}</span>
      </div>
    </Link>
  );
};

export default ItemsBlog;
