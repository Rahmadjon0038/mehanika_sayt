import React, { useEffect } from 'react'
import Home from '../components/home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { rootdata } from '../utils/RootData'
import ArrowButtons from '../components/home/ArrowButtons'
import TekislikdaKuchlarMuvozanati from '../components/kuchlarMuozanatiBolim3/KuchlarSistemasiningMuozanatshartlari'
import YoyilganKuchlarniHisobgaOlish from '../components/kuchlarMuozanatiBolim3/YoyilganKularXisobgaIkki'
import TekislikdaJoylashganKuchlarSystemasi from '../components/kuchlarMuozanatiBolim3/TekislikdaJoylashganKuchlar'
import StatikAniqVaStatikAniqmas from '../components/kuchlarMuozanatiBolim3/StatikAniqStatikAniqmas'
import IshqalanishniHisobgaOlgandaMuvozanat from '../components/kuchlarMuozanatiBolim3/IshqalanishHisobgaOlganda'

function RootControl() {
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        {rootdata?.map((item) => (
          <Route key={item.id} path={item.path} element={item.name} />
        ))}
      </Routes> */}
      {/* <TekislikdaKuchlarMuvozanati/> */}
      {/* <YoyilganKuchlarniHisobgaOlish/> */}
      {/* <TekislikdaJoylashganKuchlarSystemasi/> */}
      {/* <StatikAniqVaStatikAniqmas/> */}
      <IshqalanishniHisobgaOlgandaMuvozanat/>
    </div>
  )
}

export default RootControl