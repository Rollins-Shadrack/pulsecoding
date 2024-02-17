"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon} from "lucide-react";
import Button from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Container from "./Container";


const Navbar = ({data}) => {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();


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
      <nav className={`py-2  ${isSticky ? "sticky top-0 left-0 right-0 border shadow-xl bg-white duration-300 z-[999]" : ""}`}>
        <Container className="flex justify-between items-center text-base ">
          <Link className="" href="/">
            <Image src={data.logo} width={100} height={100} className="" alt="pulsecoding.com" />{" "}
          </Link>

          {/* Navbar items for large screens */}
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {data.navItems.map(({ link, path }) => (
              <Link
                key={path}
                href={path}
                className={`block text-base text-brandDark hover:text-brandPrimary ${pathname === path && "font-medium"}  whitespace-nowrap`}>
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-10 ml-2 flex items-center">
            {/* button for large devices */}
            <Link className="md:flex hidden" href="/">
              <Button text={data.button} className="text-white bg-black hover:bg-brandSecondary uppercase" />
            </Link>

            {/* menu btns */}
            <div className="md:hidden">
              <DropdownMenu className="">
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none text-brandDark focus:text-brandSecondDark">
                    <MenuIcon className="h-10 w-10 " />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-4 ">
                  <DropdownMenuGroup>
                    {data.navItems.map(({ link, path }) => (
                      <DropdownMenuItem key={link}>
                        <Link
                          href={path}
                          className={`block text-base text-brandDark hover:text-brandPrimary  whitespace-nowrap ${
                            pathname === path && "font-medium"
                          }`}>
                          {link}
                        </Link>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem>
                      Apply Now
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
