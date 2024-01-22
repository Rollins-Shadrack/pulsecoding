"use client";
import { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";
import { navItems } from "@/constants/data/navbar";
import Button from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-[999]">
      <nav className={`py-2  ${isSticky ? "sticky top-0 left-0 right-0 border bg-brandLight duration-300 z-[999]" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8 lg:px-14 px-4">
          <Link className="" href="/">
            <Image src={logo} width={120} height={120} className="" />{" "}
          </Link>

          {/* Navbar items for large screens */}
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => (
              <Link key={path} href={path} className="block text-base text-brandDark hover:text-brandPrimary first:font-medium whitespace-nowrap">
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-10 flex items-center">
            {/* button for large devices */}
            <Link href="/">
              <Button text="Apply Now" className="text-white bg-brandPrimary hover:bg-brandSecondary uppercase" />
            </Link>

            {/* menu btns */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none text-brandDark focus:text-brandSecondDark">
                    <MenuIcon className="h-10 w-10 " />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-4 z-[9999]">
                  <DropdownMenuGroup>
                    {navItems.map(({ link, path }) => (
                      <DropdownMenuItem key={link}>
                        <Link href={path} className="block text-base text-brandDark hover:text-brandPrimary first:font-medium whitespace-nowrap">
                          {link}
                        </Link>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
