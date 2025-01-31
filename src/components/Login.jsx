import { useState } from "react";
import logo from "../assets/logo.svg";
import Slider from "./SignUp/Slider";

function Login() {
  return (
    <>
      <div dir="rtl" className="grid grid-cols-2 max-w p-5">
        <div className="">
          <img src={logo} alt="logo" className="" />
          <div className="text-white mt-12 ">
            <div className="text-3xl font-bold justify-center flex">
              <div className="pl-2">سلام </div>
              <div className="text-primary">دوست من!</div>
            </div>

            <div className="font-size-xl justify-center flex mt-5 ">
              از دیدن دوباره‌ات خیلی خوشحالیم.
            </div>
            <div className="font-size-xl justify-center flex pt-12 mt-5">
              <div className="pl-2">شماره </div>
              <div className="text-primary ml-2">تلفن همراه </div>
              <div> خود را وارد نمایید </div>
            </div>
            <div className="justify-center flex mt-5  shadow-2xl" dir="ltr">
              <input
                className="bg-bg border rounded-xl h-12 w-3/5 pl-5"
                type="text"
                placeholder="0 9 X X X X X X X X X "
              />
            </div>
            <div className="justify-center flex">
              <button className=" bg-primary border-primary border rounded-lg h-8 mt-10 w-2/6">
                دریافت رمز یکبار مصرف
              </button>
            </div>
            <div className=" justify-center flex pt-12">
              <div className="pl-2">آیا حساب کاربری ندارید؟ </div>
              <div className="text-primary"> ساختن حساب کاربری </div>
            </div>
          </div>
        </div>
        <div dir='ltr'>
          <Slider/>
        </div>
      </div>
    </>
  );
}

export default Login;
