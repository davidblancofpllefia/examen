// components/Footer.jsx
'use client' 

import Link from 'next/link'
import { Logo } from './logo' 

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center text-white no-underline">
          <Logo />
          <span
            className="ml-2 text-[20px] font-bold leading-7 text-white"
          >
            Pandem
          </span>
        </Link>

        <nav> 
          <ul className="flex items-center gap-6 p-0 m-0 list-none"> 
            <li>
              <Link href="/contact" className="text-white text-sm hover:opacity-80 transition-opacity no-underline">
                contact us
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="text-white text-sm hover:opacity-80 transition-opacity no-underline">
                terms of service
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

