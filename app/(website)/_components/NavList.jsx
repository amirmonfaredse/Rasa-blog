"use client";
import NavLink from "./NavLink";
const navList = [
  {
    title: "خانه",
    href: "/",
    src: "/header/navigation/home.svg",
    alt: " بازگشت به خانه",
  },
  {
    title: "بلاگ",
    href: "/blogs",
    src: "/header/navigation/blog.svg",
    alt: "ورود به وبلاگ",
  },
  {
    title: "درباره",
    href: "/about",
    src: "/header/navigation/about.svg",
    alt: "ورود به درباره ما ",
  },
  {
    title: "تماس",
    href: "/contact",
    src: "/header/navigation/contact.svg",
    alt: "ورود به تماس با ما",
  },
];
function NavList({ drawerOpen, isMobileMode }) {
  return (
    <ul
      style={{
        backgroundColor: drawerOpen
          ? "rgb(75 73 101 / var(--tw-bg-opacity, 1))"
          : "transparent",
      }}
      className="flex flex-col md:flex md:flex-row relative bg-opacity-5 md:bg-opacity-0 px-2 py-4 md:bg-none md:p-0 justify-start md:justify-center gap-3 md:gap-10 items-center transition-all duration-300 delay-150"
    >
      {navList.map((link, index) => (
        <li
          key={`${index}-${Math.floor(Math.random() * 1000)}`}
          style={{ left: isMobileMode && (drawerOpen ? 0 : "-200px") }}
          className="w-24 h-12 relative bg-ghost-100 shadow md:shadow-none duration-300"
        >
          <NavLink
            title={link.title}
            href={link.href}
            src={link.src}
            alt={link.alt}
          />
        </li>
      ))}
    </ul>
  );
}

export default NavList;
