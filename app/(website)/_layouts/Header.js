import Image from "next/image";
import IconImage from "../_components/IconImage";
import NavigationLoader from "../_components/NavigationLoader";
import SocialBox from "../_components/SocialBox";

export default function Header() {
  return (
    <div className="w-full h-fit md:h-72 flex flex-col items-center justify-center px-4 z-10 ">
      <div className="w-full md:w-[85%] h-fit md:h-32 flex flex-col-reverse  md:flex-row items-center justify-center md:justify-start">

        <SocialBox>
          <IconImage
            href="https://instagram.com/a.reza.m.s"
            src="/header/social/instagram.svg"
            alt="لینک ورود به اینستاگرام رسا"
          />

          {/* <IconImage
          href='https://t.me/devravesh'
            src="/header/social/linkedin.svg"
            alt="لینک ورود به لینکدین رسا"
          /> */}
          {/* <IconImage
          href='https://t.me/devravesh'
            src="/header/social/whatsup.svg"
            alt="لینک ورود به واتساپ رسا"
          /> */}
          <IconImage
            href="https://t.me/devravesh"
            src="/header/social/telegram.svg"
            alt="لینک ورود به تلگرام رسا"
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
          {/* <div className="w-full h-fit flex items-center justify-end">
            <SearchButton />
          </div> */}
        </div>
      </div>
      <div className="w-full md:w-[60%] md:h-24 flex items-center justify-center">
        <NavigationLoader />
      </div>
    </div>
  );
}
