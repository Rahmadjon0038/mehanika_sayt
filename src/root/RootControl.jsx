import React, { useEffect } from 'react'
import Home from '../components/home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { rootdata } from '../utils/RootData'
import OnBirKuchMarkazgaBerigan from '../components/FazodaIxtiyoriYBolimIkki/OnBirKuchMarkazgaBerigan'
import StatikaningAsosiyTeoremasi from '../components/FazodaIxtiyoriYBolimIkki/OnIkkiSatatistikaTeoremasi'
import FazodagiKuchlarMuvоzanati from '../components/FazodaIxtiyoriYBolimIkki/OnUchFazodaIxtoyoriyJoylashganKuchlr'

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
      {/* <OnBirKuchMarkazgaBerigan/> */}
      {/* <StatikaningAsosiyTeoremasi/> */}
      <FazodagiKuchlarMuvоzanati/>
    </div>
  )
}

export default RootControl