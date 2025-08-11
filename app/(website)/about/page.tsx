import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import SpinnerLoader from "utility/loaders/SpinnerLoader";
export const metadata: Metadata = {
  title: "درباره من",
  description: "در صفحه درمورد رسا بیشتر بدانید ",
};
export default async function Page() {
  return (
    <Suspense fallback={<SpinnerLoader />}>
      <div className="w-full h-full flex flex-col justify-center items-center gap-8">
        <div className="w-full h-fit bg-ghost-100 shadow-xl py-6 px-4">
          <p className="p-2 px-5 text-lg leading-10 text-justify ">
            رسا از فروردین 1404 با هدف آشنایی صاحبان کسب و کار با ساز و کار
            اینترنت و شبکه های اجتماعی شروع به کار کرده است. هدف نهایی رسا،
            ایجاد مجموعه ای از مقالات و راهنمایی ها درخصوص طراحی، پیاده سازی و
            پشتیبانی وبسایت، آگاهی از مزیت ها و معایب تکنولوژی های مختلف، اهمیت
            هر یک از پلتفرم های آنلاین است. تلاش رسا راهنمایی صاحبان کسب و کار
            در انتخاب مسیر مناسب آن ها در فضای آنلاین است، رسا متعهد است فارغ از
            تخصص و خدمات خود اطلاعات لازم را در اختیار مخاطبان قرار دهد تا با
            انتخابی آگاهانه بهترین مسیر را برای خود برگزینند. رسا همواره در تلاش
            است که اطلاعات خود را بروز نگه دارد، از منابع موثق استفاده کند و در
            صورت تشخیص ایراد در هر مقاله و راهنمایی آن را بدون توجه به آسیب های
            احتمالی تغییر دهد و مخاطبان خود را از این تغییرات تا حد امکان آگاه
            سازد. رسا به صورت آنلاین در تمامی شهر های ایران فعال است، اما در حال
            حاضر فقط در شهر اصفهان به صورت حضوری فعالیت می‌کند. خدمات رسا به
            طراحی و پیاده سازی رابط کاربری و تجربه کاربری، برنامه نویسی سمت
            Front-end و Back-end، تولید محتوا و سئو گسترش یافته است.
          </p>
        </div>
        <div className=" my-10">
          <h2 className="text-3xl text-center ">تیم رسا </h2>
          <div className="flex items-center gap-4 mt-10 mx-2 bg-ghost-100 p-5 shadow-md">
            <div className="my-2">
              <Image
                width={100}
                height={100}
                src="/svg/emptyavatar.svg"
                alt="تصویر پروفایل عضو"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <p className="text-md text-gray-400">نام : </p>
                <p className="text-md">امیررضا منفرد </p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-md text-gray-400">تخصص : </p>
                <p className="text-md">
                  {" "}
                  توسعه دهنده Full Stack ، متخصص تولید محتوا، طراح تجربه کاربری
                  متخصص سئو{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
