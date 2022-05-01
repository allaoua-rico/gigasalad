import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import SecondSlider1 from "./SecondSlider1";

export default function Grid() {
  //   const lg = useMediaQuery("(max-width:1023px)");
  const fisrtRow = [
    "/grid/BandsGroups.jpg",
    "/grid/DJs.jpg",
    "/grid/Ensembles.jpg",
    "/grid/Singers.jpg",
    "/grid/SoloMusicians.jpg",
    "/grid/TributeBands.jpg",
    "/grid/WorldCultural.jpg",
  ];
  return (
    <div className="bg-[#f7f9fa] ">
      <div className="max-w-7xl flex flex-col items-center w-full mx-auto">
        <div className="text-2xl font-semibold text-center mt-14 mx-4 mb-6">
          Whatever you’re planning, make it extraordinary.
        </div>
        <h3 className="text-lg font-semibold my-3 mt-8">Musical Acts</h3>
        <SecondSlider1 images={fisrtRow} />
        <h3 className="text-lg font-semibold my-3 mt-8">Entertainers</h3>
        <SecondSlider1 images={fisrtRow} />
        <h3 className="text-lg font-semibold my-3 mt-8">Event Service</h3>
        <SecondSlider1 images={fisrtRow} />
        <div className="text-center my-10 text-lg font-semibold">
          <div className="my-6">or</div>
          <div>
            <a className="underline" href="/hire">
              Browse Event-Specific Vendors
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
