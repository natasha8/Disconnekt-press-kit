import React from "react";
import { Fade } from "react-reveal";

const Outside = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center lg:flex-row lg:justify-start text-white my-20 lg:mt-0">
            <div className="hidden w-2 h-full bg-white lg:block lg:ml-12"></div>

            <div className="w-5/6 flex flex-col justify-center items-center lg:items-start lg:w-1/2 lg:pt-24">
                <Fade bottom>
                    <p className="text-justify text-5xl lg:text-6xl lg:ml-20">
                        Outside Berlin
                    </p>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        In the last years, we had the opportunity to work with
                        different venues around the city, that hosted our event
                        series; expanding our contacts and facing all kinds of
                        club situations and realities. Thanks to this and the
                        big passion we put on our work, we had the opportunity
                        between fail and successes, to develop the maturity
                        necessary to improve the quality of our events.
                    </p>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        Showcase at Schron club in Poland Own Stage at
                        Marvellous Island Festival in Paris.
                    </p>
                    <p className="text-justify text-xl lg:ml-20 mt-5 text-gray-400">
                        TBA other very important acts in some of the leading
                        Clubs in the international scene.
                    </p>
                    <div className="w-full flex justify-center lg:items-center pt-20">
                        <img
                            src="/image/crew.png"
                            alt="crew"
                            className="object-contain rounded-xl"
                        />
                    </div>
                </Fade>
            </div>
            <Fade right>
                <div className="w-full avatar lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
                    <div className="w-5/6  rounded-xl flex justify-center items-center">
                        <img
                            src="/image/outside1.jpg"
                            alt="performance"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Outside;
