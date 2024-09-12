import React from "react";

function Navbar() {
  return (
    <div className="flex items-center   h-[117px] py-10 px-20 font-['Poppins']">
      <div className="flex items-center gap-2">
        <img src="/Logo.png" className="w-[23px] h-6" alt="Logo" />
        <h1 className="text-[#2f2e2e] text-base font-bold">Digital Agency</h1>
      </div>

      <div>
        <ul className="flex ml-14 gap-8 text-[#373535] text-base font-normal">
          <li className="">Projects</li>
          <li className="">Course</li>
          <li className="">About us</li>
          <li className="">Contact us</li>
        </ul>
      </div>

      <div className="">
        <button className="h-[51px] ml-[500px] px-6 bg-[#3285FF] shadow border border-black text-[#fffefe] text-base font-bold flex items-center justify-center">
          Start Your Project
        </button>
      </div>
    </div>
  );
}

export default Navbar;
