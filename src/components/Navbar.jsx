import React, { useState } from 'react'
import img from '../assets/logo.svg'
import {AiOutlineBarcode} from 'react-icons/ai'
import CodeBar from './CodeBar'
import { codeBar } from '../redux/Slices'
function Navbar() {
     
      // const dispatch = useDispatch();
       const [show,setShow] = useState(false)
      //  const show = useSelector((state)=>{
      //   return state.counter.state
      // });
  return (
    <div>
      {show && <CodeBar func={setShow}/>}
      <div className='flex justify-between items-center'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='px-3 py-1 border-white border rounded-md cursor-pointer' onClick={()=>{
          setShow(true);
          
        }}>
        <AiOutlineBarcode size={22} color='white' />
        </div>
      </div>
      <h1 className='text-[17px] text-white font-semibold my-4'>Welcom To <strong className='text-primary'>FTR Client</strong></h1>
      <p className='text-white text-[13px] font-semibold'>Let Store Owners Scan Your Barcode</p>
    </div>
  )
}

export default Navbar
