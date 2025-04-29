import Image from "next/image";
import Link from "next/link";
import NavigationLoader from "./NavigationLoader";

function IconImage({ src, alt }) {
  return (
    <Link href="#" className="w-10 md:w-8 h-10 md:h-8 relative">
      <Image
        className="cursor-pointer hover:scale-125 duration-300"
        src={src}
        alt={alt}
        fill
      />
    </Link>
  );
}
function SearchButton() {
  return (
    <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:scale-110 duration-300">
      <Image
        src="/header/search/search.svg"
        alt="جستجو در مجله رسا"
        width={40}
        height={40}
      />
    </div>
  );
}
function SocialBox() {
  return (
    <div className="w-full md:w-1/3 h-20 md:h-full flex items-center justify-center md:justify-start">
      <div className="w-[70%] flex items-center justify-evenly md:justify-start md:gap-4 ">
        <IconImage
          src="/header/social/instagram.svg"
          alt="لینک ورود به اینستاگرام رسا"
        />
        <IconImage
          src="/header/social/linkedin.svg"
          alt="لینک ورود به اینستاگرام رسا"
        />
        <IconImage
          src="/header/social/whatsup.svg"
          alt="لینک ورود به اینستاگرام رسا"
        />
        <IconImage
          src="/header/social/youtube.svg"
          alt="لینک ورود به اینستاگرام رسا"
        />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="w-full h-fit md:h-80 flex flex-col items-center justify-center px-4">
      <div className="w-full md:w-[85%] h-fit md:h-32 flex flex-col-reverse  md:flex-row items-center justify-center md:justify-start">
        <SocialBox />
        <div className="w-full md:w-1/3 h-28 md:h-full flex items-center justify-center">
          <div className="w-full h-fit flex justify-center md:cursor-progress">
            <Image
              src="/header/logo/Logo.svg"
              alt="لوگو اصلی مجله رسا"
              width={200}
              height={120}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 h-20 md:h-full hidden md:flex items-center">
          <div className="w-full h-fit flex items-center justify-end">
            <SearchButton />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[60%] md:h-32 flex items-center justify-center">
        <NavigationLoader />
      </div>
    </div>
  );
}
