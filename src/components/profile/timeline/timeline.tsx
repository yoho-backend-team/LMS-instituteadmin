
const steps = [
    { id: 1, label: "Step One" },
    { id: 2, label: "Step Two" },
    { id: 3, label: "Step Three" },
    { id: 4, label: "Step Four" },
    { id: 5, label: "Step Five" },
    { id: 6, label: "Step Six" },
    { id: 7, label: "Step Seven" },
    { id: 8, label: "Step Eight" },
    { id: 9, label: "Step Nine" },

];

const Timeline = () => {
    return (
        // <div className="flex items-start justify-start p-8 bg-white rounded-sm h-[calc(100vh-80px)] shadow-2xl overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        //     <div className="flex flex-col items-start relative w-full">
        //         {steps.map((step, index) => (
        //             <div
        //                 key={step.id}
        //                 className="flex items-start relative z-10"
        //                 style={{ marginBottom: index < steps.length - 1 ? "6rem" : "0" }}
        //             >

        //                 <div className="flex flex-col items-center relative">
        //                     <button className="w-32 bg-green-600 text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition">
        //                         {step.label}
        //                     </button>

        //                     <div className="relative mt-2">


        //                         <div className="w-5 h-5 rounded-full flex items-center justify-center z-10">
        //                             <div className="w-2 h-2 bg-green-600 rounded-full" />
        //                         </div>

        //                         <div
        //                             className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-green-600"
        //                             style={{ top: "10px", height: "6rem" }}
        //                         />
        //                     </div>
        //                 </div>


        //                 <div className="ml-10">

        //                     <div className="w-full gap-5 max-w-md bg-white shadow-xl rounded-2xl p-4 border border-gray-200">
        //                         <div className="grid justify-between items-center">
        //                             <h2 className="text-lg font-semibold text-gray-800">Notes</h2>
        //                         </div>
        //                         <div className="flex justify-between items-center gap-5">
        //                             <span className="text-sm text-gray-500 font-medium">Created:</span>
        //                             <span className="text-sm text-gray-500">
        //                                 <span className="font-medium">21 Jul 2025, 06:30 PM</span>
        //                             </span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //         {/* Add padding at the bottom to ensure the last item is fully visible */}
        //         <div className="pb-20" />
        //     </div>
        // </div>


        <div className="flex items-start justify-start p-8 bg-white rounded-sm h-[calc(100vh-80px)] shadow-2xl overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-col items-start relative w-full">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-start relative  h-15 " 
                        style={{ marginBottom: index < steps.length - 1 ? "6rem" : "0" }} 
                    >
                        <button className="w-32 bg-green-600 text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition">
                            {step.label}
                        </button>

                        
                        <div className="flex items-start mt-2   ml-7">
                            {" "}
                          
                            <div className="relative flex flex-col items-center">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center ">
                                    <div className="w-2 h-2 bg-green-600 rounded-full" /> 
                                </div>
                               
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-green-600"
                                    style={{ top: "10px", height: "6rem" }} 
                                />
                            </div>
                            
                            <div className="ml-50">
                                {" "}
                                
                                <div className="w-full gap-5 max-w-md bg-white shadow-xl rounded-2xl p-4 border border-gray-200">
                                    <div className="grid justify-between items-center">
                                        <h2 className="text-lg font-semibold text-gray-800">Notes</h2>
                                    </div>
                                    <div className="flex justify-between items-center gap-5">
                                        <span className="text-sm text-gray-500 font-medium">Created:</span>
                                        <span className="text-sm text-gray-500">
                                            <span className="font-medium">21 Jul 2025, 06:30 PM</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="pb-20" />
            </div>
        </div>





    );
};

export default Timeline;
