import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import Navbar from '../Navbar';
import 'katex/dist/katex.min.css';
import image4_9 from '../../assets/bolim@4image/image4_9.png'
import image4_10 from '../../assets/bolim@4image/image4_10.png'
import image4_11 from '../../assets/bolim@4image/image4_11.png'


const NuqtaharakatiMasalalar44 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    4.4 – §. Nuqta harakatini o'rganishga doir masalalar
                </h2>

                <h3 className="text-xl font-semibold mb-4">4.1-masala: Aylanma harakat</h3>
                <p>
                    Radiusi <i>r</i> ga teng g'ildirak shakl tekisligiga perpendikulyar va <i>O</i> markazdan o'tuvchi o'q atrofida <InlineMath math={'φ = ωt = const'} /> qonun bo'yicha aylanadi. G'ildirak gardishidagi <i>M</i> nuqtaning Dekart koordinatalaridagi va vektor ko'rinishdagi harakat tenglamalari tuzilsin (4.9 – shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image4_9}
                        alt="3.18-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p>
                    <b>Yechish:</b> Aylanish o'qi turgan <i>O</i> nuqtani koordinata boshi qilib, o'qlarini shakldagidek yo'naltiramiz. <i>M</i> nuqtaning boshlang'ich holatini <i>M<sub>0</sub></i>, ixtiyoriy holatini <i>M</i> bilan belgilaymiz. <i>OM = r</i> radius vektor holatini <i>Ox</i> o'qdan soat millariga teskari yo'nalishda hisoblanadigan <i>φ</i> burchak yordamida aniqlaymiz. <i>M</i> nuqtaning koordinatalarini <i>x</i> va <i>y</i> bilan belgilaymiz. <i>M</i> nuqtaning harakat tenglamasini aniqlash uchun shu <i>x</i> va <i>y</i> larni vaqtning funksiyasi sifatida aniqlaymiz. Shakldan <InlineMath math={'x = rcosφ'} />, <InlineMath math={'y = rsinφ'} />, va <InlineMath math={'φ = ωt'} /> bo'lgani uchun:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`x = rcos(ωt), \\quad y = rsin(ωt)`} />
                </div>
                <p>
                    Vektor ko'rinishida: <InlineMath math={'r = xi + yj'} /> ekanligidan foydalanamiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={'r = rcos(ωt)i + rsin(ωt)j'} />
                </div>





                <h3 className="text-xl font-semibold mb-4">
                    4.2-masala: Trayektoriya (Ellips)
                </h3>
                <p className="mb-4">
                    <InlineMath math={"M"} /> nuqta{" "}
                    <InlineMath math={"x = 2\\sin(5t), \\ y = 3\\cos(5t)"} /> qonun
                    bo'yicha harakatlanadi (<InlineMath math={"x, y"} /> metrlarda,{" "}
                    <InlineMath math={"t"} /> sekundda o'lchanadi). Nuqtaning
                    trayektoriyasi hamda boshlang'ich paytdagi holati aniqlansin
                    (4.10-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image4_9}
                        alt="3.18-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    <b>Yechish:</b> Harakat koordinatalar usulida berilganda harakat
                    qonuni tenglamalaridan <InlineMath math={"t"} /> vaqtni chiqarib,
                    trayektoriya tenglamasini topiladi. Buning uchun berilgan harakat
                    tenglamasini quyidagicha yozamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{x}{2} = \\sin(5t), \\quad \\frac{y}{3} = \\cos(5t)"} />
                </div>

                <p className="mb-4">
                    Bu tenglamalarning ikkala tomonini kvadratga oshirib, tomonlardagi
                    hadlarni mos ravishda qo'shamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{x^2}{4} + \\frac{y^2}{9} = \\sin^2(5t) + \\cos^2(5t) = 1"} />
                </div>

                <p className="mb-4">
                    Bundan <InlineMath math={"\\frac{x^2}{4} + \\frac{y^2}{9} = 1"} /> ko'rinishidagi
                    trayektoriya tenglamasini hosil qilamiz. Demak, trayektoriya markazi
                    koordinatalar boshida joylashgan ellipsdan iborat. Bu ellipsning yarim
                    o'qlarining uzunliklari <InlineMath math={"a = 2"} /> va{" "}
                    <InlineMath math={"b = 3"} /> ekanligi ma'lum bo'ldi.
                </p>

                <p className="mb-4">
                    Nuqtaning boshlang'ich paytdagi holatini aniqlash uchun berilgan
                    harakat tenglamasiga <InlineMath math={"t = 0"} /> qiymatni qo'yamiz.
                    Natijada:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center">
                    <BlockMath math={"x_0 = 2\\sin(0) = 0, \\quad y_0 = 3\\cos(0) = 3"} />
                </div>

                <p className="mb-4">
                    Demak, boshlang'ich holatda <InlineMath math={"M_0(0, 3)"} /> nuqtada
                    turar ekan (4.10-shaklga qarang).
                </p>

                {/* 4.3-MASALA */}
                <h3 className="text-xl font-semibold mb-4">
                    4.3-masala: Trayektoriya (Parabola)
                </h3>
                <p className="mb-4">
                    Harakati <InlineMath math={"x = 3t, \\ y = 5t^2 - 2"} />{" "}
                    ko'rinishda berilgan nuqtaning <InlineMath math={"t = 0"} /> dagi
                    holati va trayektoriya bo'ylab harakat yo'nalishi aniqlansin
                    (4.11-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image4_11}
                        alt="3.18-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    <b>Yechish:</b> Birinchi tenglamadan{" "}
                    <InlineMath math={"t"} /> ni topib, ikkinchisiga qo'yamiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center">
                    <BlockMath math={"t = \\frac{x}{3}, \\quad y = 5\\left(\\frac{x}{3}\\right)^2 - 2"} />
                </div>
                <p className="mb-4">
                    Soddalashtirsak, trayektoriya tenglamasi quyidagicha hosil bo'ladi:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center">
                    <BlockMath math={"y = \\frac{5}{9}x^2 - 2"} />
                </div>
                <p className="mb-4">
                    Bundan trayektoriya paraboladan iboratligi aniqlandi.
                </p>

                <p className="mb-4">
                    Harakat boshlangan vaqtda nuqta qaerda joylashganligini aniqlash
                    uchun <InlineMath math={"t = 0"} /> ga qo'yamiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center">
                    <BlockMath math={"x_0 = 3(0) = 0, \\quad y_0 = 5(0)^2 - 2 = -2"} />
                </div>
                <p className="mb-4">
                    Demak, <InlineMath math={"M_0(0, -2)"} /> nuqtada joylashgan.
                </p>

                <p className="mb-4">
                    Harakat yo'nalishini bilish uchun <InlineMath math={"t = 1"} /> ni
                    qo'yamiz va yangi nuqta koordinatalarini hisoblaymiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center">
                    <BlockMath math={"x_1 = 3(1) = 3, \\quad y_1 = 5(1)^2 - 2 = 3"} />
                </div>
                <p className="mb-4">
                    Demak, harakat boshlangandan bir sekund vaqt o'tib{" "}
                    <InlineMath math={"M_1(3, 3)"} /> nuqtaga yetib keladi (4.11-shaklga
                    qarang).
                </p>

                <p className="mb-4">
                    Harakati berilgan nuqta <InlineMath math={"M_0(0, -2)"} /> nuqtadan
                    harakatni boshlab, parabolaning o'ng tarmog'i bo'ylab cheksizlik
                    tomon harakatni davom ettiradi.
                </p>


            </div>
        </>
    );
};

export default NuqtaharakatiMasalalar44;
