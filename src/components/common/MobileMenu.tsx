"use client";

import React, { useState } from "react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetOverlay,
} from "@/src/components/ui/sheet";
import { Sheet } from "@/src/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/src/constants/navLink";

const MobileMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          {isSheetOpen ? (
            <X className="h-10 w-10 stroke-2 stroke-violet-1" />
          ) : (
            <Menu className="h-10 w-10 stroke-2 stroke-violet-1" />
          )}
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="h-[calc(100dvh-82px)] bg-background border-t-0 outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent w-full !max-w-none"
        >
          <div className="pt-[60px]">
            <nav>
              {navLinks.map((item, idx) => (
                <div key={item.itemName} className="mb-4">
                  <div
                    className="flex items-center justify-between"
                    onClick={() => toggleSubMenu(idx)}
                  >
                    <Link
                      href={item.link || "#"}
                      className="text-lg font-medium"
                      target={item.link?.startsWith("http") ? "_blank" : "_self"}
                      rel={item.link?.startsWith("http") ? "noopener noreferrer" : ""}
                      onClick={() => item.link && setIsSheetOpen(false)}
                    >
                      <SheetTitle className="text-white-1 font-normal">{item.itemName}</SheetTitle>
                    </Link>
                    {item.subMenu && <ChevronDown className="ml-2" />}
                  </div>
                  {openSubMenuIndex === idx && item.subMenu && (
                    <div className="pl-4 mt-2">
                      {item.subMenu.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.subMenuLink}
                          className="block py-1"
                          target={subItem.subMenuLink.startsWith("http") ? "_blank" : "_self"}
                          rel={subItem.subMenuLink.startsWith("http") ? "noopener noreferrer" : ""}
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {subItem.subMenuName}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mb-4">
                <Link
                  href="/contact-us"
                  className="text-lg font-medium"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <SheetTitle className="text-white-1 font-normal">Contact</SheetTitle>
                </Link>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
