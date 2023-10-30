import React from 'react'
import {BiChevronRight} from 'react-icons/bi'
import LiItem from './LiItem'
function Receipts() {
  return (
    <div>
      <div className='text-white flex justify-between items-center'>
        <h2 className='font-semibold'>My Receipts</h2>
        <span className='flex items-center text-[12px] font-semibold'>See All <BiChevronRight size={22} /></span>
      </div>
      <div>
        <ul className='flex flex-col gap-3 mt-5'>
            <LiItem/>
            <LiItem/>
            <LiItem/>
            <LiItem/>
            <LiItem/>
        </ul>
      </div>
    </div>
  )
}

export default Receipts
