"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  duration: number;
};

export default function NeuralBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = [...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * 1800,
      y: Math.random() * 1000,
      duration: 10 + Math.random() * 20,
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* PARTICLES */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="
            absolute
            w-2 h-2
            bg-purple-500/70
            rounded-full
            blur-[0.5px]
          "
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0.15,
          }}
          animate={{
            x: [particle.x, Math.random() * 1800],
            y: [particle.y, Math.random() * 1000],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

    </div>
  );
}