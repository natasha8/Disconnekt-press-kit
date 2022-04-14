import React from "react";
import { Fade } from "react-reveal";

const Record = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center my-20 lg:my-0 lg:flex-row lg:justify-start text-white">
            <div className="hidden w-2 h-full bg-white lg:block lg:ml-12"></div>
            <div className="w-5/6 flex flex-col items-center lg:items-start lg:w-1/2 pb-10">
                <Fade bottom>
                    <p className="text-6xl lg:ml-20">Disconnekt Records</p>
                    <p className="text-xl lg:ml-20 mt-5 text-gray-400">
                        We always dreamed to give space to the talents we bring
                        to our events, by releasing their music under the name
                        of our project. Today we are honored to announce, the
                        start of the realization of this dream. Dedicated to
                        everyone who has been supporting us in the last years,
                        the first vinyl of Disconnekt Records is on his way. We
                        are very thankful to all the artists that agreed to
                        collaborate with us and to all our supporters who have
                        made all of this possible.
                    </p>
                </Fade>
            </div>
            <Fade bottom>
                <div className="w-full lg:w-1/2 avatar flex justify-center lg:pr-4">
                    <div className=" w-5/6 h-full rounded-xl">
                        <img
                            src="/image/record.jpg"
                            alt="performance"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Record;
