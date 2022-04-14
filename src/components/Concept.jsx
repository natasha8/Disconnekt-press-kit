import React from "react";
import { Fade } from "react-reveal";

const Concept = () => {
    return (
        <div className="w-full h-full lg:h-screen flex flex-col items-center justify-center mt-10 
        lg:flex-row lg:justify-start lg:mt-0 text-white">
            <div className="hidden w-2 h-full bg-white lg:block lg:ml-12"></div>

            <div className="w-5/6 flex flex-col justify-center items-center lg:items-start lg:w-1/2">
                <Fade bottom>
                    {" "}
                    <p className="text-justify text-6xl lg:ml-20">Concept</p>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        The main concept topics behind our project are
                        celebrating the beauty of diversity between humans from
                        different cultures and backgrounds, gathering together
                        and experience this time in total freedom and enjoying
                        arts under different forms. End goal: Disconnect from
                        the monotony of everyday life!!!
                    </p>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        During our events we offer to the crowd an experience,
                        filled with quality electronic music acts from all over
                        the world, playing different genres of music between
                        different floors, one always dedicated to Underground
                        Techno and the other alternating between House, Old
                        School Disco, minimal and many more. Not only do
                        showcase headliners, but are always looking for new up
                        and coming acts, to provide them with a platform to show
                        their talent and grow.
                    </p>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        In many cases, the quality of music would be enough, but
                        we feel that combining this with performance art, just
                        adds that special touch. These include visual shows,
                        contortionists, dancers, light installations, plant
                        installations and anything else that is stimulating to
                        the eyes.
                    </p>
                </Fade>
            </div>
            <Fade right>
                <div className="w-full lg:w-1/2 avatar flex justify-center mt-10 lg:mt-0 lg:pr-4">
                    <div className=" w-5/6 h-full rounded-xl">
                        <img
                            src="/image/CSD.jpg"
                            alt="CSD"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Concept;
