"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function AboutBackground() {
  return (
    <div className="h-[20rem] w-full rounded-md my-0 bg-[#454546] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl m-auto">
        <h1 className="relative z-10 pt-24 text-lg md:text-7xl  text-center text-white font-bold">
          About
        </h1>
      </div>
      <BackgroundBeams />
    </div>
  );
}
