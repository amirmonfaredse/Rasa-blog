import Logo from "@/Logo.svg";
import Image from "next/image";
import NavigationHeader from "./NavigationHeader";
export default function Header() {
  return (
    <div className="w-full h-[70px] flex items-center px-4 border-b border-gray-700 ">
      <div className="w-full flex justify-start items-center max-w-7xl mx-auto">
        <div className="w-[30%] flex items-center gap-4 z-10 text-4xl">
          <Image src={Logo} alt="وبسایت رَسا" />
        </div>
        <NavigationHeader />
      </div>
    </div>
  );
}
