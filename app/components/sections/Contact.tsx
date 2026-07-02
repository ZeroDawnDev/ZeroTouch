"use client";

import { motion } from "framer-motion";
import Reveal from "../layout/Reveal";
import { Icon } from "@iconify/react";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "allenadhvaithplpy@gmail.com",
      href: "mailto:allenadhvaithplpy@gmail.com",
      icon: "mdi:email",
    },
    {
      label: "GitHub",
      value: "ZeroDawnDev",
      href: "https://github.com/ZeroDawnDev",
      icon: "mdi:github",
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com",
      icon: "mdi:linkedin",
    },
    {
      label: "Phone",
      value: "+81 09092342258",
      href: "tel:+8109092342258",
      icon: "mdi:phone",
    },
  ];

  return (
    <section className="relative z-10 px-6 pb-24">

      <div className="w-full max-w-6xl mx-auto">

        {/* HEADER */}
        <Reveal>
          <h2 className="text-purple-400 tracking-[0.35em] text-sm mb-4 text-left">
            CONTACT
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-4xl font-bold text-white mb-6 text-left">
            Let’s Connect
          </h3>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="max-w-3xl text-gray-400 text-lg leading-relaxed mb-10 text-left">
            Feel free to reach out through any of the channels below.
            I’m open to collaborations, AI projects, and freelance work.
          </p>
        </Reveal>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {contacts.map((item, index) => (
            <Reveal key={item.label} delay={0.2 + index * 0.1}>
              <motion.a
                href={item.href}
                target="_blank"
                whileHover={{ y: -5 }}
                className="
                  relative
                  flex items-center gap-4
                  p-6
                  rounded-2xl
                  border border-purple-500/10
                  bg-white/[0.02]
                  backdrop-blur-xl
                  hover:border-purple-500/30
                  transition
                  overflow-hidden
                "
              >
                {/* Glow */}
                <div className="
                  absolute inset-0 opacity-0 hover:opacity-100 transition
                  bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]
                " />

                {/* Icon */}
                <div className="relative z-10 text-purple-400">
                  <Icon icon={item.icon} width="26" />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <div className="text-sm text-purple-400 tracking-[0.2em]">
                    {item.label}
                  </div>
                  <div className="text-gray-300 mt-1">
                    {item.value}
                  </div>
                </div>

              </motion.a>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}