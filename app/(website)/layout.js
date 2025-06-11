import "@/styles/globals.css";
import { Noto_Sans_Arabic } from "next/font/google";
import LoadClarity from "../utility/LoadClarity";
import Footer from "./_layouts/Footer";
import Header from "./_layouts/Header";
export const metadata = {
  title: {
    template: "%s | رسا",
    default: "صفحه اصلی  |  رسا",
  },
  description: "هفته نامه آموزشی و خبری درخصوص برنامه نویسی وب و طراحی سایت ",
};
const NotoFont = Noto_Sans_Arabic({
  weight: "600",
  display: "swap",
  preload: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={NotoFont.className}>
      <head>
        <LoadClarity />
      </head>
      <body className="flex flex-col bg-ghost-100  text-ghost-1000 min-h-screen relative overflow-x-hidden">
        <Header />
        <div className="m-2 md:mx-8 md:my-4">
          <main className="max-w-7xl mx-auto w-full h-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
