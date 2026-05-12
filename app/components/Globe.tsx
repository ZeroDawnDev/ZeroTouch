"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Points,
  PointMaterial,
  Line,
} from "@react-three/drei";

import * as THREE from "three";
import { useRef, useMemo } from "react";

function GlobeMesh() {

  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12;
    }

    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.12;
    }

  });

  /* PARTICLE POSITIONS */
  const particlePositions = useMemo(() => {

    const positions: number[] = [];

    for (let i = 0; i < 450; i++) {

      const radius = 2;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x =
        radius * Math.sin(phi) * Math.cos(theta);

      const y =
        radius * Math.sin(phi) * Math.sin(theta);

      const z =
        radius * Math.cos(phi);

      positions.push(x, y, z);

    }

    return positions;

  }, []);

  /* PARTICLE ARRAY */
  const pointArray = useMemo(() => {

    return new Float32Array(particlePositions);

  }, [particlePositions]);

  /* CONNECTION LINES */
  const connections = useMemo(() => {

    const lines: [number, number, number][][] = [];

    for (let i = 0; i < particlePositions.length; i += 3) {

      const ax = particlePositions[i];
      const ay = particlePositions[i + 1];
      const az = particlePositions[i + 2];

      for (let j = i + 3; j < particlePositions.length; j += 3) {

        const bx = particlePositions[j];
        const by = particlePositions[j + 1];
        const bz = particlePositions[j + 2];

        const distance = Math.sqrt(
          (ax - bx) ** 2 +
          (ay - by) ** 2 +
          (az - bz) ** 2
        );

        /* CONNECT CLOSE NODES */
        if (distance < 0.45) {

          lines.push([
            [ax, ay, az] as [number, number, number],
            [bx, by, bz] as [number, number, number],
          ]);

        }

      }

    }

    return lines;

  }, [particlePositions]);

  return (
    <group frustumCulled={false}>

      {/* OUTER AURA */}
      <mesh>

        <sphereGeometry args={[2.3, 64, 64]} />

        <meshBasicMaterial
          color="#9333ea"
          transparent
          opacity={0.008}
        />

      </mesh>

      {/* CONNECTIONS */}
      <group
        ref={linesRef}
        frustumCulled={false}
      >

        {connections.map((line, index) => (

          <Line
            key={index}
            points={line}
            color="#9333ea"
            transparent
            opacity={0.08}
            lineWidth={0.2}
          />

        ))}

      </group>

      {/* PARTICLES */}
      <Points
        ref={pointsRef}
        positions={pointArray}
        stride={3}
        frustumCulled={false}
      >

        <PointMaterial
          transparent
          color="#d8b4fe"
          size={0.025}
          sizeAttenuation
          depthWrite={false}
        />

      </Points>

      {/* INNER CORE */}
      <mesh>

        <sphereGeometry args={[1.7, 32, 32]} />

        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.015}
        />

      </mesh>

    </group>
  );
}

export default function Globe() {

  return (
    <div className="w-full h-[500px]">

      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5] }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
        }}
      >

        {/* LIGHTING */}
        <ambientLight intensity={0.7} />

        <pointLight
          position={[10, 10, 10]}
          intensity={1}
          color="#9333ea"
        />

        {/* GLOBE */}
        <GlobeMesh />

        {/* CONTROLS */}
        <OrbitControls
          makeDefault
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
        />

      </Canvas>

    </div>
  );
}