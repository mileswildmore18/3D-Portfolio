import Globe from "react-globe.gl";

const About = () => {
    return (
        // Add about section responsive on different screen sizes
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        {/* Add image */}
                        <img src="/assets/miles-picture.jpg" alt="grid-1"
                             className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            {/* Add information about me*/}
                            <p className="grid-headtext">Hello, I'm Miles Wildmore</p>
                            <p className="grid-subtext">After graduating from coding bootcamp at University of Central
                                Florida, I have been improving my own skills on frontend web development, and been
                                focused on animated 3D websites and making websites exciting to look at.</p>
                        </div>
                    </div>
                </div>
                {/* Add information about my skills*/}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in HTML, CSS with Tailwind/Bootstrap, and JavaScript with a focus on React and Next.js.</p>
                        </div>
                    </div>
                </div>
                {/* Add information about my experience*/}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            {/* Add globe*/}
                            <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
