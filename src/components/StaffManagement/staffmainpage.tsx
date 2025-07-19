import React, { useState } from 'react'
import { BsSliders } from 'react-icons/bs'
import { FiPlus } from 'react-icons/fi'
import AddStaff from './modal/AddStaff'

const Staffmainpage = () => {
  const [showModal, setShowModal] = useState(false)
  const [showFilter,setShowFilter]=useState(false)



  const statusfilteroption=["Active" ,"Offline"]
   const courseOptions = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Computer Science",
  ];

  return (
    <div className='p-2 h-full flex flex-col gap-4 w-screen'>
      {/* Header */}
      <div className='flex flex-col justify-between gap-3'>
        <div className='text-[#716F6F]'>
          <h2 className='font-semibold'>Teaching Staff</h2>
        </div>

        {/* Filter and Add Button */}
        <div className='flex justify-between'>
          <div className='border p-2 flex items-center gap-1 bg-[#CA406F] rounded-xl text-white'>
            <BsSliders />
            <button onClick={()=>setShowFilter(true)}>Show Filter</button>
          </div>
          <div className='border p-2 flex items-center gap-1 bg-[#CA406F] rounded-xl text-white'>
            <FiPlus />
            <button onClick={() => setShowModal(true)}>Add New Staff</button>
          </div>
        </div>
      </div>
      {showFilter&&
      <div className='flex gap-5 bg-white p-2 rounded-xl '>
        <div className='flex-1 p-1'>
            <label htmlFor="Status">Status</label>
              <select
                id="Status"
                name="Status"
                className="border rounded-md h-10 w-full px-2"
              >
                <option value="">Select Status</option>
                {statusfilteroption.map((Status) => (
                  <option key={Status} value={Status}>
                    {Status}
                  </option>
                ))}
              </select>
            
        </div>
        <div className='flex-1 p-1'>
             <label htmlFor="courses">Courses</label>
              <select
                id="courses"
                name="courses"
                className="border rounded-md h-10 w-full px-2"
              >
                <option value="">Select Course</option>
                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
        </div>
      </div>
      }

      {/* Staff Cards */}
      <div className='grid grid-cols-4 gap-4'>
        <div className='border grid gap-4 p-2 bg-white rounded-xl'>
          <div className='flex flex-row gap-3 items-center'>
            <div className='w-16 h-16 border-2 rounded-full overflow-hidden'>
              <img src="" alt="profile pic" className='object-cover w-full h-full' />
            </div>
            <h4>Name</h4>
          </div>
          <div>
             <p>email</p>
          </div>
          <div className='flex justify-between text-sm'>
           <div className=''>
            <p>Status</p>
           </div>
            <div className='bg-[#CA406F] rounded-lg text-white p-1'>
              <button>Active</button>
            </div>
          </div>
          <div className='w-full text-center border bg-[#0000FA] rounded-xl text-white'>
            <button className='p-1'>View Profile</button>
          </div>
        </div>
      </div>

      {/* Show Modal */}
      {showModal && <AddStaff onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Staffmainpage
