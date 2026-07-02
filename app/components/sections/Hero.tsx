"use client";

import Globe from "../globe/Globe";
import Reveal from "../layout/Reveal";
import { motion } from "framer-motion";

export default function Hero() {

  const quickLinks = [
    {
      title: "Resume",
      desc: "View / Download",
      href: "/resume.pdf",
    },
    {
      title: "GitHub",
      desc: "Explore my code",
      href: "https://github.com/ZeroDawnDev",
    },
    {
      title: "Projects",
      desc: "Featured work",
      href: "#projects",
    },
    {
      title: "Contact",
      desc: "Let's connect",
      href: "/contact",
    },
  ];

  return (
    <section
      className="
      relative
      z-10
      min-h-[85vh]
      flex
      items-start
      px-6
      
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        items-center
        w-full
        "
      >

        <div className="flex flex-col items-start">

          <Reveal>
            <p
              className="
              text-purple-400/70
              tracking-[0.45em]
              text-xs
              mb-3
              "
            >
              ᚨ ᚱ ᚲ ᛞ ᛟ ᚹ
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.img
              src="/hlogo.png"
              alt="ZERODAWNDEV"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
              w-[520px]
              max-w-full
              object-contain
              "
            />
          </Reveal>

          <Reveal delay={0.2}>
            <h2
              className="
              mt-1
              text-xl
              md:text-2xl
              tracking-[0.18em]
              text-purple-400
              "
            >
              AI ENGINEER & DEVELOPER
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p
              className="
              mt-3
              max-w-[520px]
              text-gray-400
              text-lg
              leading-relaxed
              "
            >
              Building intelligent systems,
              neural interfaces,
              AI powered experiences,
              immersive web technologies,
              and futuristic digital products.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div
              className="
              flex
              flex-wrap
              gap-4
              mt-8
              "
            >
              {quickLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  className="
                  px-5
                  py-3
                  rounded-2xl
                  border border-purple-500/10
                  bg-white/[0.03]
                  hover:border-purple-500/30
                  hover:bg-purple-500/[0.05]
                  transition
                  "
                >
                  <div className="text-sm font-medium">
                    {item.title}
                  </div>

                  <div className="text-xs text-gray-500 mt-1">
                    {item.desc}
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

        </div>

        <Reveal delay={0.5}>
          <div
            className="
            relative
            flex
            justify-center
            items-center
            "
          >
            <div
              className="
              absolute
              w-[620px]
              h-[620px]
              rounded-full
              bg-purple-500/10
              blur-[140px]
              animate-pulse
              "
            />

            <div
              className="
              absolute
              h-[900px]
              w-[2px]
              bg-gradient-to-b
              from-transparent
              via-purple-500/20
              to-transparent
              blur-sm
              "
            />

            <div
              className="
              relative
              z-10
              w-full
              max-w-[700px]
              "
            >
              <Globe />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}