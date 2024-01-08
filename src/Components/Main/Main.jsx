import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Main = () => {
  return (
    <div className=' lg:grid grid-cols-headerGrid h-[100vh]'>
        <Sidebar/>
        <div className=' bg-red-500'>hi
        </div>
    </div>
  )
}

export default Main