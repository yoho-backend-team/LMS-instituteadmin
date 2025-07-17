import { useState } from 'react';
import { Filter, Plus, ChevronRight } from 'lucide-react';
import backdropImg from '../../assets/backdropimage.png';

export default function CourseCategories() {
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [courseFilter, setCourseFilter] = useState('');

  const toggleFilters = () => setShowFilters(!showFilters);

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

      <div
        className="absolute w-[1628px] h-[689px] left-[-93px] top-[-384px]"
        style={{
          transform: 'rotate(19.14deg)',
          zIndex: 1
        }}
      />
      <div
        className="absolute w-[1664px] h-[705px] left-[-239px] top-[231px]"
        style={{
          transform: 'rotate(-158.3deg)',
          zIndex: 1
        }}
      />

      <main className="absolute left-[32px] top-[40px] w-[calc(100%-64px)] p-6 z-10">
        <h1 className="text-2xl font-semibold text-[#716F6F] mb-6">Course Categories</h1>

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

        {showFilters && (
          <>
            {/* Search Input */}
            <div className="mb-8">
              <div className="relative w-[360px] h-12 border-2 border-[#CA406F] rounded-lg bg-gradient-to-b from-white/20 to-white/0 backdrop-blur-sm">
                <input
                  type="text"
                  placeholder="Search Categories"
                  className="w-full h-full bg-transparent px-4 py-3 text-[#6C6C6C] placeholder-[#6C6C6C] focus:outline-none"
                />
              </div>
            </div>

            {/* Filter Dropdowns */}
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
          </>
        )}
      </main>
    </div>
  );
}
