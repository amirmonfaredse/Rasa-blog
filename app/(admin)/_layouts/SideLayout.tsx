import SideTab from "./components/SideTab";
import { blogSubLinks, messagesSubLinks, pagesSubLinks } from "./helpers";

export default function SideLayout() {
  return (
    <div className="w-fit h-full bg-transparent">
      <ul className="flex flex-col justify-start items-start p-2 pe-5">
        <SideTab href="" title="صفحات" subs={pagesSubLinks}  />
        <SideTab href="" title="وبلاگ" subs={blogSubLinks} />
        <SideTab href="" title="پیام ها" subs={messagesSubLinks} />
        <SideTab href="/dashboard/media" title="رسانه" />
      </ul>
    </div>
  );
}
