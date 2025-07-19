

import React from "react"
import type { ReactElement } from "react"
import { useState, useEffect } from "react"
import { Home, ChevronDown, Menu, UserSearch, Briefcase, Building2, LayoutDashboard } from "lucide-react"

const SideBar = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
}) => {
    const [hovered, setHovered] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const actualOpen = isOpen || hovered
    const handleLinkClick = () => {
        if (isOpen) {
            setIsOpen(false)
        }
        setHovered(false)
    }
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div
            className={`top-0 left-0 h-full z-40 flex flex-col transition-all duration-300 p-1 bg-gradient-to-b from-[#F6D3E9] via-[#FFFFFF] to-[#F6D3E9] ${actualOpen ? "w-60" : "w-16"}`}
            onMouseEnter={() => !isOpen && setHovered(false)}
            onMouseLeave={() => !isOpen && setHovered(false)}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 h-16">
                <div className="relative group flex items-center overflow-visible">
                    <button
                        onClick={handleToggle}
                        className="px-1 rounded-md transition duration-200 hover:bg-white/10"
                        title="Toggle Sidebar"
                    >
                        <Menu size={20} className="text-[#CA406F]" />
                    </button>
                    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-4 whitespace-nowrap rounded-3xl bg-[#CA406F] text-white text-sm px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 z-50">
                        Toggle Sidebar
                    </span>
                </div>
            </div>
            <nav className="flex-1 overflow-visible p-2 text-black relative space-y-3">
                <SidebarLink
                    to="/dashboard"
                    icon={<LayoutDashboard />}
                    label="Dashboard"
                    isOpen={actualOpen}
                    onClick={handleLinkClick}
                />
                <SidebarLink to="/community" icon={<Home />} label="Community" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarDropdown
                    icon={<Building2 />}
                    label="Branch-management"
                    isOpen={actualOpen}
                    childRoutes={["/branch"]}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/branch-management" label="Branch" isOpen={actualOpen} onClick={handleLinkClick} />
                </SidebarDropdown>
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="User Management"
                    isOpen={actualOpen}
                    childRoutes={["/group"]}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/group" label="Group" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/group" label="Group" isOpen={actualOpen} onClick={handleLinkClick} />
                </SidebarDropdown>
                <SidebarLink to="/users" icon={<Briefcase />} label="Users" isOpen={actualOpen} onClick={handleLinkClick} />
                {/* Updated: Course Management with childRoutes */}
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="Course Management"
                    isOpen={actualOpen}
                    childRoutes={["/categories"]}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/categories" label="Categories" isOpen={actualOpen} onClick={handleLinkClick} />
                </SidebarDropdown>
                <SidebarLink to="/courses" icon={<Briefcase />} label="Courses" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="Content Management"
                    isOpen={actualOpen}
                    childRoutes={["/studymaterial"]}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/studymaterial" label="Study Material" isOpen={actualOpen} onClick={handleLinkClick} />
                </SidebarDropdown>
                <SidebarLink to="/notes" icon={<Briefcase />} label="Notes" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarLink to="/modules" icon={<Briefcase />} label="Modules" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="Class Management"
                    isOpen={actualOpen}

                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/offlinemanagement" label="OffLine Class" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/Liveclasses" label="Live Class" isOpen={actualOpen} onClick={handleLinkClick} />

                </SidebarDropdown>




                <SidebarLink to="/Teachingstaff" icon={<Briefcase />} label="Teaching Staff" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarLink to="/Studentmanagement" icon={<Briefcase />} label="Student management" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarLink to="/Batchmanagement" icon={<Briefcase />} label="Batch management" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="Attendence Management"
                    isOpen={actualOpen}

                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/Studentattendence" label="Student Attendence" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/Staffattendence" label="Staff Attendence" isOpen={actualOpen} onClick={handleLinkClick} />

                </SidebarDropdown>
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="Payment Management"
                    isOpen={actualOpen}

                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/Fees" label="Fees" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/Slaries" label="Slaries" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/Subscription" label="Subscription" isOpen={actualOpen} onClick={handleLinkClick} />

                </SidebarDropdown>
                <SidebarLink to="/Threeplans" icon={<Briefcase />} label="3 Plans" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarLink to="/Refund_Fees" icon={<Briefcase />} label="Fees" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="Notification Management"
                    isOpen={actualOpen}

                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/Studentnotification" label="Studentnotification" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/Staffnotification" label="Staffnotification" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/Allnotification" label="Allnotification" isOpen={actualOpen} onClick={handleLinkClick} />

                </SidebarDropdown>
                <SidebarLink to="/Studentcertificate" icon={<Briefcase />} label="Studentcertificate" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarLink to="/Refund_Fees" icon={<Briefcase />} label="Fees" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="Id Crad Management"
                    isOpen={actualOpen}

                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/StudentIdCard" label="StudentIdCard" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/StaffIdCard" label="StaffIdCard" isOpen={actualOpen} onClick={handleLinkClick} />
                </SidebarDropdown>

                <SidebarLink to="/Placement" icon={<Briefcase />} label="Placement Management" isOpen={actualOpen} onClick={handleLinkClick} />
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="Help Center"
                    isOpen={actualOpen}

                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/HelpFQA" label="HelpFQA" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/AddQust" label="AddQust" isOpen={actualOpen} onClick={handleLinkClick} />
                </SidebarDropdown>
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="Ticket Management"
                    isOpen={actualOpen}

                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/Staffticket" label="Staffticket" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/StudentTicket" label="StudentTicket" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/Yourticket" label="Yourticket" isOpen={actualOpen} onClick={handleLinkClick} />

                </SidebarDropdown>
                <SidebarDropdown
                    icon={<UserSearch />}
                    label="FQA Category"
                    isOpen={actualOpen}

                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                >
                    <SidebarLink1 to="/Category" label="Category" isOpen={actualOpen} onClick={handleLinkClick} />
                    <SidebarLink1 to="/FQA" label="FQA" isOpen={actualOpen} onClick={handleLinkClick} />
                </SidebarDropdown>
            </nav>
        </div>
    )
}

