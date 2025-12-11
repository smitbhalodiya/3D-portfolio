import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

const Scene = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX - window.innerWidth / 2);
      mouse.current.y = (event.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsReady(true);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isReady) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d9ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#7c3aed" />
          
          <ParticleField count={1000} mouse={mouse} />
          <FloatingGeometry mouse={mouse} />
          
          <fog attach="fog" args={['#030712', 10, 30]} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
