import React, { useContext } from 'react'
import { PanelContext } from '../Context/PanelContext'
import { NavLink } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
import Switch from './DarkModeSwitch';

const NavBar = () => {


  const { isMobile, showSideMenu ,setShowSideMenu} = useContext(PanelContext)

  const navLinkStyler = ({ isActive }) => {
    return isActive ? 'border-r-4 border-blue-400 p-2 text-gray-900 dark:text-gray-100' : 'p-1 text-gray-900 dark:text-gray-100'
  }

  const NavMenu = () => {
    return (
      <>
        <NavLink to={'/'} className={navLinkStyler}>
          داشبرد
        </NavLink>
        <NavLink to={'/tracking'} className={navLinkStyler}>
          ردیابی
        </NavLink>
        <NavLink to={'/massages'} className={navLinkStyler}>
          پیغام ها
        </NavLink>
      </>
    )
  }




  return (
    <>
      {!isMobile && (

        <div className='w-[15%] h-[600px] shadow-xl bg-white/30 backdrop-blur-2xl dark:bg-white/10 dark:backdrop-blur-2xl dark:border dark:border-white/10 mt-4 rounded-br-xl flex flex-col p-2 text-right gap-2'>
          {NavMenu()}
        </div>
      )}

      {/* sideMenu */}

      <div className={`fixed top-0 bottom-0 right-0 flex flex-col items-center justify-center bg-white/50 backdrop-blur-lg z-50 w-[50%] ${showSideMenu ? '' : 'translate-x-full'} transition-transform duration-500 ease-in-out gap-4 `}>
        <IoCloseSharp onClick={()=>{setShowSideMenu(false)}} />
        {NavMenu()}
        <Switch/>
      </div>

      {showSideMenu && <div className={`bg-black/30 absolute top-0 left-0 bottom-0 right-0 z-20`} onClick={()=>{setShowSideMenu(false)}}></div>}


    </>
  )
}

export default NavBar