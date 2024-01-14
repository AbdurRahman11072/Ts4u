
const Timeonsite = () => {
    return (
        <div className="bg-white border-[1px] border-gray-200 p-5">
            <div className="w-[100%] h-16 mb-4 border-b-[2px] border-gray-400 text-2xl font-bold pb-3 ">
                <h1 className="">Time On Site</h1>
            </div>
            <div className="flex mb-1">
                <h1 className="w-[50%] text-start">07:00pm - 12.00am</h1>
                <h1 className="w-[50%] text-end px-4">70%</h1>
            </div>
            <progress className="progress progress-primary w-[99%] h-[12px] mb-4" value="70" max="100"></progress>
            <div className="flex mb-1">
                <h1 className="w-[50%] text-start">07:00pm - 12.00am</h1>
                <h1 className="w-[50%] text-end px-4">70%</h1>
            </div>
            <progress className="progress progress-primary w-[99%] h-[12px] mb-4" value="50" max="100"></progress>
            <div className="flex mb-1">
                <h1 className="w-[50%] text-start">07:00pm - 12.00am</h1>
                <h1 className="w-[50%] text-end px-4">70%</h1>
            </div>
            <progress className="progress progress-primary w-[99%] h-[12px] mb-4" value="25" max="100"></progress>
        </div>
    )
}

export default Timeonsite