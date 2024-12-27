import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image3_11 from '../../assets/bolim@3image/image3_11.png';

const StatikAniqVaStatikAniqmas = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    3.4 – §. Statik aniq va statik aniqmas masalalar
                </h2>

                <p className="mb-4">
                    Biz yuqoridagi mavzularda kuchlar sistemasining turiga qarab, ular uchun muvozanat tenglamalarining soni ham turlicha bo’lishini ko’rdik.
                </p>

                <p className="mb-4 te">
                    Berilgan masalada topish talab etilgan noma’lumlar soni muvozanat tenglamalari sonidan oshib ketmasa, bunday masalalar <span className="font-semibold">statik aniq masalalar</span> deyiladi.
                </p>

                <p className="mb-4 te">
                    Agar berilgan masalada aniqlash kerak bo’lgan noma’lumlar soni muvozanat tenglamalari sonidan ortiq bo’lsa, bunday masala <span className="font-semibold">statik aniqmas masala</span> deyiladi.
                </p>

                <p className="mb-4">
                    <InlineMath math={`3.11`} /> - shaklda statik aniqmas masalaning tekislikda joylashgan sodda ko’rinishi keltirilgan. Berilgan uzunlikka ega bo’lgan balka ikkita uchi bilan bir xil qo’zg’almas sharnirli <InlineMath math={`A`} /> va <InlineMath math={`B`} /> tayanchlarga o’rnatilgan.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image3_11}
                        alt="Statik aniqmas masala shakli"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Balkaga, qo’yilish nuqtasi, miqdori va yo’nalishi ma’lum <InlineMath math={`F_1, F_2`} /> kuchlar ta’sir qiladi. Balkaning tayanch reaksiya kuchlarini aniqlash talab etilsa, <InlineMath math={`A`} /> va <InlineMath math={`B`} /> nuqtalardagi qo’zg’almas sharnirli tayanchlarning har birida reaksiya kuchlarining ikkitadan tashkil etuvchilari bo’lib, jami <InlineMath math={`RA_x, RA_y, RB_x, RBy`} /> to’rtta noma’lum reaksiya kuchi bor, tekislikda ixtiyoriy joylashgan kuchlar sistemasi uchun muvozanat tenglamalari soni esa uchta. Demak, bu masala <span className="font-semibold">statik aniqmas masala</span> hisoblanadi.
                </p>

                <p className="mb-4">
                    Masalani statik aniq holga keltirish uchun qo’zg’almas tayanchlardan birortasini, qo’zg’aluvchi sharnirli tayanch bilan almashtirish kerak bo’ladi.
                </p>

                <p className="mb-4">
                    Masalan, <InlineMath math={`B`} /> nuqtada sharnirli qo’zg’aluvchi tayanch bor desak, <InlineMath math={`RB_x = 0`} /> bo’lib, noma’lumlar soni uchta bo’ladi va masala statik aniq holatga keladi.
                </p>


            </div>
        </>
    );
};

export default StatikAniqVaStatikAniqmas;