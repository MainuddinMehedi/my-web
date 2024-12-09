import { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { GlobalContext } from "../context/context";

const Blogs = () => {
  const { blogs, loading } = useContext(GlobalContext);

  console.log(blogs)

  if (loading) return <h1>It is loading... wait!!</h1>;

  return (
    <div className="space-y-9">
      {blogs && blogs?.length > 0 ? (
        blogs.map((eachBlogs) => (
          <BlogCard eachBlogs={eachBlogs} loading={loading} key={eachBlogs.id} />
        ))
      ) : (
        <h2 className="text-2xl">no products found</h2>
      )}
    </div>
  );
};

export default Blogs;
