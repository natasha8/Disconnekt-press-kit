import React from "react";
import { Fade } from "react-reveal";

const Performance = () => {
    return (
        <div className="w-full h-full lg:h-screen flex flex-col items-center justify-center my-20 lg:flex-row lg:justify-start lg:my-0 text-white ">
            <div className="hidden w-2 h-full bg-white lg:block lg:ml-12"></div>
            <div className="w-5/6 flex flex-col items-center lg:items-start lg:w-1/2">
                <Fade bottom>
                    <p className="text-justify text-6xl lg:ml-20">
                        Performance Art
                    </p>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        Disconnekt events aren't just only about music, which
                        yes, it is the mainly. But also, meticulously we care
                        about the production and the staging of the every night,
                        trying always to give our public the best Techno
                        experience they ever had, by having different,
                        innovative, spicy and professional performances.
                    </p>
                    <div className="text-xl lg:ml-20 mt-5 text-gray-400 pb-10">
                        <ul>
                            <li>
                                &bull; Léonard Condemine (contemporary mask
                                maker and performer)
                            </li>
                            <li>
                                &bull;Nicolas Fellas (plant music installation
                                and light)
                            </li>
                            <li>&bull; Jade Lee (contortionist) </li>
                            <li>&bull; Dark Light (light installations)</li>
                            <li>&bull; Modif (graphic, visual designer)</li>
                            <li>&bull; Jacopo (visual artist)</li>
                            <li>&bull; Lea (performer and dancer)</li>
                            <li>&bull; Cassandra (performer and dancer)</li>
                            <li>&bull; Diana Kleimenova (performer)</li>
                        </ul>
                    </div>
                </Fade>
            </div>
            <Fade bottom>
                <div className="w-full lg:w-1/2 avatar flex justify-center lg:pr-4">
                    <div className=" w-5/6 h-full rounded-xl">
                        <img
                            src="/image/performance.jpg"
                            alt="performance"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Performance;
