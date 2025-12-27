import React, { useContext, useEffect, useState } from 'react'
import { BiExit, BiMessageAltDetail } from "react-icons/bi";
import { PanelContext } from '../Context/PanelContext';

const Message = () => {

    const [unReaded, setUnReaded] = useState(0)

    const { userData } = useContext(PanelContext)



    useEffect(() => {



        const count = userData.massages.filter(
            message => !message.isReaded).length

        setUnReaded(count)


    }, [userData])

    return (
        <div className=' relative'>
            <BiMessageAltDetail className=' text-[15px] sm:text-[30px]' />
            {unReaded > 0 && (
                <span className=' absolute w-[10px] h-[10px] text-[10px] rounded-full bottom-2 -left-1 bg-red-400  text-center sm:w-[18px] sm:h-[18px] sm:text-[18px] sm:-left-2'>
                    {unReaded}
                </span>)}
        </div>
    )
}

export default Message