import React from 'react'
import Navbar from '../Navbar'
import user from '../../assets/user.jpg'
function Home() {
    return (
        <div>
            <Navbar />
            <div className='p-4 bg-gray-100 mt-20'>
                <div className='bg-white rounded-lg'>

                    <div className='pt-28 py-12 lg:grid lg:grid-cols-2 lg:mx-32 items-center'>
                        <img src={user} alt="" className='w-[400px] h-[400px] rounded-full' />
                        <div className='text-center'>
                            <h1 className='text-4xl'>Namangan Muhandislik Qurulish instituti</h1>
                            <h1 className='text-2xl'>Amaliy mexanika fani</h1>
                            <h1 className='text-2xl'>Ustoz Shirin Jumaboyeva</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
