"use client";

interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({
  title,
}: SectionDividerProps) {

  return (

    <div
      className="
      relative
      z-10

      py-8
      px-6
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto

        flex
        items-center
        gap-6
        "
      >

        <div
          className="
          flex-1
          h-px

          bg-gradient-to-r
          from-transparent
          via-purple-500/30
          to-purple-500
          "
        />

        <span
          className="
          text-purple-400

          text-xs
          md:text-sm

          tracking-[0.45em]

          font-medium

          whitespace-nowrap
          "
        >
          {title}
        </span>

        <div
          className="
          flex-1
          h-px

          bg-gradient-to-l
          from-transparent
          via-purple-500/30
          to-purple-500
          "
        />

      </div>

      <div
        className="
        absolute
        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-48
        h-12

        bg-purple-500/10

        blur-3xl

        pointer-events-none
        "
      />

    </div>

  );

}