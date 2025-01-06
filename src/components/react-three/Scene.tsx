import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber';
import React from 'react';

function Scene() {
    const myMesh = React.useRef<THREE.Mesh>();


    // useFrame(({ clock }) => {
    //     // myMesh.current.rotation.x = clock.getElapsedTime()
    //   })
    return (
        <Canvas>
            <mesh >
                <octahedronGeometry args={[2,5]}/>
                <meshStandardMaterial wireframe={true}/>
            </mesh>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 5]} />
        </Canvas>
    );
}
export default Scene;