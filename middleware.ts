import { auth } from "./app/_data/auth";
export const middleware = auth;
export const config = {
  matcher: ["/dashboard"],
};
