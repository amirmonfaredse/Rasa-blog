import { getBlogs } from "@/app/_data/data-services";

export default async function Page() {
  const blogs = await getBlogs();
  return (
    <div>
      {blogs.map((blog) => (
        <h1 key={blog.id}>{blog.title}</h1>
      ))}
    </div>
  );
}
