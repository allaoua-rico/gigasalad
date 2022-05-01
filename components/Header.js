import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Badge } from "@mui/material";
import { BsPerson, BsHeart } from "react-icons/bs";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch, FiHeart } from "react-icons/fi";

// import CartDrawer from "./CartDrawer";
// import MenuDrawer from "./MenuDrawer";
// import SearchInput from "./SearchInput";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { useStateValue } from "../stateProvider";
// import { getBasketTotal } from "../reducer";
export default function Header() {
  // const [{ user, basket }, dispatch] = useStateValue();
  const [carttoggleState, setCarttoggleState] = useState(false);
  const [menutoggleState, setMenutoggleState] = useState(false);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   setTotal(getBasketTotal(basket));
  // }, [basket]);
  const md = useMediaQuery("(max-width:1023px)");
  return (
    <header 
    className="header md:text-xs flex shadow-sm h-[70px] md:border-b-[#dadada] md:border-b  md:px-10 px-4 justify-around items-center ">
      {/* <div className="hidden md:inline w-full max-w-[300px]"> */}
      {/* <SearchInput /> */}
      {/* </div> */}

      <div className=" flex justify-between items-center w-full h-full ">
        <div className="left-part flex items-center  h-full md:border-r  border-[#dadada]">
          <Link href={"/"} passHref>
            <a className="cursor-pointer">
              <img className="w-[40px] h-[40px]" src={"/logo.svg"} />
            </a>
          </Link>
          <div className="flex items-center mx-10">
            <div className=" ">Menu</div>
            <IoIosArrowDown className="fill-[#2690ff] stroke-[6px]" />
          </div>
        </div>
        <div className="input mx-12 hidden grow md:flex">
          <button className="">
            <FiSearch className="w-6 h-6 stroke-1 stroke-gray-400 mr-3" />
          </button>
          <input
            className="w-full"
            type="text"
            placeholder="What kind of talent or service can we help you find?"
          />
        </div>

        <div className="right-part flex items-center md:border-l  h-full border-[#dadada]">
          <button className="md:hidden">
            <FiSearch className="w-6 h-6 stroke-1" />
          </button>
          <button className="ml-6">
            <FiHeart className="w-6 h-6 stroke-1" />
          </button>
          <button className="mx-8 hidden md:block font-semibold">Log In</button>
          <button className="ml-4 hidden md:block bg-[#2690ff] text-white p-3 rounded-md	h-max ">
            List Your Services
          </button>
        </div>
      </div>

      {/* <div className="flex gap-x-3 justify-between items-center ">
        {user == null && (
          <Link href="/login">
            <div className="flex items-center sm:gap-x-4 cursor-pointer sm:mr-7 group">
              <BsPerson className="w-auto h-7 group-hover:fill-red-500  duration-[400ms]" />
              <a className="group-hover:text-red-500 duration-[400ms] sm:inline hidden">
                Log In / Register
              </a>
            </div>
          </Link>
        )} */}

      {/* <BsHeart className='w-10 h-5 hover:fill-red-500 '/> */}
      {/* <Badge
          anchorOrigin={
            !md
              ? { vertical: "bottom", horizontal: "right" }
              : { vertical: "top", horizontal: "right" }
          }
          onClick={() => setCarttoggleState(true)}
          badgeContent={basket?.length || 0}
          showZero={true}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "black",
              color: "white",
            },
            width: "25px",
            cursor: "pointer",
          }}
          // color="white"
        >
          <AiOutlineShoppingCart className="w-auto h-6 hover:fill-red-500 duration-[400ms] cursor-pointer" />
        </Badge>
        <div className="sm:inline hidden">{total}.00</div>
        <AiOutlineMenu
          onClick={() => setMenutoggleState(true)}
          className=" w-auto h-6 ml-1 cursor-pointer"
        />
      </div> */}
      {/* <CartDrawer
        returnValue={(cartDrawerState) => setCarttoggleState(cartDrawerState)}
        toggle={carttoggleState}
      />
      <MenuDrawer
        returnValue={(menutoggleState) => setMenutoggleState(menutoggleState)}
        toggle={menutoggleState}
      /> */}
    </header>
  );
}
