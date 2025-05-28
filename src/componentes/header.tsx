'use client'

import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button' 
import { Logo } from './logo' 

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4"> 
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center text-white no-underline">
            <Logo /> 
            <span
              className="ml-2 text-[20px] font-bold leading-7 text-white"
            >
              Pandem
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 "> 
              {['Docs', 'Pricing', 'Status', 'FAQs', 'Contact Us'].map((item) => (
                <NavigationMenuItem key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s/g, '')}`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className="flex items-center justify-center text-secondary hover:opacity-80 transition-opacity no-underline" 
                    >
                      {item}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4"> 
          <Button variant="link" className="text-white text-sm hover:opacity-80 transition-opacity no-underline bg-transparent"> 
            Login
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200"> 
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

