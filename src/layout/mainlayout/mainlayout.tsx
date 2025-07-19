
import { Outlet } from 'react-router-dom';
import SideBar from '@/components/comman/sidebar/sidebar';
import NavBar from '@/components/comman/navbar/navbar';
import backgroundimage from "@/assets/Backgroundimage.png";
import { useState } from 'react';

const SIDEBAR_WIDTH_OPEN = 235;
const SIDEBAR_WIDTH_CLOSED = 64;

export const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarWidth = isSidebarOpen ? SIDEBAR_WIDTH_OPEN : SIDEBAR_WIDTH_CLOSED;

  return (
    

    <div className="w-full h-screen flex flex-col">
  <div className="w-full">
    <NavBar />
  </div>

  <div className="flex flex-1 relative">
    
    <div
      className="absolute top-0 left-0 h-full z-50 transition-all duration-300"
      style={{ width: sidebarWidth }}
    >
      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </div>

    
    <div
      className="flex-1 p-4 overflow-auto  "
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
