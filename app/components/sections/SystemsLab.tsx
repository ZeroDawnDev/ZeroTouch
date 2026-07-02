"use client";

import { useState } from "react";
import Reveal from "../layout/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import GAIADeepView from "./GAIADeepView";
import DistillerSystemView from "./DistillerSystemView";

type SystemKey = "gaia" | "distiller";
type System = {
  name: string;
  type: string;
  status: string;
  description: string;
  highlights: string[];
  meta?: {
    visibleModules: number;
    hiddenModules: number;
  };
};

export default function SystemsLab() {
  const [active, setActive] = useState<SystemKey>("gaia");
  const [openGAIA, setOpenGAIA] = useState(false);
  const [openDistiller, setOpenDistiller] = useState(false);

  const systems: Record<SystemKey, System> = {
    gaia: {
      name: "GAIA",
      type: "Multi-Agent Intelligence System",
      status: "Active Research",

      description:
        "A modular AI system exploring orchestration, reasoning, memory, and execution layers in intelligent environments.",

      highlights: [
        "Agent-based system design",
        "Context-aware reasoning layers",
        "Memory-driven interaction flow",
        "Tool-assisted execution model",
      ],

      meta: {
        visibleModules: 4,
        hiddenModules: 8,
      },
    },

    distiller: {
      name: "Neural Algorithm Distiller",
      type: "AI Optimization & Compression System",
      status: "Research",

      description:
        "Reinforcement learning-driven system for automatic neural network compression using distillation, pruning, quantization, and architecture search.",

      highlights: [
        "RL-based compression control",
        "Teacher–student distillation",
        "Architecture search system",
        "Model optimization loop",
      ],
    },
  };

  const current = systems[active];

  return (
    <>
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <Reveal>
            <h2 className="text-purple-400 tracking-[0.35em] text-sm mb-3">
              SYSTEMS LAB
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-4xl font-bold text-white mb-10">
              Intelligent Architecture Design
            </h3>
          </Reveal>

          {/* TOGGLE */}
          <div className="flex gap-4 mb-10">
            {(["gaia", "distiller"] as SystemKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`
                  px-5 py-2 rounded-full text-sm transition border
                  ${
                    active === key
                      ? "bg-purple-500/20 border-purple-400 text-purple-300"
                      : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                  }
                `}
              >
                {systems[key].name}
              </button>
            ))}
          </div>

          {/* MAIN CARD */}
          <motion.div
            className="
              relative
              rounded-3xl
              border border-purple-500/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-10
              overflow-hidden
            "
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_70%)]" />

            <div className="relative z-10">

              {/* STATUS */}
              <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300">
                {current.status}
              </span>

              {/* TITLE */}
              <h3 className="text-3xl font-semibold text-white">
                {current.name}
              </h3>

              <p className="text-purple-300 text-sm mt-1">
                {current.type}
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed max-w-3xl">
                {current.description}
              </p>

              {/* HIGHLIGHTS */}
              <div className="mt-8 grid md:grid-cols-2 gap-3">
                {current.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-purple-400">▹</span>
                    {h}
                  </div>
                ))}
              </div>

              {/* GAIA MODULE ABSTRACTION (SAFE SIGNAL) */}
              {active === "gaia" && current.meta && (
                <div className="mt-8 text-xs text-gray-500">
                  <div className="mb-2 tracking-widest">
                    SYSTEM MODULE STRUCTURE
                  </div>

                  <div className="text-gray-400">
                    {current.meta.visibleModules} visible modules •{" "}
                    {current.meta.hiddenModules} protected subsystems
                  </div>
                </div>
              )}

              {/* DISTILLER RESEARCH PIPELINE  */}
              {active === "distiller" && (
                <div className="mt-8 text-xs text-gray-500">
                  <div className="mb-2 tracking-widest">
                   RESEARCH PIPELINE
                  </div>

                  <div className="text-gray-400">
                    6 optimization stages • RL-guided compression workflow
                  </div>
                 </div>
              )}

              {/* ACTION BUTTON */}
              {active === "gaia" && (
                <button
                  onClick={() => setOpenGAIA(true)}
                  className="
                    mt-10
                    px-6 py-3
                    rounded-xl
                    bg-purple-500/20
                    border border-purple-400/30
                    text-purple-300
                    hover:bg-purple-500/30
                    transition
                  "
                >
                  Open GAIA System Inspector
                </button>
              )}
              {active === "distiller" && (
                <button
                  onClick={() => setOpenDistiller(true)}
                  className="
                    mt-10
                   px-6 py-3
                   rounded-xl
                   bg-purple-500/20
                   border border-purple-400/30
                   text-purple-300
                   hover:bg-purple-500/30
                  transition
                 "
                >
                  Open Distiller Research Pipeline
                </button>
              )}

            </div>
          </motion.div>

        </div>
      </section>

      {/* MODAL (UNCHANGED BUT CLEAN) */}
      <AnimatePresence>
        {openGAIA && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0
              z-[999]
              bg-black/70
              backdrop-blur-md
              flex items-center justify-center
              px-4
            "
            onClick={() => setOpenGAIA(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="
                w-full
                max-w-5xl
                max-h-[720px]
                overflow-hidden
                rounded-2xl
                border border-purple-500/20
                bg-[#0b0b0f]/90
                backdrop-blur-xl
                shadow-2xl
              "
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <h3 className="text-sm tracking-[0.3em] text-purple-300">
                  GAIA SYSTEM INSPECTOR
                </h3>

                <button
                  onClick={() => setOpenGAIA(false)}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 overflow-hidden">
                <GAIADeepView />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openDistiller && (
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="
             fixed inset-0
             z-[999]
             bg-black/70
             backdrop-blur-md
             flex items-center justify-center
             px-4
            "
            onClick={() => setOpenDistiller(false)}
          >
            <motion.div
             initial={{ scale: 0.95, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             exit={{ scale: 0.95, opacity: 0 }}
             onClick={(e) => e.stopPropagation()}
             className="
               w-full
               max-w-5xl
               h-[720px]
               overflow-hidden
               rounded-2xl
               border border-purple-500/20
               bg-[#0b0b0f]/90
               backdrop-blur-xl
               shadow-2xl
              "
           >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
               <h3 className="text-sm tracking-[0.3em] text-purple-300">
                DISTILLER RESEARCH PIPELINE
              </h3>

               <button
                 onClick={() => setOpenDistiller(false)}
                 className="text-gray-400 hover:text-white text-sm"
                >
                 ✕
                </button>
            </div>

            <div className="p-6 overflow-hidden h-full">
              <DistillerSystemView />
            </div>
          </motion.div>
        </motion.div>
      )}
       </AnimatePresence>
    </>
  );
}