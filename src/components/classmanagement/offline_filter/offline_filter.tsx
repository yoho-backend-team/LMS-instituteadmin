
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const OfflineFilter = () => {
    const [showStates, setShowStates] = useState(false);
    const [showBatches, setShowBatches] = useState(false);
    const [selectedState, setSelectedState] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("");

    const statesOptions = ["Tamil Nadu", "Kerala", "Karnataka"];
    const batchesOptions = ["Batch A", "Batch B", "Batch C"];

    const stateRef = useRef(null);
    const batchRef = useRef(null);

    
    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (
                stateRef.current &&
                !stateRef.current.contains(event.target)
            ) {
                setShowStates(false);
            }
            if (
                batchRef.current &&
                !batchRef.current.contains(event.target)
            ) {
                setShowBatches(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white p-3 rounded-sm text-black shadow-2xl w-full">
            <div className="">
                <div className="mb-3">Filters</div>
                <form className="grid grid-cols-2 gap-y-3 gap-x-3 relative">
                    {/* States */}
                    <div className="grid relative" ref={stateRef}>
                        <label className="mb-1">States</label>
                        <input
                            type="text"
                            // placeholder="States......"
                            name="state"
                            value={selectedState}
                            readOnly
                            onClick={() => setShowStates(!showStates)}
                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer pr-7"
                        />
                        <div className="absolute right-2 top-9 text-gray-500 cursor-pointer">
                            {showStates ? (
                                <IoIosArrowUp onClick={() => setShowStates(false)} />
                            ) : (
                                <IoIosArrowDown onClick={() => setShowStates(true)} />
                            )}
                        </div>
                        {showStates && (
                            <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-sm shadow-sm">
                                {statesOptions.map((state, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => {
                                            setSelectedState(state);
                                            setShowStates(false);
                                        }}
                                        className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {state}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    
                    <div className="grid relative" ref={batchRef}>
                        <label className="mb-1">Batches</label>
                        <input
                            type="text"
                            // placeholder="Batches......"
                            name="batch"
                            value={selectedBatch}
                            readOnly
                            onClick={() => setShowBatches(!showBatches)}
                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer pr-7"
                        />
                        <div className="absolute right-2 top-9 text-gray-500 cursor-pointer">
                            {showBatches ? (
                                <IoIosArrowUp onClick={() => setShowBatches(false)} />
                            ) : (
                                <IoIosArrowDown onClick={() => setShowBatches(true)} />
                            )}
                        </div>
                        {showBatches && (
                            <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-sm shadow-sm">
                                {batchesOptions.map((batch, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => {
                                            setSelectedBatch(batch);
                                            setShowBatches(false);
                                        }}
                                        className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {batch}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    
                    <div className="grid">
                        <label className="mb-1">Search Class</label>
                        <input
                            type="text"
                            // placeholder="Search Class......"
                            name="class"
                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3 placeholder:text-gray-400"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OfflineFilter;
