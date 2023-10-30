import React, { useState } from 'react'
import congrate from '../assets/congrate.svg'
import BtnClose from './BtnClose'
function Congrate({func}) {
  const [show,setShow] = useState(false);
  setTimeout(()=>{
    setShow(true);
  },3000)
  return (
    <>
    {show && <div className='fixed bg-gray-800 z-[11] text-white text-center w-[300px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-md p-3'>
      <BtnClose func={func}/>
      <img src={congrate} alt="" className='ml-[50%] -translate-x-1/2 w-1/2' />
      <h1 className='text-xl font-semibold my-3'>There's a fresh <br/> receipt in your inbox!</h1>
      <button className='p-3 bg-primary w-[95%] rounded-md font-bold text-xl my-4'>
        Check it
      </button>
      <br/>
      <span className='block'>Remind me later</span>
    </div>}
    </>
  )
}

export default Congrate
