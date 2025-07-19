import Staffmainpage from '@/components/StaffManagement/staffmainpage'
// import React from 'react'


const StaffMangement = () => {
  return (
    <div className='w-screen h-screen overflow-hidden' style={{
        backgroundImage: "url('./Backdrop Image.png')",
         backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}>
        <Staffmainpage/>
    </div>
  )
}

export default StaffMangement