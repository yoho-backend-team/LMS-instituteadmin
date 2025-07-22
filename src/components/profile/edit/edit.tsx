
import { useNavigate } from "react-router";

const ProfileEdit = () => {

    const navigate = useNavigate();

    return (
        <div className="px-10 py-2 ">
            <div className="px-10 bg-white py-5 rounded-sm shadow-2xl">
                <div>
                    <div className="bg-[#CA406F] text-white text-2xl text-center font-bold h-12 rounded-sm py-1">
                        Edit User Informtion
                    </div>
                </div>
                <form className="space-y-4 py-4">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRs80wcNFYC-cDoRbj54Bg1KtvTx_WPXyQodNfddw7B-fe9kUHyYDX0ZHmjWZLmdPAgoeCH72hBbtGa44Uy4dBn7NuAl19jbYMaaLbW20X5"
                            alt="Chandran"
                            className="w-20 h-20 object-cover rounded-full"
                        />
                        <p className="mt-2 text-center">Chandran</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">

                        <div className="grid gap-1">
                            <label className="text-sm">Full Name</label>
                            <input
                                type="text"
                                className="h-10 w-full rounded-sm px-3 text-black border border-gray-400"
                            />
                        </div>
                        <div className="grid gap-1 relative">
                            <label className="text-sm">User Name</label>
                            <div
                                className="h-10 rounded-sm px-3 flex items-center justify-between border border-gray-400 text-black cursor-pointer"
                            >
                            </div>

                        </div>
                        <div className="grid gap-1 relative">
                            <label className="text-sm">Email</label>
                            <div
                                className="h-10 rounded-sm px-3 flex items-center justify-between border border-gray-400 text-black cursor-pointer"
                            >
                            </div>

                        </div>
                        <div className="grid gap-1 relative">
                            <label className="text-sm">Contact</label>
                            <div
                                className="h-10 rounded-sm px-3 flex items-center justify-between border border-gray-400 text-black cursor-pointer"
                            >
                            </div>

                        </div>
                        <div className="grid gap-1 relative">
                            <label className="text-sm">Designation</label>
                            <div
                                className="h-10 rounded-sm px-3 flex items-center justify-between border border-gray-400 text-black cursor-pointer"
                            >
                            </div>

                        </div>

                        <div className="grid gap-1 relative">
                            <label className="text-sm"> No Data</label>
                            <div
                                className="h-10 rounded-sm px-3 flex items-center justify-between border border-gray-400 text-black cursor-pointer"
                            >
                            </div>

                        </div>
                    </div>

                    <div className="flex gap-4 justify-end pt-4">
                        <button
                            type="button"
                            onClick={() => { navigate("/profile"); }}
                            className="text-blue-700 bg-blue-100 w-24 h-10 rounded-sm border border-blue-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="bg-[#CA406F] text-white w-24 h-10 rounded-sm"
                            onClick={() => alert(` edited successfully`)}
                        >
                            Submit
                        </button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default ProfileEdit;
