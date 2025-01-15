// Import dependencies
import {PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";

const Hero = () => {
    return (
        // Add hero section with blue border
        <section className="min-h-screen border-2 border-blue-500 w-full flex flex-col relative">Hero
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hello, my name is Miles Wildmore<span className="waving-hand">👋</span></p>
            {/* Add secondary text */}
            <p className="hero_tag text-gray_gradient">Building Products and Brands</p>
        </div>
            <div className="w-full h-full absolute inset-0">
               {/* Add canvas with camera actions*/}
               <Canvas className="w-full h-full absolute inset-0">
                   {/* Add canvas loader*/}
                   <Suspense fallback={<CanvasLoader />}>


                   {/* Add camera*/}
                   <PerspectiveCamera makeDefault position={[0, 0, 30]}/>

                   <HackerRoom />
                   </Suspense>
               </Canvas>
            </div>
        </section>
    )
}
export default Hero