import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FlowingMesh = () => {
  const pointsRef = useRef();
  
  // Denser grid for a more refined look
  const countX = 90;
  const countZ = 90;
  const sep = 1.0;
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(countX * countZ * 3);
    const colors = new Float32Array(countX * countZ * 3);
    
    // Color palette — soft blues and lavenders for light theme
    const color1 = new THREE.Color('#93c5fd'); // blue-300
    const color2 = new THREE.Color('#a5b4fc'); // indigo-300
    const color3 = new THREE.Color('#c4b5fd'); // violet-300
    const tempColor = new THREE.Color();
    
    let i = 0;
    let ci = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iz = 0; iz < countZ; iz++) {
        positions[i] = ix * sep - ((countX * sep) / 2);
        positions[i + 1] = 0;
        positions[i + 2] = iz * sep - ((countZ * sep) / 2);
        
        // Gradient colors based on position
        const t1 = ix / countX;
        const t2 = iz / countZ;
        tempColor.copy(color1).lerp(color2, t1).lerp(color3, t2 * 0.5);
        colors[ci] = tempColor.r;
        colors[ci + 1] = tempColor.g;
        colors[ci + 2] = tempColor.b;
        
        i += 3;
        ci += 3;
      }
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position.array;
    
    let i = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iz = 0; iz < countZ; iz++) {
        // Layered sine waves for organic, flowing motion
        pos[i + 1] = 
          Math.sin((ix * 0.25) + (t * 0.4)) * 1.2 +
          Math.sin((iz * 0.3) + (t * 0.3)) * 1.0 +
          Math.sin((ix + iz) * 0.15 + (t * 0.2)) * 1.5 +
          Math.cos((ix * 0.1) * (iz * 0.1) + (t * 0.15)) * 0.8;
        i += 3;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Gentle continuous rotation
    pointsRef.current.rotation.y = t * 0.02;
    
    // Subtle mouse-driven tilt
    pointsRef.current.rotation.x = 0.45 + (state.pointer.y * -0.08);
    pointsRef.current.rotation.z = state.pointer.x * -0.04;
  });

  return (
    <points ref={pointsRef} position={[0, -12, -25]} rotation={[0.45, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={positions.length / 3} 
          array={positions} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={colors.length / 3} 
          array={colors} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.15} 
        vertexColors={true}
        transparent={true} 
        opacity={0.8} 
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
};

export default function HeroBackground3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
      <Canvas camera={{ position: [0, 6, 18], fov: 55 }} dpr={[1, 1.5]}>
        <fog attach="fog" args={['#f8f9fb', 25, 100]} />
        <FlowingMesh />
      </Canvas>
    </div>
  );
}