export default SideBar

const SidebarLink1 = ({
    to,
    //   icon,
    label,
    isOpen,
    onClick,
}: {
    to: string
    //   icon: ReactElement
    label: string
    isOpen: boolean
    onClick: () => void
}) => {
    // Using window.location.pathname instead of usePathname
    const currentPathname = typeof window !== "undefined" ? window.location.pathname : ""
    const [isHovered, setIsHovered] = useState(false)
    const isActive = currentPathname === to
    return (
        <a // Changed from Link to a
            href={to}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group flex items-center py-3 rounded-full ${isActive ? "bg-[#CA406F] text-white" : isHovered ? "bg-[rgba(202,64,111,0.1)]" : "hover:bg-white/10"
                } ${isOpen ? "justify-start gap-3 px-3 " : "justify-center px-0"}`}
        >
            <div className="relative group flex items-center overflow-visible">
                {/* Tooltip */}
                <div
                    className={`text-lg flex-shrink-0 transform scale-100 transition-transform duration-200
            group-hover:animate-[grow-from-dot-on-hover_1.5s_ease-out]
            ${isActive ? "text-white" : "text-[#CA406F]"}`}
                >
                    {/* {icon} */}
                </div>
                {!isOpen && (
                    <span className="absolute top-1/2 -translate-y-4 ml-10 whitespace-nowrap rounded-3xl bg-[#CA406F] text-white text-sm px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 z-50">
                        {label}
                    </span>
                )}
            </div>
            {isOpen && <span className={`font-medium text-sm ${isActive ? "text-white" : "text-black"}`}>{label}</span>}
        </a> // Changed from Link to a
    )
}

const SidebarLink = ({
    to,
    icon,
    label,
    isOpen,
    onClick,
}: {
    to: string
    icon: ReactElement
    label: string
    isOpen: boolean
    onClick: () => void
}) => {
    // Using window.location.pathname instead of usePathname
    const currentPathname = typeof window !== "undefined" ? window.location.pathname : ""
    const [isHovered, setIsHovered] = useState(false)
    const isActive = currentPathname === to
    return (
        <a // Changed from Link to a
            href={to}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group flex items-center py-3 rounded-full ${isActive ? "bg-[#CA406F] text-white" : isHovered ? "bg-[rgba(202,64,111,0.1)]" : "hover:bg-white/10"
                } ${isOpen ? "justify-start gap-3 px-3 " : "justify-center px-0"}`}
        >
            <div className="relative group flex items-center overflow-visible">
                {/* Tooltip */}
                <div
                    className={`text-lg flex-shrink-0 transform scale-100 transition-transform duration-200
            group-hover:animate-[grow-from-dot-on-hover_1.5s_ease-out]
            ${isActive ? "text-white" : "text-[#CA406F]"}`}
                >
                    {icon}
                </div>
                {!isOpen && (
                    <span className="absolute top-1/2 -translate-y-4 ml-10 whitespace-nowrap rounded-3xl bg-[#CA406F] text-white text-sm px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 z-50">
                        {label}
                    </span>
                )}
            </div>
            {isOpen && <span className={`font-medium text-sm ${isActive ? "text-white" : "text-black"}`}>{label}</span>}
        </a> // Changed from Link to a
    )
}

