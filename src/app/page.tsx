// app/page.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image" 

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
                         flex items-center gap-2 no-underline"
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
  src="/images/d6f5b8264acc86fb6785630909bde7ee015b304e.png"
  alt="Product screenshot displaying insights"
  width={1200}
  height={700}
  quality={90}
  className="rounded-lg shadow-2xl border border-gray-800"
/>



        </div>
      </section>

<section className="text-white py-5 py-md-5 mt-5">
    <div className="container">
        <h2 className="text-center mb-5 display-4">Quick solutions, less stress</h2>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="text-center text-md-start">
                    <h3 className="h4 mb-3">Fix emergencies fast</h3>
                    <p className="lead">Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks</p>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="text-center text-md-start">
                    <h3 className="h4 mb-3">Universally compatible</h3>
                    <p className="lead">Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system</p>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="text-center text-md-start">
                    <h3 className="h4 mb-3">Secure for your org</h3>
                    <p className="lead">We keep your data safe by taking top security measures.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className=" text-white py-5 py-md-5">
    <div className="container">
        <h2 className="text-center mb-5 display-4">Instant setup, no custom code</h2>
        <p className="text-center lead mb-5 px-lg-5">
            Invite the bot, pick a channel, and you"re set—no custom code needed, and no vendor lock-in.
        </p>
        <div className="d-flex justify-content-center">
            <img 
                src="path/to/your/image_64fb69.png" 
                alt="Product interface showing content overview with hashtags and keyword frequency" 
                className="img-fluid rounded shadow-lg" 
                style={{ maxWidth: "800px", width: "100%" }} 
            />
        </div>
    </div>
</section>

<section className=" text-white py-5 py-md-5">
    <div className="container text-center">
        <h2 className="mb-4 display-4">Get in touch</h2>
        <p className="lead mb-5">Request a demo, or hop on a call.</p>
        <a href="#" className="btn btn-light btn-lg rounded-pill px-4">
            Get started <i className="bi bi-arrow-right"></i>
        </a>
    </div>
</section>
    </>
  )
}