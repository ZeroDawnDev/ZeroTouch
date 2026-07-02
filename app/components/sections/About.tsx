"use client";

import Reveal from "../layout/Reveal";

export default function AboutSection() {
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <Reveal>
          <h2 className="text-purple-400 tracking-[0.35em] text-sm mb-3">
            ABOUT
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Building Intelligent Systems
          </h3>
        </Reveal>

        {/* INTRODUCTION */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div>
            <h4 className="text-white text-2xl font-semibold mb-6">
              Introduction
            </h4>

            <p className="text-gray-400 leading-relaxed">
              I'm Allen Adhvaith, an AI researcher and software engineer currently
              pursuing a Master's degree in Artificial Intelligence in Kyoto, Japan.
            </p>

            <p className="text-gray-400 leading-relaxed mt-5">
              My work focuses on intelligent systems, reinforcement learning,
              multi-agent architectures, neural optimization, autonomous agents,
              and advanced AI infrastructure.
            </p>

            <p className="text-gray-400 leading-relaxed mt-5">
              I enjoy transforming research concepts into real systems that combine
              memory, reasoning, planning, execution, and learning.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
              relative
              rounded-2xl
              border border-purple-500/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-6
              overflow-hidden
            "
          >

            {/* CYBER CORNERS */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-0 w-10 h-10 border-l border-t border-purple-400/40" />
              <div className="absolute top-0 right-0 w-10 h-10 border-r border-t border-purple-400/40" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-l border-b border-purple-400/40" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-r border-b border-purple-400/40" />
            </div>

            <div className="grid md:grid-cols-[1fr_160px] gap-8 items-start">

              {/* PROFILE INFO */}
              <div className="pr-28">

                <div className="mb-5">
                  <div className="text-xs tracking-widest text-gray-500">NAME</div>
                  <div className="text-white mt-2">
                    Allen Adhvaith / ZeroDawnDev
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-xs tracking-widest text-gray-500">ROLE</div>
                  <div className="text-white mt-2">
                    AI Researcher & Software Engineer
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-xs tracking-widest text-gray-500">LOCATION</div>
                  <div className="text-white mt-2">
                    Kyoto, Japan
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-xs tracking-widest text-gray-500">EDUCATION</div>
                  <div className="text-white mt-2">
                    M.S. Artificial Intelligence
                  </div>
                </div>

                <div>
                  <div className="text-xs tracking-widest text-gray-500">FOCUS</div>
                  <div className="text-white mt-2">
                    Intelligent Systems Engineering
                  </div>
                </div>

              </div>

              {/* PROFILE IMAGE (TOP RIGHT FLOAT) */}
              <div className="absolute top-6 right-6">

                <div className="relative">

                  {/* glow */}
                  <div className="absolute inset-0 bg-purple-500/25 blur-2xl rounded-full scale-110" />

                  {/* ring */}
                  <div className="relative w-40 h-40 rounded-full p-[2px] bg-purple-500/20">

                    <div className="w-full h-full rounded-full overflow-hidden bg-white/[0.03]">
                      <img
                        src="/profile/profile.jpg"
                        alt="Allen Adhvaith"
                        className="w-full h-full object-cover"
                      />
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* EDUCATION */}
        <div className="mt-24">

          <h4 className="text-2xl font-semibold text-white mb-8">
            Education
          </h4>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-purple-300 text-sm">2020 — 2024</div>
              <h5 className="text-white text-xl mt-3">
                B.Tech Computer Science & Engineering
              </h5>
              <p className="text-gray-400 mt-3">
                Vimal Jyothi Engineering College, Kerala, India
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-purple-300 text-sm">2025 — Present</div>
              <h5 className="text-white text-xl mt-3">
                Master's in Artificial Intelligence
              </h5>
              <p className="text-gray-400 mt-3">
                Kyoto College of Graduate Studies for Informatics, Kyoto, Japan
              </p>
            </div>

          </div>
        </div>

        {/* AI RESEARCH FOCUS */}
        <div className="mt-24">

          <h4 className="text-2xl font-semibold text-white mb-8">
            AI Research Focus
          </h4>

          <div className="flex flex-wrap gap-3">

            {[
              "Multi-Agent Systems",
              "Reinforcement Learning",
              "Knowledge Distillation",
              "Neural Compression",
              "Neural Architecture Search",
              "Large Language Models",
              "Autonomous Agents",
              "AI Infrastructure",
              "Memory Systems",
              "Reasoning Systems",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 text-sm"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

        {/* SYSTEM PROFILE */}
        <div className="mt-24">

          <h4 className="text-2xl font-semibold text-white mb-8">
            System Profile
          </h4>

          <div className="grid md:grid-cols-4 gap-4">

            <div className="p-5 border border-white/10 rounded-xl">
              <div className="text-xs text-gray-500">DOMAIN</div>
              <div className="text-white mt-2">Artificial Intelligence</div>
            </div>

            <div className="p-5 border border-white/10 rounded-xl">
              <div className="text-xs text-gray-500">SPECIALIZATION</div>
              <div className="text-white mt-2">Intelligent Systems</div>
            </div>

            <div className="p-5 border border-white/10 rounded-xl">
              <div className="text-xs text-gray-500">STATUS</div>
              <div className="text-white mt-2">Active Research</div>
            </div>

            <div className="p-5 border border-white/10 rounded-xl">
              <div className="text-xs text-gray-500">LOCATION</div>
              <div className="text-white mt-2">Kyoto, Japan</div>
            </div>

          </div>

        </div>

        {/* MISSION */}
        <div className="mt-24">

          <h4 className="text-2xl font-semibold text-white mb-6">
            Mission
          </h4>

          <p className="text-gray-400 max-w-4xl leading-relaxed">
            To build intelligent systems capable of reasoning, learning,
            adapting, and operating efficiently across complex environments.
            My long-term goal is to contribute to next-generation AI
            architectures that unify memory, reasoning, optimization,
            and autonomous decision-making.
          </p>

        </div>

        {/* CORE PRINCIPLES */}
        <div className="mt-24">

          <h4 className="text-2xl font-semibold text-white mb-8">
            Core Principles
          </h4>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Build Before Theory",
              "Systems Thinking",
              "Continuous Learning",
              "Research Driven",
              "Efficiency Matters",
              "Long-Term Vision",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]"
              >
                <div className="text-white">{item}</div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}