"use client";

import RunicBackground from "./components/background/RunicBackground";
import NoiseOverlay from "./components/background/NoiseOverlay";
import Navbar from "./components/layout/Navbar";
import Globe from "./components/globe/Globe";
import SectionDivider from "./components/layout/SectionDivider";
import Reveal from "./components/layout/Reveal";
import Activity from "./components/sections/Activity";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Tech  from "./components/sections/Tech";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FeaturedProjects from "./components/projects/FeaturedProjects";
import SystemsLab from "./components/sections/SystemsLab";
import ResearchLab from "./components/sections/ResearchLab";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
};

export default function Home() {

  /* =========================
     QUICK LINKS
  ========================== */

  const quickLinks = [
    {
      title: "Resume",
      desc: "View / Download",
      href: "/resume.pdf",
    },
    {
      title: "GitHub",
      desc: "Explore my code",
      href: "https://github.com/ZeroDawnDev",
    },
    {
      title: "Projects",
      desc: "Featured work",
      href: "#projects",
    },
    {
      title: "Contact",
      desc: "Let's connect",
      href: "#contact",
    },
  ];

  /* =========================
     GITHUB API
  ========================== */

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchRepos() {

      try {

        const res = await fetch("/api/repos");

        const data = await res.json();

        if (Array.isArray(data)) {

          setRepos(data);

        } else {

          console.error("GitHub API Error:", data);

          setRepos([]); setRepos([
    {
      id: 1,
      name: "GAIA",
      description: "Personal AI assistant project",
      html_url: "https://github.com/ZeroDawnDev",
      language: "Python",
      stargazers_count: 0,
    },
    {
      id: 2,
      name: "Food Delivery App",
      description: "Flutter food delivery platform",
      html_url: "https://github.com/ZeroDawnDev",
      language: "Dart",
      stargazers_count: 0,
    },
  ]);

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

    <main
      className="
      min-h-screen
      bg-black
      text-white
      overflow-x-hidden
      relative
      "
    >

      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="fixed inset-0 bg-black z-[-20]" />

      <div
        className="
        fixed
        inset-0
        z-[-19]
        pointer-events-none
        bg-[linear-gradient(to_bottom,rgba(0,0,0,0.98),rgba(6,0,10,1))]
        "
      />

      <div
        className="
        fixed
        inset-0
        z-[-18]
        pointer-events-none
        bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.95),transparent_45%)]
        "
      />

      <div
        className="
        fixed
        inset-0
        z-[-18]
        pointer-events-none
        bg-[radial-gradient(circle_at_right,rgba(0,0,0,0.95),transparent_45%)]
        "
      />
      <RunicBackground />
      <NoiseOverlay />

      {/* =========================
          NAVBAR
      ========================== */}
          
          <Navbar />

      {/* =========================
          HERO
      ========================== */}
      <Reveal>

        <section
          className="
          relative
          z-10

          min-h-screen

          flex
          items-center

          px-6

          -mt-12
          "
        >

          <div
            className="
            max-w-7xl
            mx-auto

            grid
            lg:grid-cols-2

            gap-16

            items-center

            w-full
            "
          >

            {/* LEFT */}

            <div
              className="
              flex
              flex-col
              items-start
              "
            >

              <p
                className="
                text-purple-400/70

                tracking-[0.45em]

                text-xs

                mb-3
                "
              >
                ᚨ ᚱ ᚲ ᛞ ᛟ ᚹ
              </p>

              <motion.img

                initial={{
                  opacity:0,
                  y:25
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:0.8
                }}

                src="/hlogo.png"

                alt="ZERODAWNDEV"

                className="
                w-[520px]
                max-w-full
                object-contain
                "
              />

              <h2
                className="
                mt-1

                text-xl
                md:text-2xl

                tracking-[0.18em]

                text-purple-400
                "
              >
                AI ENGINEER & DEVELOPER
              </h2>

              <p
                className="
                mt-3

                max-w-[520px]

                text-gray-400

                text-lg

                leading-relaxed
                "
              >

                Building intelligent systems,
                neural interfaces,
                AI powered experiences,
                immersive web technologies,
                and futuristic digital products.

              </p>

              <div
                className="
                flex
                flex-wrap

                gap-4

                mt-8
                "
              >

                {quickLinks.map((item) => (

                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    className="
                    px-5
                    py-3

                    rounded-2xl

                    border
                    border-purple-500/10

                    bg-white/[0.03]

                    hover:border-purple-500/30
                    hover:bg-purple-500/[0.05]

                    transition
                    "
                  >

                    <div className="text-sm font-medium">
                      {item.title}
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                      {item.desc}
                    </div>

                  </a>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
              relative

              flex
              justify-center
              items-center
              "
            >

              <div
                className="
                absolute

                w-[620px]
                h-[620px]

                rounded-full

                bg-purple-500/10

                blur-[140px]

                animate-pulse
                "
              />

              <div
                className="
                absolute

                h-[900px]
                w-[2px]

                bg-gradient-to-b
                from-transparent
                via-purple-500/20
                to-transparent

                blur-sm
                "
              />

              <div
                className="
                relative
                z-10

                w-full

                max-w-[700px]
                "
              >

                <Globe />

              </div>

            </div>

          </div>

        </section>

      </Reveal>
        {
        /* =========================
          ABOUT
      ========================== */ 
        }
       <SectionDivider title="ABOUT" />
      
       <About /> 
        {/* =========================
          SYSTEMS LAB
      ========================== */ 
        } 
        
       <SectionDivider title="SYSTEMS LAB" />

        <SystemsLab />
        
       {/* =========================
       RESEARCH LAB
      ========================== */ 
        }
       <SectionDivider title="RESEARCH LAB" />

       <ResearchLab />

        {/* =========================
          FEATURED PROJECTS
      ========================== */ 
        }
       <SectionDivider title="FEATURED PROJECTS" />

       <FeaturedProjects />
        {/* =========================
          GITHUB PROJECTS
      ========================== */ 
        }   
      <SectionDivider title="PROJECTS" />

      {/* =========================
          PROJECTS
      ========================== */}

      <Reveal delay={0.2}>

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

                {repos.map((repo) => (

                  <motion.a

                    key={repo.id}

                    href={repo.html_url}

                    target="_blank"

                    whileHover={{
                      y:-5
                    }}

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
                        {repo.description || "No description provided."}
                      </p>

                    </div>

                  </motion.a>

                ))}

              </div>

            )}

          </div>

        </section>

      </Reveal>

      {/* =========================
          CONTRIBUTION ACTIVITY
      ========================== */}

      <Activity />
      {/* =========================
          TECH STACK
      ========================== */
      }
      <SectionDivider title="TECH STACK" />
      <Tech />

      {/* =========================
          CONTACT
      ========================== */}
      <SectionDivider title="CONTACT" />
      <Contact />
    </main>

  );

}