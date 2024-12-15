import { preload } from "react-dom";
import Header from "./_layouts/header/Header";
import { MainContextProvider } from "./_providers/ContextProvider";
import "@/app/_styles/globals.css";
import { Noto_Sans_Arabic } from "next/font/google";
export const metadata = {
  title: {
    template: "%s | رسا",
    default: "صفحه اصلی  |  رسا",
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
      <body className="flex flex-col bg-gray-800  text-gray-200 min-h-screen relative">
        <MainContextProvider>
          <Header />
          <div className="flex-1 px-8 py-12 grid">
            <main className="max-w-7xl mx-auto w-full h-full">{children}</main>
          </div>
        </MainContextProvider>
      </body>
    </html>
  );
}
