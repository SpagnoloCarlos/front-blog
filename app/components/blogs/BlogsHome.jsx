import ItemsBlog from "./ItemsBlog";
import { getAccessToken, getAllBlogs } from "../../../services/app.services";

const BlogsHome = async () => {
  const access = await getAccessToken();
  const {
    data: { token },
  } = access;

  const response = await getAllBlogs(token);
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
