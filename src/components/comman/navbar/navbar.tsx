
import { FiBell } from "react-icons/fi"
import Titlelogo from "@/assets/icons/titlelogo.png"

const Navbar = () => {
  return (
    <nav className="   w-full  bg-gradient-to-r from-[#F6D3E9] via-[#FFFFFF] to-[#F6D3E9] shadow-md p-3 flex items-center justify-between">
      
      <div className="flex items-center">
        <img src={Titlelogo} alt="Logo" className="h-10 w-auto "  />
        <div>
            
        </div>
        <span className="ml-2 text-xl font-bold text-gray-800"></span>
      </div>

     
      <div className="flex items-center gap-4">
       
        <button className="px-1 text-white bg-blue-800 rounded-2xl h-[35px] w-[35px]">
          <FiBell  size={28} className="p-1"/>
          {/* Notification Dot */}
          {/* <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" /> */}
        </button>

        
        <div className="h-[40px] w-[40px] rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75N_tftPWlyK4Q5-QDx_QZtLFJAG7JiDM3A&s"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
