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


                                <button class="button">
                                    <div class="button-box">
                                        <span class="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span class="button-elem">
                                            <svg viewBox="0 0 46 40">
                                                <path
                                                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                </button>

                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
