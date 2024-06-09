import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

const Backbutton = () => {
  return (
    <div className='flex'>
        <div className='bg-sky-500 text-white py-1 px-4 rounded-lg w-fit'>
            <BsArrowLeft />
        </div>
    </div>
  )
}

export default Backbutton