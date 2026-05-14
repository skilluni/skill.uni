import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

// Floating code-block geometry
function CodeBlock({
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
    mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh} position={position} scale={scale}>
        <boxGeometry args={[1, 0.6, 0.08]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.85}
          roughness={0.1}
          metalness={0.6}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Particle field
function ParticleField() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#4f9eff" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

// Central glowing orb
function CoreOrb() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <Sphere ref={mesh} args={[1.1, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#246BCE"
          distort={0.35}
          speed={2}
          roughness={0}
          metalness={0.8}
          emissive="#1a3a7a"
          emissiveIntensity={0.4}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </Float>
  );
}

// Ring orbiting the orb
function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.8, 0.025, 16, 100]} />
      <meshStandardMaterial color="#FE5A1D" emissive="#FE5A1D" emissiveIntensity={0.6} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#246BCE" />
      <pointLight position={[-5, -3, -3]} intensity={1} color="#FE5A1D" />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />

      <Stars radius={60} depth={30} count={800} factor={2} fade speed={0.5} />
      <ParticleField />
      <CoreOrb />
      <OrbitRing />

      {/* Floating code blocks */}
      <CodeBlock position={[-3.2, 1.8, -1]}  color="#246BCE" scale={0.9} speed={0.8} />
      <CodeBlock position={[3.0, 1.5, -2]}   color="#FE5A1D" scale={0.7} speed={1.2} />
      <CodeBlock position={[-3.5, -1.5, -1]} color="#4f9eff" scale={0.8} speed={0.6} />
      <CodeBlock position={[3.2, -1.8, -1]}  color="#7c3aed" scale={0.65} speed={1.0} />
      <CodeBlock position={[0.5, 2.8, -3]}   color="#10b981" scale={0.55} speed={1.4} />
      <CodeBlock position={[-1.2, -2.8, -2]} color="#f59e0b" scale={0.6}  speed={0.9} />
    </Canvas>
  );
}