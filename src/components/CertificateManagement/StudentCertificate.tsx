import React from 'react'
import certificate from "../../assets/image 276.png"

const StudentCertificates = () => {
  return (
    <div>
        <div className='bg-[#CA406F] w-full h-15 rounded-lg p-4 font-semibold text-white text-xl'>Elon</div>
       <img src={certificate} alt="" className='justify-center text-center mt-12 ml-24'/>
    </div>
  )
}

export default StudentCertificates