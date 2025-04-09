import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import { Physics } from '@react-three/rapier';

// Function to create a new star using instancing for performance
function Star() {
  const meshRef = useRef<any>(null);
  const count = 3000; // Number of stars

  // Create geometries and materials outside the render loop to avoid recalculation
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(0.1, 2), []);
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#ffa0e0', emissive: '#ffa0e0', emissiveIntensity: 5 }),
    []
  );

  // Instanced mesh
  const positions = useMemo(() => {
    let positions = [];
    for (let i = 0; i < count; i++) {
      positions.push([
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
      ]);
    }
    return positions;
  }, [count]);

  useFrame(() => {
    if (meshRef.current) {
      // Set positions for each instance at runtime
      positions.forEach((pos, index) => {
        meshRef.current.setMatrixAt(
          index,
          new THREE.Matrix4().setPosition(pos[0], pos[1], pos[2])
        );
      });
      meshRef.current.instanceMatrix.needsUpdate = true; // Tell the instance mesh to update its matrix
    }
  });

  return <instancedMesh ref={meshRef} args={[geometry, material, count]} />;
}

function HomeScene() {
  const ref = useRef<any>(null);

  useFrame((state, delta) => {
    // Slow rotation for the group
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <Physics timeStep="vary" gravity={[0, 0, 0]}>
      <color attach="background" args={['#12071f']} />
      <group ref={ref}>
        <Star />
      </group>
    </Physics>
  );
}

export default HomeScene;
