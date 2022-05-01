import React from "react";
import { BsLightning } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

export default function Joining() {
  return (
    <div className="flex flex-col items-center py-16 px-4 bg-[#f7f9fa] ">
      <h3 className="text-2xl font-semibold text-center my-10">
        Joining GigSalad is quick and easy.
      </h3>
      <div className="flex flex-col lg:flex-row max-w-6xl">
        <div className="card hover:cursor-pointer group flex justify-between items-center bg-white p-6 ">
          <div className="flex flex-col basis-4/5">
            <BsLightning className="stroke-gray-400 w-10 h-10 mb-3 duration-500 group-hover:fill-[#2690ff]" />
            <h3 className="text-2xl font-semibold  mb-3 duration-500 group-hover:text-[#2690ff]">
              For Gigging Proffessionals
            </h3>
            <p className="text-md font-medium mb-3">
              Are you a performer, speaker , or event services provider
            </p>
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos distinctio tempora voluptate quo.
            </p>
          </div>
          <MdArrowForwardIos className="fill-gray-300 w-7 h-7 group-hover:translate-x-4 group-hover:fill-[#2690ff] duration-500" />
        </div>
        <div className="card mt-10 lg:mt-0 lg:ml-8 hover:cursor-pointer group flex justify-between items-center bg-white p-6 ">
          <div className="flex flex-col basis-4/5">
            <BsLightning className="stroke-gray-400 w-10 h-10 mb-3 duration-500 group-hover:fill-[#2690ff]" />
            <h3 className="text-2xl font-semibold  mb-3 duration-500 group-hover:text-[#2690ff]">
              For Envents Planners
            </h3>
            <p className="text-md font-medium mb-3">
              Are you planning an event and want to hite talent or services?
            </p>
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos distinctio tempora voluptate quo.
            </p>
          </div>
          <MdArrowForwardIos className="fill-gray-300 w-7 h-7 group-hover:translate-x-4 group-hover:fill-[#2690ff] duration-500" />
        </div>
      </div>
    </div>
  );
}
