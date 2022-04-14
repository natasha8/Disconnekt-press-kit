import React from "react";
import { RiFacebookCircleFill, RiSoundcloudLine } from "react-icons/ri";
import { Fade } from "react-reveal";
import residentList from "./residentList";

const Resident = () => {
    return (
        <div className="w-full mt-20 lg:mt-0 px-5 lg:px-24 lg:py-12">
            <Fade left>
                <p className="text-6xl text-white text-center pb-10 lg:ml-10 lg:text-left">
                    Resident
                </p>
            </Fade>
            {residentList.map((resident, i) => (
                <Fade bottom>
                    <div
                        key={i}
                        className="card lg:card-side bg-base-100 shadow-xl my-4 lg:my-0 lg:m-6"
                    >
                        <figure className="w-full lg:w-1/2">
                            <img
                                src={resident.img}
                                alt="Album"
                                className="max-h-[20rem] lg:max-h-[30rem] object-cover"
                            />
                        </figure>
                        <div className="card-body lg:w-1/2 bg-zinc-800 ">
                            <p className="card-title text-5xl text-white">
                                {resident.name}
                            </p>
                            <p className="text-justify text-gray-500">
                                {resident.text}
                            </p>
                            <div className="card-actions text-3xl text-white">
                                <a
                                    href={resident.fb}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <RiFacebookCircleFill />
                                </a>
                                <a
                                    href={resident.sc}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <RiSoundcloudLine />
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            ))}
        </div>
    );
};

export default Resident;
