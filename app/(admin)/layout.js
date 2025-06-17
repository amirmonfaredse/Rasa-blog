import "./_styles/styles.css";
import { Noto_Sans_Arabic } from "next/font/google";
import { Chewy } from "next/font/google";

import Header from "./_layouts/Header";
import SideLayout from "./_layouts/SideLayout";
import { SliderContextProvider } from "./_providers/NavigationProvider";
import MenuButton from "./_layouts/components/MenuButton";
import SideLayoutContainer from "./_layouts/components/SideLayoutContainer";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: {
    template: "%s | رسا",
    default: "پنل مدیریت  |  رسا",
  },
  description: "",
};
const NotoFont = Noto_Sans_Arabic({
  weight: "600",
  display: "swap",
  preload: false,
});
export const ChewyFont = Chewy({
  weight: "400",
  display: "swap",
  preload: false,
});
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${NotoFont.className}`}>
      <body className="w-full h-screen  bg-white overflow-x-hidden">
        <Toaster />
        <SliderContextProvider>
          <div className="w-full flex flex-col items-start justify-start relative">
            <MenuButton />
            <Header />
            <div className="w-full h-[95%] flex justify-center md:justify-start ">
              <SideLayoutContainer>
                <SideLayout />
              </SideLayoutContainer>
              {children}
            </div>
          </div>
        </SliderContextProvider>
      </body>
    </html>
  );
}