const SidebarDropdown = ({
    icon,
    label,
    children,
    isOpen,
    childRoutes = [],
    activeDropdown,
    setActiveDropdown,
}: {
    icon: ReactElement
    label: string
    children: React.ReactNode
    isOpen: boolean
    childRoutes?: string[]
    activeDropdown: string | null
    setActiveDropdown: (label: string | null) => void
}) => {
    // Using window.location.pathname instead of usePathname
    const currentPathname = typeof window !== "undefined" ? window.location.pathname : ""
    const isChildActive = childRoutes.some((route) => currentPathname === route)
    const expanded = activeDropdown === label
    useEffect(() => {
        if (isChildActive) {
            setActiveDropdown(label)
        }
    }, [currentPathname, isChildActive, label, setActiveDropdown]) // Dependency changed from pathname to currentPathname
    return (
        <div
            className={`w-full relative ${isChildActive && !isOpen ? "bg-[#CA406F] text-white rounded-4xl" : "hover:backdrop-blur-md rounded-xl"
                }`}
        >
            <button
                onClick={() => {
                    if (isOpen) {
                        setActiveDropdown(expanded ? null : label)
                    } else {
                        setActiveDropdown(label)
                    }
                }}
                title={!isOpen ? label : ""}
                className={`group flex items-center w-full py-2 transition-all ${isOpen ? "justify-start gap-3 px-3 rounded-md" : "justify-center rounded-md"}`}
            >
                <div className="relative group flex items-center overflow-visible">
                    <div
                        className={`text-lg flex-shrink-0 transform scale-100 transition-colors duration-200
              group-hover:animate-[grow-from-dot-on-hover_1.5s_ease-out]
              ${isChildActive ? (!isOpen ? "text-white" : "text-black") : expanded ? "text-black/50" : "text-[#CA406F]"}`}
                    >
                        {icon}
                    </div>
                    {!isOpen && (
                        <span className="absolute top-1/2 -translate-y-4 ml-10 whitespace-nowrap rounded-3xl bg-[#CA406F] text-white text-sm px-2 py-1 shadow-lg opacity-0 group-hover:opacity-100 ">
                            {label}
                        </span>
                    )}
                </div>
                {isOpen && (
                    <>
                        <span
                            className={`font-medium text-sm flex-1 text-left transition-colors ${isChildActive ? "text-black" : expanded ? "text-black/50" : "text-black"}`}
                        >
                            {label}
                        </span>
                        <span
                            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""} ${isChildActive ? "text-black" : "text-black"}`}
                        >
                            <ChevronDown />
                        </span>
                    </>
                )}
            </button>
            {expanded && isOpen && (
                <div className="flex flex-col space-y-1">
                    <div className="relative px-7 top-3 left-2">
                        {React.Children.map(children, (child, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-2 top-1 translate-x-[-50%]">
                                    <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M45 0 C40 30, 60 30, 70 30"
                                            stroke="#CA406F"
                                            strokeOpacity="0.5"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                        <circle cx="70" cy="30" r="4" fill="#CA406F" />
                                    </svg>
                                </div>
                                <div className="relative left-5 px-4 mb-2 top-3">{child}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
