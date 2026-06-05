import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const ParticleWave = () => {
  const pointsRef = useRef();
  
  // Setup grid of points
  const count = 75; // 75x75 grid = 5625 particles (optimized for performance)
  const sep = 1.2; // Separation distance
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    let i = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iy = 0; iy < count; iy++) {
        positions[i] = ix * sep - ((count * sep) / 2); // x
        positions[i + 1] = 0; // y (will animate)
        positions[i + 2] = iy * sep - ((count * sep) / 2); // z
        i += 3;
      }
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array;
    
    // Wave animation math
    let i = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iy = 0; iy < count; iy++) {
        const x = ix * sep - ((count * sep) / 2);
        const z = iy * sep - ((count * sep) / 2);
        
        // Complex wave function combining multiple sines
        positions[i + 1] = 
          (Math.sin((ix + t) * 0.3) * 1.5) + 
          (Math.sin((iy + t * 0.8) * 0.4) * 1.5) + 
          (Math.sin((ix + iy + t) * 0.1) * 2);
        
        i += 3;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Slowly rotate the entire system
    pointsRef.current.rotation.y = t * 0.03;
    
    // Subtle mouse interaction (tilt based on pointer)
    pointsRef.current.rotation.x = 0.4 + (state.pointer.y * -0.1);
    pointsRef.current.rotation.z = (state.pointer.x * -0.05);
  });

  return (
    <points ref={pointsRef} position={[0, -10, -20]} rotation={[0.4, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={positions.length / 3} 
          array={positions} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15} 
        color="#a5e7ff" 
        transparent={true} 
        opacity={0.5} 
        sizeAttenuation={true} 
      />
    </points>
  );
};

export default function HeroBackground3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#05070A', 5, 35]} />
        <ParticleWave />
      </Canvas>
    </div>
  );
}
