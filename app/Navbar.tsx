"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const navbarItems = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "projects", path: "/projects", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);
  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%]
    z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 
      backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
      >
        {navbarItems.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "text-accent"
              } hover:text-accent transition-all duration-300 relative flex items-center group`}
            >
              {/*tooltip*/}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none text-primary  font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>

              {/*icons*/}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
