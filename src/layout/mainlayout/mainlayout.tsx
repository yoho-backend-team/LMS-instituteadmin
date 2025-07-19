
// import { Outlet } from 'react-router-dom';
// import SideBar from '@/components/comman/sidebar/sidebar';
// import NavBar from '@/components/comman/navbar/navbar';
// import backgroundimage from "@/assets/Backgroundimage.png";
// import { useState } from 'react';

// const SIDEBAR_WIDTH_OPEN = 255;
// const SIDEBAR_WIDTH_CLOSED = 64;

// export const MainLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const sidebarWidth = isSidebarOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_CLOSED;

//   return (
//     <div className="w-full h-screen flex flex-col">
//       {/* Fixed Navbar */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <NavBar />
//       </div>

//       <div className="flex flex-1 pt-[64px] relative ">

//         <div
//           className="fixed top-[64px] left-0  z-40  transition-all duration-300 "

//         >
//           <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//         </div>


//         <div
//           className="flex-1 p-4  ml-[60px]"
//           style={{
//             backgroundImage: `url(${backgroundimage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             marginLeft: isSidebarOpen ? sidebarWidth : '60px',
//             transition: 'margin-left 0.3s ease',
//           }}
//         >
//           <Outlet />
//         </div>
//       </div>
//     </div>



//   );
// };



import { Outlet } from 'react-router-dom';
import SideBar from '@/components/comman/sidebar/sidebar';
import NavBar from '@/components/comman/navbar/navbar';
import backgroundimage from "@/assets/Backgroundimage.png";
import { useState } from 'react';

const SIDEBAR_WIDTH_OPEN = 255;
const SIDEBAR_WIDTH_CLOSED = 64;

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarWidth = isSidebarOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_CLOSED;

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      <div className="flex flex-1 pt-[64px] relative">
        <div
          className="fixed top-[64px] left-0 z-40 transition-all duration-300 overflow-y-auto"
          style={{ height: 'calc(100vh - 64px)' }}
        >
          <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </div>

        <div
          className="flex-1 p-4 ml-[60px]"
          style={{
            backgroundImage: `url(${backgroundimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            marginLeft: isSidebarOpen ? sidebarWidth : '60px',
            transition: 'margin-left 0.3s ease',
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
