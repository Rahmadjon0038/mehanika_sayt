import React from 'react';
import Navbar from '../Navbar';
import user from '../../assets/user.png';

function Home() {
    return (
        <div>
            <Navbar />
            <div className="p-4  bg-gray-100 mt-20">
                <div className="bg-white h-[100vh] rounded-lg shadow-lg max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 p-8">
                        <img 
                            src={user} 
                            alt="User" 
                            className="w-52 h-52 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full mx-auto lg:mx-0" 
                        />
                        <div className="text-center lg:text-left space-y-4">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                Namangan Muhandislik Qurilish Instituti
                            </h1>
                            <h1 className="text-xl md:text-2xl">
                                Amaliy mexanika fani
                            </h1>
                            <h1 className="text-xl md:text-2xl">
                                Ustoz Shirin Jumaboyeva
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
