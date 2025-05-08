"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [text, setText] = useState("");
  const createTree = async () => {
    router.push(`/generate?handle=${text}`);
  }
    
  return (
    <>
      <section className="grid grid-cols-2 min-h-[100vh]">
        <div className="flex flex-col justify-center items-start gap-6 pt-10 ">
          <p className="text-lime-300 font-bold max-md:text-sm text-[72px] md:pl-16 pl-8 w-[100%] md:leading-16 leading-4">
            <span className="w-full block">Everything</span>
            <span className="w-full block">you are. In</span>
            <span className="w-full block">one , simple</span>
            <span className="w-full block">link  in  bio.</span>

          </p>
          <p className="md:text-[13px] text-[7px] text-white text-bold md:pl-16 pl-8  w-[100%]">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="flex items-center justify-center gap-2 md:pl-16 p-4 rounded-md">

            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter your handle" className="px-4 md:py-2 py-1 rounded-xl bg-white text-gray-700 placeholder-gray-500 placeholder:text-[10px]  focus:outline-[#254f1a] w-22 md:w-40" />


            <button onClick={()=>createTree()} className="md:px-4 px-2 cursor-pointer max-md:text-[6px] py-2 rounded-full bg-pink-300 text-black font-semibold  transition">
              Claim your Linktree
            </button>
          </div>

        </div>
        <div className="flex items-center justify-center  ">
          <img src="Home.png" alt="Home.img" className="fit w-full" />
        </div>
      </section>
    </>
  );
}
