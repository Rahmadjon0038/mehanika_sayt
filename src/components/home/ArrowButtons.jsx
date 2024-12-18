import { Button, Pagination } from 'antd'
import React from 'react'
import { rootdata } from '../../utils/RootData';
import { useNavigate } from 'react-router-dom';
function ArrowButtons() {

  const nav = useNavigate()

  const onChange = (e) => {
    const num = rootdata.filter((v)=>e === v?.id)[0]
    localStorage.setItem("page",e)
    nav(num?.path || "/")
  }


  const nextLesson = () => {}
  const oldLesson = () => {}


  return (
    <Pagination style={{"width": "100%"}} responsive="1"  defaultCurrent={localStorage.getItem("page") || "1"} total={rootdata.length *10} onChange={onChange} />
  )
}

export default ArrowButtons