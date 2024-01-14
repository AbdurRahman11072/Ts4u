"use client"

import postcard1 from "@/public/postcard1.PNG";
import profileimg from "@/public/profileimg.PNG";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { ImShare2 } from "react-icons/im";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Avater from "./avater";
import Likecomment from "./like&comment";
const PostCards = () => {
    return (
        <div className=" border-[1px] border-gray-200 p-4 rounded-md  my-3 shadow-lg">
            <div className="flex gap-4">
                <div>
                    <div className="flex gap-2">
                        <Image width={50} height={50} src={profileimg} alt="Profile Image"/>
                        <div>
                            <div className="flex gap-1">
                                <h1 className="text-lg font-bold">AR <span className="text-sm font-medium text-gray-400">#2530</span></h1>
                                <h1 className="text-base font-medium">. 10 Hours ago</h1>
                            </div>
                            <div className="flex gap-1">
                                <h1 className="text-base font-medium">Sunday, Now 12,</h1>
                                <h1 className="text-base font-medium">07.30pm</h1>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-sm font-medium my-3">I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen...</h1>
                    <div className="flex gap-2 text-[#F42A41]">
                        <h1>#wedding</h1>
                        <h1>#engagement</h1>
                    </div>
                </div>
                <div className="flex gap-3 text-xl w-24 ">
                <BsThreeDots />
                <RxCross2 />
                </div>
            </div>
            <div className="my-4 rounded-md">
            <Image src={postcard1} alt="Post Image" />
            </div>
            <div className="flex px-4">
                <div className="w-[50%] flex gap-5 items-center text-xl font-medium">
                <FaRegHeart  />
                <Avater></Avater>
                </div>
                <div className="w-[50%] flex gap-5  justify-end" >
                    <h1 className="flex gap-2 items-center text-md font-semibold"><IoChatbubblesOutline className="text-xl"/> 8 Comment</h1>
                    <h1 className="flex gap-2 items-center text-md font-semibold"><ImShare2 className="text-xl"/>8 Share</h1>
                </div>
            </div>
            <Likecomment></Likecomment>
        </div>
    )
}

export default PostCards