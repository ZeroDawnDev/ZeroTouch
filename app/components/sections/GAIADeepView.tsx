"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AgentKey = "echo" | "athena" | "atlas" | "nexus";

export default function GAIADeepView() {
  const [active, setActive] = useState<AgentKey>("echo");

  const agents: Record<
    AgentKey,
    { name: string; role: string; desc: string }
  > = {
    echo: {
      name: "ECHO",
      role: "Execution Core",
      desc: "Handles task execution and system actions across tools and interfaces.",
    },
    athena: {
      name: "ATHENA",
      role: "Knowledge Engine",
      desc: "Processes reasoning, synthesis, and structured knowledge retrieval.",
    },
    atlas: {
      name: "ATLAS",
      role: "Memory System",
      desc: "Stores and retrieves contextual memory across sessions.",
    },
    nexus: {
      name: "NEXUS",
      role: "Orchestrator",
      desc: "Routes tasks and manages system-wide coordination flow.",
    },
  };

  const hiddenCount = 8;

  return (
    <div className="grid lg:grid-cols-[420px_1fr] gap-6 h-[600px]">

      {/* =========================
          LEFT PANEL
      ========================== */}
      <div className="flex flex-col h-full min-h-0">

        <h2 className="text-white text-sm tracking-[0.3em] mb-4 flex-shrink-0">
          MODULES
        </h2>

        <div
          className="
            flex-1
            min-h-0
            overflow-y-auto
            pr-2
            space-y-3
          "
        >
          {/* Visible Modules */}
          {Object.entries(agents).map(([key, agent]) => (
            <button
              key={key}
              onClick={() => setActive(key as AgentKey)}
              className={`
                w-full
                text-left
                p-4
                rounded-xl
                border
                transition
                ${
                  active === key
                    ? "bg-purple-500/20 border-purple-400 text-white"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                }
              `}
            >
              <div className="font-medium">
                {agent.name}
              </div>

              <div className="text-xs text-gray-500 mt-1">
                {agent.role}
              </div>
            </button>
          ))}

          {/* Hidden Modules */}
          {Array.from({ length: hiddenCount }).map((_, i) => (
            <div
              key={i}
              className="
                relative
                p-4
                rounded-xl
                border border-white/5
                bg-white/[0.02]
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

              <div className="relative">
                <div className="text-gray-600 text-xs tracking-[0.25em]">
                  MODULE {i + 5}
                </div>

                <div className="text-[11px] text-gray-700 mt-1">
                  Classified subsystem
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          RIGHT PANEL
      ========================== */}
      <div
        className="
          h-full
          p-6
          rounded-2xl
          border border-purple-500/10
          bg-white/[0.02]
          backdrop-blur-xl
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <span
              className="
                text-xs
                px-3
                py-1
                rounded-full
                bg-purple-500/10
                border border-purple-500/20
                text-purple-300
              "
            >
              ACTIVE MODULE
            </span>

            <h3 className="text-3xl font-semibold mt-5 text-white">
              {agents[active].name}
            </h3>

            <p className="text-purple-300 text-sm mt-2">
              {agents[active].role}
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              {agents[active].desc}
            </p>

            <div className="mt-10 border-t border-white/10 pt-4">
              <p className="text-xs text-gray-500">
                Part of GAIA multi-layer intelligence architecture
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}