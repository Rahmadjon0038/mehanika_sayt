import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image3_1 from '../../assets/bolim@3image/image3_1.png';


const TekislikdaKuchlarMuvozanati = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    3.1 – §. Tekislikda ixtiyoriy joylashgan kuchlar sistemasining muvozanati
                </h2>

                <p className="mb-4">
                    2.49 ko’rinishdagi fazoda ixtiyoriy joylashgan kuchlar sistemasining muvozanat tenglamalaridan foydalanib, tekislikda ixtiyoriy joylashgan kuchlar sistemasi uchun muvozanat tenglamalarini keltirib chiqaramiz. Agar, berilgan kuchlar sistemasi Oxy tekisligida yotsa, ular Oz o’qiga proyeksiya bermaydi, kuchlar Ox va Oy o’qlarini yoki kesib o’tadi, yoki o’qlarga parallel bo’ladi. Demak, mazkur o’qlarga nisbatan kuchlarning momentlari nolga teng bo’ladi (3.1 – shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image3_1}
                        alt="Kuch ta'sir chizig'i"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Yuqoridagi mulohazalarga ko’ra, hamda 2.49ni inobatga olib, tekislikda ixtiyoriy joylashgan kuchlar sistemasining muvozanat shartlari quyidagicha yoziladi:
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\begin{cases} F_{kx} = 0 \\\\ F_{ky} = 0 \\\\ m_o(F_k) = 0 \\end{cases} \\quad (3.1)`} />
                </div>

                <p className="mb-4">
                    va quyidagicha o’qiladi:
                </p>

                <p className="mb-4 te">
                    Tekislikda ixtiyoriy joylashgan kuchlar sistemasi ta’sirida erkin jism muvоzanatda bo’lishi uchun kuchlar sistemasining shu tekislikda olingan koordinata o’qlaridagi proyeksiyalarining algebraik yig’indilari, hamda shu tekislikdagi biror nuqtaga nisbatan olingan momentlarining algebraik yig’indisi alohida-alohida nolga teng bo’lishi zarur va yetarlidir.
                </p>

                {/* Agar qo'shimcha formula bloklari kerak bo'lsa */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`F_{kx} = 0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`F_{ky} = 0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`m_o(F_k) = 0`} />
                    </div>
                </div>

                <p className="mb-4">
                    {/* Qo'shimcha matn bo'lsa shu yerga qo'shishingiz mumkin */}
                </p>
            </div>
        </>
    );
};

export default TekislikdaKuchlarMuvozanati;