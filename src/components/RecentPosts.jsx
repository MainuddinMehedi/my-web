import { useContext } from "react";
import { GlobalContext } from "../context/context";
import BlogCard from "./BlogCard";

const RecentPosts = () => {
  const { blogs, loading } = useContext(GlobalContext);

  if (loading) return <h1>Loading.. Please wait!!</h1>;

  return (
    <div className="space-y-7">
      <div className="space-y-5">
        <h1 className="text-5xl font-extrabold">Recent Posts</h1>

        <div className="space-y-8">
          {blogs && blogs?.length > 0 ? (
            blogs
              ?.slice(0, 5)
              .map((eachBlog) => (
                <BlogCard eachBlogs={eachBlog} key={eachBlog?.id} />
              ))
          ) : (
            <h2>no products found!!</h2>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="py-1 w-24 bg-[#fff5cfda]"></div>
      </div>
    </div>
  );
};

export default RecentPosts;
