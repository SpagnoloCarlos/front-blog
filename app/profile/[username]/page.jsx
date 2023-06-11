import ItemsBlog from "@/app/components/blogs/ItemsBlog";
import { getBlogsByAuthor } from "@/services/app.services";

const Profile = async ({ params }) => {
  const { username: user } = params;
  const response = await getBlogsByAuthor(user);
  const {
    data: { data: posts },
  } = response;

  return (
    <section className="flex flex-col items-center justify-center w-full gap-8 px-6 py-8 mx-auto my-12 bg-white rounded-md lg:w-10/12">
      <h1 className="text-3xl font-semibold text-center text-black">
        Posts de <span className="text-fuchsia-600">{user}</span>
      </h1>
      <div className="flex flex-col w-full">
        {posts?.length > 0 &&
          posts.map((blog, index) => (
            <ItemsBlog key={`post_${index}`} blog={blog} />
          ))}
      </div>
    </section>
  );
};

export default Profile;
