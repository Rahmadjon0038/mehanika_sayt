import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { bolimlar } from "../utils/sidebarData";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { mavzuData } from "../root/MavzuData";
import { Modal } from "antd";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { pathname } = useLocation();
  useEffect(() => {
    setIsModalOpen(false)
  }, [pathname])
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelected(null);
  };

  const closeSerach = (e) => {
    if (
      e.target.className ===
      "bg-black/20 backdrop-blur-sm absolute w-full min-h-[120vh] top-20 left-0 "
    ) {
      setSearchOpen(false);
      setSearch("");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="fixed max-w-[1940px] left-[50%] translate-x-[-50%] border-b w-full top-0 h-20 bg-white px-4 z-50 flex items-center justify-between ">
      {searchOpen && (
        <div className="modal z-50 bg-slate-500 w-[90%] p-6 absolute left-[50%] translate-x-[-50%] rounded-lg text-white top-24">
          {mavzuData
            ?.filter((i) =>
              i.mavzu.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
            ?.map((item) => (
              <div
                key={item.id}
                onClick={() => setSearchOpen(true)}
                className="hover:bg-blue-500 p-1 rounded-sm mt-1 cursor-pointer"
              >
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

      {searchOpen && (
        <div
          onClick={closeSerach}
          className="bg-black/20 backdrop-blur-sm absolute w-full min-h-[120vh] top-20 left-0 "
        ></div>
      )}

      <h1
        onClick={() => navigate("/")}
        className="text-xl text-slate-700 cursor-pointer"
      >
        Mexanika
      </h1>

      <div className="flex items-center max-md:hidden bg-gray-100 rounded-full px-4 py-2 w-full max-w-md mx-auto">
        <span className="text-gray-500 mr-2"></span>
        <input
          onClick={() => setSearchOpen(true)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Mavzu nomini kiriting"
          className="bg-transparent focus:outline-none w-full text-gray-700"
        />
      </div>

      <div className="flex gap-4 ml-4 text-gray-500 text-xl items-center">
        <p onClick={showModal} className="flex items-center gap-3 cursor-pointer">
          Bo'limlar <span className="text-slate-700"><FaAngleDown /></span>
        </p>
      </div>

      <Modal
        title="Mavzu tanlash"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width="90%"
        style={{ top: 20 }}
      >
        <div>
          <div className="grid gap-3">
            {bolimlar.map((item) => (
              <div key={item.id} className="mb-4">
                <h1
                  onClick={() => setSelected(item.id)}
                  className={`flex items-center cursor-pointer gap-3 px-3 py-2 rounded-sm ${selected === item.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-500 hover:text-white text-slate-900"
                    }`}
                >
                  {item.name} {item.bobname}
                  
                  <FaAngleDown />
                </h1>

                {selected === item.id && (
                  <div className="ml-6 mt-2">

                    {item.children?.map((lesson) => (
                      <NavLink
                        onClick={handleCancel}
                        to={lesson.path}
                        key={lesson.id}
                        className="block bg-slate-100 p-3 rounded-lg mb-2 shadow"
                      >
                        <h1 className="text-slate-900">{lesson.name}</h1>
                        <p className="text-sm text-gray-700">{lesson.mavzu}</p>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <hr />
        <h1 className="text-xxl text-[blue] mt-2">Bolimlar bo'yicha testlar</h1>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 text-left gap-2 mt-3">
          <button onClick={() => navigate('/quzibolim1')} className="text-white bg-blue-400 px6 py-2 ">1-bob test</button>
          <button onClick={() => navigate('/quzibolim2')} className="text-white bg-blue-400 px6 py-2 ">2-bob test</button>
          <button onClick={() => navigate('/quzibolim3')} className="text-white bg-blue-400 px6 py-2 ">3-bob test</button>
          <button onClick={() => navigate('/quzibolim4')} className="text-white bg-blue-400 px6 py-2 ">4-bob test</button>
          <button onClick={() => navigate('/quzibolim5')} className="text-white bg-blue-400 px6 py-2 ">5-bob test</button>
          <button onClick={() => navigate('/quzibolim6')} className="text-white bg-blue-400 px6 py-2 ">6-bob test</button>
          <button onClick={() => navigate('/quzibolim7')} className="text-white bg-blue-400 px6 py-2 ">7-bob test</button>
          <button onClick={() => navigate('/quzibolim8')} className="text-white bg-blue-400 px6 py-2 ">8-bob test</button>
          <button onClick={() => navigate('/quzibolim9')} className="text-white bg-blue-400 px6 py-2 ">9-bob test</button>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
