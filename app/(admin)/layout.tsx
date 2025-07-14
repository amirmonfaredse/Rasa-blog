import { Chewy, Noto_Sans_Arabic } from "next/font/google";
import "./_styles/styles.css";

import { SWRConfig } from "swr";
import ToastListener from "./_components/ToastListener";
import Header from "./_layouts/Header";
import SideLayout from "./_layouts/SideLayout";
import MenuButton from "./_layouts/components/MenuButton";
import SideLayoutContainer from "./_layouts/components/SideLayoutContainer";
import { SliderContextProvider } from "./_providers/NavigationProvider";
import { AdminStoreProvider } from "./_providers/StoreProvider";
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${NotoFont.className}`}>
      <body className="w-full h-screen  bg-white overflow-x-hidden">
        <SWRConfig>
          <AdminStoreProvider>
            <ToastListener />
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
          </AdminStoreProvider>
        </SWRConfig>
      </body>
    </html>
  );
}
