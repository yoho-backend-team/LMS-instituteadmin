import React, { useState } from 'react';
import {
  Settings, MessageSquare, Calendar, Bell, User, 
  CreditCard, HelpCircle, Ticket, Filter, Plus, ChevronRight
} from 'lucide-react';

// Import images
import profileImg from '../../assets/Frame297.png';
import backdropImg from '../../assets/backdropimage.png';

// Icon components
const DashboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill="currentColor"/>
  </svg>
);

const GroupIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
  </svg>
);

const ManagementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 12H9V17H7V12ZM7 7H9V10H7V7ZM15 12H17V17H15V12ZM15 7H17V10H15V7ZM11 7H13V17H11V7Z" fill="currentColor"/>
  </svg>
);

const ProfileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
  </svg>
);

const OnlineEducationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="currentColor"/>
  </svg>
);

const ContentWritingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 16H4V4H15V7H18V10H21V13H18V16H15V19H12V16H4M6 6H13V10H6V6M6 12H13V14H6V12M18 12H15V14H18V12Z" fill="currentColor"/>
  </svg>
);

const NotificationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="currentColor"/>
  </svg>
);

const CertificateIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 3C2.89 3 2 3.89 2 5V15C2 15.53 2.21 16.04 2.59 16.41L7 20.8V21H8V20.8L12 17L16 20.8V21H17V20.8L21.41 16.41C21.79 16.04 22 15.53 22 15V5C22 3.89 21.1 3 20 3H4M4 5H20V15H18V13C18 11.9 17.1 11 16 11H8C6.9 11 6 11.9 6 13V15H4V5M8 15H16V13H8V15M8 7H16V9H8V7Z" fill="currentColor"/>
  </svg>
);

