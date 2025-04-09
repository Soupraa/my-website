import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
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

function AboutScene() {
    const shader = useMemo(() => ({
        uniforms: {
            time: { value: 0.0 },
        },
        vertexShader: `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
        fragmentShader: `
              uniform float time;
              varying vec2 vUv;
              void main() {
                vec3 colorTop = vec3(0.0, 0.36, 0.35);   // #005f59
                vec3 colorMiddle = vec3(0.0, 0.34, 0.27); // #005745
                vec3 colorMid2 = vec3(0.031, 0.639, 0.419); // #08a36b
                vec3 colorBottom = vec3(0.0, 0.27, 0.25); // #00453f
          
                // Animate the gradient by using time to offset the blend
                float speedFactor = 0.05;  // A value < 1 will slow down the animation
                float animatedFactor = 0.5 + 0.5 * sin(time * speedFactor + vUv.y * 5.0);

          
                // Blend the colors starting from bottom to top
                vec3 blendedColor = mix(colorBottom, colorMid2, animatedFactor);
                blendedColor = mix(blendedColor, colorMiddle, animatedFactor);
                blendedColor = mix(blendedColor, colorTop, animatedFactor);
          
                gl_FragColor = vec4(blendedColor, 1.0);
              }
            `,
    }), []);


    // useFrame((state, delta) => {
    //     // Slow rotation for the group
    //     ref.current.rotation.x -= delta / 10;
    //     ref.current.rotation.y -= delta / 15;
    // });
    const { viewport } = useThree(); // Get viewport size
    useFrame(({ clock }) => {
        shader.uniforms.time.value = clock.elapsedTime;
      });
    return (
        // <Physics timeStep="vary" gravity={[0, 0, 0]}>
        <mesh position={[0, 0, -1]} scale={[viewport.width, viewport.height, 1]} >
            <planeGeometry args={[1.5, 1.5]} />

            <shaderMaterial args={[shader]} />
        </mesh >

        // </Physics>
    );
}

export default AboutScene;
