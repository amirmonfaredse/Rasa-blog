import Script from "next/script";
import Header from "./_layouts/header/Header";
import { MainContextProvider } from "./_providers/ContextProvider";
import "@/styles/globals.css";
import { Noto_Sans_Arabic } from "next/font/google";
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
        <Script
          strategy="afterInteractive"
          id="clarity-script"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "r51f3tkzdw");`,
          }}
          defer
        />
      </head>
      <body className="flex flex-col bg-ghost-100  text-ghost-1000 min-h-screen relative">
        <MainContextProvider>
          <Header />
          <div className="m-2 md:mx-8 md:my-4">
            <main className="max-w-7xl mx-auto w-full h-full">{children}</main>
          </div>
        </MainContextProvider>
      </body>
    </html>
  );
}
