"use client"

import logo from "@/public/logo.png";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineIdcard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";


const menubar= [
{
    title:"Dashboard",
    path:"/dashboard",
    icon:<RxDashboard  className="text-xl "/>
},
{
    title:"User",
    path:"/dashboard/user",
    icon:<FaRegUser className="text-xl "/>
},
{
    title:"Be Social",
    path:"/dashboard/social",
    icon: <AiOutlineIdcard className="text-xl "/>
}
]

const Sidebar = () => {

    const pathname = usePathname()
    const Logout =async() =>{
        axios.get("/api/user/logout")
        .then(function (response) {
            if(response.status =="200"){
              toast.success("Logout successful")
              return navigate.push("/login")
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
        <div className="hidden  fiexd bg-white h-[100vh] w-[230px] shadow-2xl lg:block p-4">
            <div className="h-[15%] flex justify-center items-center">
                <Image src={logo} alt="Logo Image"></Image>
            </div>
            <div className=" h-[75%] mt-4">
                <ul>
                    {
                        menubar?.map(list => (
                            <li className="  mb-4" key={list.title}>
                                
                            <Link className={`link ${pathname === `${list.path}` ? 'flex w-[185px] gap-3 p-3 justify-left items-center bg-gradient-to-l from-[#FD282B] to-[#CC176A] text-white rounded-md transition duration-500 no-underline' : 'flex w-[185px] gap-3 p-3 justify-left items-center no-underline '}`} href={list.path}>
                              {list.icon}
                              {list.title}
                            </Link>
                          </li>
                        ))
                    }
                </ul>
               
            </div>

            <ul className="bottom-0">
                <li onClick={Logout} className="flex gap-3 items-center p-3 text-[#FD282B] text-lg font-medium cursor-pointer"><GrLogout /> Logout</li>
            </ul>
            
        </div>
    )
}


export default Sidebar;