"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const runes = [
  "ᚨ","ᚱ","ᛟ","ᚲ",
  "ᛞ","ᛉ","ᚹ","ᛇ",
  "ᚺ","ᛒ","ᛗ","ᛋ",
];

const columns = 18;
const rows = 26;

export default function RunicBackground() {

  const data = useMemo(() => {

    return Array.from(
      { length: columns },
      (_, col) => ({

        left: `${(col / columns) * 100}%`,

        speed: 14 + (col % 4),

        delay: -(col * 1.2),

        beamLength:
          2 + (col % 3),

        symbols:

          Array.from(
            { length: rows },
            (_, row) => ({

              rune:
                runes[
                  (row + col * 5)
                  % runes.length
                ],

              size:
                22 +
                ((row + col) % 8),

            })

          ),

      })

    );

  }, []);

  return (

    <div
      className="
      fixed inset-0
      overflow-hidden
      pointer-events-none
      z-[2]
      "
    >

      {data.map(
        (column, colIndex) => (

        <div

          key={colIndex}

          className="
          absolute
          top-0
          flex
          flex-col
          items-center
          "

          style={{
            left: column.left,
          }}

        >

          {column.symbols.map(
            (symbol, rowIndex) => (

            <motion.div

              key={rowIndex}

              className="
              relative
              leading-[1.55]
              select-none
              font-thin
              "

              style={{
                fontSize:
                  `${symbol.size}px`,
              }}

              animate={{

                opacity: [
                  0.22,
                  0.22,
                  1,
                  0.22,
                ],

                textShadow: [

                  `
                  0 0 6px
                  rgba(168,85,247,0.08)
                  `,

                  `
                  0 0 6px
                  rgba(168,85,247,0.08)
                  `,

                  `
                  0 0 10px rgba(255,255,255,1),
                  0 0 22px rgba(216,180,254,1),
                  0 0 40px rgba(168,85,247,0.85)
                  `,

                  `
                  0 0 6px
                  rgba(168,85,247,0.08)
                  `,

                ],

                color: [

                  "rgba(168,85,247,0.22)",

                  "rgba(168,85,247,0.22)",

                  "#f5d0fe",

                  "rgba(168,85,247,0.22)",

                ],

              }}

              transition={{

                duration:
                  column.speed,

                repeat:
                  Infinity,

                ease:
                  "linear",

                delay:

                  column.delay +

                  (
                    rowIndex *
                    0.25
                  ),

              }}

            >

              {symbol.rune}

            </motion.div>

          ))}

        </div>

      ))}

      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.04),transparent_80%)]
        "
      />

    </div>

  );

}