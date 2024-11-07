import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

export function DotBackground() {
  return (
    <div className="h-[25rem] w-full dark:bg-black bg-[#b8b0b0]  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="space-y-5 text-start">
        <h1 className="font-extrabold text-4xl">Info</h1>
        <div className="flex gap-2 items-center">
            <MdOutlineMailOutline className="text-black" />
            <p>info@getintouch.we</p>
        </div>
        <div className="flex gap-2 items-center ">
            <IoCallOutline className="text-black" />
            <p>+2348122595810</p>
        </div>
        <div className="flex gap-2 items-center ">
            <CiLocationOn className="text-black" />
            <p>Uniosun</p>
        </div>
        <div className="flex gap-2 items-center">
            <IoIosTimer className="text-black" />
            <p>09:00 - 18:00</p>
        </div>
      </div>
    </div>
  );
}
