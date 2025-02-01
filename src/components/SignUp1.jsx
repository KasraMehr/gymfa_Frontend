import { useState } from "react";
import Logo from "../assets/Logo.svg";
import signup1 from "../assets/signup1.png";
import "../index.css";

function SignUp1() {
  return (
    <div className="grid grid-cols-2 p-5" dir="rtl">
      <div className="text-white">
        <img src={Logo} alt="Logo" className="pr-5" />
        <div className="mt-12 items-center">
          <div className="text-3xl font-bold flex justify-center">
            <div className="pl-2">همین حالا</div>
            <div className="text-primary pl-2">ثبت نام</div>
            <div className="">کنید.</div>
          </div>
          <div className="text-xl flex justify-center mt-6">
            برای استفاده از تمامی امکانات پلتفرم حساب کاربری بسازید.
          </div>
        </div>
        <div className="mt-12 flex justify-center text-xl">
          <div>نقش کاربری خود را انتخاب کنید.</div>
        </div>
        <div className="mt-5 flex text-center justify-center text-xl">
          <div className="bg-white text-black border rounded-2xl w-44 h-8 ml-2">
            ورزشکار
          </div>
          <div className="bg-bg border rounded-2xl w-44 h-8 ml-2">مربی</div>
          <div className="bg-bg border rounded-2xl w-44 h-8 ml-2">مالک</div>
        </div>

        <div className="mt-10 text-xl flex justify-center">
          <div className="pl-2">همین حالا</div>
          <div className="text-primary pl-2">ثبت نام</div>
          <div className="">کنید.</div>
        </div>
        <div className="flex justify-center mt-5" dir="ltr">
          <input
            type="text"
            placeholder="0 9 X X X X X X X X X"
            className="bg-bg border rounded-xl shadow-2xl h-12 w-3/5  pl-5"
          />
        </div>
        <div className="flex justify-center mt-10 text-xl" dir="ltr">
          <button className="bg-primary rounded-xl shadow-2xl h-8 w-1/3 ">
            ثبت نام
          </button>
        </div>
        <div className="mt-14 text-base flex justify-center">
          <div className="pl-2">آیا حساب کاربری دارید؟</div>
          <div className="text-primary pl-2">وارد شوید</div>
        </div>
      </div>
      <div className="" dir="ltr">
        <img src={signup1} alt="signup1" className="h-[94.5vh] w-[92%] " />
      </div>
    </div>
  );
}

export default SignUp1;
