import { updateServiceAction } from "@/app/_data/actions";
import { getServicesSections } from "@/app/_data/data-services";
import Link from "next/link";
import ServicesDeleteButton from "../../_components/services/ServicesDeleteButton";

export default async function Page() {
  const services = await getServicesSections();

  return (
    <div>
      <Link className="text-gray-200 " href={`/dashboard/portfolio/create`}>
        ایجاد +{" "}
      </Link>
      {services.map((service) => (
        <form
          action={updateServiceAction}
          className="flex flex-col"
          key={service.id}
        >
          <label htmlFor="id"> آیدی : {service.id}</label>
          <ServicesDeleteButton id={service.id} />
          <input
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
            type="hidden"
            name="id"
            defaultValue={service.id}
          />
          <label htmlFor="title"> عنوان : </label>
          <input
            name="title"
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
            type="text"
            defaultValue={service.title}
          />
          <label htmlFor="media"> لینک رسانه : </label>
          <input
            name="media"
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
            type="text"
            defaultValue={service.media}
          />

          <label htmlFor="description"> توضیحات : </label>
          <textarea
            name="description"
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2 resize-none"
            rows={10}
            defaultValue={service.description}
          />
          <label htmlFor="doDescription"> توضیحات عملکرد : </label>
          <textarea
            name="doDescription"
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2 resize-none"
            rows={10}
            defaultValue={service.doDescription}
          />

          <label htmlFor="dependencies"> وابستگی ها : </label>
          <input
            name="dependencies"
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
            type="text"
            defaultValue={service.dependencies}
          />
          <label htmlFor="knowledges"> مهارت و دانش : </label>
          <input
            name="knowledges"
            className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
            type="text"
            defaultValue={service.knowledges}
          />
          <input
            type="submit"
            className="bg-gray-400 text-gray-800 w-[200px] py-2 px-4 my-4 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-400"
            value="ویرایش"
          />
        </form>
      ))}
    </div>
  );
}
