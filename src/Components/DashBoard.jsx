import React, { useContext, useEffect, useRef } from 'react'
import { PanelContext } from '../Context/PanelContext'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const DashBoard = () => {

  const { userData } = useContext(PanelContext)

  // map setting 

  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) return

    mapRef.current = L.map('map', {
      center: [35.72369915543726, 51.38156218538186],
      zoom: 11,
      maxZoom: 14,
      minZoom: 8
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapRef.current)


    const onlineIcon = 'https://uploadkon.ir/uploads/f2fe28_25onlineicon.png'

    const oflineIcon = 'https://uploadkon.ir/uploads/167528_25oflineicon.png'

    userData.devices.map(device => {
      const url = device.status === 'Online' ? onlineIcon : oflineIcon

      const myIcon = L.icon({
        iconUrl: url,
        iconSize: [20, 35]
      })

      return L.marker(device.lastLocation, { icon: myIcon, title: device.deviceName }).addTo(mapRef.current)
    })

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [userData])


  return (
    <div className='w-full lg:w-[84%] min-h-[600px] shadow-xl bg-white/30 backdrop-blur-2xl dark:bg-white/10 dark:backdrop-blur-2xl dark:border dark:border-white/10 mt-4 rounded-bl-xl flex flex-col md:flex-row justify-between gap-2 text-right p-3 text-gray-900 dark:text-gray-100 mb-2 '>

      {/* map section */}
      <div className=' w-full md:w-[65%] h-[550px] flex flex-col justify-center items-center gap-2'>

        <h3>آخرین موقعیت دستگاه های شما </h3>

      <div id='map' className=' w-full h-[550px] '>
      </div>
      </div>


      {/* Messege and devices wrapper */}

      <div className=' w-full md:w-[30%] flex flex-col gap-2'>

        {/* devices */}
        <div className='w-full flex flex-col gap-3 border-b-2 p-2'>
          <h3 className=' text-xl'>وضعیت دستگاه های شما</h3>

          <div className='flex gap-5 flex-row-reverse border-b-[1px]'>
            <span>:تعداد کل دستگاه ها</span>
            <span>{userData.devices.length}</span>
          </div>
          <div className='flex gap-5 flex-row-reverse border-b-[1px]'>
            <span>:تعداد دستگاه های آنلاین</span>
            <span>{userData.devices.filter(device => device.status === 'Online').length}</span>
          </div>
          <div className='flex gap-5 flex-row-reverse'>
            <span>:تعداد دستگاه های آفلاین</span>
            <span>{userData.devices.filter(device => device.status === 'Ofline').length}</span>
          </div>
        </div>

        {/* messeges */}
        <div className='w-full flex flex-col gap-3  mt-3'>

          <h3 className='text-xl'>آخرین پیغام های شما</h3>

          <div className='flex flex-col w-full gap-5'>
            {userData.massages.sort((a, b) => b.date - a.date).map((message, index) => {
              const timestamp = message.date
              const date = new Date(timestamp)

              const year = date.getFullYear()
              const month = date.getMonth() + 1
              const day = date.getDate()


              return (
                <div key={index} className='w-full text-sm flex justify-between relative bg-black/10 dark:bg-white/10 p-3 rounded-sm'>
                  <span>{year}/{month}/{day}</span>
                  <span>{message.title}</span>
                  {!message.isReaded && <div className='w-2 h-2 rounded-full bg-red-400 absolute top-1 -right-[6px]'></div>}
                </div>
              )
            })}

          </div>

        </div>


      </div>



    </div>
  )
}

export default DashBoard