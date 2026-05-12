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
    <div className="absolute inset-0 overflow-hidden">

      {/* PARTICLES */}
      {particles.map((particle) => (

        <motion.div
          key={particle.id}

          className="
            absolute
            w-2 h-2
            bg-purple-500
            rounded-full
          "

          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0.2,
          }}

          animate={{
            x: [particle.x, Math.random() * 1800],
            y: [particle.y, Math.random() * 1000],
            opacity: [0.2, 1, 0.2],
          }}

          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

      ))}

      {/* GLOW */}
      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-purple-500/20
          blur-[150px]
          rounded-full
        "
      />

    </div>
  );
}