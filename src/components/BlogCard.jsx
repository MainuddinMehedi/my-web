const BlogCard = ({ eachBlogs }) => {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-4xl font-medium">{eachBlogs?.title}</h2>

        <div className="flex gap-2 ">
          {eachBlogs && eachBlogs?.tags
            ? eachBlogs?.tags.map((tag) => (
                <p className="bg-[#1e2027] rounded-md px-2 py-[2px] text-xs font-bold" key={tag}>
                  #{tag}
                </p>
              ))
            : null}
        </div>
        <div className="flex gap-2">
          <p>userId:{eachBlogs.userId}</p>
          <p>views:{eachBlogs.views}</p>
          <p>id:{eachBlogs.id}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p>{eachBlogs?.body}</p>

        <div className="flex gap-2 text-sm ">
          <p className="text-green-500">Likes:{eachBlogs.reactions.likes}</p>
          <p className="text-green-500">dislikes:{eachBlogs.reactions.dislikes}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
