import React from 'react'
import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 my-16 md:mx-10 text-gray-900'>
        <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors</p>
       <div className='w-full grid gridTemplateColumn gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
       {
            doctors.slice(0, 10).map((item, index)=>(
                <div onClick={()=> navigate(`/appointment/:${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500'>
                    <img className='bg-blue-50' src={item.image} alt="Doctor's Image" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-400'>
                            <p className='h-2 w-2 rounded-full bg-green-400'></p><p>Available</p>
                        </div>
                        <p className='text-lg font-medium text-gray-900'>{item.name}</p>
                        <p className='text-sm text-gray-600'>{item.speciality}</p>
                    </div>
                </div>
            ))
        }

       </div>
        <div className='px-12 py-3 my-0.5 text-gray-900 text-lg rounded-full cursor-pointer hover:translate-y-[10px] transition-all duration-500 bg-green-50 md:p-4 md:my-2 '>
            <p>See More Doctors</p>
        </div>
    </div>
  )
}

export default TopDoctors