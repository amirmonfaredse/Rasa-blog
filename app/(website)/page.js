import Image from "next/image";
import MainSlider from "./_components/MainSlider";

const dynamic = "force-dynamic";
function Devider({ title, className }) {
  return (
    <div className={`w-full h-32 flex items-center ${className} gap-4`}>
      <h1 className="min-w-fit h-16 flex justify-start text-2xl">{title}</h1>
      <div className="w-full h-8 flex items-end border-t-2 border-red-700 "></div>
    </div>
  );
}
function HashTag({ children, color }) {
  return (
    <li className="p-2 cursor-pointer">
      <div
        style={{ backgroundColor: color }}
        className="flex justify-center shadow-md p-1.5 px-2  items-center gap-1 rounded-full text-ghost-100 text-xs "
      >
        <span className=" text-ghost-100">#</span>
        <p>{children}</p>
      </div>
    </li>
  );
}
function PostCard() {
  return (
    <article className="w-full h-auto md:h-[440px]  border-ghost-800 rounded-[50px] overflow-hidden">
      <div className="w-full h-full flex flex-col  items-center justify-between gap-1">
        <div
          className="w-full h-2/5 flex relative"
          style={{ backgroundColor: "#BEDBED" }}
        >
          <div className="w-1/5 h-full relative ">
            <Image
              className="object-contain"
              fill
              src="/posts/post-1.jpg"
              alt="مهم ترین مزیت های کسب و کار انلاین"
            />
          </div>
          <div className="w-3/5 h-full flex flex-col justify-center items-start p-5 ">
            <h1 className="text-3xl">
              از مشکلات کسب و کار آنلاین بیشتر بدانید
            </h1>
            <div className="h-14 flex justify-evenly items-center gap-5 text-xs text-white">
              <div className="flex items-center gap-2">
                <span>
                  <Image
                    src="/posts/author.svg"
                    alt="تاریخ"
                    width={11}
                    height={11}
                  />
                </span>
                <p className="pt-1">نویسنده : امیررضا منفرد</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <Image
                    src="/posts/date.svg"
                    alt="تاریخ"
                    width={15}
                    height={15}
                  />
                </span>
                <p className="pt-1">24 مرداد</p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <Image
                    src="/posts/timeSpend.svg"
                    alt="تاریخ"
                    width={12}
                    height={12}
                  />
                </span>
                <p className="pt-1">8 دقیقه زمان مطالعه</p>
              </div>
            </div>
          </div>
          <div className="w-1/5 flex flex-col items-end justify-center gap-3 pl-8">
            <div className="cursor-pointer hover:scale-110 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div className="cursor-pointer hover:-translate-y-1 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </div>
            <div className="cursor-pointer hover:-rotate-6 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="w-full h-3/5 flex flex-col justify-between"
          style={{ backgroundColor: `#BEDBED${50}` }}
        >
          <div className="w-full h-2/3 flex justify-center items-start p-5">
            <div className="w-[90%] h-full">
              <p className="w-full h-fit  leading-10 line-clamp-3 text-justify">
                خیلی عالی ، بهترین نتیجه ای که می‌توان انتظار داشت، اما به دست
                آوردنش به این آسانی ها نیست ، مشکل همین است که زمان دست به کار
                شدن که می‌رسد کم کم ایده های عالی گم می‌شوند چون عالی نیستند ،
                برای همین لازم است گه گاهی از این و آن ایده بگیریم زمانی که با
                کسب و کار آنلاین رو به رو می‌شویم به به و چه چه ها بلند و رسا
                است اما نمی‌شود به راهی که هیچ مشکلی ندارد اعتماد کرد ، بالاخره
                همه راه ها مشکلاتی دارند صرفا عنوان نکردن آن ها، مشکلات را از سر
                راه بر نمی‌دارد
              </p>
            </div>
          </div>
          <div className="w-full h-1/3 flex mb-2">
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center px-5">
              <ul className="w-1/2 flex items-center justify-center flex-wrap px-5 gap-x-2 gap-y-1 ">
                <li className="w-fit h-fit text-blue-400 border border-blue-400 hover:border-red-800 cursor-pointer duration-300 hover:bg-red-800 p-1 px-1.5 hover:text-red-200 rounded-full text-xs ">
                  سرگرمی
                </li>
                <li className="w-fit h-fit text-blue-400 border border-blue-400 hover:border-green-800  cursor-pointer duration-300 hover:bg-green-800 p-1 px-1.5 hover:text-green-200 rounded-full text-xs ">
                  طراحی سایت
                </li>
                <li className="w-fit h-fit  text-blue-400 border border-blue-400 hover:border-amber-800 cursor-pointer duration-300 hover:bg-amber-800 p-1 px-1.5 hover:text-amber-200 rounded-full text-xs ">
                  شبکه های اجتماعی
                </li>
                <li className="w-fit h-fit text-blue-400 border border-blue-400 hover:border-yellow-800 cursor-pointer duration-300 hover:bg-yellow-800 p-1 px-1.5 hover:text-yellow-200 rounded-full text-xs ">
                  کسب و کار
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
              <button className="w-2/3 h-14 bg-blue-950 text-blue-100 rounded-full hover:text-xl duration-300">
                بیشتر بخوانید
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-ful h-16">
        <ul className="flex flex-wrap">
          <HashTag color="#5c5a74">برنامه نویسی</HashTag>
          <HashTag color="#16a34a">وبسایت فروشگاهی</HashTag>
          <HashTag color="#9333ea">تکنولوژی</HashTag>
          <HashTag color="#dc2626">سرگرمی</HashTag>
          <HashTag color="#2563eb">طراحی</HashTag>
          <HashTag color="#374151 ">React</HashTag>
          <HashTag color="#f97316">وردپرس</HashTag>
          <HashTag color="#831843">سئو</HashTag>
        </ul>
      </div>
      <div className="w-full md:w-[90%] h-72 ">
        <MainSlider />
      </div>
      <Devider title="آخرین پست ها" className="mt-8" />
      <div className="w-full md:w-[90%] h-auto flex flex-col gap-16  items-start justify-start mb-10">
        <PostCard />
        <PostCard />
      </div>
      
    </div>
  );
}
