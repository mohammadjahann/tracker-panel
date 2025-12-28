import React, { useContext, useState } from 'react'
import Card from './Card'
import { PanelContext } from '../Context/PanelContext'
import { useNavigate } from 'react-router-dom'
import FailedLogin from './FailedLogin'
import SuccssesLogIn from './SuccssesLogIn'

const LogIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [failedLogIn,setFailedLogIn]=useState(false)
  const [loading,setLoading] =useState(false)
  const [showSuccses,setShowSuccses] = useState(false)

  const navigate = useNavigate()

  const {  setUserData, setIsLoggedIn } = useContext(PanelContext)

  // Log in Click
  const logInHandler = async () => {
    setLoading(true)


  const res = await fetch('https://694c38b2da5ddabf00365d1f.mockapi.io/users')
  const data = await res.json()

  const foundedUser = data.find(user=>user.userData.email === email.toLowerCase() && user.userData.password === password.toLowerCase())

  if (foundedUser){
    setShowSuccses(true)
    setUserData(foundedUser)
    setIsLoggedIn(true)

    setTimeout(() => {

      navigate('/')
      
    }, 2000);
    
  } else {
    setFailedLogIn(true)
   
    
  }
   

  }

  const closeModal = ()=>{
    setFailedLogIn(false)
    setLoading(false)
     setEmail('')
    setPassword('')
  }

  return (
    <div className=' w-full h-screen flex justify-center items-center'>

      <Card styles={'w-[80%] sm:w-[60%] md:w-[50%] lg:w[40%] xl:w-[30%] flex flex-col justify-center items-center gap-4'}>

        <h1 className="text-gray-900 dark:text-gray-100 font-MTNIrancell-Bold">ورود به پنل کاربری</h1>

        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" className='w-[80%] h-11 rounded-lg bg-slate-200 text-right p-2 outline-none' placeholder='ایمیل' />

        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="text" className='w-[80%] h-11 rounded-lg bg-slate-200 text-right p-2 outline-none' placeholder='پسورد' />

        <button className='bg-slate-300 px-3 py-2 rounded-md' onClick={logInHandler} >
          ورود به حساب
        </button>

      </Card>

      {/*  */}

      {loading && (
        <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black/45 z-10'>
          {failedLogIn &&  <FailedLogin closeModal={closeModal}/>}
          {showSuccses && <SuccssesLogIn/>}
        </div>
      )}

    </div>
  )
}

export default LogIn