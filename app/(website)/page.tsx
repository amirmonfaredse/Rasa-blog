import Link from "next/link";
import { getSliders } from "../_data/pages/pages.services";
import MainSlider from "./_components/MainSlider";
import PostCard from "./_components/cards/PostCard";
import Devider from "./_components/utilities/Devider";
import {
  PostContainer,
  SliderContainer,
} from "./_components/utilities/utilities";
import { getBlogs } from "_data/blog/blogServices";

export default async function Page() {
  const blogs = (await getBlogs()).slice(0, 5);
  const sliders = await getSliders();
  return (
    <div className="flex flex-col justify-start items-center ">
      {/*
       <TagsContainer className="w-full h-fit sm:h-24 my-10 sm:my-0 ">
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
      </TagsContainer> 
      */}

      <SliderContainer className="w-full sm:w-[90%] h-fit">
        <MainSlider sliders={sliders} />
      </SliderContainer>

      <Devider
        title="آخرین پست ها"
        className="w-full h-32 flex items-center gap-4 mt-8"
      />
      <PostContainer className="w-full sm:w-[90%] h-fit flex flex-col  items-start justify-start gap-10 sm:gap-16 mb-10">
        {blogs.length > 0 ? (
          blogs?.map((blog, index) => (
            <PostCard
              id={blog.id}
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
        <div className="w-full flex justify-center">
          <Link
            href="/blogs"
            className="w-64 text-center text-lg bg-cles-400 text-white p-5 shadow-2xl rounded-md "
          >
            همه بلاگ ها
          </Link>
        </div>
      </PostContainer>
    </div>
  );
}
