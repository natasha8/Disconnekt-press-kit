import React from "react";
import { Fade } from "react-reveal";

const Synopsis = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center my-20 lg:my-0 lg:flex-row lg:justify-start text-white">
            <div className="hidden w-2 h-full bg-white lg:block lg:ml-12"></div>
            <div className="w-5/6 flex flex-col items-center lg:items-start lg:w-1/2 pb-10">
                <Fade bottom>
                    <p className="text-6xl lg:ml-20">Synopsis</p>
                    <p className="text-xl lg:ml-20 mt-5 text-gray-400">
                        Disconnekt is a dream masked as nightmare. A safe path
                        of the shape of an arduous and hostile trail. It is a
                        blue sky under dark clouds. It is the distant chant of
                        malicious and beautiful mermaids, a magical forest in a
                        distant world. Disconnekt is for all those who live good
                        music as a mindset and lifestyle. It is a whirlwind of
                        such opposed still so strongly attracted emotions and
                        feelings.
                    </p>
                </Fade>
            </div>
            <Fade bottom>
                <div className="w-full lg:w-1/2 avatar flex justify-center lg:pr-4">
                    <div className=" w-5/6 h-full rounded-xl">
                        <img
                            src="/image/valerio.jpg"
                            alt="performance"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Synopsis;
