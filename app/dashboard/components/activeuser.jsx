import comentimg1 from "@/public/comentimg1.png"
import comentimg2 from "@/public/commentimg2.png"
import comentimg3 from "@/public/commentimg3.png"
import Image from "next/image"

const ActiveUser = () => {
    return (
        <div>
            <div className="flex items-center border-b-[2px] border-gray-400 pb-4">
                <h1 className="w-[70%] text-2xl font-extrabold">Most Active User</h1>
                <h1 className="w-[30%] text-sm font-semibold text-[#e453a7] text-end">see more</h1>
            </div>
            <div>
                <div className="flex items-center p-4 bg-gray-400/30 rounded-md my-5 gap-2">
                    <Image className="rounded-full w-10 h-10" src={comentimg2} alt="Most Active User"></Image>
                    <div>
                    <h1 className="text-lg font-bold">David</h1>
                    <h1>david12345@gmail.com</h1>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-gray-400/30 rounded-md my-5 gap-2">
                    <Image className="rounded-full w-10 h-10" src={comentimg3} alt="Most Active User"></Image>
                    <div>
                    <h1 className="text-lg font-bold">David</h1>
                    <h1>david12345@gmail.com</h1>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-gray-400/30 rounded-md my-5 gap-2">
                    <Image className="rounded-full w-10 h-10" src={comentimg1} alt="Most Active User"></Image>
                    <div>
                    <h1 className="text-lg font-bold">David</h1>
                    <h1>david12345@gmail.com</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveUser