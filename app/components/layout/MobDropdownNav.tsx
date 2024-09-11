import React, { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import Link from "next/link";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Offer", path: "/offer" },
  { id: 3, title: "Exclusive Offers", path: "/exclusive-offer" },
  { id: 4, title: "Best Offer ", path: "/best-offer" },
  { id: 5, title: "Privacy Policy", path: "/privacy-policy" },
];

const MobDropdownNav = ({ children }: { children: ReactNode }) => {
  return (
    <DropdownMenu>
      {children}
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {navigation?.map((nav) => (
            <DropdownMenuItem key={nav.id}>
              <Link href={`${nav.path}`}>{nav.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobDropdownNav;
