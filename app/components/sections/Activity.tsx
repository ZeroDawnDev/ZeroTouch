"use client";

import dynamic from "next/dynamic";
import Reveal from "../layout/Reveal";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  {
    ssr: false,
  }
);

export default function Activity() {
  return (
    <section className="relative z-10 px-6 pb-40">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-purple-400 tracking-[0.35em] text-sm mb-10">
            CONTRIBUTION ACTIVITY
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="
            rounded-3xl
            border
            border-purple-500/10
            bg-white/[0.02]
            backdrop-blur-xl
            p-8
            overflow-x-auto
            "
          >
            <h3 className="text-xl font-semibold text-white mb-8">
              GitHub Contributions
            </h3>

            <div className="flex justify-center">
              <GitHubCalendar
                username="ZeroDawnDev"
                blockSize={14}
                blockMargin={4}
                fontSize={14}
                colorScheme="dark"
                theme={{
                  dark: [
                    "#161b22",
                    "#4c1d95",
                    "#7e22ce",
                    "#a855f7",
                    "#d8b4fe",
                  ],
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}