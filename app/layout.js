import Header from "./_layouts/header/header";
import { CacheProvider } from "./_providers/CacheProvider";
import { MainContextProvider } from "./_providers/ContextProvider";
import { MainThemeProvider } from "./_providers/MainThemeProvider";
import "./_public/styles/globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Portfolio Project",
  description: "Best Portfolio Ever",
};
const vazirFont = localFont({
  src: [
    { path: "./_public/fonts/Vazir.eot" },
    { path: "./_public/fonts/Vazir.woff2" },
    { path: "./_public/fonts/Vazir.eot" },
    { path: "./_public/fonts/Vazir.ttf" },
  ],
});
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazirFont.className}>
      <body>
        <CacheProvider>
          <MainContextProvider>
            <MainThemeProvider>
              <Header> {children}</Header>
            </MainThemeProvider>
          </MainContextProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
