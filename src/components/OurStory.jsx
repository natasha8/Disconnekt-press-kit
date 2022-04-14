import React from "react";
import { Fade } from "react-reveal";

const OurStory = () => {
    return (
        <div className="w-full h-full lg:h-screen flex flex-col items-center justify-center lg:flex-row lg:justify-start text-white mt-20 lg:mt-0 ">
            <div className="hidden w-2 h-full bg-white lg:block lg:ml-12"></div>

            <div className="w-5/6 flex flex-col items-center lg:items-start lg:w-1/2">
                <Fade bottom>
                    <p className="text-justify text-6xl lg:ml-20">Our story</p>
                </Fade>
                <Fade bottom>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        Originating from the minds of three young artists who
                        have lived in Berlin since 2014, the concept came from a
                        desire to bring together a new community of people who
                        share a common love for underground culture and who are
                        willing to actively participate in the scene and support
                        a new project under a different artistic direction.
                    </p>
                </Fade>
                <Fade bottom>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        We started with our first rave, an illegal one under a
                        bridge and then we moved our operation to an industrial
                        basement in the center of Berlin. We started small, but
                        our events ran regularly and grew quickly, to the point
                        where we had to increase our crew.
                    </p>
                </Fade>
                <Fade bottom>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        In 2017 we moved our events to the nightclub IPSE (
                        <span className="text-red-700">
                            do we say something about the closure due to fire
                        </span>
                        ) and in 2018 we hosted our events at the old
                        Griessmuehle venue.
                    </p>
                </Fade>
                <Fade bottom>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-red-700">
                        What happened in 2019?
                    </p>{" "}
                </Fade>
                <Fade bottom>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        In 2020 we moved our residency to the ://about blank and
                        then the pandemic started, which forced us to have to
                        take a break. However in 2021 we started back up again,
                        this time moving to Anomalie Art Club, this move came
                        about due to the pandemic situation and restricted
                        capacity at ://about blank.
                    </p>{" "}
                </Fade>
                <Fade bottom>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        The crew is working hard to continually upgrade the
                        quality of the events under all aspects and is now one
                        of the highlights of the Berlin Techno scene.
                    </p>
                </Fade>
            </div>
            <Fade right>
                <div className="w-full lg:w-1/2 avatar flex justify-center mt-10 lg:mt-0 lg:pr-4">
                    <div className=" w-5/6 h-full rounded-xl">
                        <img
                            src="/image/story.jpg"
                            alt="magda"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default OurStory;
