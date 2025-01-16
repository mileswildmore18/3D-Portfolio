// Import dependencies
import {PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";


// Add hero section
const Hero = () => {

    // Add media queries for different screen sizes
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    // Add hero sizes for different screen sizes
    const sizes = calculateSizes(isSmall, isMobile, isTablet)
    return (
        // Add hero section with blue border
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hello, my name
                    is Miles Wildmore<span className="waving-hand">👋</span></p>
                {/* Add secondary text */}
                <p className="hero_tag text-gray_gradient">Building Products and Brands</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* Add leva*/}
                {/*<Leva/>*/}
                {/* Add canvas with camera actions*/}
                <Canvas className="w-full h-full absolute inset-0">
                    {/* Add canvas loader*/}
                    <Suspense fallback={<CanvasLoader/>}>


                        {/* Add camera*/}
                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                        {/* Add camera movement to model*/}
                        <HeroCamera isMobile={isMobile}>
                            {/* Add model */}
                            <HackerRoom
                                /* Add position, rotation and scale along with scale fitting on different screen sizes*/
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}/>
                        </HeroCamera>


                            <group>
                                <Target position={sizes.targetPosition}/>
                                <ReactLogo position={sizes.reactLogoPosition}/>
                                <Cube position={sizes.cubePosition}/>
                                <Rings position={sizes.ringPosition}/>
                            </group>
                        {/* Add lights*/}
                        <ambientLight intensity={1}/>
                        {/* Add directional light of the model*/}
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}
export default Hero
