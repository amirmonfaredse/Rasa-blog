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
      <body>
        <MainContextProvider>
          <Header> {children}</Header>
        </MainContextProvider>
      </body>
    </html>
  );
}
