import PostCard from "@/app/(website)/_components/cards/PostCard";
import { serviceGetBlogs } from "_data/blog/blogServices";
import {
  serviceGetTagBySlug,
  serviceGetTaggeds,
} from "_data/blog/tags/tags.services";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tag = await serviceGetTagBySlug(slug);
  let taggeds = await serviceGetTaggeds();
  taggeds = taggeds.filter((tagged) => tagged.tagId === tag.id);
  const blogIds = new Set(taggeds.map((tagged) => tagged.blogId));
  const blogs = await serviceGetBlogs();
  const filteredBlogs = blogs.filter((blog) => blogIds.has(blog.id));

  return (
    <div className="">
      <h1 className="w-full h-[100px] flex items-center text-2xl">
        لیست بلاگ های مربوط به {slug}
      </h1>
      <div className="flex flex-col my-2">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <PostCard
              title={blog.title}
              author={blog.author}
              created_at={blog.created_at}
              image={blog.image}
              content={blog.content}
              key={`blog-${blog.id}-${index}`}
            />
          ))
        ) : (
          <div>پستی با این تگ وجود ندارد</div>
        )}
      </div>
    </div>
  );
}
