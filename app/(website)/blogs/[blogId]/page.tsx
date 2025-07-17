import { getBlog } from "@/app/_data/blog/blogServices";
import { getConfirmedComments } from "@/app/_data/messages/messageServices";
import { sanitizeHTMLOnServer } from "@/app/utility/jsDOM";
import Image from "next/image";
import CommentForm from "./CommentForm";
import ShowComments from "./ShowComments";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const blog = await getBlog(blogId);
  return {
    title: blog.title,
    desciption: "",
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const blog = await getBlog(blogId);
  const confirmedComments = await getConfirmedComments();

  return (
    <div className="w-[95%] md:w-full  h-fit sm:px-10 mt-8">
      <h1 className="text-center md:text-start text-2xl">{blog.title}</h1>
      {blog.image.length > 0 && (
        <div className="w-full h-[400px] relative my-10 ">
          <Image
            className=" object-contain p-5 overflow-hidden"
            src={blog.image}
            fill
            alt={blog.title}
          />
        </div>
      )}
      <div
        className="mt-10 mx-2 md:mx-5 leading-10 text-lg  text-justify text-ghost-900"
        dangerouslySetInnerHTML={{ __html: sanitizeHTMLOnServer(blog.content) }}
      />
      <div className="w-full h-fit my-16 flex flex-col justify-start items-start">
        <div className="w-full h-fit pb-5 flex flex-col gap-6">
          <h2 className="text-xl my-5"> نظرات شما :</h2>
          {confirmedComments.length > 0 ? (
            confirmedComments.map((comment, index) => (
              <ShowComments key={`${comment.id}-${index}`} comment={comment} />
            ))
          ) : (
            <div className="text-ghost-700">
              اولین نفری باشید که نظری ثبت می‌کند ...
            </div>
          )}
        </div>

        <CommentForm blogId={blog.id} />
      </div>
      {/* 
      <div className="w-full h-[400px] my-16">
        <h2 className="text-xl text-gray-50 cursor-default">مقالات مشابه</h2>
        <div className="w-auto h-full flex flex-col items-center overflow-x-auto  gap-3 overflow-y-hidden no-scrollbar">
          <div className="w-full h-[90%] border flex-none border-gray-50  rounded-lg"></div>
        </div>
      </div> */}
    </div>
  );
}
