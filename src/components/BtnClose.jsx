import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
function BtnClose({func}) {
  return (
    <div className='bg-white rounded-lg absolute p-1 font-bold cursor-pointer right-2 top-2' onClick={()=>{
        func(false);
    }}>
      <AiOutlineClose size={20} color='black' />
    </div>
  )
}

export default BtnClose
