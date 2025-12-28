import React, { useContext, useState } from 'react'
import { PanelContext } from '../Context/PanelContext'
import { IoMdClose } from "react-icons/io";

const Messages = () => {

  const [showMessageModal, setShowMessageModal] = useState(false)
  const [messageData, setMessageData] = useState()

  const { userData } = useContext(PanelContext)

  const messageClickHandler = (data) => {
    console.log(data);

    setMessageData(data)

    setShowMessageModal(true)


  }

  console.log(userData.massages);


  return (

    <div className='w-full relative lg:w-[84%] min-h-[600px] shadow-xl bg-white/30 backdrop-blur-2xl dark:bg-white/10 dark:backdrop-blur-2xl dark:border dark:border-white/10 mt-4 rounded-bl-xl flex flex-col items-center  gap-2 text-right p-3 text-gray-900 dark:text-gray-100 '>
      <h3>لیست اخرین پیغام های دریافتی</h3>

      <ul className=' w-full flex flex-col gap-2'>
        {userData.massages.map(message => {
          const timeStamp = message.date
          const date = new Date(timeStamp)
          const year = date.getFullYear()
          const month = date.getMonth() + 1
          const day = date.getDate()
          return (
            <li
              onClick={() => messageClickHandler(message)}
              className=' flex w-[80%] mx-auto justify-between bg-black/10 dark:bg-white/10 cursor-pointer p-2 rounded-sm'>
              <span>{year}/{month}/{day}</span>
              <p>{message.title}</p>
            </li>)

        })}
      </ul>

      {/* Message Modal */}

      {showMessageModal && (
        <div className=' fixed top-0 right-0 left-0 bottom-0 bg-black/85 backdrop-blur-2xl flex  p-2 w-full justify-end '>
          <IoMdClose className='text-2xl text-white absolute right-2 cursor-pointer ' onClick={() => setShowMessageModal(false)} />

          <div className='w-[80%] mx-auto flex flex-col text-gray-100'>
            <span className='mt-10'> عنوان پیام :  {messageData.title}</span>
            <span className='mt-10'>   متن پیام : {messageData.text}  </span>
          </div>


        </div>)}


    </div>
  )
}

export default Messages