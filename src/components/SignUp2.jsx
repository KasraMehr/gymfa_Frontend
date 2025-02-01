import { useState } from "react";
import Logo from "../assets/Logo.svg";
import signup1 from "../assets/signup1.png";
import Slider from "./SignUp/Slider.jsx";
import "../index.css";

function SignUp2() {
  return (
    <div className="grid grid-cols-2 p-5" dir="rtl">
      <div className="text-white">
        <img src={Logo} alt="Logo" className="pr-5" />
        <div className="text-3xl font-bold justify-center flex mt-5">
          <div className="pl-2 text-primary">کد</div>
          <div className="">را وارد کنید </div>
        </div>
        <div className="font-size-xl justify-center flex pt-12 mt-12">
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
        <div className="flex justify-center mt-10 text-xl" dir="ltr">
          <button className="bg-primary rounded-xl shadow-2xl h-11 w-1/3 ">
            ثبت نام
          </button>
        </div>
        <div className="mt-14 text-base flex justify-center">
          <div className="pl-2 text-lg">آیا حساب کاربری دارید؟</div>
          <div className="text-primary text-lg pl-2">وارد شوید</div>
        </div>
      </div>
      <div className="" dir="ltr">
        <Slider/>
      </div>
    </div>
  );
}

export default SignUp2;
