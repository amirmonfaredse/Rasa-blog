import "./_styles/styles.css";
import { Noto_Sans_Arabic } from "next/font/google";
import Header from "./_layouts/Header";
import SideLayout from "./_layouts/SideLayout";
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

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={NotoFont.className}>
      <body className="w-full max-h-screen bg-gray-800" >
        <Header />
        <div className="flex flex-row">
          <SideLayout />
          {children}
        </div>
      </body>
    </html>
  );
}
