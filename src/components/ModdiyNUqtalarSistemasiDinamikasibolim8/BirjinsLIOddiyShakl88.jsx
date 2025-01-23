import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image8_14 from '../../assets/bolim@8image/image8_14.png';
import image8_15 from '../../assets/bolim@8image/image8_15.png';
import image8_16 from '../../assets/bolim@8image/image8_16.png';
import image8_17 from '../../assets/bolim@8image/image8_17.png';
import image8_18 from '../../assets/bolim@8image/image8_18.png';

import image8_a from '../../assets/bolim@8image/image8_a.png';
import image8_b from '../../assets/bolim@8image/image8_b.png';
import image8_c from '../../assets/bolim@8image/image8_c.png';
import image8_f from '../../assets/bolim@8image/image8_f.png';
import image8_g from '../../assets/bolim@8image/image8_g.png';
import image8_h from '../../assets/bolim@8image/image8_h.png';
import image8_k from '../../assets/bolim@8image/image8_k.png';
import image8_j from '../../assets/bolim@8image/image8_j.png';


const BirjinsLIOddiyShakl88 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    8.8 – §. Bir jinsli oddiy shaklli ba’zi jismlarning inersiya
                    momentlarini hisoblash. Masalalar
                </h2>

                <p className="mb-4">
                    Odatda murakkab shaklli jismlarni fikran oddiy shakllarga ajratish
                    mumkin bo‘ladi. Har bir qism uchun inersiya momentlarini
                    alohida-alohida hisoblab, ularning yig‘indisi sifatida butun jism
                    inersiya momentini aniqlash mumkin.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                    1. Bir jinsli ingichka sterjenning inersiya momenti
                </h3>

                <p className="mb-4">
                    Uzunligi <InlineMath math={"l"} />, massasi{" "}
                    <InlineMath math={"m"} /> bo‘lgan <InlineMath math={"AB"} /> sterjen
                    berilgan bo‘lsin. Sterjenning uchidan unga perpendikulyar o‘tgan
                    o‘qqa nisbatan inersiya momentini hisoblashni ko‘rib chiqamiz
                    (8.14-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_14}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    <InlineMath math={"A"} /> nuqtani koordinatalar boshi deb{" "}
                    <InlineMath math={"AB"} /> sterjen o‘qi bo‘ylab{" "}
                    <InlineMath math={"Ax"} /> o‘qni, unga perpendikulyar qilib{" "}
                    <InlineMath math={"Oz"} /> o‘qni o‘tkazamiz. Sterjenda olingan
                    elementar bo‘lakcha uzunligini{" "}
                    <InlineMath math={"dx"} />, bo‘lakchadan <InlineMath math={"A z"} />{" "}
                    o‘qigacha bo‘lgan masofani <InlineMath math={"h = x"} />, bo‘lakcha
                    massasini <InlineMath math={"dm = \\rho \\cdot dx"} /> deymiz. Bu yerda{" "}
                    <InlineMath math={"\\rho = \\frac{m}{l}"} /> sterjenning uzunlik
                    birligiga mos kelgan massasi, ya’ni zichligi.{" "}
                    <InlineMath math={"m"} /> sterjen massasi,{" "}
                    <InlineMath math={"l"} /> sterjen uzunligi. <br />
                    O‘qqa nisbatan inersiya momenti formulasiga ko‘ra{" "}
                    <InlineMath math={"I_{Az}"} /> uchun quyidagini yozamiz:
                </p>

                <div className="bg-gray-200 p-2 mb-4 overflow-x-auto flex justify-center">
                    <BlockMath
                        math={`
I_{Az} = \\int_{0}^{l} x^2 \\, dm = \\rho \\int_{0}^{l} x^2 \\, dx.
          `}
                    />
                </div>

                <p className="mb-4">
                    Berilganlardan foydalanib, integralni hisoblasak:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Az} = \\frac{m}{l}\\int_0^l x^2 dx = \\frac{m}{l} \\cdot \\frac{l^3}{3} = \\frac{m l^2}{3}"} />
                </div>

                <p className="mb-4">
                    Shunday qilib,
                    <InlineMath math={"I_{Az} = \\frac{m l^2}{3} \\quad (8.28)"} />{" "}
                    kelib chiqadi. Olingan natijadan foydalanib, Gyuygens-Shteyner
                    teoremasiga binoan massalar markazidan o‘tgan va{" "}
                    <InlineMath math={"Az"} /> o‘qiga parallel bo‘lgan{" "}
                    <InlineMath math={"Cz'"} /> o‘qqa nisbatan sterjenning inersiya
                    momentini hisoblash mumkin.
                </p>

                <p className="mb-4">
                    Teoremaga ko‘ra:{" "}
                    <InlineMath math={"I_{Az} = I_{Cz'} + m d^2"} /> deyish mumkin;&nbsp;
                    bu yerda <InlineMath math={"d^2 = \\left(\\frac{l}{2}\\right)^2 = \\frac{l^2}{4}"} />{" "}
                    bo‘lgani uchun
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
I_{Cz'} = I_{Az} - m d^2 
= \\frac{m l^2}{3} - m \\frac{l^2}{4} 
= m \\frac{l^2}{12}.
          `}
                    />
                </div>

                <p className="mb-4">
                    Demak, <InlineMath math={"l"} /> uzunlikdagi{" "}
                    <InlineMath math={"m"} /> massali bir jinsli sterjenning massalar
                    markazidan o‘tgan, sterjenga perpendikulyar o‘qqa nisbatan inersiya
                    momenti
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Cz'} = m \\frac{l^2}{12} \\quad (8.29)"} />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                    2. Bir jinsli ingichka doiraviy halqaning inersiya momenti
                </h3>

                <p className="mb-4">
                    Massasi <InlineMath math={"m"} />, radiusi{" "}
                    <InlineMath math={"R"} /> bo‘lgan bir jinsli halqaning markazidan
                    shakl tekisligiga perpendikulyar qilib o‘tkazilgan{" "}
                    <InlineMath math={"Cz"} /> o‘qqa nisbatan inersiya momentini
                    hisoblash.
                </p>

                <p className="mb-4">
                    Halqaning barcha nuqtalari <InlineMath math={"Cz"} /> o‘qidan bir xil{" "}
                    <InlineMath math={"h_k = R"} /> masofada joylashganligi uchun{" "}
                    <InlineMath math={"(8.10)"} /> formulaga ko‘ra quyidagicha yozish
                    mumkin:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Cz} = \\sum m_k h_k^2 = \\sum m_k R^2 = R^2\\sum m_k"} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math={"\\sum m_k = m"} /> halqaning massasi
                    ekanini hisobga olsak,
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Cz} = m R^2 \\quad (8.30)"} />
                </div>

                <p className="mb-4 te">
                    Massasi <InlineMath math={"m"} />, radiusi <InlineMath math={"R"} />{" "}
                    bo‘lgan bir jinsli yupqa qobiqli silindrning markaziy bo‘ylama o‘qiga
                    nisbatan inersiya momenti ham <InlineMath math={"(8.30)"} /> formula
                    bo‘yicha aniqlanadi.
                </p>

                <h3 className="text-xl font-semibold mb-4">3. Bir jinsli doiraviy disk</h3>

                <p className="mb-4">
                    Radiusi <InlineMath math={"R"} />, massasi{" "}
                    <InlineMath math={"m"} /> bo‘lgan doiraviy disk berilgan bo‘lsin
                    (8.16-shakl). Disk markazidan shakl tekisligiga perpendikulyar
                    o‘tgan <InlineMath math={"Cz"} /> o‘qqa nisbatan inersiya momenti
                    hisoblansin.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_16}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Buning uchun diskda radiuslari <InlineMath math={"r"} /> va{" "}
                    <InlineMath math={"r + d r"} /> ga teng bo‘lgan aylanalar orasidagi
                    ingichka doiraviy halqani ajratamiz. Halqaning massasi{" "}
                    <InlineMath math={"d m = 2\\pi r \\cdot \\lambda\\, dr"} /> ga teng. Bu
                    yerda <InlineMath math={"\\lambda = \\frac{m}{\\pi R^2}"} /> diskning
                    yuza birligidagi zichligini ifodalaydi.{" "}
                    <InlineMath math={"(22.2)"} /> formulaga asosan
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
I_{Cz} 
= \\int r^2 \\, dm 
= \\int_{0}^{R} r^2 \\bigl(2\\pi r \\lambda\\bigr) dr 
= 2\\pi \\lambda \\int_{0}^{R} r^3 \\, dr.
          `}
                    />
                </div>

                <p className="mb-4">
                    Integralni hisoblasak,{" "}
                    <InlineMath math={"2\\pi \\lambda \\frac{R^4}{4}"} /> hosil bo‘ladi.
                    Bu yerda <InlineMath math={"\\pi R^2 \\lambda = m"} /> ekanini
                    hisobga olsak,
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Cz} = \\frac{m R^2}{2}"} />
                </div>

                <p className="mb-4">
                    Berilgan diskning markaziga va markazidan disk tekisligiga
                    perpendikulyar o‘tgan o‘qqa nisbatan inersiya momentlari o‘zaro teng
                    bo‘ladi. Ya’ni,
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_C = I_{Cz} = \\frac{m R^2}{2} \\quad (8.31)"} />
                </div>

                <p className="mb-4">
                    Yuqoridagi natijalardan hamda{" "}
                    <InlineMath math={"2 I_C = I_{Cx} + I_{Cy} + I_{Cz}"} /> formuladan
                    foydalansak va <InlineMath math={"I_C = I_{Cz}"} /> ekanini hisobga
                    olsak, disk tekisligida yotuvchi <InlineMath math={"Cx"} /> va{" "}
                    <InlineMath math={"Cy"} /> o‘qlarga nisbatan diskning inersiya
                    momentini hisoblash mumkin:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Cx} = I_{Cy} = \\tfrac12 I_C = \\frac{m R^2}{4} \\quad (8.32)"} />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                    4. To‘g‘ri to‘rtburchak shaklidagi plastinka
                </h3>

                <p className="mb-4">
                    Massasi <InlineMath math={"m"} /> bo‘lgan o‘lchamlari shaklda
                    berilgan to‘g‘ri to‘rtburchak shaklidagi bir jinsli yupqa plastinkaning
                    koordinata o‘qlariga nisbatan inersiya momentlarini hisoblashni ko‘rib
                    chiqaylik (8.17-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_17}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    <InlineMath math={"O x"} /> va <InlineMath math={"O y"} /> koordinata
                    o‘qlarini shakldagidek plastinka tekisligida,{" "}
                    <InlineMath math={"O z"} /> o‘qini mazkur tekislikka perpendikulyar
                    ravishda o‘tkazamiz.
                </p>

                <p className="mb-4">
                    <InlineMath math={"O y"} /> o‘qqa nisbatan inersiya momentini hisoblash
                    uchun plastinkada <InlineMath math={"O y"} /> o‘qqa parallel, kengligi{" "}
                    <InlineMath math={"dx"} />, massasi{" "}
                    <InlineMath math={"d m = \\mu \\cdot h\\, dx"} /> bo‘lgan bo‘lakcha
                    ajratamiz. Bu yerda <InlineMath math={"\\mu"} /> – plastinkaning yuza
                    zichligi. Formulaga qo‘yib, <InlineMath math={"dx"} /> bo‘yicha{" "}
                    <InlineMath math={"0"} /> dan <InlineMath math={"l"} /> gacha
                    integrallaymiz:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
