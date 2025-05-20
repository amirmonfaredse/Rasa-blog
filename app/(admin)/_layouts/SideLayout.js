import SideTab from "./components/SideTab";

export const blogSubLinks = [
  { title: "پست جدید", path: "/dashboard/blog/new" },
  { title: "همه پست ها ", path: "/dashboard/blog/all" },
  { title: "دسته بندی ها", path: "/dashboard/blog/categories" },
  { title: "تگ ها", path: "/dashboard/blog/tags" },
];
export const pagesSubLinks = [
  { title: "خانه", path: "/dashboard/pages/home" },
  { title: "درباره ما", path: "/dashboard/pages/about" },
];

export const messagesSubLinks = [
  { title: "فرم تماس", path: "/dashboard/messages/contact" },
  { title: "نظرات", path: "/dashboard/messages/comments" },
];

export default function SideLayout() {
  return (
    <div className="w-fit h-full bg-transparent">
      <ul className="flex flex-col justify-start items-start p-2 pe-5">
        <SideTab href="/dashboard/pages" title="صفحات" subs={pagesSubLinks} />
        <SideTab href="/dashboard/blog" title="وبلاگ" subs={blogSubLinks} />
        <SideTab
          href="/dashboard/messages"
          title="پیام ها"
          subs={messagesSubLinks}
        />
        <SideTab href="/dashboard/media" title="رسانه"  />
      </ul>
    </div>
  );
}
