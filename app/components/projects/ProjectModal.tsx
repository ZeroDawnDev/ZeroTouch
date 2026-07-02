"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { FeaturedProject } from "@/lib/featuredProjects";

interface ProjectModalProps {
  project: FeaturedProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/70
              backdrop-blur-md
            "
          />

          {/* MODAL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[101]

              w-[95%]
              max-w-5xl

              -translate-x-1/2
              -translate-y-1/2

              overflow-hidden

              rounded-3xl

              border
              border-purple-500/20

              bg-black/80

              backdrop-blur-2xl
            "
          >
            {/* PURPLE GLOW */}
            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]

                pointer-events-none
              "
            />

            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between

                border-b
                border-purple-500/10

                p-6
              "
            >
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {project.title}
                </h2>

                <p className="text-purple-400 mt-1">
                  {project.tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  w-10
                  h-10

                  rounded-full

                  border
                  border-purple-500/20

                  flex
                  items-center
                  justify-center

                  hover:border-purple-500/50
                  transition
                "
              >
                <Icon
                  icon="mdi:close"
                  className="text-white"
                />
              </button>
            </div>

            {/* CONTENT */}
            <div
              className="
                p-6
                max-h-[75vh]
                overflow-y-auto
              "
            >
              {/* DESCRIPTION */}
              <div className="mb-8">
                <h3 className="text-purple-400 mb-3 tracking-widest text-sm">
                  OVERVIEW
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* TECH STACK */}
              <div className="mb-8">
                <h3 className="text-purple-400 mb-4 tracking-widest text-sm">
                  TECH STACK
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="
                        px-3
                        py-2

                        rounded-xl

                        bg-purple-500/10

                        border
                        border-purple-500/20

                        text-sm
                        text-white
                      "
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div className="mb-8">
                <h3 className="text-purple-400 mb-4 tracking-widest text-sm">
                  FEATURES
                </h3>

                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-2

                        text-gray-300
                      "
                    >
                      <Icon
                        icon="mdi:check-circle"
                        className="text-purple-400"
                      />

                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* SCREENSHOTS */}
              {project.screenshots.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-purple-400 mb-4 tracking-widest text-sm">
                    SCREENSHOTS
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    {project.screenshots.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt={project.title}
                        className="
                          rounded-2xl
                          border
                          border-purple-500/10
                        "
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* ACTIONS */}
              <div className="flex gap-4 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="
                      px-5
                      py-3

                      rounded-2xl

                      bg-purple-500/20

                      border
                      border-purple-500/30

                      hover:bg-purple-500/30

                      transition
                    "
                  >
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="
                      px-5
                      py-3

                      rounded-2xl

                      border
                      border-purple-500/20

                      hover:border-purple-500/50

                      transition
                    "
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}