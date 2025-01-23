import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image8_6 from '../../assets/bolim@8image/image8_6.png';
import image8_7 from '../../assets/bolim@8image/image8_7.png';

const MassalarGemetriyasi84 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    8.4 – §. Massalar geometriyasi
                </h2>

                <p className="mb-4">
                    Jismlarning aylanma harakati dinamikasini o‘rganishda massaning
                    taqsimlanish xususiyatini bilish katta ahamiyatga ega. Jismlar
                    harakatiga massaning taqsimlanishi qanday ta’sir qilishi quyidagi
                    misolda yaqqol ko‘rinadi. Shaklda tasvirlangan,{" "}
                    <InlineMath math={"OZ"} /> o‘qi atrofida aylanma harakat qiluvchi{" "}
                    <InlineMath math={"DE"} /> sterjenga bir xil massali{" "}
                    <InlineMath math={"A"} /> va <InlineMath math={"B"} /> sharchalar
                    kiydirib qo‘yilgan (8.6-shakl).
                    <div className="text-center py-6">
                        <img
                            src={image8_6}
                            alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    Agar sharchalarni aylanish o`qidan{" "}
                    <InlineMath math={"h_1 = h_2 = h"} /> bir xil masofada uzoqlashtirsak,
                    ta’sir qiluvchi kuch o‘zgarmagan holda aylanma harakat sekinlashadi,
                    xuddi shu tariqa sharchalarni bir xil masofada tutgan holda aylanish
                    o‘qiga yaqinlashtirsak harakat tezlashadi. Demak, massaning aylanish
                    o‘qi atrofida qanday joylashishiga bog‘liq ravishda harakat o‘zgaradi.
                    Agar sharchalar aylanish o‘qidan har xil uzoqlikda tursa, ya’ni{" "}
                    <InlineMath math={"h_1 \\neq h_2"} /> bo‘lsa, aylanish o‘qiga qo‘shimcha
                    bosim kuchi tushadi.
                </p>

                <p className="mb-4">
                    Agar, sharchalarning massasini o‘zgartirmay, sharchalardan aylanish
                    o‘qigacha bo‘lgan masofani ham o‘zgartirmay 8.7-shakldagi ko‘rinishda
                    sterjenni burchak ostida o‘rnatsak, aylanish o‘qiga qo‘shimcha yonbosh
                    bosim kuchlari ta’sir qila boshlaydi.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_7}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Massa tarqalishining aylanuvchi jism harakatiga taʼsiri markazga,
                    o‘qqa, tekislikka nisbatan <em>inersiya momentlari</em> tushunchalari
                    bilan aniqlanadi.
                </p>
            </div>
        </>
    );
};

export default MassalarGemetriyasi84; 