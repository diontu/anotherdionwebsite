"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/shadcn-components/ui/navigation-menu";
import Link from "next/link";

const Navigation = ({
  navLinks,
}: {
  navLinks: { title: string; path: string }[];
}) => {
  return (
    <div className="flex justify-between bg-slate-100 border-b-2">
      <span></span>
      <NavigationMenu className="flex py-4 pr-10 w-full bg-slate-100">
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.title}>
              <Link href={link.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
