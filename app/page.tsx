"use client";

import NeuralBackground from "./components/NeuralBackground";
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
      desc: "Check out my code",
    },
    {
      title: "Projects",
      desc: "My work & demos",
    },
    {
      title: "Contact",
      desc: "Let's connect",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

     
      {/* BACKGROUND */}
      <NeuralBackground />

      {/* NAVBAR */}
      <nav className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl
        bg-black/30
        border-b border-white/5
      ">

        <div className="
          max-w-7xl mx-auto
          px-6 py-4
          flex items-center justify-between
        ">

          <div className="
            w-12 h-12
            rounded-full
            border border-purple-500/40
            flex items-center justify-center
            font-bold
            text-lg
            bg-white/5
          ">
            A
          </div>

          <button className="text-purple-400 text-2xl">
            ☰
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section className="
        relative z-10
        px-6
        pt-36
        pb-24
      ">

        <div className="
          max-w-7xl
          mx-auto
          grid lg:grid-cols-2
          gap-16
          items-center
        ">

          {/* LEFT */}
          <div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 mb-3"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                text-5xl
                md:text-7xl
                font-bold
                tracking-tight
                text-purple-400
              "
            >
              Allen Adhvaith
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
                text-2xl
                md:text-3xl
                mt-4
                font-medium
              "
            >
              AI Engineer & Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
                text-gray-400
                mt-8
                leading-relaxed
                text-lg
                max-w-xl
              "
            >
              I build intelligent systems,
              AI-powered experiences,
              and meaningful digital products
              that solve real-world problems.
            </motion.p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="/resume.pdf"
                download
                className="
                  px-6 py-3
                  rounded-xl
                  bg-purple-600
                  hover:bg-purple-500
                  transition
                  shadow-[0_0_25px_rgba(168,85,247,0.45)]
                "
              >
                View Resume →
              </a>

              <a
                href="https://github.com/ZeroDawnDev"
                target="_blank"
                className="
                  px-6 py-3
                  rounded-xl
                  border border-white/10
                  hover:border-purple-500
                  transition
                  backdrop-blur-xl
                  bg-white/5
                "
              >
                GitHub
              </a>

            </div>

            {/* EXPLORE */}
            <div className="mt-16">

              <p className="
                text-sm
                tracking-[0.3em]
                text-purple-400
                mb-6
              ">
                EXPLORE
              </p>

              <div className="
                grid grid-cols-2
                md:grid-cols-4
                gap-4
              ">

                {quickLinks.map((item) => (

                  <motion.div
                    key={item.title}

                    whileHover={{
                      y: -5,
                    }}

                    className="
                      p-5
                      rounded-2xl
                      bg-white/5
                      border border-white/10
                      backdrop-blur-xl
                      hover:border-purple-500/40
                      transition
                    "
                  >

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="
                      text-sm
                      text-gray-400
                      mt-2
                    ">
                      {item.desc}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            {/* GLOW */}
            <div
              className="
                absolute
                w-[700px]
                h-[700px]
                bg-purple-500/20
                blur-[140px]
                rounded-full
              "
            />

            {/* GLOBE */}
            <div className="
              relative
              z-10
              w-full
              max-w-[650px]
            ">
              <Globe />
            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="
          px-6
          pb-32
          relative z-10
        "
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="
            text-sm
            tracking-[0.3em]
            text-purple-400
            mb-10
          ">
            FEATURED PROJECTS
          </h2>

          <div className="
            grid md:grid-cols-2
            gap-8
          ">

            {/* PROJECT */}
            <motion.div
              whileHover={{ y: -5 }}

              className="
                rounded-3xl
                overflow-hidden
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                hover:border-purple-500/40
                transition
              "
            >

              <div className="
                h-56
                bg-gradient-to-br
                from-purple-900/40
                to-black
              " />

              <div className="p-8">

                <h3 className="text-2xl font-semibold">
                  GAIA Assistant
                </h3>

                <p className="
                  text-gray-400
                  mt-4
                  leading-relaxed
                ">
                  AI voice assistant using
                  Whisper, PPO reinforcement learning,
                  and intelligent automation.
                </p>

              </div>

            </motion.div>

            {/* PROJECT */}
            <motion.div
              whileHover={{ y: -5 }}

              className="
                rounded-3xl
                overflow-hidden
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                hover:border-purple-500/40
                transition
              "
            >

              <div className="
                h-56
                bg-gradient-to-br
                from-blue-900/30
                to-black
              " />

              <div className="p-8">

                <h3 className="text-2xl font-semibold">
                  Zero Dawn Portfolio
                </h3>

                <p className="
                  text-gray-400
                  mt-4
                  leading-relaxed
                ">
                  Futuristic interactive portfolio
                  integrating NFC technology,
                  3D graphics, and AI aesthetics.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="
        px-6
        pb-32
        relative z-10
      ">

        <div className="
          max-w-4xl
          mx-auto
          rounded-3xl
          p-12
          text-center
          backdrop-blur-xl
          bg-white/5
          border border-white/10
        ">

          <h2 className="
            text-4xl
            font-bold
            mb-6
          ">
            Connect
          </h2>

          <p className="
            text-gray-400
            mb-10
          ">
            Tap the NFC card or scan the QR code.
          </p>

          {/* QR */}
          <div className="flex justify-center mb-10">

            <QRCodeSVG
              value="https://zerodawn.dev"
              size={160}
            />

          </div>

          {/* BUTTONS */}
          <div className="
            flex flex-wrap
            justify-center
            gap-4
          ">

            <a
              href="/resume.pdf"
              download
              className="
                px-6 py-3
                rounded-xl
                bg-purple-600
                hover:bg-purple-500
                transition
              "
            >
              Download Resume
            </a>

            <a
              href="/contact.vcf"
              download
              className="
                px-6 py-3
                rounded-xl
                border border-white/10
                hover:border-purple-500
                transition
              "
            >
              Save Contact
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}