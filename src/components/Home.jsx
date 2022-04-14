import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Roll } from "react-reveal";

const Home = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-between items-center pt-20">
            <Roll>
                <img
                    src="/image/Logo.png"
                    alt="logo"
                    className="h-2/3 object-contain animate-pulse"
                />
            </Roll>

            <div className="flex flex-col justify-center items-center animate-pulse">
                <p className="uppercase">scroll down</p>
                <BsChevronDoubleDown className="text-6xl  text-white " />
            </div>
        </div>
    );
};

export default Home;
