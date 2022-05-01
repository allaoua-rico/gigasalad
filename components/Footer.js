import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#242a2e] flex flex-col sm:flex-row sm:items-start items-center justify-center py-11 text-base sm:text-xs">
      {" "}
      <Link href={"/"} passHref>
        <a className="cursor-pointer">
          <img className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] mb-5" src={"/logo.svg"} />
        </a>
      </Link>
      <div className="text-white flex flex-col sm:flex-row items-center sm:items-start  mb-5">
        <div className="flex flex-col items-center mx-3">
          {" "}
          <div className="font-bold hidden sm:flex">Company</div>
          <a href="">About Us</a>
          <a href="">Blog</a>
          <a href="">Partners</a>
        </div>

        <div className="flex flex-col items-center mx-3">
          {" "}
          <div className="font-bold hidden sm:flex">Event Planners</div>
          <a href="">How It Works</a>
          <a href="">Party Ideas</a>
          <a href="">Quick Quote</a>
        </div>

        <div className="flex flex-col items-center mx-3">
          {" "}
          <div className="font-bold hidden sm:flex">Vendors</div>
          <a href="">Sign Up</a>
          <a href="">Pricing</a>
          <a href="">Testimonials</a>
        </div>

        <div className="flex flex-col items-center mx-3">
          {" "}
          <div className="font-bold hidden sm:flex">Support</div>
          <a href="">Help Center</a>
          <a href="">Contact Us</a>
          <a href="">Privacy Policy</a>
          <a href="">Log In</a>
        </div>
      </div>
      <div className="flex">
        <div className="rounded-full p-2 bg-[#2690ff] hover:opacity-50 cursor-pointer">
          <FaTwitter className="fill-white " />
        </div>
        <div className="rounded-full p-2 bg-[#2690ff] mx-4 hover:opacity-50 cursor-pointer">
          <FaFacebookF className="fill-white" />
        </div>
        <div className="rounded-full p-2 bg-[#2690ff] hover:opacity-50 cursor-pointer">
          <FaInstagram className="fill-white" />
        </div>
      </div>
    </div>
  );
}
