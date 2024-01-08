"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { LuAlignJustify, LuX } from "react-icons/lu";
import { useState } from "react";
import { cn } from "@/app/utils";

const navItems = [
  {
    label: "About Us",
    href: "#about-us",
  },
  {
    label: "How it Works",
    href: "#how-it-works",
  },
  {
    label: "Contact Us",
    href: "#contact-us",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={"inset-x-0 fixed inset-0 h-20 bg-white shadow-md z-50"}>
      {/* mobile nave */}
      <div
        className={cn(
          "fixed h-full w-screen md:hidden bg-black/50 backdrop-blur-sm z-[100] transition-all -translate-x-full",
          open && "translate-x-0",
        )}
      >
        <div
          className={
            "bg-white text-new-sky absolute h-screen left-0 top-0 p-8 flex flex-col space-y-4"
          }
        >
          <div className={"w-full flex justify-end "}>
            <span
              onClick={() => setOpen(false)}
              className={
                "inline-block p-3 hover:bg-neutral-100 border rounded-full cursor-pointer"
              }
            >
              <LuX className={"w-5 h-5"} />
            </span>
          </div>
          <div className={"w-44"}>
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={`${item.href}-${index}`}
                className={
                  "inline-block py-1.5 px-3 hover:bg-neutral-100 transition w-full"
                }
              >
                {item.label}
              </Link>
            ))}

            <div className={"flex-col flex space-y-4 md:hidden mt-5"}>
              <Button
                variant={"solid"}
                className={"rounded bg-new-sky-light text-white font-medium"}
              >
                Login
              </Button>
              <Button
                className={"rounded bg-new-sky text-white px-5 py-1 w-full"}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={
          "max-w-screen-xl flex items-center justify-between px-5 py-3 mx-auto "
        }
      >
        <div className={"relative w-24 md:w-28 h-12"}>
          <Image
            src={"/assets/logo.svg"}
            alt={"logo"}
            fill
            className={"object-contain"}
          />
        </div>
        <div
          className={
            "text-base font-normal text-new-sky hidden md:flex space-x-3 hover:rounded"
          }
        >
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={`${item.href}-${index}`}
              className={
                "inline-block py-1.5 px-3 hover:bg-neutral-100 transition"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className={"space-x-4 hidden md:flex"}>
          <Button variant={"light"} className={"rounded"}>
            Login
          </Button>
          <Button className={"rounded bg-new-sky text-white px-5 py-1"}>
            Register
          </Button>
        </div>
        <div className={"md:hidden"} onClick={() => setOpen(true)}>
          <LuAlignJustify className={"w-5 h-5 "} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
