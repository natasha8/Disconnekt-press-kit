import React from "react";
import { Fade } from "react-reveal";

const Anomalie = () => {
    return (
        <div
            className="w-full h-full  flex flex-col  justify-center items-center
        lg:h-screen lg:flex-row lg:justify-start lg:items-start text-white"
        >
            <div className="hidden w-2 h-full bg-white lg:block lg:ml-12"></div>

            <div className="w-5/6 flex flex-col items-center lg:items-start lg:w-1/2">
                <Fade bottom>
                    <p className="text-justify text-6xl lg:ml-20 mt-20">
                        2022 at Anomalie Art Club Berlin
                    </p>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        Starting new residency from June of 2021, Disconnekt is
                        taking place at Anomalie
                    </p>
                </Fade>
            </div>
            <Fade right>
                <div className="w-full lg:w-1/2 avatar flex justify-center mt-10 lg:mt-0">
                    <div className="w-5/6 h-full rounded-xl">
                        <img
                            src="/image/MDF.jpg"
                            alt="magda"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Anomalie;
