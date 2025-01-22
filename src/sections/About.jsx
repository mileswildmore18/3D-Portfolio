import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";

const About = () => {
    // Add copy to clipboard
    const [hasCopied, setHasCopied] = useState(false)
    // Add copy to clipboard for e-mail navigation
    const handleCopy = () => {
        navigator.clipboard.writeText('mileswildmore18@gmail.com');

        // show success message
        setHasCopied(true)
        // reset after 2 seconds
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }
    return (
        // Add about section responsive on different screen sizes
        <section className="c-space my-20" id="about">
            {/* Start of information about me*/}
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        {/* Add image */}
                        <img src="/assets/miles-picture.jpg" alt="grid-1"
                             className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            {/* Add information about me*/}
                            <p className="grid-headtext">Hello, I am Miles Wildmore</p>
                            <p className="grid-subtext">After graduating from coding bootcamp at University of Central
                                Florida, I have been improving my own skills on frontend web development, and been
                                focused on animated 3D websites and making websites exciting to look at.</p>
                        </div>
                    </div>
                </div>
                {/*End of information about me*/}

                {/* Add information about my skills*/}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I specialize in HTML, CSS with Tailwind/Bootstrap, and
                                JavaScript with a focus on React and Next.js.</p>
                        </div>
                    </div>
                </div>
                {/*End of information about my skills*/}

                {/*Start of globe and work section*/}
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
                        <div>
                            {/* Add information about where I work*/}
                            <p className="grid-headtext">I work remotely across most timezones</p>
                            <p className="grid-subtext">I am based in the United States, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"
                            />
                        </div>
                    </div>
                </div>
                {/*End of globe and work section*/}

                {/* Add information about my passion*/}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My passion for coding</p>
                            <p className="grid-subtext">I love building things through code and learning new things to
                                solve problems. It is my passion and not just my profession.</p>
                        </div>
                    </div>
                </div>
                {/*End of passion section*/}
                {/* Add information about my contact*/}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4"
                             className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            {/* Add copy to clipboard*/}
                            <div className="copy-container" onClick={handleCopy}>
                                {/* Add copy icon*/}
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy'/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">mileswildmore18@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of information about my contact*/}
            </div>
        </section>
    )
}
export default About
