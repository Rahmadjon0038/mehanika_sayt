import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { bolimlar } from "../utils/sidebarData";
import { NavLink, useNavigate } from "react-router-dom";
import { mavzuData } from '../root/MavzuData'
import { FaWindowClose } from "react-icons/fa";
import { Button, Modal ,Input} from 'antd';
function Navbar() {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };




  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(1);
  const [searchOpen, setSearchOpen] = useState(false)
  const [search, setSearch] = useState("")

  const closeSerach = (e) => {
    if (e.target.className == "bg-black/20 backdrop-blur-sm absolute w-full min-h-[120vh] top-20 left-0 ") {
      setSearchOpen(false)
      setSearch('')
    }
  }
  const bolimclose = (e) => {
    if (e.target.className === "bg-black/20 backdrop-blur-sm absolute w-full min-h-[120vh] top-0 left-0 ") setOpen(false)

  }
  
  useEffect(() => {
    if (open) {
      setSearchOpen(false)
    }
    if (searchOpen) {
      setOpen(false)
    }
  }, [open, searchOpen])

  const navigate = useNavigate();
  return (
    <div className=" fixed max-w-[1940px]  border-b border-l  border-r w-full top-0 h-20 bg-white px-4 z-50 flex items-center justify-between">
      {searchOpen && (
        <div className="modal z-50 bg-slate-500 w-[90%] p-6 absolute left-[50%] translate-x-[-50%] rounded-lg text-white top-24">
          {mavzuData?.filter((i) =>
            i.mavzu.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )?.map((item) => (
            <div key={item.id} onClick={() => setSearchOpen(false)} className="hover:bg-blue-500 p-1 rounded-sm mt-1 cursor-pointer">
              <NavLink to={item.path} className="block text-xl">
                {item.id} - {item.mavzu}
              </NavLink>
            </div>
          ))}

          {mavzuData?.filter((i) =>
            i.mavzu.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          ).length === 0 && (
              <h1 className="text-xl text-center">Bunday mavzu mavjud emas</h1>
            )}
        </div>
      )}


      {searchOpen && <div onClick={closeSerach} className="bg-black/20 backdrop-blur-sm absolute w-full min-h-[120vh] top-20 left-0 "></div>}

      <h1 onClick={()=>navigate('/')} className="text-xl text-slate-700 cursor-pointer">Amaliy mexanika</h1>
   
      <div className="flex items-center max-md:hidden bg-gray-100 rounded-full px-4 py-2 w-full max-w-md mx-auto">
        <span className="text-gray-500 mr-2"></span>
        <input onClick={() => setSearchOpen(true)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Mavzu nomini kiriting"
          className="bg-transparent focus:outline-none w-full text-gray-700"
        />
      </div>



      <div className="flex gap-4 ml-4 text-gray-500 text-xl items-center">
        <p
          // onClick={() => setOpen(!open)}
          onClick={showModal}
          className="flex items-center gap-3 cursor-pointer">
          Bo'limlar <span className="text-slate-700"><FaAngleDown /></span>
        </p>
      </div>

      <Modal
        title="Mavzu tanlash"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // buttonlarni olib tashlash
        width="90%" // modalning kengligini o'zgartirish
        style={{ top: 20 }}
      >
        <div className="">
         

          <div className="grid gap-3">
            {bolimlar.map((item) => (
              <div key={item.id} className="mb-4">
                <h1
                  onClick={() => setSelected(item.id)}
                  className={`flex items-center cursor-pointer gap-3 px-3 py-2 rounded-sm ${selected === item.id ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white text-slate-900"}`}
                >
                  {item.name} {item.bobname}
                  <FaAngleDown />
                </h1>
              </div>
            ))}
          </div>

          <div className="overflow-auto mt-4">
            {selected ? (
              <div>
                {bolimlar
                  .find((bob) => bob.id === selected)
                  ?.children?.map((lesson) => (
                    <NavLink
                      onClick={handleCancel}
                      to={lesson.path}
                      key={lesson.id}
                      className="bg-slate-100 p-3 rounded-lg mb-2 shadow block"
                    >
                      <h1 className="text-slate-900">{lesson.name}</h1>
                      <p className="text-sm text-gray-700">{lesson.mavzu}</p>
                    </NavLink>
                  ))}
              </div>
            ) : (
              <p className="text-gray-600">Chapdan biror bob tanlang.</p>
            )}
          </div>
        </div>
      </Modal>



    </div >
  );
}

export default Navbar;
