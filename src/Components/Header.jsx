import React, { useContext } from 'react'
import { PanelContext } from '../Context/PanelContext'
import { BiExit, BiMessageAltDetail } from "react-icons/bi";
import Message from './Message';
import Switch from './DarkModeSwitch';
import { IoMenu } from "react-icons/io5";


const Header = () => {

  const { userData ,setShowSideMenu} = useContext(PanelContext)

  console.log(userData);


  return (
    <header className=" w-full bg-white/80 backdrop-blur-xl dark:bg-white/10 dark:backdrop-blur-2xl p-3 rounded-t-lg text-gray-900 dark:text-gray-100 flex items-center justify-between ">

     <div className='flex justify-center items-center gap-2'>
       <BiExit className=' rotate-180 cursor-pointer hidden lg:inline-block text-[30px]' />
       <Switch styles={'hidden lg:inline-block mt-3'}/>
       <IoMenu  className='lg:hidden text-[20px] sm:text-[30px]' onClick={()=>setShowSideMenu(prev=>!prev)}/>
     </div>


      <div className='flex justify-center items-center gap-1'>

        <Message/>

        <h2 className=' border p-2 rounded-md text-[10px] sm:text-[18px]'>{userData.userData.name} عزیز خوش آمدی</h2>

      </div>
    </header>
  )
}

export default Header