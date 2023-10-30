import React from 'react'
import ControlBtn from './ControlBtn'
import {MdReceipt} from 'react-icons/md'
import {ImStatsBars} from 'react-icons/im'
import {MdOutlinePayment} from 'react-icons/md'
import {MdOutlineLocalOffer} from 'react-icons/md'
import {FaRegUser} from 'react-icons/fa'
function NavButtons() {
  return (
    <div className='flex justify-between items-center mt-6  '>
        <span className='absolute left-0 bottom-[4.4rem] w-full h-[1px] bg-gray-700'></span>
      <ControlBtn title='Receipts' icon={<MdReceipt size={20}/>} />
      <ControlBtn title='Statistics' icon={<ImStatsBars size={20}/>} />
      <ControlBtn title='Cards' icon={<MdOutlinePayment size={20}/>} />
      <ControlBtn title='Offers' icon={<MdOutlineLocalOffer size={20}/>} />
      <ControlBtn title='Account' icon={<FaRegUser size={20}/>} />
    </div>
  )
}

export default NavButtons
