import React from "react";
import { Fade } from "react-reveal";

const Introduction = () => {
    return (
        <div className="w-full h-full lg:h-screen flex items-center justify-center lg:justify-start text-white mt-10 lg:mt-0">
            <div className="hidden w-2 h-full bg-white lg:block lg:ml-12"></div>

            <div className="w-5/6 h-full flex flex-col items-center justify-center lg:items-start">
                <Fade bottom>
                    <p className="text-justify text-6xl lg:ml-20">Introduction</p>
                    <p className="text-justify text-xl mt-10 text-gray-400  text-justify lg:ml-20">
                        Disconnekt is a collective and label founded by
                        Cristian, Domingo & Fabrizio back in 2016 and has now
                        grown to a crew of over 20 passionate people. The
                        project was started with the aim to deliver quality
                        techno music, in a safe and friendly space, to help
                        people disconnect from the monotony of everyday life
                        inside our city of Berlin. Our focus is to support local
                        djs, sound engineers, performers, graphic designers, web
                        developers, promoters, artist and anyone else actively
                        working to help setup and manage any of our events.
                    </p>
                    <p className="text-justify text-xl lg:ml-20 mt-10 text-gray-400">
                        Our collective has grown from the beginning without any
                        external financial aid and has purely been funded by our
                        founders and the continuous reinvesting into the
                        business.
                    </p>
                    <p className="text-justify text-xl lg:ml-20 mt-10 text-gray-400">
                        The Disconnekt events are open to all people, our
                        collective is a mix of straight, gay and open minded
                        people that want to break down the wall of judgement and
                        unite everyone for the love of good techno music.
                    </p>
                </Fade>
            </div>
        </div>
    );
};

export default Introduction;
