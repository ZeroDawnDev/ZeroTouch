"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NebulaPoints() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 6000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // spherical distribution for nebula feel
      const radius = 6;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x += 0.0003;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#a855f7"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

export default function Nebula() {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <NebulaPoints />
      </Canvas>

      {/* Optional glow overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-purple-500/10 via-black to-black" />
    </div>
  );
}