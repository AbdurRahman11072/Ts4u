"use client"

import Navbar from "@/components/navbar";
import ActiveUser from "./components/activeuser";
import Review from "./components/review";
import Timeonsite from "./components/timeonsite";
import UserAnalytics from "./components/useranalytics";
import UserCountry from "./components/usercountry";
import UserGender from "./components/usergender";
import { default as UserGrowth } from "./components/usergrowth";

export default function Dashboard(){
    return(
        <main >
            <Navbar title={"Dashboard"}></Navbar>
           <div className="h-[90vh] overflow-scroll scrollbar-hide mt-4">
          <div className="block lg:flex gap-4">
          <div className="w-[100%] lg:w-[60%] bg-white border-[2px] border-gray-300 shadow-md rounded-md p-6"><UserAnalytics></UserAnalytics></div>
           <div className="w-[100%] lg:w-[40%] bg-white border-[2px] border-gray-300 shadow-md rounded-md p-6"><Timeonsite></Timeonsite></div>
          </div>

        <div className="block lg:flex gap-4 my-4">
        <div className="w-[100%] lg:w-[33%] bg-white border-[2px] border-gray-300 shadow-md rounded-md p-6 mt-4 lg:mt-0"><UserGrowth></UserGrowth></div>
        <div className="w-[100%] lg:w-[33%] bg-white border-[2px] border-gray-300 shadow-md rounded-md p-6 mt-4 lg:mt-0"><ActiveUser></ActiveUser></div>
        <div className="w-[100%] lg:w-[33%] bg-white border-[2px] border-gray-300 shadow-md rounded-md p-6 mt-4 lg:mt-0"><UserGender></UserGender></div>
           
           
        </div>

           <div className="block lg:flex gap-4 my-4">
            <div className="w-[100%] lg:w-[50%] bg-white border-[2px] border-gray-300 shadow-md rounded-md p-6 mt-4 lg:mt-0"> <Review></Review></div>
            <div className="w-[100%] lg:w-[50%] bg-white border-[2px] border-gray-300 shadow-md rounded-md p-6 mt-4 lg:mt-0"><UserCountry></UserCountry></div>
           
           
           </div>
           </div>
        </main>
    )
}