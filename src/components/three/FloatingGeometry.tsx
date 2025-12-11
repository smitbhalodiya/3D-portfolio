import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

const FloatingGeometry = ({ mouse }: FloatingGeometryProps) => {
  const torusRef = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.position.x = -4 + mouse.current.x * 0.002;
      torusRef.current.position.y = 2 + mouse.current.y * 0.002;
    }

    if (icosaRef.current) {
      icosaRef.current.rotation.x = -time * 0.15;
      icosaRef.current.rotation.z = time * 0.2;
      icosaRef.current.position.x = 4 - mouse.current.x * 0.001;
      icosaRef.current.position.y = -1 - mouse.current.y * 0.001;
    }

    if (octaRef.current) {
      octaRef.current.rotation.y = time * 0.25;
      octaRef.current.rotation.z = -time * 0.1;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={torusRef} position={[-4, 2, -3]}>
          <torusGeometry args={[1, 0.3, 16, 50]} />
          <MeshDistortMaterial
            color="#00d9ff"
            transparent
            opacity={0.4}
            distort={0.2}
            speed={2}
            roughness={0}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh ref={icosaRef} position={[4, -1, -2]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <MeshDistortMaterial
            color="#7c3aed"
            transparent
            opacity={0.5}
            distort={0.3}
            speed={3}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1.2}>
        <mesh ref={octaRef} position={[0, 3, -4]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#00d9ff"
            transparent
            opacity={0.3}
            wireframe
            emissive="#00d9ff"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    </>
  );
};

export default FloatingGeometry;
