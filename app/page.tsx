"use client";

import NeuralBackground from "./components/NeuralBackground";
import RunicBackground from "./components/RunicBackground";
import NoiseOverlay from "./components/NoiseOverlay";
import Globe from "./components/Globe";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {

  const quickLinks = [
    {
      title: "Resume",
      desc: "View / Download",
    },
    {
      title: "GitHub",
      desc: "Explore my code",
    },
    {
      title: "Projects",
      desc: "Featured work",
    },
    {
      title: "Contact",
      desc: "Let's connect",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUNDS */}
      <NeuralBackground />
      <RunicBackground />
      <NoiseOverlay />

      {/* GLOBAL PURPLE ATMOSPHERE */}
      <div
        className="
          fixed inset-0 z-[1]
          bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_65%)]
          pointer-events-none
        "
      />

      {/* NAVBAR */}
      <nav
        className="
          fixed top-0 left-0 w-full z-50
          backdrop-blur-xl
          bg-black/20
          border-b border-purple-500/10
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            px-6 py-5
            flex items-center justify-between
          "
        >

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <div
              className="
                w-14 h-14
                rounded-full
                border border-purple-500/30
                flex items-center justify-center
                bg-black/40
                text-xl font-bold
                shadow-[0_0_20px_rgba(168,85,247,0.35)]
              "
            >
              A
            </div>

            <div className="tracking-[0.45em] text-sm text-white/90">
              ALLEN
            </div>

          </div>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-12 text-sm text-white/70">

            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">PROJECTS</a>
            <a href="#">TECH</a>
            <a href="#">CONTACT</a>

          </div>

          {/* BUTTON */}
          <a
            href="/resume.pdf"
            download
            className="
              hidden md:flex
              px-5 py-3
              rounded-xl
              border border-purple-500/30
              bg-purple-500/10
              backdrop-blur-xl
              hover:bg-purple-500/20
              transition
              shadow-[0_0_25px_rgba(168,85,247,0.25)]
            "
          >
            GET RESUME →
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section
        className="
          relative z-10
          min-h-screen
          flex items-center
          px-6
          pt-32
        "
      >

        <div
          className="
            max-w-7xl mx-auto
            grid lg:grid-cols-2
            gap-20
            items-center
            w-full
          "
        >

          {/* LEFT */}
          <div>

            {/* SMALL RUNIC TEXT */}
            <p
              className="
                text-purple-400/70
                tracking-[0.45em]
                text-xs
                mb-6
              "
            >
              ᚨ ᚱ ᚲ ᛞ ᛟ ᚹ
            </p>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

              className="
                text-7xl
                md:text-[9rem]
                font-black
                tracking-[-0.06em]
                leading-[0.9]
                bg-gradient-to-b
                from-white
                via-purple-200
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              ALLEN
            </motion.h1>

            {/* SUBTITLE */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}

              className="
                mt-4
                text-2xl
                tracking-[0.25em]
                text-purple-300
                font-light
              "
            >
              AI ENGINEER & DEVELOPER
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}

              className="
                mt-10
                max-w-xl
                text-gray-400
                text-lg
                leading-relaxed
              "
            >
              Building intelligent systems, immersive neural interfaces,
              AI-powered experiences, NFC identity systems,
              and futuristic digital products.
            </motion.p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="/resume.pdf"
                download
                className="
                  px-7 py-4
                  rounded-xl
                  bg-purple-600
                  hover:bg-purple-500
                  transition
                  shadow-[0_0_40px_rgba(168,85,247,0.45)]
                "
              >
                EXPLORE →
              </a>

              <a
                href="https://github.com/ZeroDawnDev"
                target="_blank"
                className="
                  px-7 py-4
                  rounded-xl
                  border border-purple-500/20
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:border-purple-500/40
                  transition
                "
              >
                GITHUB →
              </a>

            </div>

            {/* QUICK LINKS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-24">

              {quickLinks.map((item) => (

                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}

                  className="
                    p-6
                    rounded-3xl
                    bg-white/[0.03]
                    border border-purple-500/10
                    backdrop-blur-xl
                    hover:border-purple-500/30
                    transition
                    shadow-[0_0_25px_rgba(168,85,247,0.08)]
                  "
                >

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">

            {/* VERTICAL ENERGY BEAM */}
            <div
              className="
                absolute
                h-[1000px]
                w-[3px]
                bg-gradient-to-b
                from-transparent
                via-purple-500/50
                to-transparent
                blur-sm
              "
            />

            {/* GLOW ORB */}
            <div
              className="
                absolute
                w-[700px]
                h-[700px]
                rounded-full
                bg-purple-500/10
                blur-[140px]
              "
            />

            {/* OUTER RINGS */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div
                className="
                  absolute
                  w-[520px]
                  h-[520px]
                  rounded-full
                  border border-purple-500/10
                "
              />

              <div
                className="
                  absolute
                  w-[680px]
                  h-[680px]
                  rounded-full
                  border border-purple-500/5
                "
              />

            </div>

            {/* GLOBE */}
            <div className="relative z-10 w-full max-w-[700px]">
              <Globe />
            </div>

            {/* HOLOGRAM PLATFORM */}
            <div
              className="
                absolute
                bottom-[-70px]
                w-[520px]
                h-[120px]
                rounded-full
                border border-purple-500/20
                blur-sm
              "
            />

            <div
              className="
                absolute
                bottom-[-85px]
                w-[650px]
                h-[160px]
                rounded-full
                border border-purple-500/10
              "
            />

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="relative z-10 px-6 pb-32">

        <div className="max-w-7xl mx-auto">

          <p
            className="
              text-sm
              tracking-[0.4em]
              text-purple-400
              mb-12
            "
          >
            FEATURED SYSTEMS
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "GAIA Assistant",
                desc: "Voice-driven AI assistant powered by reinforcement learning, neural interactions, and intelligent automation.",
              },
              {
                title: "Zero Dawn NFC",
                desc: "Interactive NFC portfolio identity system with futuristic UI, networking, and immersive digital presence.",
              },
            ].map((project) => (

              <motion.div
                key={project.title}
                whileHover={{ y: -5 }}

                className="
                  rounded-3xl
                  overflow-hidden
                  bg-white/[0.03]
                  border border-purple-500/10
                  backdrop-blur-xl
                  hover:border-purple-500/30
                  transition
                "
              >

                <div
                  className="
                    h-64
                    bg-gradient-to-br
                    from-purple-900/30
                    via-black
                    to-black
                  "
                />

                <div className="p-8">

                  <h3 className="text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 mt-4 leading-relaxed">
                    {project.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="relative z-10 px-6 pb-32">

        <div
          className="
            max-w-4xl mx-auto
            rounded-[2rem]
            p-14
            text-center
            backdrop-blur-xl
            bg-white/[0.03]
            border border-purple-500/10
            shadow-[0_0_40px_rgba(168,85,247,0.08)]
          "
        >

          <p className="text-purple-400 tracking-[0.4em] text-sm mb-6">
            CONNECT
          </p>

          <h2 className="text-6xl font-black tracking-tight">
            ENTER THE NETWORK
          </h2>

          <p className="text-gray-500 mt-8 mb-12 text-lg">
            Tap the NFC card or scan the quantum glyph.
          </p>

          {/* QR */}
          <div className="flex justify-center mb-12">

            <div
              className="
                p-6
                rounded-3xl
                border border-purple-500/20
                bg-black/30
                shadow-[0_0_35px_rgba(168,85,247,0.2)]
              "
            >

              <QRCodeSVG
                value="https://zerodawn.dev"
                size={180}
                bgColor="transparent"
                fgColor="#c084fc"
              />

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-5">

            <a
              href="/resume.pdf"
              download
              className="
                px-7 py-4
                rounded-xl
                bg-purple-600
                hover:bg-purple-500
                transition
              "
            >
              DOWNLOAD RESUME
            </a>

            <a
              href="/contact.vcf"
              download
              className="
                px-7 py-4
                rounded-xl
                border border-purple-500/20
                hover:border-purple-500/40
                transition
              "
            >
              SAVE CONTACT
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}