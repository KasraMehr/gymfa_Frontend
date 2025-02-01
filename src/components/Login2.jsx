import { useState } from "react";
import Logo from "../assets/Logo.svg";
import login1 from "../assets/login1.png";
import Slider from "./SignUp/Slider.jsx";


function Login2() {
  return (
    <>
      <div dir="rtl" className="grid grid-cols-2 max-w p-5">
        <div className="">
          <img src={Logo} alt="Logo" className="" />
          <div className="text-white mt-12 ">
            <div className="text-3xl font-bold justify-center flex mt-5">
              <div className="pl-2 text-primary">کد</div>
              <div className="">را وارد کنید </div>
            </div>
            <div className="font-size-xl justify-center flex pt-12 mt-5">
              <div className="pl-2 text-xl ">کد ارسال شده به شماره</div>
              <div className="text-primary text-xl ml-2">09XXXXXXXXX </div>
              <div className="text-xl ">را وارد نمایید </div>
            </div>
            <div
          className="justify-center flex flex-row mt-5"
          dir="ltr"
        >
          <input
            className="bg-bg border rounded-xl shadow-2xl h-16 w-1/12 mx-1 pl-5"
            type="text"
          />
          <input
            className="bg-bg border rounded-xl shadow-2xl h-16 w-1/12 mx-1 pl-5"
            type="text"
          />
          <input
            className="bg-bg border rounded-xl shadow-2xl h-16 w-1/12 mx-1 pl-5"
            type="text"
          />
          <input
            className="bg-bg border rounded-xl shadow-2xl h-16 w-1/12 mx-1 pl-5"
            type="text"
          />
          <input
            className="bg-bg border rounded-xl shadow-2xl h-16 w-1/12 mx-1 pl-5"
            type="text"
          />
          <input
            className="bg-bg border rounded-xl shadow-2xl h-16 w-1/12 mx-1 pl-5"
            type="text"
          />
        </div>
            <div className="justify-center flex">
              <button className=" bg-primary border-primary border rounded-lg pb-2 text-lg h-9 mt-10 w-1/5">
                ورود
              </button>
            </div>
            <div className=" justify-center flex pt-12">
              <div className="pl-2 text-lg">آیا حساب کاربری ندارید؟ </div>
              <div className="text-primary text-lg"> ساختن حساب کاربری </div>
            </div>
          </div>
        </div>
        <div className="" dir="ltr">
          <Slider/>
        </div>
      </div>
    </>
  );
}

export default Login2;
