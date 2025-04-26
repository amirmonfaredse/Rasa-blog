import { serviceGetBlog } from "@/app/_data/blog/blogServices";
import { sanitizeHTMLOnServer } from "@/app/utility/jsDOM";
import Image from "next/image";
import CommentForm from "./CommentForm";
import {
  serviceCommentsConfirmMessage,
  serviceCommentsGetConfirmedMessages,
} from "@/app/_data/messages/messageServices";
import ShowComments from "./ShowComments";
export async function generateMetadata({ params }) {
  const { blogId } = await params;
  const blog = await serviceGetBlog(blogId);
  return {
    title: blog.title,
    desciption: "",
  };
}
export default async function Page({ params }) {
  const { blogId } = await params;
  const blog = await serviceGetBlog(blogId);
  const confirmedComments = await serviceCommentsGetConfirmedMessages();

  return (
    <div className="w-full h-fit sm:px-10 mt-8">
      <h1 className="text-2xl">{blog.title}</h1>
      {blog.image.length > 0 && (
        <div className="w-full h-[400px] relative my-10  border border-gray-50 rounded-lg">
          <Image
            className=" object-cover  p-5 overflow-hidden"
            src={blog.image}
            fill
            alt={blog.title}
          />
        </div>
      )}
      <div
        className="mt-10 mx-2 md:mx-5 leading-10 text-lg  text-justify text-gray-300"
        dangerouslySetInnerHTML={{ __html: sanitizeHTMLOnServer(blog.content) }}
      />
      <div className="w-full h-[400px] my-16 flex flex-col justify-start items-start">
        <h3 className="w-full text-xl mb-5 border-b border-gray-50 px-2 md:px-10 py-4">
          ارسال نظر
        </h3>
        <CommentForm blogId={blog.id} />
        <div className="w-full h-fit pb-5 flex flex-col gap-6">
          <h2 className="text-xl my-5"> نظرات شما :</h2>
          {confirmedComments.length > 0 ? (
            confirmedComments.map((comment, index) => (
              <ShowComments key={`${comment.id}-${index}`} comment={comment} />
            ))
          ) : (
            <div>اولین نفری باشید که نظری ثبت می‌کند</div>
          )}
        </div>
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
