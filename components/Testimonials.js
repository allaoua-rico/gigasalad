import React from "react";

export default function Testimonials() {
  return (
    <div className="flex flex-col mx-auto px-4 mb-20">
      <h3 className="text-2xl lg:text-xl font-semibold text-center mt-14  mb-10">
        Millions trust GigSalad to electrify their events.
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 lg:gap-x-14 gap-y-10">
        <img src="testimonials/logo--americas-got-talent--106w.webp" alt="" />
        <img src="testimonials/logo--macys--151w.webp" alt="" />
        <img src="testimonials/logo--cbs--84w.webp" alt="" />
        <img src="testimonials/logo--mcdonalds--52w.webp" alt="" />
        <img src="testimonials/logo--microsoft--188w.webp" alt="" />
        <img src="testimonials/logo--mtv--66w.webp" alt="" />
        <img src="testimonials/logo--nbc--49w.webp" alt="" />
        <img src="testimonials/logo--volcom--207w.webp" alt="" />
      </div>
    </div>
  );
}
