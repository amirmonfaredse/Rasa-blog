import { updatePortfolioAction } from "@/app/_data/actions";
import { getPortfolioCards } from "@/app/_data/data-services";
import Link from "next/link";
import PortfolioDeleteButton from "../../_components/portfolio/PortfolioDeleteButton";

export default async function Page() {
  const portfolios = await getPortfolioCards() 
  return (
    <div>
    <Link className="text-gray-200 " href={`/dashboard/portfolio/create`}>
      ایجاد +{" "}
    </Link>
    {portfolios.map((portfolio) => (
      <form
        action={updatePortfolioAction}
        className="flex flex-col"
        key={portfolio.id}
      >
        <label htmlFor="id"> آیدی : {portfolio.id}</label>
        <PortfolioDeleteButton id={portfolio.id} />
        <input
          className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
          type="hidden"
          name="id"
          defaultValue={portfolio.id}
        />
        <label htmlFor="title"> عنوان : </label>
        <input
          name="title"
          className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
          type="text"
          defaultValue={portfolio.title}
        />
        <label htmlFor="media"> لینک رسانه : </label>
        <input
          name="media"
          className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
          type="text"
          defaultValue={portfolio.media}
        />
        <label htmlFor="links"> لینک ها : </label>
        <input
          name="links"
          className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
          type="text"
          defaultValue={JSON.parse(portfolio.links)}
        />
        <label htmlFor="dependencies"> وابستگی ها : </label>
        <input
          name="dependencies"
          className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
          type="text"
          defaultValue={JSON.parse(portfolio.dependencies)}
        />
        <label htmlFor="description"> توضیحات : </label>
        <textarea
          name="description"
          className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2 resize-none"
          rows={10}
          defaultValue={portfolio.description}
        />
        
        <input
          type="submit"
          className="bg-gray-400 text-gray-800 w-[200px] py-2 px-4 my-4 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-400"
          value="ویرایش"
        />
      </form>
    ))}
  </div>
  )
}
