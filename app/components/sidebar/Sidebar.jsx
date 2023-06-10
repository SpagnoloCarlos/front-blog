import { getAllBlogsHighlights } from "@/services/app.services";
import ItemSidebar from "./itemSidebar";

const Sidebar = async () => {
  const response = await getAllBlogsHighlights();
  const {
    data: { data: blogs },
  } = response;
  return (
    <aside className="flex flex-col w-full gap-4 p-4 bg-white rounded-lg md:mt-8 md:w-4/12 drop-shadow-sm h-min">
      <h2 className="text-xl font-semibold text-center text-black">
        Destacados
      </h2>
      <div>
        {blogs.length > 0 &&
          blogs.map((item, index) => (
            <ItemSidebar
              key={`sidebar_${item["id"]}`}
              blog={item}
              index={index + 1}
            />
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;
