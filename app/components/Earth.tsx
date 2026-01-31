'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Create procedural Earth texture
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Dark blue ocean
    ctx.fillStyle = '#0a1628';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw continents with a subtle glow effect
    ctx.fillStyle = '#1a3a5c';

    // Simplified continent shapes
    // North America
    ctx.beginPath();
    ctx.ellipse(200, 150, 80, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    // South America
    ctx.beginPath();
    ctx.ellipse(280, 320, 40, 80, 0.3, 0, Math.PI * 2);
    ctx.fill();

    // Europe/Africa
    ctx.beginPath();
    ctx.ellipse(520, 180, 50, 70, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(530, 300, 45, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    // Asia
    ctx.beginPath();
    ctx.ellipse(700, 160, 120, 80, 0, 0, Math.PI * 2);
    ctx.fill();

    // Australia
    ctx.beginPath();
    ctx.ellipse(820, 350, 50, 35, 0, 0, Math.PI * 2);
    ctx.fill();

    // Add grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;

    // Latitude lines
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * (canvas.height / 12));
      ctx.lineTo(canvas.width, i * (canvas.height / 12));
      ctx.stroke();
    }

    // Longitude lines
    for (let i = 0; i < 24; i++) {
      ctx.beginPath();
      ctx.moveTo(i * (canvas.width / 24), 0);
      ctx.lineTo(i * (canvas.width / 24), canvas.height);
      ctx.stroke();
    }

    // Add some dots for cities
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    const cities = [
      [200, 150], [280, 180], [510, 170], [700, 140],
      [750, 200], [530, 280], [180, 200], [820, 350]
    ];
    cities.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group>
      {/* Atmosphere glow */}
      <Sphere args={[2.15, 64, 64]}>
        <meshBasicMaterial
          color="#1a4a7a"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Earth */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.8}
          metalness={0.1}
        />
      </Sphere>

      {/* Cloud layer */}
      <Sphere ref={cloudsRef} args={[2.02, 64, 64]}>
        <meshStandardMaterial
          transparent
          opacity={0.15}
          color="#ffffff"
          depthWrite={false}
        />
      </Sphere>
    </group>
  );
}

function Stars() {
  const starsRef = useRef<THREE.Points>(null);

  const [positions] = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const radius = 50 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Earth() {
  return (
    <div className="earth-canvas">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4a90d9" />
        <Stars />
        <Globe />
      </Canvas>
    </div>
  );
}
