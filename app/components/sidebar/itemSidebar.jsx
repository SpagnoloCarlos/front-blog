import Link from "next/link";

const ItemSidebar = ({ blog, index }) => {
  return (
    <div className="flex items-center gap-4 py-2">
      <span>{index}</span>
      <Link
        href={`/post/${blog["author"]}/${blog["_id"]}`}
        as={`/post/${blog["author"]}/${blog["_id"]}`}
        prefetch={false}
        className="overflow-hidden text-fuchsia-900 text-ellipsis whitespace-nowrap"
      >
        {blog?.["title"]}
      </Link>
    </div>
  );
};

export default ItemSidebar;
