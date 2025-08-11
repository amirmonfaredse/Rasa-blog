import { getBlogs } from "_data/services/blogs.services";
import Link from "next/link";
import { getSliders } from "../_data/services/pages.services";
import MainSlider from "./_components/MainSlider";
import PostCard from "./_components/cards/PostCard";
import Devider from "./_components/utilities/Devider";
import {
  PostContainer,
  SliderContainer,
} from "./_components/utilities/utilities";
import BlogList from "./blogs/_components/BlogList";
import { BlogContextProvider } from "./_providers/BlogProvider";
import { Suspense } from "react";

export default async function Page() {
  const blogs = await getBlogs();
  if ("code" in blogs)
    throw new Error("مشکلی در بارگذاری پست ها ایجاد شده است مجددا تلاش کنید");

  const sliders = await getSliders();
  if ("code" in sliders)
    throw new Error("مشکلی در بارگذاری پست ها ایجاد شده است مجددا تلاش کنید");

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

      <PostContainer className="w-full h-fit flex flex-col items-center justify-start gap-10 sm:gap-16 mb-10">
        <BlogContextProvider>
          <Suspense>
            {blogs &&
              blogs?.map((blog, index) => (
                <PostCard
                  key={`${blog.id}-${index}`}
                  id={blog.id}
                  title={blog.title}
                  author={blog.author}
                  created_at={blog.created_at}
                  image={blog.image}
                  content={blog.content}
                />
              ))}
          </Suspense>
        </BlogContextProvider>{" "}
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
