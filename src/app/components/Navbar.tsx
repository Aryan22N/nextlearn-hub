"use client";
import { HoveredLink, Menu, MenuItem, ProductItem,MenuItems } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

 

export function Navbar({ className }: { className?: string }) {
  
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div className="fixed top-2 inset-x-0 max-w-7xl mx-auto z-50 px-4 flex   md:flex-row items-center justify-between gap-6 ">
  {/* Logo - shown only when hamburger menu is closed */}
  {!isOpen && (
    <div className="block xl:block">
      <h1 className="text-2xl xl:text-4xl md:text-3xl  font-medium text-white">Nextlearn-Hub</h1>
    </div>
  )}


    <div
      className={cn(" hidden xl:block w-full md:max-w-2xl", className)}
    >
     <Menu setActive={setActive}>
        {/* Services Section Navbar */}

        <MenuItem setActive={setActive} active={active} item="Home"> </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About"> </MenuItem>
        <MenuItems setActive={setActive} active={active} item="Blog"> </MenuItems>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Systum Design</HoveredLink>
            <HoveredLink href="/seo">DSA Learning</HoveredLink>
            <HoveredLink href="/branding">AI Integration</HoveredLink>
          </div>
        </MenuItem>
        {/* Products Section Navbar */}
        <MenuItems setActive={setActive} active={active} item="Products">
          <div className="hidden md:grid text-sm grid-cols-2 gap-10 p-4">
            <ProductItem
              title="AI Video Interview "
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title=" DSA Roadmap with Guided Challenges"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Step-by-step DSA roadmap with coding challenges to ace technical interviews."
            />
            <ProductItem
              title="Resume Builder + AI Review"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Create job-ready resumes with AI-powered feedback and real-time suggestions."
            />
            <ProductItem
              title="Mock HR Prepration"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Practice HR interviews with AI feedback on your answers, tone, and confidence."
            />
          </div>
        </MenuItems>
        {/* Pricing Section Navbar */}
        <MenuItems setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItems>

        <MenuItem setActive={setActive} active={active} item="Contact"> </MenuItem>
      
      </Menu>
    </div>
     {/* Login Buttons */}
    <div className="hidden xl:flex gap-4">
       <HoverBorderGradient
      containerClassName="rounded-full"
        as="button"
        className="hidden md:flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">        <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
       <Link href="/" className="text-white  "> Login with GitHub</Link>
    </HoverBorderGradient>
    
        <HoverBorderGradient
      containerClassName="rounded-full"
        as="button"
      className="hidden md:flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
       <Link href="/" className="text-white  "> Login</Link>
    </HoverBorderGradient>
    </div>


{!isOpen && (
  <div className="xl:hidden ml-auto">
    <button onClick={() => setIsOpen(true)}>
      <HiMenuAlt3 size={28} className="text-white" />
    </button>
  </div>
)}
     {/* ✅ Mobile Menu Section — this must be inside return */}
     {isOpen && (
  <div className="xl:hidden px-2 pb-4 w-full relative bg-[#0A0A0A] rounded-lg shadow-lg">
    {/* Close Icon */}
    <button
      className="absolute top-4 right-4"
      onClick={() => setIsOpen(false)}
    >
      <HiX size={28} />
    </button>

    {/* Logo on top */}
    <div className="mt-4 mb-6">
      <h1 className="text-3xl  text-white">Nextlearn-Hub</h1>
    </div>

    {/* Menu Items */}
    <ul className="flex flex-col gap-4 font-medium text-white font-inter text-[18px]">
      <li>Home</li>
      <li>About</li>
      <li>Blog</li>
      <li>Services</li>
      <li>
      <HoverBorderGradient
       containerClassName="rounded-full"
        as="button" 
        className="w-full rounded-full bg-[#121316] text-white px-6 py-2">
          Open App
        </HoverBorderGradient>
      </li>
    </ul>
  </div>
)}


    </div>
  );
}