I_{Oy} 
= \\int_0^l x^2\\, d m 
= \\mu \\cdot h \\int_0^l x^2\\, d x .
          `}
                    />
                </div>

                <p className="mb-4">
                    Bu yerda, agar plastinka yuzasidagi zichligini shunday tanlasak:
                    <InlineMath math={"M = \\mu \\, (h\\cdot l) = m"} />, ya’ni{" "}
                    <InlineMath math={"\\mu = \\frac{m}{hl}"} />, integralni hesaplasak:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Oy} = \\mu h \\cdot \\frac{l^3}{3} = \\frac{m l^2}{3} \\quad (8.33)"} />
                </div>

                <p className="mb-4">
                    Xuddi shu usulda <InlineMath math={"O x"} /> o‘qqa nisbatan shaklda
                    berilgan plastinkaning inersiya momentini hisoblash mumkin:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Ox} = \\frac{m h^2}{3}, \\quad (8.34)"} />
                </div>

                <p className="mb-4">
                    bu yerda <InlineMath math={"O x"} /> o‘qi plastinkaning simmetriya
                    o‘qida yotganligi hisobga olindi. <InlineMath math={"O z"} /> o‘qiga
                    nisbatan inersiya momentini hisoblash uchun, avvalo, shtrixlangan
                    yuzaning <InlineMath math={"O'z'"} /> o‘qqa parallel bo‘lgan o‘qqa
                    nisbatan inersiya momentini hisoblaymiz, ya’ni{" "}
                    <InlineMath math={"I_{O'z'} = d m \\cdot \\tfrac{h^2}{12}"} />, buni{" "}
                    <InlineMath math={"(8.29)"} /> formulaga qo‘ygandan keyin
                    Gyugens–Shteyner teoremasidan foydalanamiz. Shtrixlangan elementar
                    yuza uchun:
                </p>

                <p className="mb-4">
                    <InlineMath math={"d m \\cdot \\tfrac{h^2}{12} + x^2\\, d m"} /> yozuv
                    o‘rinli bo‘ladi. Bu ifodani <InlineMath math={"0"} /> dan{" "}
                    <InlineMath math={"l"} /> gacha integrallab, quyidagini hosil qilamiz:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
I_{Oz} = \\int_0^l \\Bigl(\\frac{h^2}{12} + x^2\\Bigr) d m 
= \\underbrace{\\int_0^l \\frac{h^2}{12}\\, d m}_{\\mu h \\cdot ?} 
+ \\int_0^l x^2\\, d m .
          `}
                    />
                </div>

                <p className="mb-4">
                    Hisob-kitoblardan so‘ng:
                    <InlineMath
                        math={"I_{Oz} = m\\frac{h^2}{12} + \\frac{l^3}{3}\\mu h = \\frac{m h^2}{12} + \\dots"}
                    />{" "}
                    kabi natija chiqadi. Raqamli hisoblashda{" "}
                    <InlineMath
                        math={"m = \\mu (h \\cdot l), \\quad \\mu = \\frac{m}{h\\,l}"}
                    />{" "}
                    ekanini inobatga olish lozim. Yakunda, to‘liq hisobdan:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
