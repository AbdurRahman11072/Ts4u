"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillPostageHeartFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { TbPhotoVideo } from "react-icons/tb";

const SocialNavbar = () => {
    const pathname = usePathname()
    const menubar = [
        {
            title:"Posts",
            path:"/dashboard/social",
            icon:<BsFillPostageHeartFill />
        },
        {
            title:"Photos",
            path:"/dashboard/social/photos",
            icon:<IoMdPhotos />
        },
        {
            title:"Videos",
            path:"/dashboard/social/videos",
            icon:<TbPhotoVideo />
        }
    ]
    return (
        <div>
              <div className=" h-[75%] mt-4">
                <ul className="flex gap-5">
                    {
                        menubar?.map(list => (
                            <li className="  mb-4" key={list.title}>
                                
                            <Link className={`link ${pathname === `${list.path}` ? 'flex w-[365px] justify-center text-lg gap-3 p-3 justify-left items-center bg-gradient-to-l from-[#FD282B] to-[#CC176A] text-white rounded-md transition duration-500 no-underline' : 'flex w-[365px] justify-center gap-3 p-3 justify-left items-center no-underline bg-gray-300 text-lg rounded-md'}`} href={list.path}>
                              {list.icon}
                              {list.title}
                            </Link>
                          </li>
                        ))
                    }
                </ul>
               
            </div>
            
        </div>
    )
}

export default SocialNavbar