import "./_styles/styles.css";
import { Noto_Sans_Arabic } from "next/font/google";
import { Chewy } from "next/font/google";

import Header from "./_layouts/Header";
import SideLayout from "./_layouts/SideLayout";
import { NavigationContextProvider } from "./_providers/NavigationProvider";
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
      <body className="w-full h-screen bg-white overflow-x-hidden">
        <NavigationContextProvider>
          <Header />
          <div className="flex w-full h-[95%]">
            <SideLayout />
            {children}
          </div>
        </NavigationContextProvider>
      </body>
    </html>
  );
}
