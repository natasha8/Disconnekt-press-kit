import React from "react";
import { Fade } from "react-reveal";

const Artist = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center mt-20 lg:flex-row lg:justify-start text-white lg:mt-0">
            <div className="hidden w-2 h-full bg-white lg:block lg:ml-12"></div>
            <div className="w-full flex flex-col items-center lg:items-start ">
                <Fade bottoms>
                    <p className="text-6xl py-12 lg:ml-20">Artist invited</p>
                </Fade>
                <Fade bottom>
                    <div className="w-full avatar flex flex-col items-center lg:flex-row lg:justify-evenly lg:pr-4">
                        <div className="w-11/12 my-4 lg:my-0 lg:w-1/3 h-full rounded-xl">
                            <img
                                src="/image/2021.jpg"
                                alt="2021"
                                className="object-contain"
                            />
                        </div>

                        <div className="w-11/12 my-4 lg:my-0 lg:w-1/3 h-full rounded-xl">
                            <img
                                src="/image/djs2019.jpg"
                                alt="2019"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="w-full avatar flex flex-col items-center lg:flex-row lg:justify-evenly lg:pr-4">
                        <div className="w-11/12 my-4 lg:my-0 lg:w-1/3 h-full rounded-xl">
                            <img
                                src="/image/2018.jpg"
                                alt="2018"
                                className="lg:w-1/3 object-contain"
                            />
                        </div>

                        <div className="w-11/12 my-4 lg:my-0 lg:w-1/3 h-full rounded-xl">
                            <img
                                src="/image/2017.png"
                                alt="2017"
                                className="lg:w-1/3 object-contain"
                            />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Artist;
