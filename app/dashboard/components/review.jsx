import { BiLike } from "react-icons/bi";
import { CiFaceFrown } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
const Review = () => {
    return (
        <div>
            <h1 className="w-[100%] mb-8 pb-4 border-b-[2px] border-gray-400 text-2xl font-bold">Review</h1>
            <div className="flex items-center p-4 bg-green-400/20 rounded-md my-5 gap-2 ">
            <BiLike className="text-2xl"/>
                    <div>
                    <div className="flex mb-1">
                        <h1 className="w-[70%] text-lg font-bold">Positive Review</h1>
                        <h1 className="w-[30%] text-end px-4">66%</h1>
                    </div>
                    <progress className="progress progress-success w-[300px] lg:w-[450px]" value="66" max="100"></progress>
                    </div>
            </div>
            <div className="flex items-center p-4 bg-red-400/20 rounded-md my-5 gap-2 ">
            <FaHeart className="text-2xl text-red-500"/>
                    <div>
                    <div className="flex mb-1">
                        <h1 className="w-[70%] text-lg font-bold">Love</h1>
                        <h1 className="w-[30%] text-end px-4">30%</h1>
                    </div>
                    
                    <progress className="progress progress-error   w-[300px] lg:w-[450px]" value="30" max="100"></progress>
                    </div>
            </div>
            <div className="flex items-center p-4 bg-yellow-400/20 rounded-md my-5 gap-2 ">
            <CiFaceFrown  className="text-2xl "/>
                    <div>
                    <div className="flex mb-1">
                        <h1 className="w-[70%] text-lg font-bold">Not Review Yet</h1>
                        <h1 className="w-[30%] text-end px-4">04%</h1>
                    </div>
                    <progress className="progress progress-warning  w-[300px] lg:w-[450px]" value="04" max="100"></progress>
                    </div>
            </div>
        </div>
    )
}

export default Review