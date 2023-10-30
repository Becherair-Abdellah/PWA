import React from 'react'
import align from '../assets/align.svg'
import {AiOutlineSearch} from 'react-icons/ai'
function Search() {
  return (
    <div className='flex items-center my-4'>
      <div className='relative w-full'>
        <AiOutlineSearch size={22} color='white' className='absolute top-[10px] left-[13px]' />
      <input type="text" placeholder='Search for receipt here' className='h-[41px] rounded-[5px] bg-transparent border-[#424242] border-[1.8px] text-[15px] w-full pl-[3rem] text-white outline-none' />
      </div>
      <button className='block bg-primary h-[41px] rounded-[5px] ml-1 px-2 font-bold'>
        <img src={align} alt="" />
      </button>
    </div>
  )
}

export default Search
