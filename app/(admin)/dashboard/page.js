import { auth } from "@/app/_data/auth";
import { ChewyFont } from "../layout";

export default async function Page() {
  const session = await auth();

  return (
    <div className="w-full h-full m-5 pb-2 pt-5">
      <div className="w-full h-36 flex justify-start items-center gap-10">
        <div className="w-1/6 h-full flex flex-col items-center justify-center border-2 rounded-2xl bg-folly-800 shadow-lg">
          <span className=" text-folly-100 text-sm mb-2">نوشته ها</span>
          <span className={`text-7xl text-ghost-100  ${ChewyFont.className}`}>
            10
          </span>{" "}
        </div>
        <div className="w-3/6 h-full flex items-center  rounded-2xl bg-avocado-500 shadow-lg">
          <div className="w-full flex justify-evenly items-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-ghost-100 mb-3">بازدید روز</span>
              <span
                className={`text-3xl text-ghost-100 ${ChewyFont.className}`}
              >
                285
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-ghost-100 mb-3">بازدید هفته</span>
              <span
                className={`text-3xl text-ghost-100 ${ChewyFont.className}`}
              >
                2500
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-ghost-100 mb-3">بازدید ماه</span>
              <span
                className={`text-3xl text-ghost-100 ${ChewyFont.className}`}
              >
                13851
              </span>
            </div>
          </div>
        </div>
        <div className="w-2/6 h-full flex items-center justify-center  rounded-2xl bg-cles-500 shadow-lg ">
          <div className="flex flex-col items-center justify-center">
            <span className="text-ghost-100 mb-3">نرخ ریزش</span>
            <div className="flex items-center justify-center gap-1.5">
              <span
                className={`text-3xl text-ghost-100 ${ChewyFont.className}`}
              >
                13851
              </span>
              <span
                className={`text-3xl text-ghost-100 ${ChewyFont.className}`}
              >
                /
              </span>
              <span
                className={`text-3xl text-ghost-100 ${ChewyFont.className}`}
              >
                13851
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-36 flex justify-start items-center gap-10">
        Quick Access
      </div>
      <div className="w-full h-36 flex justify-start items-center gap-10">
        Data
      </div>
    </div>
  );
}
