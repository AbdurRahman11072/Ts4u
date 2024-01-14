import commentimg2 from "@/public/commentimg2.png"
import commentimg3 from "@/public/commentimg3.png"
import commentimg4 from "@/public/commentimg4.png"
import Image from "next/image"
const Avater = () => {
    return (
       <div className="flex gap-2 items-center">
        <div className="flex">
        <Image src={commentimg3} width={35} height={35} /> 
        <Image src={commentimg2} width={35} height={35} className="z-10 -ml-4"/>
        <Image src={commentimg4} width={35} height={35} className="z-10 -ml-4"/>
        </div>
        
        <h1 className="text-sm font-semibold">+120 Other Likes</h1>

       </div>
    )
}

export default Avater