
import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router";



const Placementedit = () => {
    return (
        <div>
            <div className="">
                <Link to={"/Placement"} >
                    <IoIosArrowBack/>
                </Link>
                </div>
            <div className="bg-white shadow-2xl rounded-lg p-5">
                <div className="text-red-700 mb-4 font-semibold">
                    Edit Placement Details
                </div>
                <h4 className="font-semibold">Company Details</h4>
                <form className="grid grid-cols-2 gap-y-3 gap-x-3 relative mt-4 text-sm">
                    <div className="grid relative" >
                        <label className="mb-1">Company Name</label>
                        <input
                            type="text"
                            name="state"

                            readOnly

                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                    </div>
                    <div className="grid relative" >
                        <label className="mb-1">Company Address</label>
                        <input
                            type="text"
                            name="batch"
                            readOnly
                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                    </div>
                    <div className="grid">
                        <label className="mb-1">Contact Email</label>
                        <input
                            type="text"
                            name="class"
                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                    </div>
                    <div className="grid">
                        <label className="mb-1">Contact Number</label>
                        <input
                            type="text"
                            name="class"
                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3
                             placeholder:text-gray-400 cursor-pointer pr-7"                        />
                    </div>
                </form>
            </div>


            <div className="bg-white shadow-2xl rounded-lg p-5 mt-5">

                <h4 className="font-semibold">Job Details</h4>
                <form className="grid grid-cols-2 gap-y-3 gap-x-3 mt-4 text-sm">
                    <div className="grid">
                        <label className="mb-1">Job Name</label>
                        <input
                            type="text"
                            name="email"
                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer pr-7"
                        />
                    </div>
                    <div className="grid">
                        <label className="mb-1">Job Description </label>
                        <input
                            type="text"
                            name="contact"
                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer pr-7"
                        />
                    </div>
                    <div className="col-span-2 grid">
                        <label className="mb-1">Skills</label>
                        <input
                            type="text"
                            name="state"
                            readOnly
                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer pr-7"
                        />
                    </div>


                </form>
            </div>
            <div className="bg-white shadow-2xl rounded-lg p-5 mt-5">

                <h4 className="font-semibold">Student Details</h4>
                <form className="grid grid-cols-2 gap-y-3 gap-x-3 mt-4 text-sm">
                    <div className="grid">
                        <label className="mb-1">Students</label>
                        <input
                            type="text"
                            name="email"
                            className="border-black/40 px-2 h-9 border rounded-sm placeholder:px-3 placeholder:text-gray-400 cursor-pointer pr-7"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Placementedit;