import React, { useEffect } from 'react'
import Home from '../components/home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { rootdata } from '../utils/RootData'
import ArrowButtons from '../components/home/ArrowButtons'
import DumalanibishqalanishK38 from '../components/kuchlarMuozanatiBolim3/DumalanibIshqalanishK38'

function RootControl() {
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        {rootdata?.map((item) => (
          <Route key={item.id} path={item.path} element={item.name} />
        ))}
      </Routes>
      {/* <DumalanibishqalanishK38/> */}
    </div>
  )
}

export default RootControl