import {Suspense, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";

const Experience = () => {
    // Add animation from the animations and developer file
    const [animationName, setAnimationName] = useState('idle')
    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600">
                <h3 className="head-text">
                My Work Experience
                </h3>

                <div className="work-container">
                    <div className="work-canvas">
                    <Canvas>
                        {/* Add ambient light intensity to the avatar*/}
                        <ambientLight intensity={7} />
                        {/* Add light angles and the shadow effects for avatar*/}
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        {/* Add direction of where the light is coming from*/}
                        <directionalLight position={[10, 10, 10]} />
                        {/* Add orbit controls around the avatar and avoid going past the bottom of the avatar*/}
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                        {/* Add canvas loader for the avatar*/}
                        <Suspense fallback={<CanvasLoader />}>
                        {/*    Add avatar    */}
                            <Developer position-y={-3} scale={3} animationName={animationName}/>
                        </Suspense>
                    </Canvas>
                    </div>
                    {/* Add work content*/}
                    <div className="work-content">
                    {/* Add work experience responsiveness on different screen sizes*/}
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {/* Add work experience from index js file*/}
                        {workExperiences.map(({ id, name, pos, duration, title, icon, animation }) => (
                            // Add animation to the work experience on click and out
                            <div key={id} className="work-content_container group" onClick={() => setAnimationName(animation.toLowerCase())} onPointerOver={() => setAnimationName(animation.toLowerCase())} onPointerOut={() => setAnimationName('idle')}>
                                <div className="flex flex-col h-full justify-start items-center py-2">
                                    <div className="work-content_logo">
                                    <img src={icon} alt="logo" className="w-full h-full"/>
                                    </div>
                                    <div className="work-content_bar"/>
                                </div>
                                <div className="sm:p-5 px-2.5 py-5">
                                    <p className="font-bold text-white-800">{name}</p>
                                    <p className="text-sm mb-5">{pos} -- {duration}</p>
                                    <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Experience;
