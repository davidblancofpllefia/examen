// app/page.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function HomePage() {
  return (
    <>
      <section className="text-white py-20 md:py-32 flex flex-col items-center justify-center text-center px-4 mt-5">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-3 display-3 display-lg-2 fw-bold">
            Information you need during <br className="d-none d-md-inline"/>on-call emergencies
        </h2> 
          <p className="text-lg md:text-xl text-secondary mb-5 max-w-2xl mx-auto">
            Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-white text-black hover:bg-gray-200
                         text-base font-medium px-6 py-3 rounded-md shadow-lg
                         flex items-center gap-2 no-underline"
              asChild
            >
          <Link href="/" className="btn btn-light btn-lg rounded-pill px-4 mt-3">
    Get started <span className="ml-0.5 text-sm">&gt;</span>
          </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="y-16 px-4 flex justify-center mt-5">
        <div className="max-w-6xl mx-auto">
        <img 
        src="/foto1.png" 
        alt="Descripción de la imagen"
        width={1024}
        height={633} 
        className="rounded shadow-lg"
        style={{ width: "1024px", height: "632px", borderRadius: "4px" }}
        />
        </div>
      </section>


<section className="text-white py-5 py-md-5 mt-5">
    <div className="container">
        <h2 className="text-center mb-3 display-3 display-lg-2 fw-bold">Quick solutions, less stress</h2>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="text-center text-md-start text-secondary">
                    <h3 className="h4 mb-3">Fix emergencies fast</h3>
                    <p className="lead">Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks</p>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="text-center text-md-start text-secondary">
                    <h3 className="h4 mb-3">Universally compatible</h3>
                    <p className="lead">Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system</p>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="text-center text-md-start text-secondary">
                    <h3 className="h4 mb-3">Secure for your org</h3>
                    <p className="lead">We keep your data safe by taking top security measures.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className=" text-white py-5 py-md-5">
    <div className="container">
        <h2 className="text-center mb-3 display-3 display-lg-2 fw-bold">Instant setup, no custom code</h2>
        <p className="text-center lead mb-5 px-lg-5">
           Invite the bot, pick a channel, and you&apos;re set—no custom code needed, and no vendor lock-in.
        </p>
        <div className="d-flex justify-content-center">
            <img 
        src="/foto1.png" 
        alt="Descripción de la imagen"
        width={1024}
        height={633} 
        className="rounded shadow-lg"
        style={{ width: "672px", height: "415px", borderRadius: "4px" }}
        />
        </div>
    </div>
</section>

<section className=" text-white py-5 py-md-5">
    <div className="container text-center">
        <h2 className="text-center mb-3 display-3 display-lg-2 fw-bold">Get in touch</h2>
        <p className="lead mb-5">Request a demo, or hop on a call.</p>
        <Button
              className="bg-white text-black hover:bg-gray-200
                         text-base font-medium px-6 py-3 rounded-md shadow-lg
                         flex items-center gap-2 no-underline"
              asChild
            >
          <Link href="/" className="btn btn-light btn-lg rounded-pill px-4 mt-3">
    Get started <span className="ml-0.5 text-sm">&gt;</span>
          </Link>
            </Button>
    </div>
</section>
    </>
  )
}