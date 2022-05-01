import React from "react";

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h2 className="text-2xl text-center font-semibold my-5">
        Over 110,000 bands, entertainers, and event services for hire.
      </h2>
      <div className="flex flex-col items-center lg:flex-row-reverse lg:mx-16">
        <div className="img my-5">
          <img src="how-it-works-laptop--755w.webp " alt="" />
        </div>
        <div className=" grid">
          <div className="flex mx-3 mb-8">
            <img src="HowItWorks/browse-compare.svg" alt="" />
            <div className="ml-8">
              <h3 className="font-bold">Browse and compare</h3>
              <p className="text-sm">
                Compare rates and availability of local entertainers and
                vendors.
              </p>
            </div>
          </div>
          <div className="flex mx-3 mb-8">
            <img src="HowItWorks/book-securely.svg" alt="" />
            <div className="ml-8">
              <h3 className="font-bold">Browse and compare</h3>
              <p className="text-sm">
                Booking through GigSalad ensures payment protection, amazing
                service, and no-hassle refunds with our Worry-Free Guarantee.
              </p>
            </div>
          </div>
          <div className="flex mx-3 mb-8">
            <img src="HowItWorks/enjoy-event.svg" alt="" />
            <div className="ml-8">
              <h3 className="font-bold">Browse and compare</h3>
              <p className="text-sm">
                Sit back, relax, and watch your party come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="ml-4 my-4 bg-[#2690ff] font-bold text-white text-lg px-8 p-3 rounded-md	h-max ">
        Get Started
      </button>
      <div className="text-[#2690ff]">Book somthing awesome ®</div>
    </div>
  );
}
