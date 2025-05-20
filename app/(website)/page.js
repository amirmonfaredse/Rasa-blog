import { serviceGetBlogs } from "../_data/blog/blogServices";
import MainSlider from "./_components/MainSlider";
import PostCard from "./_components/cards/PostCard";

function Devider({ title, className }) {
  return (
    <div className={`${className} `}>
      <h1 className="min-w-fit h-16 flex justify-start text-2xl">{title}</h1>
      <div className="w-full h-8 flex items-end border-t-2 border-red-700 "></div>
    </div>
  );
}
function HashTag({ children, className }) {
  return (
    <li className="p-2 cursor-pointer">
      <div
        className={`flex justify-center shadow-md p-1.5 px-2  items-center gap-1 rounded-full text-ghost-100 text-xs ${className}`}
      >
        <span className=" text-ghost-100">#</span>
        <p>{children}</p>
      </div>
    </li>
  );
}

export function TagsContainer({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}
export function SliderContainer({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}
export function PostContainer({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}

export default async function Page() {
  const blogs = await serviceGetBlogs();

  return (
    <div className="flex flex-col justify-start items-center ">
      {/* <TagsContainer className="w-full h-fit sm:h-24 my-10 sm:my-0 ">
        <ul className="flex justify-center flex-wrap">
          <HashTag className="bg-cles-600">برنامه نویسی</HashTag>
          <HashTag className="bg-folly-600">وبسایت فروشگاهی</HashTag>
          <HashTag className="bg-helio-600">تکنولوژی</HashTag>
          <HashTag className="bg-orange-600">سرگرمی</HashTag>
          <HashTag className="bg-avocado-800">طراحی</HashTag>
          <HashTag className="bg-helio-900">React</HashTag>
          <HashTag className="bg-cles-900">وردپرس</HashTag>
          <HashTag className="bg-folly-900">سئو</HashTag>
        </ul>
      </TagsContainer> */}
      <SliderContainer className="w-full sm:w-[90%] h-fit">
        <MainSlider />
      </SliderContainer>
      <Devider
        title="آخرین پست ها"
        className="w-full h-32 flex items-center gap-4 mt-8"
      />
      <PostContainer className="w-full sm:w-[90%] h-fit flex flex-col  items-start justify-start gap-10 sm:gap-16 mb-10">
        {blogs.length > 0 ? (
          blogs?.map((blog, index) => (
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
          <div>پستی وجود ندارد ...</div>
        )}
      </PostContainer>
    </div>
  );
}
