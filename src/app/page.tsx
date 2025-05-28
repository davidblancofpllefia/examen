// app/page.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image' 

export default function HomePage() {
  return (
    <>
      <section className="bg-black text-white py-20 md:py-32 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Information you need during <br /> on-call emergencies
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-white text-black hover:bg-gray-200
                         text-base font-medium px-6 py-3 rounded-md shadow-lg
                         flex items-center gap-2"
              asChild
            >
              <Link href="/get-started">
                Get started <span className="ml-0.5 text-sm">&gt;</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 px-4 flex justify-center">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/images/your-screenshot.jpg" 
            alt="Product screenshot displaying insights"
              width={1200} 
            height={700} 
            quality={90} 
            className="rounded-lg shadow-2xl border border-gray-800" 
          />
        </div>
      </section>
    </>
  )
}