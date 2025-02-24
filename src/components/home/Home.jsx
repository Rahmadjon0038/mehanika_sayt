import React from 'react';
import Navbar from '../Navbar';
import user from '../../assets/user.png';

function Home() {
    return (
        <div className="max-w-[1940px] mx-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white min-h-screen">
            <Navbar />
            <div className="mt-20">
                <div className="homeimg h-[100vh] flex items-center justify-center">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 p-8 bg-white bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-xl ">
                        <img
                            src={user}
                            alt="User"
                            className="w-64 h-64 sm:w-72 sm:h-72 md:w-72 md:h-72 lg:w-[500px] lg:h-[500px] rounded-full mx-auto lg:mx-0 border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                        <div className="text-center space-y-4 text-white">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                Namangan Muhandislik Texnika Universiteti
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
                                Amaliy mexanika fani
                            </h2>
                            <h3 className="text-lg sm:text-xl md:text-2xl">
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
