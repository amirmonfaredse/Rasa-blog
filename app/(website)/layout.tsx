import "../../styles/globals.css";
import { Noto_Sans_Arabic } from "next/font/google";
import LoadClarity from "../utility/LoadClarity";
import Footer from "./_layouts/Footer";
import Header from "./_layouts/Header";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={NotoFont.className}>
      <head>
        <LoadClarity />
      </head>
      <body className="flex flex-col bg-ghost-100  text-ghost-1000 min-h-screen relative overflow-x-hidden">
        <Toaster />
        <Header />
        <div className="w-full h-fit m-2 md:mx-8 md:my-4">
          <main className="w-full h-fit max-w-7xl mx-auto ">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
