// Import dependencies
import {PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";

// Add hero section
const Hero = () => {
    const x = useControls('HackerRoom', {
        // Add Leva controls
        positionX: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10
        },
        rotationX: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationY: {
            value: 0,
            min: -10,
            max: 10
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10
        }
    })
    return (
        // Add hero section with blue border
        <section className="min-h-screen border-2 border-blue-500 w-full flex flex-col relative">Hero
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hello, my name
                    is Miles Wildmore<span className="waving-hand">👋</span></p>
                {/* Add secondary text */}
                <p className="hero_tag text-gray_gradient">Building Products and Brands</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* Add leva*/}
                <Leva/>
                {/* Add canvas with camera actions*/}
                <Canvas className="w-full h-full absolute inset-0">
                    {/* Add canvas loader*/}
                    <Suspense fallback={<CanvasLoader/>}>


                        {/* Add camera*/}
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        {/* Add model */}
                        <HackerRoom //scale={0.07}
                            //position={[0, 0, 0]}
                            //rotation={[0, 280, 0]}
                            position={[x.positionX, x.positionY, x.positionZ]}
                            rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                            scale={[x.scale, x.scale, x.scale]}/>

                        {/* Add lights*/}
                        <ambientLight intensity={1}/>
                        {/* Add directional light of the model*/}
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