I_{Oz} = \\frac{m h^2}{3} + \\frac{m l^2}{3}.
          `}
                    />
                </div>

                <p className="mb-4">
                    Demak, bir jinsli yupqa plastinkaning 8.17–shaklda ko‘rsatilgan
                    koordinata o‘qlariga nisbatan inersiya momentlari quyidagilarga teng
                    ekan:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
\\begin{aligned}
I_{Ox} &= \\frac{m h^2}{3},\\\\
I_{Oy} &= \\frac{m l^2}{3},\\\\
I_{Oz} &= \\frac{m h^2}{3} + \\frac{m l^2}{3}.
\\quad (8.34)
\\end{aligned}
          `}
                    />
                </div>

                <h3 className="text-xl font-semibold mb-4">8.1-masala</h3>
                <p className="mb-4">
                    Massasi <InlineMath math={"100\\,\\text{kg}"} />, radiusi{" "}
                    <InlineMath math={"10\\,\\text{sm}"} /> bo‘lgan valga, massasi{" "}
                    <InlineMath math={"1000\\,\\text{kg}"} />, radiusi{" "}
                    <InlineMath math={"1\\,\\text{m}"} /> bo‘lgan maxovik o‘rnatilgan
                    (8.18-shakl). Valni bir jinsli silindr deb, maxovikni bir jinsli halqa
                    deb hisoblab, <InlineMath math={"O z"} /> aylanish o‘qiga nisbatan
                    inersiya momenti hisoblansin.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_18}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    <strong>Yechish.</strong> Val bilan maxovikdan iborat sistemaning
                    inersiya momenti ularning alohida-alohida inersiya momentlari
                    yig‘indisiga teng:{" "}
                    <InlineMath math={"I_{Oz} = I_{Oz}^V + I_{Oz}^M"} />. Silindr va
                    maxovik (halqa)ning inersiya momentlarini aniqlash uchun{" "}
                    <InlineMath math={"(8.30)"} /> va <InlineMath math={"(8.31)"} />{" "}
                    formulalardan foydalanamiz.
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
I_{Oz}^V = m_V R_V^2 / 2, 
\\quad 
I_{Oz}^M = m_M R_M^2.
          `}
                    />
                </div>

                <p className="mb-4">
                    Bu ifodalardan foydalanib, hisoblashlarni amalga oshirsak, valgacha{" "}
                    <InlineMath math={"R_V = 0.1\\,\\text{m}"} />, maxovik uchun{" "}
                    <InlineMath math={"R_M = 1\\,\\text{m}"} />, massalar{" "}
                    <InlineMath math={"m_V = 100 \\text{kg},\\; m_M = 1000 \\text{kg}"} />{" "}
                    ekanini inobatga olamiz:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "I_{Oz} = 100 \\cdot \\frac{0.1^2}{2} + 1000 \\cdot (1^2) = 0.5 + 1000 = 1000.5\\,\\text{kg}\\cdot\\text{m}^2."
                        }
                    />
                </div>

                <p className="mb-4">Natija: <InlineMath math={"I_{Oz} = 1000{.}5\\,"} /> kg·m².</p>

                <h1 className="text-2xl font-bold text-center">
                    Ba’zi  bir  oddiy shaklli  bir  jinsli  jismlarning  shaklda ko‘rsatilgan  o‘qqa  nisbatan  inersiya  momentlari
                </h1>
                {/* 1. Uzunlikka ega to‘g‘ri sterjen */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                        1. Uzunlikka ega to‘g‘ri sterjen
                    </h3>
                    <div className="bg-gray-100 p-3 rounded mb-3  lg:flex items-center gap-6">
                        <div className="text-center  ">
                            <img
                                src={image8_a}
                                alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                                className="mx-auto rounded-lg shadow-lg w-[80%] sm:w-3/2 lg:w-1/2"
                            />
                        </div>
                        <div className="lg:mt-0 mt-6 text-center">
                            <p>
                                <InlineMath math={"l_x = \\tfrac{1}{12}\\,M\\,l^2"} />
                            </p>
                            <p>
                                <InlineMath math={"l_{x'} = \\tfrac{1}{3}\\,M\\,l^2"} />
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. To‘g‘ri to‘rtburchak shaklidagi plastinka */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                        2. To‘g‘ri to‘rtburchak shaklidagi plastinka
                    </h3>
                    <div className="bg-gray-100 p-3 rounded mb-3  lg:flex items-center gap-6 ">
                        <div className="text-center  ">
                            <img
                                src={image8_b}
                                alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                                className="mx-auto rounded-lg shadow-lg w-[80%] sm:w-3/2 lg:w-1/2"
                            />
                        </div>
                        <div  className="lg:mt-0 mt-6 text-center" >
                            <p>
                                <InlineMath math={"I_{C_x} = \\tfrac{1}{3}M\\,b^2"} />
                            </p>
                            <p>
                                <InlineMath math={"I_{C_y} = \\tfrac{1}{3}M\\,a^2"} />,
                            </p>
                            <p>
                                <InlineMath math={"I_{C_z} = \\tfrac{1}{3}M\\bigl(a^2 + b^2\\bigr)"} />
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. Ellipssimon yuzaga ega jism */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                        3. Ellipssimon yuzaga ega jism
                    </h3>
                    <div className="bg-gray-100 p-3 rounded mb-3  lg:flex items-center gap-6">
                        <div className="text-center  ">
                            <img
                                src={image8_c}
                                alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                                className="mx-auto rounded-lg shadow-lg w-[80%] sm:w-3/2 lg:w-1/2"
                            />
                        </div>
                        <div  className="lg:mt-0 mt-6 text-center">

                            <p>
                                <InlineMath math={"I_x = \\tfrac{1}{4}M\\,b^2"} />
                            </p>
                            <p>
                                <InlineMath math={"I_y = \\tfrac{1}{4}M\\,a^2"} />
                            </p>
                            <p>
                                <InlineMath math={"I_{C_z} = \\tfrac{1}{4}M\\bigl(a^2 + b^2\\bigr)"} />
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Parallelepiped shaklidagi jism */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                        4. Parallelepiped shaklidagi jism
                    </h3>
                    <div className="bg-gray-100 p-3 rounded mb-3  lg:flex items-center gap-6">
                        <div className="text-center  ">
                            <img
                                src={image8_f}
                                alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                                className="mx-auto rounded-lg shadow-lg w-[80%] sm:w-3/2 lg:w-1/2"
                            />
                        </div>
                        <div  className="lg:mt-0 mt-6 text-center">

                            <p>
                                <InlineMath math={"I_{C_x} = \\tfrac{1}{3}M\\bigl(b^2 + c^2\\bigr)"} />
                            </p>
                            <p>
                                <InlineMath math={"I_{C_y} = \\tfrac{1}{3}M\\bigl(a^2 + c^2\\bigr)"} />
                            </p>
                            <p>
                                <InlineMath math={"I_{C_z} = \\tfrac{1}{3}M\\bigl(a^2 + b^2\\bigr)"} />
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Asosi to‘g‘ri to‘rtburchak shaklidagi piramida */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                        5. Asosi to‘g‘ri to‘rtburchak shaklidagi piramida
                    </h3>
                    <div className="bg-gray-100 p-3 rounded mb-3  lg:flex items-center gap-6">
                        <div className="text-center  ">
                            <img
                                src={image8_g}
                                alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                                className="mx-auto rounded-lg shadow-lg w-[80%] sm:w-3/2 lg:w-1/2"
                            />
                        </div>
                        <div  className="lg:mt-0 mt-6 text-center">

                            <p>
                                <InlineMath math={"I_{C_x} = M \\cdot 2 \\cdot 0 \\cdot \\Bigl(\\tfrac{3}{4}H^2 + 4b^2\\Bigr)"} />
                            </p>
                            <p>
                                <InlineMath math={"I_{C_y} = M \\cdot 2 \\cdot 0 \\cdot \\Bigl(\\tfrac{3}{4}H^2 + 4a^2\\Bigr)"} />
                            </p>
                            <p>
                                <InlineMath math={"I_{C_z} = M\\cdot 5\\bigl(a^2 + b^2\\bigr)"} />
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. To‘g‘ri doiraviy silindr */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">6. To‘g‘ri doiraviy silindr</h3>
                    <div className="bg-gray-100 p-3 rounded mb-3  lg:flex items-center gap-6">
                        <div className="text-center  ">
                            <img
                                src={image8_h}
                                alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                                className="mx-auto rounded-lg shadow-lg w-[80%] sm:w-3/2 lg:w-1/2"
                            />
                        </div>
                        <div  className="lg:mt-0 mt-6 text-center">

                            <p>
                                <InlineMath math={"I_{C_x} = I_{C_y} = \\tfrac{1}{4}M\\Bigl(\\tfrac{1}{3}H^2 + R^2\\Bigr)"} />
                            </p>
                            <p>
                                <InlineMath math={"I_{C_z} = \\tfrac{1}{2}M\\,R^2"} />
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. Doiraviy to‘g‘ri konus */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">7. Doiraviy to‘g‘ri konus</h3>
                    <div className="bg-gray-100 p-3 rounded mb-3  lg:flex items-center gap-6">
                        <div className="text-center  ">
                            <img
                                src={image8_k}
                                alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                                className="mx-auto rounded-lg shadow-lg w-[80%] sm:w-3/2 lg:w-1/2"
                            />
                        </div>
                        <div  className="lg:mt-0 mt-6 text-center">

                            <p>
                                <InlineMath math={"I_{C_x} = I_{C_y} = \\tfrac{3}{20}M\\Bigl(\\tfrac{1}{4}H^2 + R^2\\Bigr)"} />
                            </p>
                            <p>
                                <InlineMath math={"I_{C_z} = \\tfrac{3}{10}M\\,R^2"} />
                            </p>
                        </div>
                    </div>
                </section>

                {/* 8. Elipsoid */}
                <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">8. Elipsoid</h3>
                    <div className="bg-gray-100 p-3 rounded mb-3  lg:flex items-center gap-6">
                        <div className="text-center  ">
                            <img
                                src={image8_j}
                                alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                                className="mx-auto rounded-lg shadow-lg w-[80%] sm:w-3/2 lg:w-1/2"
                            />
                        </div>
                        <div  className="lg:mt-0 mt-6 text-center">

                            <p>
                                <InlineMath math={"I_{C_x} = M\\cdot \\tfrac{5}{}\\bigl(b^2 + c^2\\bigr)"} />
                            </p>
                            <p>
                                <InlineMath math={"I_{C_y} = M\\cdot \\tfrac{5}{}\\bigl(a^2 + c^2\\bigr)"} />
                            </p>
                            <p>
                                <InlineMath math={"I_{C_z} = M\\cdot \\tfrac{5}{}\\bigl(a^2 + b^2\\bigr)"} />
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default BirjinsLIOddiyShakl88;

