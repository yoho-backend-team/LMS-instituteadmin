


import { FiBell } from "react-icons/fi";
import Titlelogo from "@/assets/icons/titlelogo.png";
import { useState, useRef, useEffect } from "react";
import Profile from "@/pages/profile/profile/profile";
import { Link } from "react-router";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case "profile":
  //       return <Profile />;
  //     case "settings":
  //       return <div className="p-4">Settings content coming soon</div>;
  //     case "logout":
  //       return <div className="p-4">Logging out...</div>;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div>
      <nav className="w-full bg-gradient-to-r from-[#F6D3E9] via-[#FFFFFF] to-[#F6D3E9] p-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Titlelogo} alt="Logo" className="h-10 w-auto" />
          <span className="ml-2 text-xl font-bold text-gray-800"></span>
        </div>

        <div className="flex items-center gap-4 relative">
          <button className="px-1 text-white bg-blue-800 rounded-2xl h-[35px] w-[35px]">
            <FiBell size={28} className="p-1" />
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="h-[40px] w-[40px] rounded-full overflow-hidden border-2 border-gray-300"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75N_tftPWlyK4Q5-QDx_QZtLFJAG7JiDM3A&s"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-50 bg-white rounded-md shadow-lg z-10">
                {/* <ul className="p-3 space-y-4">
                  <li>
                    <Link
                    to={'profile'}
                     
                      className={`w-full rounded-lg text-left px-4 py-2 hover:bg-gray-100 ${activeTab === "profile" ? "bg-[#CA406F] font-semibold text-white" : ""
                        }`}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'settings'}
                      className={`w-full rounded-lg text-left px-4 py-2 hover:bg-gray-100 ${activeTab === "settings" ? "bg-[#CA406F] font-semibold text-white" : ""
                        }`}
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'logout'}
                      className={`w-full rounded-lg text-left px-4 py-2 hover:bg-gray-100 text-red-600 ${activeTab === "logout" ? "bg-[#CA406F] font-semibold text-white" : ""
                        }`}
                    >
                      Logout
                    </Link>
                  </li>

                </ul> */}

                <ul className="p-3 space-y-4">
                  <li>
                    <Link
                      to={'profile'}
                      onClick={() => {
                        // setActiveTab("profile");
                        setDropdownOpen(false);
                      }}
                      className={`w-full rounded-lg text-left px-4 py-2 hover:bg-gray-100 ${activeTab === "profile" ? "bg-[#CA406F] font-semibold text-white" : ""
                        }`}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'settings'}
                      onClick={() => {
                        // setActiveTab("settings");
                        setDropdownOpen(false);
                      }}
                      className={`w-full rounded-lg text-left px-4 py-2 hover:bg-gray-100 ${activeTab === "settings" ? "bg-[#CA406F] font-semibold text-white" : ""
                        }`}
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'logout'}
                      onClick={() => {
                        // setActiveTab("logout");
                        setDropdownOpen(false);
                      }}
                      className={`w-full rounded-lg text-left px-4 py-2 hover:bg-gray-100 text-red-600 ${activeTab === "logout" ? "bg-[#CA406F] font-semibold text-white" : ""
                        }`}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>

              </div>
            )}
          </div>
        </div>
      </nav>

      {/* {activeTab && <div>{renderContent()}</div>} */}
    </div>
  );
};

export default Navbar;
