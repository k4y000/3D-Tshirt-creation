import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {

    const shadows = useRef();

  return (
    <AccumulativeShadows
        ref={shadows}
        temporal
        frames={60}
        alphaTest={0.999}
        scale={5}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -0.25]}
    >
        <RandomizedLight 
            amount={4}
            radius={9}
            intensity={0.95}
            ambient={0.25}
            position={[-5, 4, -5]}
        />
        <RandomizedLight 
            amount={4}
            radius={5}
            intensity={0.25}
            ambient={0.55}
            position={[-5, 4, -9]}
        />
    </AccumulativeShadows>
  )
}

export default Backdrop