// "use client";
import ItemsBlog from "./ItemsBlog";
import { getAllBlogs } from "../../../services/app.services";

const BlogsHome = async () => {
  const response = await getAllBlogs();
  const {
    data: { data: blogs },
  } = response;

  return (
    <div className="flex flex-col w-full">
      {blogs.length > 0 &&
        blogs.map((item) => <ItemsBlog key={item["_id"]} blog={item} />)}
    </div>
  );
};

export default BlogsHome;
