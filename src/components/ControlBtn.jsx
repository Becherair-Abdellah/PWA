import React from 'react'

function ControlBtn({icon,title}) {
  return (
    <div className='text-center  text-white hover:text-primary duration-200 w-[53px] cursor-pointer'>
      <span className=' relative left-[14px]'>{icon}</span>
      <h2 className='text-sm'>{title}</h2>
    </div>
  )
}

export default ControlBtn
