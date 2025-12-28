import React, { useEffect, useState } from 'react'

const SuccssesLogIn = () => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    
    setAnimate(true)
  }, [])

  return (
    <div
      className={`w-[400px] h-20 p-2 bg-white/30 absolute right-2 top-3 flex flex-col justify-center items-center rounded-md text-white transition-transform duration-300 ease-out ${animate ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <h4>ورود به پنل با موفقیت انجام شد</h4>
    </div>
  )
}

export default SuccssesLogIn
