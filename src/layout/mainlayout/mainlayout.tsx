

import { Outlet } from 'react-router-dom';
import SideBar from '@/components/comman/sidebar/sidebar';
import NavBar from '@/components/comman/navbar/navbar';
import backgroundimage from "@/assets/Backgroundimage.png";
import { useState } from 'react';


export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="w-full h-screen flex flex-col">

      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      <div className="flex pt-[64px] relative ">
        <div
          className=" top-[64px] left-0 z-40 transition-all duration-300  "
        >
          <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        </div>

        <div
          className="flex-1 p-4 "
          style={{
            backgroundImage: `url(${backgroundimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'margin-left 0.3s ease',
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
