import React, { useState } from 'react'
import bar from '../assets/codebar.png'
import BtnClose from './BtnClose'
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { codeBar } from '../redux/Slices'
import gif from '../assets/rotate.gif'
function CodeBar({func}) {
    const [show,setShow] = useState(true)
  return (
   <>
   <div className='fixed left-0 top-0 bg-gray-900 w-full h-full flex justify-center items-center
    z-[111]'>
      <img src={gif} alt="" className='w-[50px] absolute top-3 left-[50%] -translate-x-1/2' />
         <div className='bg-white rounded-lg absolute p-1 font-bold cursor-pointer right-2 top-2' onClick={()=>{
        setShow(false);
        func(false)
    }}>
      <AiOutlineClose size={20} color='black' />
    </div>
      <img src={bar} alt="" />
    </div>
   </>
  )
}

export default CodeBar
