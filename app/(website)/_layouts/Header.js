import Image from "next/image";
import IconImage from "../_components/IconImage";
import NavigationLoader from "../_components/NavigationLoader";
import SocialBox from "../_components/SocialBox";

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

export default function Header() {
  return (
    <div className="w-full h-fit md:h-72 flex flex-col items-center justify-center px-4 z-50">
      <div className="w-full md:w-[85%] h-fit md:h-32 flex flex-col-reverse  md:flex-row items-center justify-center md:justify-start">
        <SocialBox>
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
        </SocialBox>
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
      <div className="w-full md:w-[60%] md:h-24 flex items-center justify-center">
        <NavigationLoader />
      </div>
    </div>
  );
}
