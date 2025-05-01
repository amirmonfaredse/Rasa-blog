import { updateAboutAction } from "@/app/_data/actions";
import { getAboutSections } from "@/app/_data/data-services";
import Link from "next/link";
import AboutDeleteButton from "../../_components/AboutDeleteButton";

export default async function Page() {
  const abouts = await getAboutSections();
  return (
    <div>
      {/* <Link className="text-gray-200 " href={`/dashboard/about/create`}>
        ایجاد +{" "}
      </Link>
      {abouts.map((about) => (
        <form
          action={updateAboutAction}
          className="flex flex-col"
          key={about.id}
        >
          <label htmlFor="id"> آیدی : {about.id}</label>
          <AboutDeleteButton id={about.id} />
          <input
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
            type="hidden"
            name="id"
            defaultValue={about.id}
          />
          <label htmlFor="title"> عنوان : </label>
          <input
            name="title"
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
            type="text"
            defaultValue={about.title}
          />
          <label htmlFor="media"> لینک رسانه : </label>

          <input
            name="media"
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
            type="text"
            defaultValue={about.media}
          />
          <label htmlFor="content"> محتوا : </label>
          <textarea
            name="content"
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2 resize-none"
            rows={10}
            defaultValue={about.content}
          />
          <input
            type="submit"
            className="bg-gray-400 text-gray-800 w-[200px] py-2 px-4 my-4 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-400"
            value="ویرایش"
          />
        </form>
      ))} */}
    </div>
  );
}
