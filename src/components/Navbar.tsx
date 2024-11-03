"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Togglesm from "./SmToggle";

export function NavBar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-full h-28 bg-white border flex items-center justify-between z-50", className)}
    >
        <Image src="/logo.png" alt="logo" width="250" height="200" className="w-56 h-52 lg:mx-2 object-cover"/>
        <div className="mx-auto sm-hidden">
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={null} item="Home">
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Services">
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">Web Development</HoveredLink>
                    <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                    <HoveredLink href="/branding">Branding</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={null} item="About">
                </MenuItem>
                <MenuItem setActive={setActive} active={null} item="Contact">
                </MenuItem>
            </Menu>
        </div>
        <div className="lg:hidden md:hidden">
            <Togglesm />
        </div>
    </div>
  );
}
