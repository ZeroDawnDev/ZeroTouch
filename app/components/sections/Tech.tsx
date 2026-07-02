"use client";

import { motion } from "framer-motion";
import Reveal from "../layout/Reveal";
import { Icon } from "@iconify/react";

export default function Tech() {
  const stacks = [
    {
      title: "AI / ML",
      items: [
        { name: "Python", icon: "logos:python" },
        { name: "PyTorch", icon: "simple-icons:pytorch" },
        { name: "TensorFlow", icon: "logos:tensorflow" },
        { name: "Scikit", icon: "simple-icons:scikitlearn" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: "logos:react" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Express", icon: "simple-icons:express" },
        { name: "REST API", icon: "mdi:api" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: "logos:git-icon" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "Linux", icon: "logos:linux-tux" },
        { name: "VS Code", icon: "logos:visual-studio-code" },
      ],
    },
  ];

  return (
    <section className="relative z-10 px-6 pb-32">

      <div className="w-full max-w-6xl mx-auto">

        {/* HEADER */}
        <Reveal>
          <h2 className="text-purple-400 tracking-[0.35em] text-sm mb-4 text-left">
            TECH STACK
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-4xl font-bold text-white mb-6 text-left">
            Technologies I Work With
          </h3>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="max-w-3xl text-gray-400 text-lg leading-relaxed mb-14 text-left">
            A breakdown of the tools, frameworks, and technologies
            I use to build AI systems, web applications, and
            intelligent digital experiences.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {stacks.map((group, index) => (
            <Reveal key={group.title} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="
                  relative
                  p-7
                  rounded-2xl
                  border border-purple-500/10
                  bg-white/[0.02]
                  backdrop-blur-xl
                  overflow-hidden
                  hover:border-purple-500/30
                  transition
                "
              >
                {/* glow */}
                <div className="
                  absolute inset-0 opacity-0 hover:opacity-100 transition
                  bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_70%)]
                " />

                <div className="relative z-10">

                  {/* Title */}
                  <h4 className="text-purple-400 tracking-[0.25em] text-sm mb-5">
                    {group.title}
                  </h4>

                  {/* Items */}
                  <div className="grid grid-cols-2 gap-4">

                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="
                          flex items-center gap-3
                          p-3
                          rounded-lg
                          bg-black/30
                          border border-white/5
                          hover:border-purple-500/20
                          transition
                        "
                      >
                        <Icon
                          icon={item.icon}
                          width="20"
                          className="text-white"
                        />

                        <span className="text-sm text-gray-300">
                          {item.name}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>
              </motion.div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}