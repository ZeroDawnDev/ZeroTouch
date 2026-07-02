"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { skills } from "@/lib/skills";

export default function SkillGrid() {
  const [index, setIndex] = useState(0);

  const pageSize = 6;
  const total = skills.length;

  const visibleSkills = skills.slice(index, index + pageSize);

  const next = () => {
    if (index + pageSize >= total) {
      setIndex(0);
    } else {
      setIndex(index + pageSize);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">

      {/* MAIN PANEL */}
      <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 overflow-hidden">

        {/* GRID (3 columns) */}
        <div className="grid grid-cols-3 gap-3">

          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className="
                group relative
                w-full max-w-[90px] aspect-square
                rounded-md
                bg-white/[0.03]
                border border-white/[0.06]
                backdrop-blur-md
                overflow-hidden
                flex flex-col items-center justify-center
                hover:border-purple-500/30
                transition
              "
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/15 to-cyan-500/10 blur-xl" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <Icon
                  icon={skill.icon}
                  width="22"
                  className="text-white group-hover:scale-110 transition"
                />

                <span className="mt-1 text-[10px] text-white/80 text-center leading-tight">
                  {skill.name}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* DOWN BUTTON */}
        <div className="flex justify-center mt-4">
          <button
            onClick={next}
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-purple-600/20
              border border-purple-500/40
              text-purple-300
              hover:bg-purple-500/30
              hover:scale-110
              transition
              shadow-lg shadow-purple-500/20
            "
          >
            <Icon icon="mdi:arrow-down" width="18" />
          </button>
        </div>

      </div>
    </div>
  );
}