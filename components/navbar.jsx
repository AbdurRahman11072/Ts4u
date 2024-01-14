"use client"

import Logo from "@/public/logo.png";
import profileimg from "@/public/profileimg.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineIdcard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
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

const Navbar = ({title}) => {
  const pathname = usePathname()
    return (
      <div className="navbar ">
      <div className="navbar-start">
      <div className=" hidden lg:block"> <h1 className="text-3xl font-semibold">{title}</h1></div>
        <div className="dropdown block lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <FaBarsStaggered  className="text-xl"/>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
      </div>
      <div className="navbar-center  lg:hidden">
        <Image src={Logo} alt="Profile Img" width={50} height={35}/>
      </div>
      <div className="navbar-end">
      <div className="w-9 h-9 px-[1px] mr-[2px] lg:w-12  lg:h-12 lg:p-2 bg-white border-2 border-gray-100 shadow-xl  rounded-full lg:mr-2">
            <IoMdNotificationsOutline  className="text-3xl"/>
            </div>
        <div className="flex gap-5 justify-center items-center bg-none lg:bg-white lg:border-2 lg:border-gray-100 shadow-lg  p-2 rounded-lg">
            
            <Image src={profileimg} alt="Profile Image" />
      
            <h1 className="hidden lg:block">Shiblu Ahemed</h1>
            <IoIosArrowDown className="hidden lg:block"/>
        </div>
      </div>
    </div>
    )
}

export default Navbar