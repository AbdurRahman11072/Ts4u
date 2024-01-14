import Navbar from "@/components/navbar";
import { BsFilterSquare } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import UserTable from "./components/table";

export default function User() {
    return(
        <div>
            <Navbar title={"User"}></Navbar>
            <div className="bg-white border-[2px] border-gray-100  shadow-md rounded-md mt-5">
            <div className="flex items-center p-5 gap-5">
            <div className="text-3xl font-bold w-[680px]">
                <h1 >User</h1>
            </div>

            <div className="relative">
                <input className="hidden md:block w-[250px] h-10 px-3 bg-gray-200 border-[1px] border-gray-100 rounded-md" type="text" placeholder="search..."/>
                <IoSearchOutline  className="absolute md:top-6 md:right-3 md:text-xl text-3xl -mt-[14px] -right-[8px] "/>
            </div>
            <button className=" lg:hidden flex gap-2 w-32 h-10 bg-gradient-to-l from-[#CC176A] to-[#FD282B] justify-center items-center text-white font-medium rounded-md "> <BsFilterSquare /> </button>
            <button className="hidden lg:flex gap-2 w-32 h-10 bg-gradient-to-l from-[#CC176A] to-[#FD282B] justify-center items-center text-white font-medium rounded-md "> <BsFilterSquare /> Filter</button>
            </div>
            <UserTable></UserTable>
            <div className="px-6 py-6 flex items-center">
              <div className="w-[50%] px-3">
                    <h1>Showing 1 to 9 of 9 entries</h1>
              </div>
              <div className="w-[50%] justify-end px-3 flex gap-2 items-center">
                    <IoIosArrowBack />
                    <h1 className="w-8 h-8 text-center pt-1 bg-none md:bg-gray-200 font-medium">1</h1>
                    <h1 className="w-8 h-8 text-center pt-1 bg-none md:bg-gray-200 font-medium">2</h1>
                    <h1 className="w-8 h-8 text-center pt-1 bg-none md:bg-gray-200 font-medium">3</h1>
                    <h1 className="w-8 h-8 text-center pt-1 bg-none md:bg-gray-200 font-medium">4</h1>
                    <IoIosArrowForward />
                   
              </div>
                
            </div>
            
            </div>
           

        </div>
    )
}

