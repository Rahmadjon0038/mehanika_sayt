import React from 'react';
import Navbar from '../Navbar';
import user from '../../assets/user.png';

function Home() {
    return (
        <div className="max-w-[1940px] mx-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white min-h-screen">
            <Navbar />
            <div className="mt-20">
                <div className="homeimg h-[100vh] flex items-center justify-center">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 p-8 bg-white bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-xl">
                        <img
                            src={user}
                            alt="User"
                            className="w-44 h-44 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full mx-auto lg:mx-0 border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-105 "
                        />
                        <div className="text-center lg:text-left space-y-4 text-white">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                Namangan Muhandislik Qurilish Instituti
                            </h1>
                            <h2 className="text-xl md:text-3xl font-medium">
                                Amaliy mexanika fani
                            </h2>
                            <h3 className="text-lg md:text-2xl">
                                Ustoz Shirin Jumaboyeva
                            </h3>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
