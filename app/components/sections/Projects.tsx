"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../layout/Reveal";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          "https://api.github.com/users/ZeroDawnDev/repos?sort=updated&per_page=4"
        );

        const data = await res.json();

        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error("GitHub API Error:", data);
          setRepos([]);
        }
      } catch (err) {
        console.error("GitHub fetch failed:", err);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      className="
      relative
      z-10
      px-6
      pb-24
      "
    >
      <div className="max-w-7xl mx-auto">

        <Reveal>
          <h2
            className="
            text-purple-400
            tracking-[0.35em]
            text-sm
            mb-10
            "
          >
            LIVE GITHUB PROJECTS
          </h2>
        </Reveal>

        {loading && (
          <div className="text-gray-500">
            Loading repositories...
          </div>
        )}

        {!loading && (
          <div
            className="
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
            "
          >
            {repos.map((repo, index) => (
              <Reveal
                key={repo.id}
                delay={index * 0.08}
              >
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="
                  group
                  relative
                  p-7
                  rounded-3xl
                  bg-white/[0.02]
                  border
                  border-purple-500/10
                  backdrop-blur-xl
                  hover:border-purple-500/30
                  transition
                  overflow-hidden
                  block
                  "
                >
                  <div
                    className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]
                    "
                  />

                  <div className="relative z-10">

                    <h3
                      className="
                      text-xl
                      font-semibold
                      text-white
                      "
                    >
                      {repo.name}
                    </h3>

                    <p
                      className="
                      mt-3
                      text-gray-400
                      text-sm
                      leading-relaxed
                      min-h-[60px]
                      "
                    >
                      {repo.description ||
                        "No description provided."}
                    </p>

                    <div
                      className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      text-xs
                      text-gray-500
                      "
                    >
                      <span>
                        {repo.language || "Unknown"}
                      </span>

                      <span>
                        ★ {repo.stargazers_count}
                      </span>
                    </div>

                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}