import React, { useEffect } from 'react'
import Home from '../components/home/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { rootdata } from '../utils/RootData'
import BirTomongaYonalganParallelKuchlar from '../components/FazodaIxtiyoriYBolimIkki/TortBirTomongaYonalganKuchlar'
import QaramaQarshiParallelKuchlar from '../components/FazodaIxtiyoriYBolimIkki/BeshMiqdorgaTengBolmagan'
import ParallelKuchlarMarkazi from '../components/FazodaIxtiyoriYBolimIkki/OltiParalelKuchalr'
import OgirlikMarkazi from '../components/FazodaIxtiyoriYBolimIkki/YettiOgirlikMarkazi'
import BirJinsliJismOgirlikMarkazi from '../components/FazodaIxtiyoriYBolimIkki/SakkizBirJIsnliJismOgirlikMarkaziAniqlash'

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
      {/* <BirTomongaYonalganParallelKuchlar/> */}
      {/* <QaramaQarshiParallelKuchlar/> */}
      {/* <ParallelKuchlarMarkazi/> */}
      {/* <OgirlikMarkazi/> */}
      <BirJinsliJismOgirlikMarkazi/>
    </div>
  )
}

export default RootControl