import Link from "next/link";
import Accordion from "./components/Accordion";

export default function SideLayout() {
  return (
    <div className="h-full w-auto bg-gray-800">
      <div className="flex flex-col justify-start items-start p-2 pe-5">
        {/* <Link href="/dashboard">
          <div className="w-[200px] h-20 bg-slate-400 flex justify-center items-center m-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-500 cursor-pointer">
            <div className="icon"></div>
            <div>پنل اصلی</div>
          </div>
        </Link> */}
        <Accordion
          subTabs={[{ title: "درباره ما ", path: "/dashboard/about" }]}
        >
          <div>مدیریت صفحات</div>
        </Accordion>
        <Accordion
          subTabs={[
            { title: "پست جدید", path: "/dashboard/blogs/new" },
            { title: "همه پست ها", path: "/dashboard/blogs/all" },
            { title: "دسته بندی ها ", path: "/dashboard/blogs/categories" },
            { title: "برچسب ها ", path: "/dashboard/blogs/tags" },
          ]}
        >
          <div>وبلاگ</div>
        </Accordion>
        <Accordion
          subTabs={[
            { title: "پیام ها ", path: "/dashboard/contact" },
            { title: "نظرات", path: "/dashboard/contact/comments" },
          ]}
        >
          <div>ارتباط با مخاطبین</div>
        </Accordion>
        <Accordion
          subTabs={[
            { title: "آپلود فایل", path: "/dashboard/media/upload" },
          ]}
        >
          <div>فایل و رسانه</div>
        </Accordion>
      </div>
    </div>
  );
}