export default function CourseCategories() {
  const [activeNav, setActiveNav] = useState('online-education');
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [courseFilter, setCourseFilter] = useState('');
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const toggleFilters = () => setShowFilters(!showFilters);

  const navItems = [
    { id: 'dashboard', icon: <DashboardIcon />, rotated: true },
    { id: 'group', icon: <GroupIcon /> },
    { id: 'management', icon: <ManagementIcon /> },
    { id: 'profile', icon: <ProfileIcon /> },
    { id: 'online-education', icon: <OnlineEducationIcon /> },
    { id: 'content', icon: <ContentWritingIcon /> },
    { id: 'settings', icon: <Settings size={20} /> },
    { id: 'students', icon: <User size={20} /> },
    { id: 'batch', icon: <User size={20} /> },
    { id: 'coaching', icon: <MessageSquare size={20} /> },
    { id: 'calendar', icon: <Calendar size={20} /> },
    { id: 'wallet', icon: <CreditCard size={20} /> },
    { id: 'money-back', icon: <CreditCard size={20} /> },
    { id: 'notifications', icon: <NotificationIcon /> },
    { id: 'certificate', icon: <CertificateIcon /> },
    { id: 'id-card', icon: <User size={20} /> },
    { id: 'communication', icon: <MessageSquare size={20} /> },
    { id: 'ticket', icon: <Ticket size={20} /> },
    { id: 'faq', icon: <HelpCircle size={20} /> }
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Backdrop Image */}
      <div 
        className="absolute w-full h-full"
        style={{
          backgroundImage: `url(${backdropImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      {/* Background Gradients */}
      <div
        className="absolute w-[1628px] h-[689px] left-[-93px] top-[-384px]"
        style={{
          // background: 'linear-gradient(180deg, #FCF3F6 0%, #F6D3E9 100%)',
          transform: 'rotate(19.14deg)',
          zIndex: 1
        }}
      />
      <div
        className="absolute w-[1664px] h-[705px] left-[-239px] top-[231px]"
        style={{
          // background: 'linear-gradient(180deg, #FCF3F6 0%, #F6D3E9 100%)',
          transform: 'rotate(-158.3deg)',
          zIndex: 1
        }}
      />

      {/* Header */}
      <header
        className="absolute w-full h-[90px] left-0 top-0 flex items-center justify-between px-8 z-10"
        style={{
          background: 'linear-gradient(90deg, #F6D3E9 0%, #FFFFFF 48.08%, #F6D3E9 100%)',
          backdropFilter: 'blur(2px)'
        }}
      >
        <div className="flex items-center gap-12">
          <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-lg font-medium">JD</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="relative w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
            <Bell size={20} className="text-white" />
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-200 border border-white overflow-hidden">
            <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Sidebar with hover effect */}
      <aside
        className="absolute w-[102px] h-[934px] left-0 top-[90px] py-5 flex flex-col items-center z-10"
        style={{
          background: 'linear-gradient(180deg, #F6D3E9 0%, #FFFFFF 51.44%, #F6D3E9 100%)'
        }}
      >
        <div className="flex flex-col items-center gap-5 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`relative w-[62px] h-[62px] rounded-full flex items-center justify-center transition-colors ${
                activeNav === item.id ? 'bg-[#CA406F]' : ''
              }`}
              onClick={() => setActiveNav(item.id)}
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
           
              
              <div className={`z-10 ${activeNav === item.id ? 'text-white' : 'text-[#CA406F]'}`}>
                {React.cloneElement(item.icon, {
                  style: {
                    transform: item.rotated ? 'rotate(-90deg)' : 'none',
                    width: '24px',
                    height: '24px'
                  }
                })}
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="absolute left-[132px] top-[120px] w-[calc(100%-132px)] p-6 z-10">
        <h1 className="text-2xl font-semibold text-[#716F6F] mb-6">Course Categories</h1>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={toggleFilters}
            className="bg-[#CA406F] text-white px-4 py-3 rounded-lg flex items-center gap-2 h-12"
          >
            <Filter size={20} />
            <span className="text-sm font-medium">{showFilters ? 'Hide' : 'Show Filter'}</span>
          </button>

          <button className="bg-[#CA406F] text-white px-4 py-3 rounded-lg flex items-center gap-2 h-12">
            <Plus size={20} />
            <span className="text-sm font-medium">Add New Category</span>
          </button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative w-[360px] h-12 border-2 border-[#CA406F] rounded-lg bg-gradient-to-b from-white/20 to-white/0 backdrop-blur-sm">
            <input
              type="text"
              placeholder="Search Categories"
              className="w-full h-full bg-transparent px-4 py-3 text-[#6C6C6C] placeholder-[#6C6C6C] focus:outline-none"
            />
          </div>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="w-full bg-white p-6 rounded-xl shadow-lg mb-8">
            <div className="flex gap-8">
              <div className="w-1/2">
                <label className="block text-[#716F6F] text-sm font-medium mb-2">Status</label>
                <div className="relative border border-[#716F6F] rounded-lg h-12 flex items-center px-4">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full h-full bg-transparent text-[#716F6F] font-light focus:outline-none appearance-none"
                  >
                    <option value="">Filter by Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="draft">Draft</option>
                  </select>
                  <ChevronRight className="text-[#716F6F] transform rotate-90 absolute right-4" />
                </div>
              </div>

              <div className="w-1/2">
                <label className="block text-[#716F6F] text-sm font-medium mb-2">Course</label>
                <div className="relative border border-[#716F6F] rounded-lg h-12 flex items-center px-4">
                  <select
                    value={courseFilter}
                    onChange={(e) => setCourseFilter(e.target.value)}
                    className="w-full h-full bg-transparent text-[#716F6F] font-light focus:outline-none appearance-none"
                  >
                    <option value="">Filter by Course</option>
                    <option value="react">Introduction to React</option>
                    <option value="css">Advanced CSS</option>
                    <option value="js">JavaScript Fundamentals</option>
                  </select>
                  <ChevronRight className="text-[#716F6F] transform rotate-90 absolute right-4" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        {/* <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="text-center py-12">
            <p className="text-gray-500">Course categories content would go here</p> 
          </div>
        </div> */}
      </main>
    </div>
  );
}