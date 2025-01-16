// import dependencies
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
    // Add model
    const { nodes, materials } = useGLTF('/models/react.glb')
    return (
        // Add float animation
        <Float floatIntensity={1}>
            {/* Add group*/}
            <group position={[8, 8, 0]} scale={0.3} {...props} dispose={null}>
                {/* Add mesh*/}
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.39, 0.39, 0.5]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react.glb')
export default ReactLogo