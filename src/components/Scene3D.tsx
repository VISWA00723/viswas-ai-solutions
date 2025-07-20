import { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, MeshDistortMaterial, Sphere, Environment, PerspectiveCamera, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function FloatingObjects() {
  const sphere1 = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);
  const box = useRef<THREE.Group>(null);
  const torus = useRef<THREE.Mesh>(null);
  const dodecahedron = useRef<THREE.Mesh>(null);
  const octahedron = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphere1.current) {
      sphere1.current.position.y = Math.sin(time * 0.8) * 1.2;
      sphere1.current.rotation.x = time * 0.4;
      sphere1.current.rotation.z = time * 0.2;
      sphere1.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
    }
    
    if (sphere2.current) {
      sphere2.current.position.y = Math.cos(time * 1.2) * 0.8;
      sphere2.current.position.x = Math.sin(time * 0.6) * 0.5;
      sphere2.current.rotation.z = time * 0.6;
      sphere2.current.rotation.y = time * 0.3;
    }
    
    if (box.current) {
      box.current.rotation.x = time * 0.3;
      box.current.rotation.y = time * 0.4;
      box.current.position.x = Math.sin(time * 0.5) * 2.5;
      box.current.position.z = Math.cos(time * 0.4) * 1.5;
    }
    
    if (torus.current) {
      torus.current.rotation.x = time * 0.5;
      torus.current.rotation.y = time * 0.3;
      torus.current.position.z = Math.cos(time * 0.3) * 1.2;
      torus.current.position.y = Math.sin(time * 0.7) * 0.5;
    }

    if (dodecahedron.current) {
      dodecahedron.current.rotation.x = time * 0.2;
      dodecahedron.current.rotation.y = time * 0.4;
      dodecahedron.current.rotation.z = time * 0.1;
      dodecahedron.current.position.y = Math.sin(time * 1.5) * 0.8;
      dodecahedron.current.position.x = Math.cos(time * 0.8) * 1.5;
    }

    if (octahedron.current) {
      octahedron.current.rotation.x = time * 0.6;
      octahedron.current.rotation.y = time * 0.2;
      octahedron.current.position.z = Math.sin(time * 0.9) * 2;
      octahedron.current.position.y = Math.cos(time * 1.1) * 1;
    }
  });

  return (
    <>
      {/* Enhanced Floating Sphere with Distortion */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={sphere1} position={[-3, 0, 0]}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <MeshDistortMaterial
            color="#60A5FA"
            emissive="#60A5FA"
            emissiveIntensity={0.4}
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
      
      {/* Animated Sphere with Pulsing Effect */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh ref={sphere2} position={[3, 0, -2]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.5}
            distort={0.2}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>
      
      {/* Enhanced Box with Wireframe Overlay */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <group ref={box} position={[2, 2, 0]}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
              color="#10B981" 
              emissive="#10B981" 
              emissiveIntensity={0.3}
              roughness={0.3}
              metalness={0.7}
              transparent
              opacity={0.8}
            />
          </mesh>
          <mesh>
            <boxGeometry args={[1.01, 1.01, 1.01]} />
            <meshBasicMaterial color="#10B981" wireframe />
          </mesh>
        </group>
      </Float>
      
      {/* Enhanced Torus */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={torus} position={[-2, -1, 1]}>
          <torusGeometry args={[1.2, 0.4, 24, 48]} />
          <meshStandardMaterial 
            color="#F59E0B" 
            emissive="#F59E0B" 
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* New Dodecahedron */}
      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.8}>
        <mesh ref={dodecahedron} position={[0, 3, -1]}>
          <dodecahedronGeometry args={[0.7]} />
          <meshStandardMaterial 
            color="#EF4444" 
            emissive="#EF4444" 
            emissiveIntensity={0.3}
            roughness={0.4}
            metalness={0.6}
          />
        </mesh>
      </Float>

      {/* New Octahedron */}
      <Float speed={2.2} rotationIntensity={2.5} floatIntensity={1.5}>
        <mesh ref={octahedron} position={[-1, -2, 2]}>
          <octahedronGeometry args={[0.8]} />
          <MeshDistortMaterial
            color="#06B6D4"
            emissive="#06B6D4"
            emissiveIntensity={0.4}
            distort={0.4}
            speed={3}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={1 + Math.random() * 2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ]}>
            <sphereGeometry args={[0.05 + Math.random() * 0.1, 8, 8]} />
            <meshStandardMaterial 
              color={new THREE.Color().setHSL(Math.random(), 0.8, 0.7)}
              emissive={new THREE.Color().setHSL(Math.random(), 0.8, 0.3)}
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function CameraRig() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

function Scene3DContent() {
  return (
    <>
      {/* Enhanced Lighting Setup */}
      <ambientLight intensity={0.2} color="#404080" />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={2}
        color="#ffffff"
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#60A5FA" />
      <pointLight position={[10, -10, 10]} intensity={0.6} color="#A855F7" />
      <pointLight position={[0, 10, 0]} intensity={0.4} color="#10B981" />
      
      {/* Environment for reflections */}
      <Environment preset="city" background={false} />
      
      <FloatingObjects />
      <CameraRig />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={1}
        enableDamping
        dampingFactor={0.05}
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Suspense fallback={<Fallback />}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 12], fov: 50 }}
          gl={{ 
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true,
            powerPreference: "high-performance"
          }}
          onCreated={({ gl, scene }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.2;
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
            scene.fog = new THREE.Fog('#000000', 8, 20);
          }}
          performance={{ min: 0.8 }}
        >
          <Scene3DContent />
        </Canvas>
      </Suspense>
    </motion.div>
  );
}