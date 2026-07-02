"use client";

import Reveal from "../layout/Reveal";
import { motion } from "framer-motion";

const researchAreas = [
  {
    title: "Reinforcement Learning",
    status: "ACTIVE",
    description:
      "Policy optimization and adaptive decision systems for autonomous intelligence.",
  },
  {
    title: "Neural Compression",
    status: "ACTIVE",
    description:
      "Pruning, quantization, and distillation pipelines for efficient AI deployment.",
  },
  {
    title: "Multi-Agent Systems",
    status: "ACTIVE",
    description:
      "Distributed orchestration architectures inspired by GAIA.",
  },
  {
    title: "Neural Architecture Search",
    status: "EXPERIMENTAL",
    description:
      "Automated discovery of efficient model structures.",
  },
  {
    title: "Edge AI",
    status: "RESEARCH",
    description:
      "Deploying intelligent systems on constrained devices.",
  },
  {
    title: "Autonomous Agents",
    status: "FUTURE",
    description:
      "Long-horizon planning and self-directed AI systems.",
  },
];

export default function ResearchLab() {
  return (
    <section className="relative z-10 px-6 pb-32">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <Reveal>
          <h2 className="text-purple-400 tracking-[0.35em] text-sm mb-3">
            RESEARCH & EXPERIMENTS
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-4xl font-bold text-white mb-4">
            Exploring Intelligent Systems
          </h3>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-gray-400 max-w-3xl mb-12">
            Ongoing investigations into reinforcement learning,
            model compression, multi-agent architectures,
            neural search systems, and scalable intelligence.
          </p>
        </Reveal>

        {/* Research Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {researchAreas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                rounded-2xl
                border border-purple-500/10
                bg-white/[0.02]
                backdrop-blur-xl
                p-6
                overflow-hidden
              "
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_70%)]" />

              <div className="relative z-10">

                <span className="
                  inline-block
                  px-3
                  py-1
                  text-[10px]
                  tracking-widest
                  rounded-full
                  border
                  border-purple-500/20
                  bg-purple-500/10
                  text-purple-300
                ">
                  {item.status}
                </span>

                <h4 className="text-xl font-semibold text-white mt-5">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Research Timeline */}

        <div className="
          mt-16
          rounded-3xl
          border border-purple-500/10
          bg-white/[0.02]
          backdrop-blur-xl
          p-8
        ">
          <h4 className="text-white text-xl font-semibold mb-8">
            Research Timeline
          </h4>

          <div className="space-y-6">

            <div>
              <div className="text-purple-300 font-medium">
                2024
              </div>
              <div className="text-gray-400 text-sm mt-1">
                PPO Personal Assistant Research
              </div>
            </div>

            <div>
              <div className="text-purple-300 font-medium">
                2025
              </div>
              <div className="text-gray-400 text-sm mt-1">
                GAIA Multi-Agent Architecture
              </div>
            </div>

            <div>
              <div className="text-purple-300 font-medium">
                2026
              </div>
              <div className="text-gray-400 text-sm mt-1">
                Neural Algorithm Distiller
              </div>
            </div>

            <div>
              <div className="text-purple-300 font-medium">
                Future
              </div>
              <div className="text-gray-400 text-sm mt-1">
                Autonomous Intelligence Platform
              </div>
            </div>

          </div>
        </div>

        {/* Future Objectives */}

        <div className="
          mt-10
          rounded-3xl
          border border-purple-500/10
          bg-white/[0.02]
          backdrop-blur-xl
          p-8
        ">
          <h4 className="text-white text-xl font-semibold mb-6">
            Next Research Objectives
          </h4>

          <div className="grid md:grid-cols-2 gap-4 text-gray-300">

            <div>• RL-guided model compression</div>
            <div>• Automated architecture generation</div>
            <div>• Multi-agent reasoning systems</div>
            <div>• Efficient edge deployment</div>
            <div>• Long-term memory architectures</div>
            <div>• Autonomous AI ecosystems</div>

          </div>
        </div>

      </div>
    </section>
  );
}