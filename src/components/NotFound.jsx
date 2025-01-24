import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-teal-400 text-white">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl mt-4">Ma'lumotlar topilmadi</p>
      <a
        href="/"
        className="mt-6 px-6 py-3 bg-white text-purple-500 font-medium rounded-md shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
      >
        Bosh sahifaga qaytish
      </a>
    </div>
  );
};

export default NotFound;
