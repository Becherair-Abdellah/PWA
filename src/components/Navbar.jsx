import React from 'react'
import img from '../assets/logo.svg'
import {AiOutlineBarcode} from 'react-icons/ai'
function Navbar() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='px-3 py-1 border-white border rounded-md'>
        <AiOutlineBarcode size={22} color='white' />
        </div>
      </div>
      <h1 className='text-[17px] text-white font-semibold my-4'>Welcom To <strong className='text-primary'>FTR Client</strong></h1>
      <p className='text-white text-[13px]'>Let Store Owners Scan Your Barcode</p>
    </div>
  )
}

export default Navbar
