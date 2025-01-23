import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image9_7 from '../../assets/bolim@9image/image9_7.png';
import image9_8 from '../../assets/bolim@9image/image9_8.png';
import image9_9 from '../../assets/bolim@9image/image9_9.png';

const Kinetik96 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    9.6-§. Mexanik sistema kinetik momentining o‘zgarishi haqidagi teorema. Masalalar
                </h2>

                <p className="mb-4">
                    Mexanik Sistema n ta moddiy nuqtadan tashkil topgan bo‘lib, ularning massalari [m1, m2, …, mn] bo‘lsin. Sistema nuqtalarini
                    bog‘lanishlardan ozod qilib, sistemaning ichki va tashqi kuchlar ta’siridagi harakatini
                    tekshiramiz (9.7-shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image9_7}
                        alt="Mexanik sistema"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Mexanik sistemaning ixtiyoriy <InlineMath math={"M_k"} /> nuqtasiga ta’sir qiluvchi{" "}
                    <InlineMath math={"\\vec{F_k}^{(e)}"} /> tashqi va <InlineMath math={"\\vec{F_k}^{(i)}"} /> ichki kuchlarni
                    qo‘yib, bu nuqta uchun kinetik momentning o‘zgarishi haqidagi teoremani yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={"\\frac{d}{dt} [\\vec{r_k} \\times m_k \\vec{v_k}] = \\vec{r_k} \\times \\vec{F_k}^{(e)} + \\vec{r_k} \\times \\vec{F_k}^{(i)}, \\quad k = 1, 2, …, n"}
                    />
                </div>

                <p className="mb-4">
                    Sistemaning barcha nuqtalari uchun shunday munosabatni yozib, ularni hadma-had qo‘shsak, sistema
                    uchun quyidagi ko‘rinishdagi formula hosil bo‘ladi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={"\\frac{d}{dt} \\sum_{k=1}^{n} [\\vec{r_k} \\times m_k \\vec{v_k}] = \\sum_{k=1}^{n} [\\vec{r_k} \\times \\vec{F_k}^{(e)}] + \\sum_{k=1}^{n} [\\vec{r_k} \\times \\vec{F_k}^{(i)}]"}
                    />
                </div>

                <p className="mb-4">
                    Ichki kuchlarning xossasidan <InlineMath math={"\\sum_{k=1}^{n} [\\vec{r_k} \\times \\vec{F_k}^{(i)}] = 0"} />{" "}
                    hamda sistema kinetik momentining ta’rifidan foydalanib, ya’ni{" "}
                    <InlineMath math={"\\sum_{k=1}^{n} [\\vec{r_k} \\times m_k \\vec{v_k}] = \\vec{K_O}"} /> ekanidan (9.17) tenglikni
                    quyidagicha yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{d\\vec{K_O}}{dt} = \\sum_{k=1}^{n} [\\vec{r_k} \\times \\vec{F_k}^{(e)}]"} />
                </div>

                <p className="mb-4">
                    Bu yerda tashqi kuchlardan O markazga nisbatan olingan momentlarning geometrik yig‘indisini bosh
                    moment deb, quyidagi belgilashni kiritsak,
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\vec{M_O}^{(e)} = \\sum_{k=1}^{n} [\\vec{r_k} \\times \\vec{F_k}^{(e)}]"} />
                </div>

                <p className="mb-4">sistema kinetik momentining o‘zgarishi haqidagi teoremaning ifodasi hosil bo‘ladi:</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{d\\vec{K_O}}{dt} = \\vec{M_O}^{(e)}"} />
                </div>

                <p className="mb-4 te">
                    (9.18) tenglamaning o‘qilishi: Biror markazga nisbatan hisoblangan sistema kinetik momentining vaqt
                    bo‘yicha hosilasi, sistemaga ta’sir qiluvchi tashqi kuchlardan mazkur markazga nisbatan olingan
                    momentlarning geometrik yig‘indisiga (bosh momentiga) teng.
                </p>

                <p className="mb-4">
                    (9.18) tenglamani momentlar teoremasi ham deyiladi. Tenglamani ikki tomonini qo‘zg‘almas Oxyz
                    koordinata o‘qlariga proeksiyalasak:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
                        \\frac{dK_{Ox}}{dt} = \\sum mom_x \\vec{F_k}^{(e)}, \\quad
                        \\frac{dK_{Oy}}{dt} = \\sum mom_y \\vec{F_k}^{(e)}, \\quad
                        \\frac{dK_{Oz}}{dt} = \\sum mom_z \\vec{F_k}^{(e)}
                    `}
                    />
                </div>

                <p className="mb-4">
                    skalyar tenglamalar sistemasiga ega bo‘lamiz. Bu tenglamalar ixtiyoriy qo‘zg‘almas koordinta
                    o‘qlariga nisbatan momentlar teoremasini ifodalaydi. Sistema kinetik momentining o‘zgarishi
                    haqidagi teorema qattiq jismning aylanma harakat dinamikasini o‘rganishga imkon beradi. Bu teorema
                    giroskoplar nazariyasida va zarbalar nazariyasida keng qo‘llanadi.
                </p>

                {/* 9.4-masala */}
                <h3 className="text-xl font-semibold mb-2 mt-6">9.4-masala</h3>
                <p className="mb-4">
                    Massasi m, radiusi r bo‘lgan bir jinsli disk massalar markazi C nuqtadan 0,5r masofadagi O
                    nuqtadan o‘tgan o‘q atrofida ω burchak tezligi bilan aylanadi. Disk tekisligiga perpendikulyar
                    o‘tgan Oz o‘qqa nisbatan diskning kinetik momenti hisoblansin (9.8-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image9_8}
                        alt="Disk aylanma harakati"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <h4 className="text-lg font-medium mb-2">Yechish</h4>
                <p className="mb-4">
                    Aylanish o‘qi bo‘ylab Oz koordinata o‘qini yo‘naltiramiz. (9.15) formulaga ko‘ra aylanish o‘qiga
                    nisbatan jismning kinetik momenti <InlineMath math={"K_{Oz} = I_{Oz} \\cdot \\omega"} />
                    formuladan aniqlanadi. Bu yerda <InlineMath math={"I_{Oz}"} /> jismning aylanish o‘qiga nisbatan
                    inersiya momenti, uni hisoblash uchun Gyugens-Shteyner teoremasidan foydalanamiz.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Oz} = I_c + m [0.5r]^2 = \\frac{mr^2}{2} + \\frac{mr^2}{4} = \\frac{3}{4} mr^2"} />
                </div>

                <p className="mb-4">
                    Demak, masala shartida topish talab etilgan aylanish o‘qiga nisbatan diskning kinetik momenti
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"K_{Oz} = I_{Oz} \\cdot \\omega = \\frac{3}{4} mr^2 \\omega"} />
                </div>

                {/* 9.5-masala */}
                <h3 className="text-xl font-semibold mb-2 mt-6">9.5-masala</h3>
                <p className="mb-4">
                    Massasi m1, radiusi r bo‘lgan g‘altak O markazidan o‘tgan o‘q atrofida aylanadi. Uning sirtiga
                    o‘ralgan arqonning uchiga bog‘langan m2 massali yuk qo‘zgalmas gorizontal tekislikda sirpanib
                    harakatlanadi. Arqonning og‘irligini hisobga olmasdan, g‘altakni bir jinsli doiraviy silindr deb
                    hisoblab, sistema kinetik momenti aylanish burchak tezlikka bog‘liq ravishda aniqlansin.
                    Aylanish o‘qi shakl tekisligiga perpendikulyar deb olinsin (9.9-shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image9_9}
                        alt="G'altak va yuk"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <h4 className="text-lg font-medium mb-2">Yechish</h4>
                <p className="mb-4">
                    Mexanik sistema g‘altak va yukdan tashkil topgan, shuning uchun sistema kinetik momenti ikkita
                    kinetik momentning yig‘indisidan iborat bo‘ladi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"K_{Oz} = K_{1z} + K_{2z}"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"K_{1z}"} /> g‘altakning qo‘zg‘almas Oz o‘qqa nisbatan kinetik momenti.{" "}
                    <InlineMath math={"K_{2z}"} /> yukning Oz o‘qqa nisbatan kinetik momenti. Formulaga ko‘ra{" "}
                    <InlineMath math={"K_{Oz} = I_z \\cdot \\omega"} />. Doiraviy silindrning aylanish o‘qiga nisbatan
                    inersiya momenti <InlineMath math={"I_z = \\frac{m_1 r^2}{2}"} /> bo‘lgani uchun{" "}
                    <InlineMath math={"K_{1z} = \\frac{m_1 r^2}{2} \\cdot \\omega"} />.
                </p>

                <p className="mb-4">
                    Yuk ilgarilanma harakatda bo‘lgani uchun uning kinetik momenti moddiy nuqta kinetik momenti kabi
                    aniqlanadi. <InlineMath math={"K_{2z} = m_2 v_2 \\cdot r"} />, bu yerda{" "}
                    <InlineMath math={"v_2 = r \\omega"} /> bo‘lgani uchun{" "}
                    <InlineMath math={"K_{2z} = m_2 r^2 \\cdot \\omega"} />.
                </p>

                <p className="mb-4">Demak, sistemaning izlanayotgan kinetik momenti</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"K_{Oz} = \\frac{m_1 r^2}{2} \\cdot \\omega + m_2 r^2 \\cdot \\omega = \\frac{[m_1 + 2m_2]r^2}{2} \\omega"} />
                </div>

                <p className="mb-4">ko‘rinishda ekan.</p>
            </div>
        </>
    );
};

export default Kinetik96; 