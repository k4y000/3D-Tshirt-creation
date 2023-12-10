import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import state from '../store'

const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);


    // Hook that alow script execution on every frame
    // Receive the state and clock delta
    // Callbak invoked just before frame is rendered
    useFrame((state, delta) => {

        // set the inition position of the model
        const isBreakpoint = window.innerWidth > 600
        const isMobile = window.innerWidth <= 600
    
        let targetPosition = [0, 0, 2]
        if(snap.intro) {
            if(isBreakpoint) targetPosition = [-0.3, 0, 1.2]
            if(isMobile) targetPosition = [0, 0.2, 1.5]
        } else {
            if(isMobile) targetPosition = [0, 0, 1.3]
            else targetPosition = [0, 0, 1.1]
        }

        // set the model camera position
        easing.damp3(state.camera.position, targetPosition, 0.45, delta)

        
        // set the model rotation smoothly
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 5, -state.pointer.x /5, 0],
            0.35,
            delta
        )


        
    })

    return (
        <group ref={ group }>{ children }</group>
    )
}

export default CameraRig