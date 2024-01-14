"use client"
import commentimg1 from "@/public/comentimg1.png";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";

const Likecomment = () => {
    return (  
        <div>
            <div className="flex gap-36 p-4 justify-center border-t-[2px] border-b-[2px] border-gray-200 mt-3">
                <h1 className="flex gap-2 items-center text-lg font-medium"><SlLike className="text-2xl"/>Like</h1>
                <h1 className="flex gap-2 items-center text-lg font-medium"><IoChatbubblesOutline className="text-2xl"/> Comment</h1>
                <h1 className="flex gap-2 items-center text-lg font-medium"><IoIosShareAlt className="text-2xl"/>Share</h1>
            </div>
            <div className="relative">
                <div className="flex gap-1 p-1">
                    <Image src={commentimg1} alt="comment img" className="rounded-full w-[45px] h-[45px] mt-2"/>
                  <div className="p-2 relative">
                    <div className="border-[2px] border-gray-300 p-2 rounded-md w-96 bg-white shadow-lg">
                        <h1 className="text-lg font-extrabold">AR</h1>
                        <h1>I wish you a happy marrage life</h1>
                    </div>
                    <FaHeart  className="absolute top-16 right-7 text-red-600 text-2xl"/>
                    <div className="flex gap-6 px-2 py-1 text-sm">
                        <h1>1 Hour</h1>
                        <h1>Like</h1>
                        <h1>Reply</h1>
                    </div>
                  </div>
                </div>
                <div className="h-28 w-16 border-l-[2px] border-b-[2px] rounded-md border-gray-400 top-12 left-6 absolute"></div>
                <div className="flex gap-1 p-1 ml-16  ">
                    <Image src={commentimg1} alt="comment img" className="rounded-full w-[45px] h-[45px] mt-2"/>
                  <div className="p-2 relative">
                    <div className="border-[2px] border-gray-300 bg-white shadow-lg p-2 rounded-md w-68">
                        <h1 className="text-lg font-extrabold">AR</h1>
                        <h1><span className="text-orange-500 font-extrabold">SR </span> I wish you a happy marrage life</h1>
                    </div>
                   
                    <div className="flex gap-6 px-2 py-1 text-sm">
                        <h1>45 min</h1>
                        <h1>Like</h1>
                        <h1>Reply</h1>
                    </div>
                  </div>
                </div>
            
            </div>
            <div className="w-[95%] mx-auto h-16 bg-white border-[1px] border-gray-300 shadow-lg relative rounded-md">
                <input type="text" placeholder="Write your comment" className="px-20 py-4 w-full outline-none"/>
                <Image src={commentimg1} alt="comment img" className="rounded-full w-[45px] h-[45px] absolute top-2 left-3"/>
            </div>
        </div>
    )
}

export default Likecomment