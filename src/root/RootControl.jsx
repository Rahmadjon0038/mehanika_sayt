import React, { Fragment, useEffect, useState } from 'react'
import Home from '../components/home/Home'
import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import { rootdata } from '../utils/RootData'
import ArrowButtons from '../components/home/ArrowButtons'
import NotFound from '../components/NotFound'
import Navbar from '../components/Navbar'
import QuizBolim1 from '../components/StatikaBolim_bir/QuizBolim1'
import QuizBolim2 from '../components/FazodaIxtiyoriYBolimIkki/QuizBolim2'
import Quizbolim3 from '../components/kuchlarMuozanatiBolim3/Quizbolim3'
import Quizbolim4 from '../components/KinematikaBolim4/Quizbolim4'
import Quizbolim5 from '../components/QattiqjismKinematikasiBolimbesh/Quizbolim5'
import Quizbolim6 from '../components/NuqataningMurakkabXarakatiBob6/Quizbolim6'
import Quizbolim7 from '../components/ModdinNuqtadinamikasibob7/Quizbolim7'
import Quizbolim8 from '../components/ModdiyNUqtalarSistemasiDinamikasibolim8/Quizbolim8'
import Quizbolim9 from '../components/MehanikSistemabolim9/Quizbolim9'

function RootControl() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        {rootdata?.map((item) => (
          <Route key={item.id} path={item.path} element={item.name}>
          </Route>
        ))} */}
          <Route path='quzibolim1' element={<QuizBolim1/>} />
          <Route path='quzibolim2' element={<QuizBolim2/>} />
          <Route path='quzibolim3' element={<Quizbolim3/>} />
          <Route path='quzibolim4' element={<Quizbolim4/>} />
          <Route path='quzibolim5' element={<Quizbolim5/>} />
          <Route path='quzibolim6' element={<Quizbolim6/>} />
          <Route path='quzibolim7' element={<Quizbolim7/>} />
          <Route path='quzibolim8' element={<Quizbolim8/>} />
          <Route path='quzibolim9' element={<Quizbolim9/>} />
      </Routes>
      {pathname !== '/' && pathname!=='/quzibolim1' && pathname!=='/quzibolim2' && pathname !== '/quzibolim3' && pathname!=='/quzibolim4'  && pathname!=='/quzibolim5' && pathname!=='/quzibolim6' && pathname!=='/quzibolim7' && pathname!=='/quzibolim8' && pathname!=='/quzibolim9'  && < ArrowButtons pathname={pathname} />} 
      
    </div>

  )
}

export default RootControl