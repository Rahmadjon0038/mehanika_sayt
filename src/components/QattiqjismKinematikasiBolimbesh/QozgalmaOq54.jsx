
import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image5_5 from '../../assets/bolim@5image/image5_5.png';
import image5_6 from '../../assets/bolim@5image/image5_6.png';

const QozgalmaOq54 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    5.4 – §. Qo'zg'almas o'q atrofida aylanma harakatdagi jism ixtiyoriy nuqtasining tezligi
                </h2>
                <p className="mb-4">
                    Qo'zg'almas o'q atrofida aylanma harakat qilayotgan qattiq jism ixtiyoriy nuqta
                    tezligini aniqlashni ko'rib chiqamiz. Qattiq jismning aylanma harakat qonuni{" "}
                    <InlineMath math={"\\varphi = \\varphi(t)"} /> ma'lum bo'lsin. Aylanma harakat
                    qilayotgan jismning aylanish o'qidan <InlineMath math={"h"} /> masofada yotgan
                    ixtiyoriy <InlineMath math={"M"} /> nuqtasini olaylik, uning trayektoriyasi
                    aylanadan iborat bo'ladi. Nuqtaning qandaydir <InlineMath math={"t"} /> vaqtida
                    bosib o'tgan yo'li <InlineMath math={"MM_1 = S = h\\varphi"} /> ga teng.{" "}
                    <InlineMath math={"M"} /> nuqta tezligini aniqlash uchun bosib o'tilgan yo'ldan
                    vaqt bo'yicha hosila olamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"v = \\frac{dS}{dt} = h \\frac{d\\varphi}{dt} = h\\omega \\implies v = h\\omega \\quad (5.15)"} />
                </div>

                <p className="mb-4 te">
                    Demak, qo'zg'almas o'q atrofida aylanma harakatdagi jism ixtiyoriy nuqtasining
                    tezligi, jism burchak tezligi bilan nuqtadan aylanish o'qigacha bo'lgan masofa
                    ko'paytmasiga teng.
                </p>

                <p className="mb-4">
                    Tezlik vektorining yo'nalishi shu nuqta trayektoriyasiga urinma ravishda harakat
                    yo'nalishida, o'q va nuqtadan o'tgan tekislikka perpendikulyar ravishda yo'naladi
                    (5.5-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image5_5}
                        alt="Qo'zg'almas o'q atrofida aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Ma'lum bir vaqtda jism burchak tezligi barcha nuqtalar uchun bir xil bo'lgani bois
                    jism nuqtalarining chiziqli tezliklari nuqtadan aylanish o'qigacha bo'lgan masofaga
                    mutanosib bo'lib, tezliklar maydonini 5.6-shakldagidek tasvirlash mumkin.
                </p>

                <p className="mb-4">
                    Aylanish o'qining A nuqtasini koordinata boshi qilib, Axyz koordinatalar
                    sistemasini o'tkazib A nuqtaga M nuqta radius vektorini o'rnatamiz.{" "}
                    <InlineMath math={"\\vec{\\omega}"} /> - burchak tezlikni Az o'qi bo'ylab
                    yo'naltiramiz, 5.4-shakldan foydalanib,
                </p>


                <p>
                    <InlineMath math={"\\vec{v} = \\vec{r} \\sin\\theta"} /> ko'rinishdagi ifodani
                    yozish mumkin, bu yerda{" "}
                    <InlineMath math={"r \\sin\\theta = h"} /> ekanligini e'tiborga olsak,{" "}
                    <InlineMath math={"|\\vec{v}| = \\omega h"} /> kelib chiqadi.
                </p>
                <p>
                    Yuqoridagi ifoda tezlik moduli ifodasi bilan bir xil bo'lganligi uchun quyidagi
                    tenglikni yozish mumkin:
                </p>
                <div className="bg-gray-200 p-2">
                    <BlockMath math={"\\vec{v} = \\vec{\\omega} \\times \\vec{r} \\quad (5.16)"} />
                </div>
                <div className="text-center py-6">
                    <img
                        src={image5_6}
                        alt="Qo'zg'almas o'q atrofida aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                Mazkur formula quyidagicha o'qiladi:
                <p className="mb-4 te">
                    Qo'zg'almas o'q atrofida aylanuvchi jism
                    ixtiyoriy nuqtasining chiziqli tezlik vektori jism burchak tezlik vektori bilan mazkur
                    nuqtaning aylanish o'qidagi ixtiyoriy A nuqtaga nisbatan radius vektorning vektor
                    ko'paytmasiga teng.
                </p>
                <p>
                    Tezlik vektori <InlineMath math={"\\vec{\\omega}"} /> va{" "}
                    <InlineMath math={"\\vec{r}"} /> vektorlar yotgan tekislikka perpendikulyar bo'lib
                    harakat yo'nalishida bo'ladi (5.4a – shakl).
                </p>
            </div>
        </>
    );
};

export default QozgalmaOq54;
