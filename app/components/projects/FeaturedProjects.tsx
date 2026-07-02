"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  featuredProjects,
  FeaturedProject,
} from "@/lib/featuredProjects";

import ProjectModal from "./ProjectModal";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] =
    useState<FeaturedProject | null>(null);

  const [open, setOpen] = useState(false);

  const handleOpen = (project: FeaturedProject) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    setTimeout(() => {
      setSelectedProject(null);
    }, 250);
  };

  return (
    <>
      <section
        className="
        relative
        z-10
        px-6
        pb-24
      "
      >
        <div className="max-w-7xl mx-auto">

          {/* Header */}

          <h2
            className="
            text-purple-400
            tracking-[0.35em]
            text-sm
            mb-4
          "
          >
            FEATURED PROJECTS
          </h2>

          <h3
            className="
            text-4xl
            font-bold
            text-white
            mb-4
          "
          >
            Engineering & AI Systems
          </h3>

          <p
            className="
            text-gray-400
            max-w-3xl
            mb-10
          "
          >
            A collection of projects focused on
            artificial intelligence, intelligent systems,
            modern web technologies, and experimental
            engineering concepts.
          </p>

          {/* Cards */}

          <div
            className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{
                  y: -6,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => handleOpen(project)}
                className="
                  cursor-pointer

                  relative
                  overflow-hidden

                  rounded-3xl

                  border
                  border-purple-500/10

                  bg-white/[0.02]

                  backdrop-blur-xl

                  p-7

                  hover:border-purple-500/30

                  transition
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    inset-0

                    opacity-0
                    hover:opacity-100

                    transition

                    bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]
                  "
                />

                <div className="relative z-10">

                  <div
                    className="
                    text-xs

                    tracking-[0.3em]

                    text-purple-400

                    mb-3
                  "
                  >
                    PROJECT
                  </div>

                  <h4
                    className="
                    text-2xl
                    font-semibold
                    text-white
                    mb-2
                  "
                  >
                    {project.title}
                  </h4>

                  <p
                    className="
                    text-purple-300
                    text-sm
                    mb-4
                  "
                  >
                    {project.tagline}
                  </p>

                  <p
                    className="
                    text-gray-400
                    text-sm
                    leading-relaxed
                    mb-5
                  "
                  >
                    {project.description}
                  </p>

                  {/* Tech preview */}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies
                      .slice(0, 4)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-2
                            py-1

                            text-xs

                            rounded-lg

                            bg-purple-500/10

                            border
                            border-purple-500/20

                            text-gray-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                  {/* Footer */}

                  <div
                    className="
                    mt-6

                    text-purple-400
                    text-sm
                  "
                  >
                    View Project →
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={open}
        onClose={handleClose}
      />
    </>
  );
}