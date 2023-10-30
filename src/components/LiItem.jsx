import React from 'react'
import {BiChevronDown} from 'react-icons/bi'
function LiItem() {
  return (
    <li className='flex items-center justify-between  rounded-[5px]  border-[#424242] border-[1.8px] text-[15px] w-full  px-3 text-white'>
      <div className='flex items-start flex-col'>
        <span className='font-semibold text-[14px]'>Choco Land</span>
        <span className='text-[12px] text-primaryText'>08-09-2023 at 23:20:05</span>
      </div>
      <div className='flex items-center'>
        <span className='font-semibold'>
            60 <br/>
            <span className='text-[12px] font-normal text-primaryText'>7 items</span>
        </span>
        <span className=' rounded-sm bg-icon ml-3'>
            <BiChevronDown size={20} color='#594EF1' className='font-bold' />
        </span>
      </div>
    </li>
  )
}

export default LiItem
