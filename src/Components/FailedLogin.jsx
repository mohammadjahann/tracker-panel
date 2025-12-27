import React from 'react'
import { MdClose } from "react-icons/md";

const FailedLogin = ({closeModal}) => {
  return (
    <div className=' w-[400px] h-20 p-2 bg-white/30 absolute right-2 top-3 flex flex-col justify-center items-center rounded-md text-white '>
        <h4>متاسفانه موفق به ورود نشدید</h4>
        <p>مجدد تلاش کنید</p>
        
        <MdClose fontSize={'20px'} fontWeight={'6'} onClick={closeModal} className=' cursor-pointer absolute right-2 top-2' />
    </div>
  )
}

export default FailedLogin