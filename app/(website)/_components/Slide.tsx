import { SlideProps } from "@/types/app/website/types";
import Image from "next/image";

export default function Slide({
  title,
  image,
  bgColor,
  textColor,
  type,
}: SlideProps) {
  return (
    <div
      className="w-full h-full border bg-red-50 p-2"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="w-full h-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-fit h-[80%] flex flex-col items-start justify-center px-4">
          <p className="text-red-700 flex items-center gap-2 absolute top-8 right-16">
            <Image
              className="animate-bounce"
              src="/slider/idea.svg"
              alt="بخوانید"
              width={20}
              height={20}
            />
            <span className="hover:scale-105 cursor-pointer duration-150">
              {type === "reading" && "بخوانید"}
            </span>
          </p>
          <h1
            style={{ color: textColor }}
            className="w-fit text-ghost-1000 text-2xl lg:text-3xl lg:leading-[50px] md:px-12 mt-16 md:mt-0"
          >
            {title}
          </h1>
        </div>
        <div className="w-[90%] md:w-1/2 h-fit flex items-center justify-center md:justify-end md:pl-10 mt-5 md:mt-0">
          <div className="w-[250px] h-[250px] flex justify-center items-center relative border border-ghost-1000 ">
            <div className="w-full md:w-[240px] h-[240px] border border-ghost-1000 absolute"></div>
            <Image className="" src={image} fill alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}
