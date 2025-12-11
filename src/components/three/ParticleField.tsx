import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

const ParticleField = ({ count = 2000, mouse }: ParticleFieldProps) => {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const color1 = new THREE.Color('#00d9ff'); // Primary cyan
    const color2 = new THREE.Color('#7c3aed'); // Secondary purple

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Spherical distribution for galaxy effect
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Gradient colors
      const mixRatio = Math.random();
      const mixedColor = color1.clone().lerp(color2, mixRatio);
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      sizes[i] = Math.random() * 2 + 0.5;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.getElapsedTime();
    
    // Slow rotation
    mesh.current.rotation.y = time * 0.03;
    mesh.current.rotation.x = time * 0.01;

    // Mouse influence
    mesh.current.rotation.x += mouse.current.y * 0.0003;
    mesh.current.rotation.y += mouse.current.x * 0.0003;

    // Update light position for dynamic effect
    if (light.current) {
      light.current.position.x = Math.sin(time * 0.5) * 10;
      light.current.position.y = Math.cos(time * 0.3) * 10;
    }
  });

  return (
    <>
      <pointLight ref={light} distance={50} intensity={2} color="#00d9ff" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={particles.sizes.length}
            array={particles.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
};

export default ParticleField;
