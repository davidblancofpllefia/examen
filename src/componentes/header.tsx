"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button" 
import { Logo } from "./logo" 

export default function Header() {
  return (
    <header className="text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center text-white no-underline">
            <Logo />
            <span className="ml-2 text-[20px] font-bold leading-none text-white">
              Pandem
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className="flex items-center justify-center text-secondary hover:opacity-80 transition-opacity no-underline leading-none py-0">
                    Docs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="flex items-center justify-center text-secondary hover:opacity-80 transition-opacity no-underline leading-none py-0">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/status" legacyBehavior passHref>
                  <NavigationMenuLink className="flex items-center justify-center text-secondary hover:opacity-80 transition-opacity no-underline leading-none py-0">
                    Status
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faqs" legacyBehavior passHref>
                  <NavigationMenuLink className="flex items-center justify-center text-secondary hover:opacity-80 transition-opacity no-underline leading-none py-0">
                    FAQs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="flex items-center justify-center text-secondary hover:opacity-80 transition-opacity no-underline leading-none py-0">
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white bg-black ">
            Login
          </button>

          <Button className="bg-white btn btn-light  rounded-pill    ">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}

