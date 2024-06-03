import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const Backbutton = ({destination='/admin'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-500 text-white py-1 px-4 rounded-lg w-fit'>
            <BsArrowLeft />
        </Link>
    </div>
  )
}

export default Backbutton