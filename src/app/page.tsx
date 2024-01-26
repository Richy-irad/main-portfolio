import Image from "next/image";
import CallToAction from "@/components/call-to-action";
import { Montserrat } from "next/font/google";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* the hero section */}
      {/* occupies min-device heigt */}
      <div className="min-h-screen h-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-12 w-full items-start">
          <div className="flex flex-col gap-5">
            <h6 className="text-foreground">Hi, my name is</h6>
            <div className="font-bold">
              <h1 className="text-light-100 text-[64px] capitalize leading-tight">
                richard iradukunda.
              </h1>
              <h2 className="text-light-20 text-[64px] leading-tight">
                I engineer full-stack solutions.
              </h2>
            </div>
            <p className="w-full lg:w-1/2">
              As a seasoned Full Stack Web Developer, I, a digital nomad
              currently residing in Montreal, Canada, bring over four years of
              expertise in web app development. I am committed to empowering
              individuals and businesses by creating impactful platforms,
              applications, and sites that enhance customer value and contribute
              to their success.
            </p>
          </div>
          <CallToAction text="Work with me" />
        </div>
      </div>
      <div id="about">
        <div className="flex flex-col gap-12 items-start">
          <div className="flex gap-4 items-center w-1/2">
            <h1 className="text-[40px] font-bold space-x-3 shrink-0">
              <span className={`${montserrat.className} text-foreground`}>
                01.
              </span>
              <span className="text-light-100 capitalize">about me</span>
            </h1>
            <hr className="bg-light-300 w-full" />
          </div>
          <div className="flex lg:gap-28 items-start">
            <div className="flex flex-col gap-6 items-start grow">
              <p>
                Greetings! I'm Richard Dushime Iradukunda, a full-stack web
                developer happily calling Montreal, Canada, my home. My journey
                into the world of programming began in 2015 during the final
                stretch of high school. It all started with visual basic, and I
                found myself captivated by the art of crafting simple programs.
              </p>
              <p>
                I kicked off my career as a backend engineer, relishing the
                intricacies of server-side magic. Yet, as any seasoned chef
                knows, a delightful dish is not just about the recipe—it's also
                about the presentation. So, I ventured into frontend realms,
                mastering both the art of design and the craft of development.
              </p>
              <p>
                Presently, I'm dancing in the freelance arena as a full-stack
                sorcerer, conjuring digital wonders for clients on UpWork. Join
                me on this coding adventure, where we turn ideas into
                interactive experiences!
              </p>
              <p>Here are some of the technologies I have been working with:</p>
              <div className="flex gap-12">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    Python
                  </div>
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    JavaScript
                  </div>
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    ReactJS 17+
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    Django
                  </div>
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    TypeScript
                  </div>
                  <div className="flex gap-3 items-center">
                    <ChevronRightIcon className="w-3 h-3 text-foreground" />
                    Next.js
                  </div>
                </div>
              </div>
            </div>
            {/* the image */}
            <Image
              src="/hero-image.jpg"
              width={320}
              height={320}
              alt="hero image"
              className="shadow-3xl grow-0 shrink-0 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-24 items-start">
        {/* projects */}
        <div id="projects"></div>
        {/* services */}
        <div id="services"></div>
        {/* testimonials */}
        <div id="testimonials"></div>
        {/* get in touch */}
        <div id="get-in-touch"></div>
      </div>
    </>
  );
}
