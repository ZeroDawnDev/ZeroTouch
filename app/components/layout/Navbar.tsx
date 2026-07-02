"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50

      bg-black/20
      backdrop-blur-xl

      border-b
      border-white/[0.04]
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto

        h-[88px]

        px-8

        flex
        items-center
        justify-between
        "
      >
        {/* LOGO */}

        <motion.a
          href="/"
          whileHover={{ scale: 1.03 }}
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="ZERODAWNDEV"
            className="
            h-[90px]
            lg:h-[110px]

            w-auto

            object-contain

            opacity-95

            hover:opacity-100

            transition
            "
          />
        </motion.a>

        {/* MENU */}

        <div
          className="
          hidden
          lg:flex

          gap-14

          text-sm
          tracking-wide

          text-white/70
          "
        >
          <a href="/#home" className="hover:text-purple-400 transition">
            HOME
          </a>

          <a href="/#about" className="hover:text-purple-400 transition">
            ABOUT
          </a>

          <a href="/#projects" className="hover:text-purple-400 transition">
            PROJECTS
          </a>

          <a href="/#tech" className="hover:text-purple-400 transition">
            TECH
          </a>

          <a href="/#contact" className="hover:text-purple-400 transition">
            CONTACT
          </a>
        </div>

        {/* RESUME BUTTON */}

        <a
          href="/resume.pdf"
          download
          className="
          relative
          overflow-hidden

          hidden
          lg:flex

          px-7
          py-3

          rounded-2xl

          border
          border-purple-500/20

          bg-purple-500/[0.04]

          transition-all
          duration-500

          hover:shadow-[0_0_45px_rgba(192,132,252,0.85)]

          before:content-['']
          before:absolute

          before:left-0
          before:top-0

          before:h-full
          before:w-0

          hover:before:w-full

          before:transition-all
          before:duration-500

          before:bg-gradient-to-r
          before:from-purple-500
          before:via-purple-400
          before:to-purple-500

          before:opacity-90

          before:blur-[14px]
          before:animate-pulse

          before:rounded-2xl
          "
        >
          <span
            className="
            relative
            z-10

            tracking-wide
            font-medium
            "
          >
            GET RESUME →
          </span>
        </a>
      </div>
    </nav>
  );
}