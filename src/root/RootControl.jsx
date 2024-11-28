import React, { useEffect } from 'react'
import Home from '../components/home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { rootdata } from '../utils/RootData'
// import KesishuvchiKuchlar from '../components/FazodaIxtiyoriYBolimIkki/BIkkiBirKes'
// import KesishuvchiKuchlarMuvozanati from '../components/FazodaIxtiyoriYBolimIkki/IkkiKesishuvchiKuchlarMuvozanati'
// import KesishuvchiKuchMasala from '../components/FazodaIxtiyoriYBolimIkki/UchKesishuvchiKuchMasala '
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

      {/* 2-bobb mavzulari */}
      {/* <KesishuvchiKuchlar/> */}
      {/* <KesishuvchiKuchlarMuvozanati/> */}
      {/* <KesishuvchiKuchMasala/> */}

    </div>
  )
}

export default RootControl