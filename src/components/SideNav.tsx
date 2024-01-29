"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

import useWindowDimensions from "@/hooks/useScreenSize";
import { useWindowSize } from "@uidotdev/usehooks";

import { PiCards } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { RiHeartLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { PiRepeat } from "react-icons/pi";
import { PiHeartStraight } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";

export default function SideNav() {
  const { width } = useWindowSize();

  // const { isMobile } = useWindowDimensions();

  const isMobile = width && width <= 768;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <aside
      className={cn(
        isMobile
          ? "fixed z-50 top-0 bottom-0 h-full flex w-full flex-col justify-between transition-all duration-500 dark:bg-gray-800 px-8 overflow-x-hidden"
          : " bg-white flex h-screen sticky top-0 flex-col justify-between transition-all duration-500 dark:bg-gray-800 px-8 overflow-x-hidden",
        showMenu ? "w-64" : "w-20 px-1 items-center ",
        !isMobile || showMenu ? "bg-white" : "bg-transparent"
      )}
    >
      <div className={cn(" py-8", showMenu ? "" : "items-center")}>
        {showMenu ? (
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-8">Menu</h2>
            <IoMdClose
              className="w-7 h-7 mb-8 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>
        ) : (
          <div
            className={cn(
              " text-black flex rounded-full w-10 h-10 items-center justify-center",
              isMobile && "ring-1 ring-gray-300"
            )}
          >
            <IoIosMenu
              className={cn("w-8 h-8 mx-auto cursor-pointer")}
              onClick={() => setShowMenu(true)}
            />
          </div>
        )}
        <ul className={cn("space-y-4 ", showMenu ? "" : "mt-6 gap-4")}>
          <li>
            <Link href={"/"}>
              {showMenu ? (
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => setShowMenu(false)}
                >
                  Home
                </Button>
              ) : (
                <GoHome
                  className={cn("w-8 h-8 mx-auto ", isMobile && "hidden")}
                />
              )}
            </Link>
          </li>
          <li>
            <Link href={"/card-groups"}>
              {showMenu ? (
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => setShowMenu(false)}
                >
                  Card Groups
                </Button>
              ) : (
                <PiCards
                  className={cn("w-8 h-8 mx-auto ", isMobile && "hidden")}
                />
              )}
            </Link>
          </li>
          <li>
            <Link href={"/?card-group=liked"}>
              {showMenu ? (
                <Button
                  className="w-full bg-red-500 text-white"
                  variant="outline"
                  onClick={() => setShowMenu(false)}
                >
                  Liked Cards
                </Button>
              ) : (
                <PiHeartStraight
                  className={cn(
                    "w-8 h-8 mx-auto text-red-500",
                    isMobile && "hidden"
                  )}
                />
              )}
            </Link>
          </li>
          <li>
            <Link href={"/?card-group=saved"}>
              {showMenu ? (
                <Button
                  className="w-full bg-green-500 text-white"
                  variant="outline"
                  onClick={() => setShowMenu(false)}
                >
                  Saved Cards
                </Button>
              ) : (
                <PiRepeat
                  className={cn(
                    "w-8 h-8 mx-auto text-green-500 ",
                    isMobile && "hidden"
                  )}
                />
              )}
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={cn(
          "flex items-center justify-between pb-8 ",
          !showMenu && isMobile && "hidden"
        )}
      >
        <img
          alt="User Avatar"
          className={cn(
            "rounded-full transition-all duration-500 ",
            showMenu ? "h-12 w-12" : "h-8 w-8"
          )}
          height="50"
          src="/next.svg"
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width="50"
        />
        {showMenu ? <Button variant="outline">Login</Button> : null}
      </div>
    </aside>
  );
}
