"use client";
import createCache from "@emotion/cache";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});
export function CacheProvider({ children }) {
  return (
    <AppRouterCacheProvider value={cacheRtl}>{children}</AppRouterCacheProvider>
  );
}
