// import dependencies
import { useGLTF } from '@react-three/drei'
import {useRef} from "react";
// create component
const Target = (props) => {

    const targetRef = useRef();
    // load model
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');
    return (
        <mesh {...props} ref={targetRef}
        >
            <primitive object={scene} />
        </mesh>
    )
}
export default Target
