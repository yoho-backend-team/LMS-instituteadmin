
const steps = [
    { id: 1, label: "Step One" },
    { id: 2, label: "Step Two" },
    { id: 3, label: "Step Three" },
     { id: 3, label: "Step Three" },
];

const Timeline = () => {
    return (
        <div className="flex h-screen items-start justify-start p-8 bg-white shadow-2xl">
            <div className="relative flex flex-col items-start space-y-16">


                {steps.map((step, index) => (
                    <div key={step.id} className="relative z-10 flex items-start ">

                        <div className="flex flex-col items-center">
                            <button className="w-32 bg-green-600 text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition">
                                {step.label}
                            </button>
                            <div className="flex flex-col items-center">

                                <div className="flex flex-col items-center relative">

                                    <div className="w-5 h-5 rounded-full flex items-center justify-center z-10">
                                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                                    </div>


                                    {index < steps.length - 0 && (
                                        <div className="absolute top-2.5 w-[2px] h-16 bg-green-600" />
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className="text-2xl relative left-10 top-10  ">
                            <div className="w-full gap-5  max-w-md bg-white shadow-xl rounded-2xl p-4 border border-gray-200">
                                <div className="grid justify-between items-center ">
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
                ))}
            </div>
        </div>

    );
};

export default Timeline;
