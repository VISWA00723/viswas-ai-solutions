import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingObjects() {
  const sphere1 = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);
  const box = useRef<THREE.Mesh>(null);
  const torus = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphere1.current) {
      sphere1.current.position.y = Math.sin(time) * 0.5;
      sphere1.current.rotation.x = time * 0.3;
    }
    if (sphere2.current) {
      sphere2.current.position.y = Math.cos(time * 1.2) * 0.7;
      sphere2.current.rotation.z = time * 0.4;
    }
    if (box.current) {
      box.current.rotation.x = time * 0.2;
      box.current.rotation.y = time * 0.3;
      box.current.position.x = Math.sin(time * 0.5) * 2;
    }
    if (torus.current) {
      torus.current.rotation.x = time * 0.4;
      torus.current.rotation.y = time * 0.2;
      torus.current.position.z = Math.cos(time * 0.3) * 1;
    }
  });

  return (
    <>
      <mesh ref={sphere1} position={[-3, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={0.3} />
      </mesh>
      
      <mesh ref={sphere2} position={[3, 0, -2]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.4} />
      </mesh>
      
      <mesh ref={box} position={[2, 2, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.2} />
      </mesh>
      
      <mesh ref={torus} position={[-2, -1, 1]}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.3} />
      </mesh>
    </>
  );
}

function Scene3DContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <FloatingObjects />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

function Fallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-muted/20 rounded-lg">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading 3D Scene...</p>
      </div>
    </div>
  );
}

interface Scene3DProps {
  className?: string;
}

export function Scene3D({ className = "" }: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Suspense fallback={<Fallback />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ 
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true
          }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1;
          }}
        >
          <Scene3DContent />
        </Canvas>
      </Suspense>
    </div>
  );
}