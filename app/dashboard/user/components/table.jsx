"use client"
import profileimg from "@/public/profileimg.png";
import Image from "next/image";
import { FaRegCheckSquare } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdBlockFlipped, MdDeleteOutline, MdOutlineReportProblem } from "react-icons/md";
const UserTable = () => {

  const userData= [
    {
      "id": 1,
      "name": "Rahman",
      "email": "rjrahman019@gmail.com",
      "Phone": "01405011072",
      "gender": "Male",
      "package": "Gold",
      "country": "USA",
      "type": "Active",
      "status": "Approved"
    },
    {
      "id": 2,
      "name": "Rahman",
      "email": "rjrahman019@gmail.com",
      "Phone": "01405011072",
      "gender": "Male",
      "package": "Gold",
      "country": "USA",
      "type": "Active",
      "status": "Approved"
    },
    {
      "id": 3,
      "name": "Rahman",
      "email": "rjrahman019@gmail.com",
      "Phone": "01405011072",
      "gender": "Male",
      "package": "Gold",
      "country": "USA",
      "type": "Reported",
      "status": "Approved"
    },
    {
      "id": 4,
      "name": "Rahman",
      "email": "rjrahman019@gmail.com",
      "Phone": "01405011072",
      "gender": "Male",
      "package": "Gold",
      "country": "USA",
      "type": "Reported",
      "status": "incomplete"
    },
    {
      "id": 5,
      "name": "Rahman",
      "email": "rjrahman019@gmail.com",
      "Phone": "01405011072",
      "gender": "Male",
      "package": "Gold",
      "country": "USA",
      "type": "Blocked",
      "status": "Approved"
    },
    {
      "id": 6,
      "name": "Rahman",
      "email": "rjrahman019@gmail.com",
      "Phone": "01405011072",
      "gender": "Male",
      "package": "Gold",
      "country": "USA",
      "type": "Active",
      "status": "Approved"
    },
    {
      "id": 7,
      "name": "Rahman",
      "email": "rjrahman019@gmail.com",
      "Phone": "01405011072",
      "gender": "Male",
      "package": "Gold",
      "country": "USA",
      "type": "Active",
      "status": "Approved"
    },
    {
      "id": 8,
      "name": "Rahman",
      "email": "rjrahman019@gmail.com",
      "Phone": "01405011072",
      "gender": "Male",
      "package": "Gold",
      "country": "USA",
      "type": "Blocked",
      "status": "incomplete"
    },
    {
      "id": 9,
      "name": "Rahman",
      "email": "rjrahman019@gmail.com",
      "Phone": "01405011072",
      "gender": "Male",
      "package": "Gold",
      "country": "USA",
      "type": "Active",
      "status": "incomplete"
    },
    
  ]
  
  

    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>             
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Current Package</th>
              <th>Country</th>
              <th>User Type</th>
              <th>Profile Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
            userData?.map(userdata =>(
              <tr key={userdata.id}>
              <td>          
                <div className="flex items-center gap-3">
                <label className="mt-[1px]">
                  <input type="checkbox" className="checkbox" />
                </label>    
                <Image src={profileimg} alt="Profile Img"></Image>
                <div className="font-bold">{userdata.name}</div>
                   
                 
                </div>
              </td>
              <td>
                {userdata.email}
                <br/>
               
              </td>
              <td>{userdata.Phone}</td>
              <td>{userdata.gender}</td>
              <td>{userdata.package}</td>
              <td>{userdata.country}</td>
              <td>
              {userdata.type =="Active" && <button className="px-2 py-1  rounded-md flex gap-2 items-center"><FaRegCheckSquare className="text-green-500"/>{userdata.type} </button> }
              {userdata.type =="Blocked" && <button className="px-2 py-1   rounded-md flex gap-2 items-center"><MdBlockFlipped className="text-red-500"/>{userdata.type} </button> }
              {userdata.type =="Reported" && <button className="px-2 py-1 rounded-md flex gap-2 items-center text-[#FDB70B]"><MdOutlineReportProblem />{userdata.type} </button> }
              
              </td>
              <td>
                {userdata?.status =="Approved" ?<button className="px-2 py-1 bg-[#99f3ad]/50 text-green-600 rounded-md">{userdata.status} </button>
                :
                <button className="px-2 py-1 bg-[#e4c84b]/50 text-orange-500 rounded-md">{userdata.status} </button>
            }
              </td>
              <td>
                <div className="flex gap-2 text-2xl">
                <IoEyeOutline  className="cursor-pointer text-orange-400"/>
                <MdDeleteOutline className="cursor-pointer text-red-600"/>
                </div>
                </td>
            </tr>
            ))
           }
       
          </tbody>
        
         
          
        </table>
      </div>
    )
}

export default UserTable