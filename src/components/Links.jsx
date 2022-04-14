import React from "react";
import { Fade } from "react-reveal";

const Links = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center lg:flex-row lg:justify-start text-white mb-12">
            <div className="hidden w-2 h-full bg-white lg:block lg:ml-12"></div>
            <div className="w-5/6 flex flex-col lg:w-1/2 pb-10">
                <Fade bottom>
                    <p className="text-6xl pb-10 lg:ml-20">Links</p>
                    <div className="flex flex-col space-y-6 lg:ml-20 mt-5 text-gray-400">
                        <a href="https://disconnekt.berlin/">
                            disconnekt.berlin/
                        </a>
                        <a href="https://soundcloud.com/disconnekt/">
                            soundcloud.com/disconnekt/
                        </a>
                        <a href="https://fb.com/disconnekt.berlin/">
                            fb.com/disconnekt.berlin/
                        </a>
                        <a href="instagram.com/disconnekt.berlin/">
                            instagram.com/disconnekt.berlin/
                        </a>

                        <a href="disconnektrecords.bandcamp.com/">
                            disconnektrecords.bandcamp.com/
                        </a>
                        <a href={process.env.PUBLIC_URL + "/Disconnekt_pres.pdf"}>
                            Download PDF 
                        </a>
                    </div>
                </Fade>
            </div>
            <Fade bottom>
                <div className="w-full lg:w-1/2 avatar flex justify-center lg:pr-4">
                    <div className=" w-5/6 h-full rounded-xl">
                        <img
                            src="/image/ipse.jpg"
                            alt="performance"
                            className="object-contain"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Links;
