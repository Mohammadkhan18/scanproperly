"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../../public/logo.svg";
import { useRouter } from "next/navigation";

const AdminNavbar = () => {
  const rout = useRouter();
  return (
    <div className="container mx-auto px-14 py-[24px] flex items-center justify-between">
      <div className="flex items-center gap-[8px]">
        <Image
          src={logo}
          alt="Logo"
          quality={100}
          height={53.33}
          width={152.44}
          className="cursor-pointer"
          onClick={() => {
            rout.push("/admin");
          }}
        />
      </div>
      <div className="flex items-center justify-end gap-5">
        <Link href={"/company"}>Company</Link>
        <Link href={"/blog"}>Blog</Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
