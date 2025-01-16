// import dependencies
import { useGLTF } from '@react-three/drei'
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
// create component
const Target = (props) => {

    const targetRef = useRef();
    // load model
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    // Add animation
    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    })
    return (
        // Add mesh and ref rotated to the center
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}
        >
            {/* Add model*/}
            <primitive object={scene} />
        </mesh>
    )
}
export default Target
