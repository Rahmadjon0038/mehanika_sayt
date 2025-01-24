import React, { Fragment, useEffect, useState } from 'react'
import Home from '../components/home/Home'
import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import { rootdata } from '../utils/RootData'
import ArrowButtons from '../components/home/ArrowButtons'
import NotFound from '../components/NotFound'

function RootControl() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        {rootdata?.map((item) => (
          <Route key={item.id} path={item.path} element={item.name}>
          </Route>
        ))}
      </Routes>
      {pathname !== '/' && < ArrowButtons pathname={pathname} />}
    </div>

  )
}

export default RootControl