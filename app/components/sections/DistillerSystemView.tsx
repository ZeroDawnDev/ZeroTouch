"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type StageKey =
  | "teacher"
  | "distillation"
  | "compression"
  | "rl"
  | "nas"
  | "output";

export default function DistillerSystemView() {
  const [active, setActive] = useState<StageKey>("teacher");

  const stages = {
    teacher: {
      name: "Teacher Model",
      role: "Knowledge Source",
      desc: "Large-scale foundation model used as the source of intelligence. Provides soft targets, latent representations, and behavioral patterns that guide student learning.",

      objective: "Establish maximum achievable performance",

      metric: "Reference Accuracy",

      domains: [
        "Foundation Models",
        "Transformers",
        "Representation Learning",
        "Transfer Learning",
      ],

      outcomes: [
        { value: "98.1%", label: "Accuracy" },
        { value: "632M", label: "Parameters" },
        { value: "8.4GB", label: "Memory Usage" },
        { value: "100%", label: "Knowledge Source" },
      ],

      technical: [
        "Transformer-based architecture",
        "High-capacity parameter space",
        "Pretrained knowledge repository",
        "Reference performance benchmark",
      ],
    },

    distillation: {
      name: "Distillation Engine",
      role: "Knowledge Transfer",
      desc: "Transfers behavioral intelligence from teacher to student using soft probability distributions, hidden-state matching, feature alignment, and response imitation.",

      objective: "Retain intelligence while reducing complexity",

      metric: "Knowledge Retention",

      domains: [
        "Knowledge Distillation",
        "KL Divergence",
        "Soft Labels",
        "Representation Matching",
      ],

      outcomes: [
        { value: "94%", label: "Knowledge Retained" },
        { value: "0.12", label: "KL Loss" },
        { value: "78%", label: "Compression Gain" },
        { value: "Fast", label: "Convergence" },
      ],

      technical: [
        "Temperature scaling",
        "Soft target supervision",
        "Hidden layer alignment",
        "Feature transfer learning",
      ],
    },

    compression: {
      name: "Compression Layer",
      role: "Pruning + Quantization",
      desc: "Applies structured pruning, weight sharing, quantization, and sparsification to minimize memory footprint and computational requirements.",

      objective: "Reduce model size without significant accuracy loss",

      metric: "Model Reduction",

      domains: [
        "Pruning",
        "Quantization",
        "Sparse Networks",
        "Model Compression",
      ],

      outcomes: [
        { value: "78%", label: "Weights Removed" },
        { value: "INT8", label: "Quantization" },
        { value: "71%", label: "Memory Saved" },
        { value: "4.2×", label: "Smaller Model" },
      ],

      technical: [
        "Structured pruning",
        "INT8 quantization",
        "Weight sparsification",
        "Compression optimization",
      ],
    },

    rl: {
      name: "RL Controller",
      role: "Optimization Agent",
      desc: "Reinforcement Learning agent responsible for discovering optimal compression strategies, training schedules, and architecture modifications.",

      objective: "Learn optimal compression policies",

      metric: "Reward Optimization",

      domains: [
        "Reinforcement Learning",
        "Policy Optimization",
        "AutoML",
        "Decision Systems",
      ],

      outcomes: [
        { value: "+42%", label: "Reward Score" },
        { value: "120K", label: "Episodes" },
        { value: "Adaptive", label: "Policy" },
        { value: "Auto", label: "Scheduling" },
      ],

      technical: [
        "PPO-based controller",
        "Reward-driven search",
        "Adaptive policies",
        "Dynamic optimization",
      ],
    },

    nas: {
      name: "NAS Engine",
      role: "Architecture Search",
      desc: "Neural Architecture Search engine explores candidate network designs to identify architectures with superior efficiency-to-performance ratios.",

      objective: "Discover efficient student architectures",

      metric: "Architecture Efficiency",

      domains: [
        "Neural Architecture Search",
        "AutoML",
        "Network Optimization",
        "Search Algorithms",
      ],

      outcomes: [
        { value: "324", label: "Architectures Tested" },
        { value: "17", label: "Candidates" },
        { value: "12%", label: "Efficiency Gain" },
        { value: "AutoML", label: "Search Mode" },
      ],

      technical: [
        "Evolutionary search",
        "Architecture ranking",
        "Performance estimation",
        "Automated model generation",
      ],
    },

    output: {
      name: "Optimized Model",
      role: "Deployment Target",
      desc: "Final production-ready model balancing performance, memory efficiency, and inference speed for deployment across cloud, desktop, and edge devices.",

      objective: "Deliver efficient deployable AI",

      metric: "Deployment Readiness",

      domains: [
        "Edge AI",
        "Deployment",
        "Inference Optimization",
        "Production Systems",
      ],

      outcomes: [
        { value: "3.2×", label: "Inference Speed" },
        { value: "94%", label: "Accuracy Retention" },
        { value: "71%", label: "Memory Reduction" },
        { value: "Edge Ready", label: "Deployment" },
      ],

      technical: [
        "Production optimized",
        "Edge deployment ready",
        "Fast inference pipeline",
        "Resource efficient execution",
      ],
    },
  };

  const current = stages[active];

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-6 h-[600px] min-h-0">
      {/* ========================= */}
      {/* LEFT PANEL */}
      {/* ========================= */}
      <div className="flex flex-col h-full min-h-0">
        <h2 className="text-white text-sm tracking-[0.3em] mb-4">
          DISTILLATION PIPELINE
        </h2>

        <div
          className="
            flex-1
            min-h-0
            overflow-y-auto
            pr-2
            space-y-3
            scrollbar-thin
            scrollbar-thumb-purple-500/30
            scrollbar-track-transparent
          "
        >
          {(Object.keys(stages) as StageKey[]).map((key, index) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`
                w-full
                text-left
                p-4
                rounded-xl
                border
                transition-all
                duration-300
                ${
                  active === key
                    ? "bg-purple-500/20 border-purple-400 text-white"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-purple-500/20"
                }
              `}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">
                    {stages[key].name}
                  </div>

                  <div className="text-xs text-gray-500 mt-1">
                    {stages[key].role}
                  </div>
                </div>

                <div className="text-purple-400 text-xs">
                  {index + 1}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ========================= */}
      {/* RIGHT PANEL */}
      {/* ========================= */}
      <div
        className="
          h-full
          min-h-0
          overflow-y-auto
          rounded-2xl
          border
          border-purple-500/20
          p-6
          bg-white/[0.02]
          backdrop-blur-xl
          scrollbar-thin
          scrollbar-thumb-purple-500/30
          scrollbar-track-transparent
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
          >
            <span className="px-3 py-1 text-xs rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300">
              ACTIVE STAGE
            </span>

            <h3 className="text-3xl font-semibold text-white mt-5">
              {current.name}
            </h3>

            <p className="text-purple-300 text-sm mt-2">
              {current.role}
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              {current.desc}
            </p>

            {/* Objective */}
            <div className="mt-8 rounded-xl border border-purple-500/10 bg-white/[0.02] p-4">
              <div className="text-xs tracking-widest text-gray-500 mb-2">
                PRIMARY OBJECTIVE
              </div>

              <div className="text-lg text-purple-300">
                {current.objective}
              </div>
            </div>

            {/* Metric */}
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-xs tracking-widest text-gray-500 mb-2">
                KEY METRIC
              </div>

              <div className="text-white">
                {current.metric}
              </div>
            </div>

            {/* Domains */}
            <div className="mt-8">
              <div className="text-xs tracking-widest text-gray-500 mb-3">
                RESEARCH DOMAINS
              </div>

              <div className="flex flex-wrap gap-2">
                {current.domains.map((domain) => (
                  <div
                    key={domain}
                    className="
                      px-3 py-1
                      rounded-full
                      text-xs
                      border border-white/10
                      bg-white/[0.03]
                      text-gray-300
                    "
                  >
                    {domain}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div className="mt-10">
              <div className="text-xs tracking-widest text-gray-500 mb-4">
                TECHNICAL COMPONENTS
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {current.technical.map((item) => (
                  <div
                    key={item}
                    className="
                      p-3
                      rounded-xl
                      border border-white/10
                      bg-white/[0.02]
                      text-sm text-gray-300
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="mt-10 border-t border-white/10 pt-5">
              <div className="text-xs tracking-widest text-gray-500 mb-4">
                STAGE INSIGHTS
              </div>

              <div className="grid grid-cols-2 gap-4">
                {current.outcomes.map((item) => (
                  <div
                    key={item.label}
                    className="
                      rounded-xl
                      border border-white/10
                      p-4
                      bg-white/[0.02]
                    "
                  >
                    <div className="text-purple-300 text-xl font-semibold">
                      {item.value}
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Flow */}
            <div className="mt-10 border-t border-white/10 pt-5">
              <div className="text-xs tracking-widest text-gray-500 mb-4">
                PIPELINE POSITION
              </div>

              <div className="rounded-xl border border-purple-500/10 bg-white/[0.02] p-4">
                <pre className="text-xs text-gray-400 leading-relaxed overflow-x-auto">
{`Teacher Model
      ↓
Distillation
      ↓
Compression
      ↓
RL Controller
      ↓
NAS Engine
      ↓
Optimized Model`}
                </pre>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}