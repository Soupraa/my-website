import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
type PyramidProps = {
    id: number
    position: [number, number, number]
    velocity: [number, number, number]
    lifespan: number
    onExpire: (id: number) => void
}

function Pyramid({ id, position, velocity, lifespan, onExpire }: PyramidProps) {
    const ref = useRef<THREE.Mesh>(null);
    const [life, setLife] = useState(0);
    const initialY = useRef(position[1]);
    const bounceSpeed = useRef(Math.random() * 2 + 1);

    useFrame((_, delta) => {
        setLife((prevLife) => {
            const newLife = prevLife + delta;
            const progress = Math.min(1, newLife / lifespan); // 0 → 1

            if (ref.current) {
                const mesh = ref.current;

                // Bounce
                mesh.position.y = initialY.current + Math.sin(performance.now() * 0.002 * bounceSpeed.current) * 0.2;

                // Movement
                mesh.position.x += velocity[0] * delta * 2;
                mesh.position.y += velocity[1] * delta;
                mesh.position.z += velocity[2] * delta;

                // Rotation
                mesh.rotation.y += delta * 2;
                mesh.rotation.x += delta * 2;

                // Growth/shrink logic
                let scale = 1;
                let opacity = 0.3;

                if (progress < 0.2) {
                    const t = progress / 0.2; // 0 → 1
                    scale = t;
                    opacity = t * 0.3;
                } else if (progress > 0.8) {
                    const t = (1 - progress) / 0.2; // 1 → 0
                    scale = t;
                    opacity = t * 0.3;
                }

                mesh.scale.setScalar(scale);
                const mat = mesh.material as THREE.MeshPhysicalMaterial;
                mat.opacity = opacity;
            }

            if (newLife >= lifespan) {
                onExpire(id);
            }

            return newLife;
        });
    });


    return (
        <mesh ref={ref} position={position}>
            <coneGeometry args={[1.8, 1.8, 3]} />
            <meshStandardMaterial
                color="#005745"
                emissive="#08a36b"
                emissiveIntensity={1}
                transparent
                opacity={0.1}
                roughness={0.2}
                metalness={0.8}
                side={THREE.DoubleSide}
            />
            <lineSegments>
                <edgesGeometry attach="geometry" args={[new THREE.ConeGeometry(1.8, 1.8, 3)]} />
                <lineBasicMaterial color="#00ff00" linewidth={1} />
            </lineSegments>
        </mesh>
    )
}

function AboutScene() {
    const [pyramids, setPyramids] = useState<Array<Omit<PyramidProps, 'onExpire'>>>([])

    const handleExpire = (id: number) => {
        // Move this logic outside render to avoid state updates in the middle of render
        setPyramids((prev) => prev.filter((p) => p.id !== id));
    };
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
                float speedFactor = 0.1;  // A value < 1 will slow down the animation
                float animatedFactor = 0.5 + 0.5 * sin(time * speedFactor + vUv.y * 5.0);

          
                // Blend the colors starting from bottom to top
                vec3 blendedColor = mix(colorBottom, colorMid2, animatedFactor);
                blendedColor = mix(blendedColor, colorMiddle, animatedFactor);
                blendedColor = mix(blendedColor, colorTop, animatedFactor);
          
                gl_FragColor = vec4(blendedColor, 1.0);

                
              }
            `,
    }), []);

    // Add a new pyramid every second
    useEffect(() => {
        const interval = setInterval(() => {
            setPyramids((prev) => [
                ...prev,
                {
                    id: Math.random(),
                    position: [
                        (Math.random() - 0.5) * 60,
                        (Math.random() - 0.5) * 60,
                        (Math.random() - 0.5) * 1,
                    ],
                    velocity: [
                        (Math.random() - 0.5) * 1,
                        (Math.random() - 0.5) * 1,
                        (Math.random() - 0.5) * 1,
                    ],
                    lifespan: 5 + Math.random() * 3,
                },
            ])
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const { viewport } = useThree(); // Get viewport size
    useFrame(({ clock }) => {
        shader.uniforms.time.value = clock.elapsedTime;
    });
    return (
        <>
            {/* Background gradient shader */}
            <mesh position={[0, 0, -10]} scale={[viewport.width, viewport.height, 1]}>
                <planeGeometry args={[1.5, 1.5]} />
                <shaderMaterial args={[shader]} />
            </mesh>
            {/* Lights */}
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={3} />

            {/* Glowing bouncing pyramids */}
            {pyramids.map((pyramid) => (
                <Pyramid key={pyramid.id} {...pyramid} onExpire={handleExpire} />
            ))}
            {/* <Skull /> */}
        </>
    )

}

export default AboutScene;
