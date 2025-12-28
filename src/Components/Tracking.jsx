import React, { useContext, useEffect, useRef, useState } from 'react'
import { PanelContext } from '../Context/PanelContext'
import L from 'leaflet'

const Tracking = () => {

  const [chosedDevice, setChosedDevice] = useState()

  const { userData } = useContext(PanelContext)


  const deviceChangeHandler = (e) => {

    const getDeviceData = userData.devices.find(device => device.id == e.target.value)

    setChosedDevice(getDeviceData)

  }

  const mapRef = useRef(null)
  const markerRef = useRef(null)

  useEffect(() => {

    if (mapRef.current) return

    mapRef.current = L.map('map', {
      center: [35.72369915543726, 51.38156218538186],
      zoom: 11,
      maxZoom: 16,
      minZoom: 8
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapRef.current)

  }, [])

  useEffect(() => {
    if (!chosedDevice || !mapRef.current) return

   
    if (markerRef.current) {
      markerRef.current.remove()
    }

   
    markerRef.current = L.marker(chosedDevice.lastLocation)
      .addTo(mapRef.current)

    mapRef.current.setView(chosedDevice.lastLocation, 14)

  }, [chosedDevice])

  return (
    <div className='w-full lg:w-[84%] min-h-[600px] shadow-xl bg-white/30 backdrop-blur-2xl dark:bg-white/10 dark:backdrop-blur-2xl dark:border dark:border-white/10 mt-4 rounded-bl-xl flex flex-col  gap-2 text-right p-3 text-gray-900 dark:text-gray-100 '>

      <div className='flex flex-row-reverse w-full h-12 items-end gap-3'>
        <label for="select">دستگاه مورد نظر را انتخاب کنید</label>

        <select id='select' className='text-black p-1 rounded-sm shadow-md' onChange={(e) => deviceChangeHandler(e)}>

          <option value="none">-</option>
          {userData.devices.map((device) => {
            return (
              <option className={`${device.status === 'Online' ? 'text-green-500' : 'text-red-400'}`} key={device.id} value={device.id}>
                {device.deviceName}
              </option>)
          })}

        </select>

      </div>

      {chosedDevice && (
        <>

          <div className='mt-4'>

            <h1 className='text-xl'>:اطلاعات دستگاه</h1>
            <div className='flex w-full justify-between mt-3'>
              <span> Device Name : {chosedDevice.deviceName}</span>
              <span>Status : {chosedDevice.status}</span>
              <span>Device Id : {chosedDevice.id}</span>
            </div>

          </div>



        </>
      )}

      <div className={`w-full ${chosedDevice ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>

        <div id='map' className={` w-full h-[400px]`}></div>

      </div>
    </div>
  )
}

export default Tracking