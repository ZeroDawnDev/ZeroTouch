"use client";

import { motion } from "framer-motion";

const runes = [
  "ᚨ",
  "ᚱ",
  "ᛟ",
  "ᚲ",
  "ᛞ",
  "ᛉ",
  "ᚹ",
  "ᛇ",
  "ᚺ",
  "ᛒ",
  "ᛗ",
  "ᛋ",
];

const columns = 18;
const rows = 26;

export default function RunicBackground() {

  return (

    <div
      className="
        fixed inset-0
        overflow-hidden
        pointer-events-none
        z-[2]
      "
    >

      {[...Array(columns)].map((_, colIndex) => {

        const left =
          `${(colIndex / columns) * 100}%`;

        const speed =
          14 + Math.random() * 12;

        const delay =
          Math.random() * -20;

        const beamSize =
          2 + Math.floor(Math.random() * 3);

        return (

          <motion.div
            key={colIndex}

            className="
              absolute top-[-40%]
              flex flex-col
              items-center
            "

            style={{
              left,
            }}

            animate={{
              y: ["0%", "140%"],
            }}

            transition={{
              duration: speed,
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
          >

            {[...Array(rows)].map((_, rowIndex) => {

              const activeStart =
                Math.floor(rows * 0.35);

              const isBright =
                rowIndex >= activeStart &&
                rowIndex <= activeStart + beamSize;

              return (

                <motion.span
                  key={rowIndex}

                  className="
                    relative
                    font-thin
                    leading-[1.6]
                    select-none
                  "

                  style={{

                    fontSize:
                      `${22 + Math.random() * 12}px`,

                    color:
                      isBright
                        ? "#f5d0fe"
                        : "rgba(168,85,247,0.18)",

                    textShadow:
                      isBright
                        ? `
                        0 0 10px rgba(216,180,254,1),
                        0 0 24px rgba(192,132,252,0.95),
                        0 0 60px rgba(168,85,247,0.75),
                        0 0 120px rgba(168,85,247,0.45)
                        `
                        : `
                        0 0 8px rgba(168,85,247,0.08)
                        `,
                  }}
                >

                  {runes[
                    Math.floor(
                      Math.random() * runes.length
                    )
                  ]}

                  {/* LIGHT TRAIL */}
                  {isBright && (

                    <div
                      className="
                        absolute
                        left-1/2
                        top-full
                        -translate-x-1/2
                        w-[2px]
                        h-24
                        bg-gradient-to-b
                        from-purple-300/80
                        via-purple-500/20
                        to-transparent
                        blur-md
                      "
                    />

                  )}

                </motion.span>

              );

            })}

          </motion.div>

        );

      })}

      {/* ATMOSPHERIC FOG */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_70%)]
        "
      />

    </div>

  );

}