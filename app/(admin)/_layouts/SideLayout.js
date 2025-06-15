import SideTab from "./components/SideTab";

export const blogSubLinks = [
  { title: "پست جدید", path: "/dashboard/blog/new" },
  { title: "همه پست ها ", path: "/dashboard/blog/all" },
  { title: "دسته بندی ها", path: "/dashboard/blog/categories" },
  { title: "تگ ها", path: "/dashboard/blog/tags" },
];
export const pagesSubLinks = [{ title: "خانه", path: "/dashboard/pages/home" }];

export const messagesSubLinks = [
  { title: "فرم تماس", path: "/dashboard/messages" },
  { title: "نظرات", path: "/dashboard/messages/comments" },
];

export default function SideLayout() {
  return (
    <div className="w-fit h-full bg-transparent">
      <ul className="flex flex-col justify-start items-start p-2 pe-5">
        <SideTab href="" title="صفحات" subs={pagesSubLinks} />
        <SideTab href="" title="وبلاگ" subs={blogSubLinks} />
        <SideTab href="" title="پیام ها" subs={messagesSubLinks} />
        <SideTab href="/dashboard/media" title="رسانه" />
      </ul>
    </div>
  );
}
