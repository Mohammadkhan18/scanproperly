"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

const navigation = [
  { title: "Home", path: "/" },
  { title: "Offer", path: "/offer" },
  { title: "Exclusive Offers", path: "/exclusive-offer" },
  { title: "Best Offer ", path: "/best-offer" },
  { title: "Privacy Policy", path: "/privacy-policy" },
];

const NavbarTab = () => {
  const route = usePathname();
  console.log("route", route);
  return (
    <div className="w-full bg-white rounded-lg px-4 py-2">
      <div className="flex list-none items-center justify-between">
        {navigation?.map(
          (nav: { title: string; path: string }, index: number) => (
            <Link
              key={index}
              href={`${nav.path}`}
              className={`rounded-lg px-[16px] py-[8px] ${
                nav.path === route ? "bg-primary text-white" : ""
              } `}
            >
              {nav.title}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default NavbarTab;