import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import React, { useMemo, useReducer, useRef } from 'react';
import { BallCollider, Physics, RigidBody } from '@react-three/rapier';

const Sphere: React.FC<{ color: string }> = ({ color }) => {
    const api = useRef<any>(null);
    const vec = new THREE.Vector3();

    //generates random position for sphere
    const r = THREE.MathUtils.randFloatSpread;
    const pos = useMemo<[number, number, number]>(() => [r(5), r(5), r(5)], [r]);

    //makes sphere object graviate towards the center
    useFrame((state, delta) => {
        delta = Math.min(0.1, delta)
        api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.3))
    })
    return (
        <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} colliders={false} ref={api}>
            <BallCollider args={[1]} />
            <mesh>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color={color} />
            </mesh>
        </RigidBody>
    )
}

function Pointer({ vec = new THREE.Vector3() }) {
    const ref = useRef<any>(null);
    useFrame(({ pointer, viewport }) => {
        if (ref.current) {
            (ref.current as any).setNextKinematicTranslation(
                vec.set((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0)
            );
        }
    })
    return (
        <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
            <BallCollider args={[1]} />
            <mesh>
                <icosahedronGeometry args={[0.2, 2]} />
                <meshStandardMaterial color={'#ffffff'} emissive={'#ffffff'} />
                <pointLight color={'#ffffff'} intensity={2} />
            </mesh>
            <pointLight intensity={4} distance={2} />
        </RigidBody>
    )
}
const accents = ['#ff4060', '#ffcc00', '#20ffa0', '#4060ff']
const shuffle = (accent = 0) => [
    { color: '#58b4f5', metalness: 1 },
    { color: '#f551cc', metalness: 0.5 },
    { color: '#a4a8a3', metalness: 0.5 },
];

function Scene() {
    const [accent, click] = useReducer((state) => ++state % accents.length, 0)
    const connectors = useMemo(() => shuffle(accent), [accent])
    return (
        <Physics timeStep="vary" gravity={[0, 0, 0]}>
            <color attach="background" args={['#141622']} />
            <Pointer />
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 5]} />
            {connectors.map((props, i) => (
                <Sphere key={i} {...props} />
            ))}
        </Physics>
    );
}
export default Scene;