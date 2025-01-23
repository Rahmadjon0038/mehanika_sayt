import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image from "../../assets/bolim@9image/image9_7.png";

const QozgalmasOq97 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    9.7-§. Qo‘zg‘almas o‘q atrofida aylanma harakatdagi qattiq jismning harakat differensial
                    tenglamasi
                </h2>

                <p className="mb-4">
                    Qattiq jism Oz o‘qi atrofida <InlineMath math={"\\omega"} /> burchak tezligi bilan aylanma
                    harakatda bo‘lsin. Qattiq jismni bog‘lanishlardan ozod qilib, RA va RB reaksiya kuchlari hamda{" "}
                    <InlineMath math={"\\vec{F_1}^{(e)}, \\vec{F_2}^{(e)},…, \\vec{F_n}^{(e)}"} /> tashqi kuchlar
                    ta’siridagi harakatini o‘rganamiz. Jismda olingan ixtiyoriy mk massali nuqta Oz o‘qi atrofida hk
                    radiusli aylana yoyi bo‘ylab harakatlanadi, tezligi <InlineMath math={"v_k = \\omega h_k"} /> ga
                    teng bo‘ladi. 9.15 formulada qo‘zg‘almas o‘q atrofida aylanma harakatdagi jismning aylanish o‘qiga
                    nisbatan kinetik momentini hisoblash ko‘rilgan edi. Mazkur harakatga mexanik sistema kinetik
                    momentning o‘zgarishi haqidagi teoremaning Oz o‘qdagi proeksiyasini qo‘llaymiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{dK_{Oz}}{dt} = \\sum mom_z(\\vec{F_k}^{(e)})"} />
                </div>

                <p className="mb-4">
                    Qo‘zg‘almas o‘q atrofida aylanayotgan jismning aylanish o‘qiga nisbatan kinetik momenti{" "}
                    <InlineMath math={"K_{Oz} = I_{Oz} \\omega"} /> formuladan aniqlanar edi,{" "}
                    <InlineMath math={"I_{Oz}"} /> qattiq jismning Oz aylanish o‘qiga nisbatan o‘zgarmas inersiya
                    momenti, <InlineMath math={"\\omega"} /> aylanish burchak tezligi. Yuqoridagilarni hisobga
                    olib, differensial tenglamaning Oz o‘qdagi proeksiyasini
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Oz} \\frac{d\\omega}{dt} = \\sum mom_z(\\vec{F_k}^{(e)})"} />
                </div>

                <p className="mb-4">
                    ko‘rinishda yozish mumkin. (9.21) formuladagi burchak tezlikni aylanish burchagi orqali ifodalasak,{" "}
                    <InlineMath math={"\\frac{d\\omega}{dt} = \\ddot{\\varphi}"} />.
                </p>

                <div className="text-center py-6">
                    <img
                        src={image}
                        alt="Mexanik sistema"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Qo‘zgalmas o‘q atrofida aylanma harakatdagi qattiq jism harakat differensial tenglamasi hosil
                    bo‘ladi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Oz} \\ddot{\\varphi} = \\sum mom_z(\\vec{F_k}^{(e)})"} />
                </div>

                <p className="mb-4 te">
                    Qo‘zg‘almas o‘q atrofida aylanma harakatdagi qattiq jismning aylanish o‘qiga nisbatan inersiya
                    momenti bilan burchak tezlanishining ko‘paytmasi jismga ta’sir qiluvchi tashqi kuchlardan aylanish
                    o‘qiga nisbatan olingan momentga teng.
                </p>

                <p className="mb-4 te">
                    Odatda <InlineMath math={"M = \\sum mom_z(\\vec{F_k}^{(e)})"} /> belgilash qo‘llanib, bu kattalikka
                    aylantiruvchi moment deyiladi. Ilgarilanma harakatdagi jism massasi uning inertligini belgilasa,
                    aylanma harakatda esa aylanish o‘qiga nisbatan inersiya momenti jismning inertligini belgilaydi. A
                    va B bog‘lanishlardagi RA va RB reaksiya kuchlarining Oz o‘qqa nisbatan momentlari nolga teng
                    bo‘lgani hamda podshipniklardagi ishqalanish kuchlari hisobga olinmagani uchun noma’lum reaksiya
                    kuchlari (9.22) differensial tenglamada qatnashmaydi.
                </p>

                <p className="mb-4">
                    (9.22) qattiq jismning harakat differensial tenglamasi yordamida dinamikaning ikki asosiy
                    masalasini yechish mumkin, ya’ni aylanma harakat qonuni ma’lum bo‘lsa, aylantiruvchi momentni
                    topish, aylantiruvchi moment va boshlang‘ich shartlar berilgan bo‘lsa, jismning aylanma harakat
                    qonunini topish mumkin.
                </p>

                <p className="mb-4">
                    Dinamikaning ikkinchi asosiy masalasini yechishda (9.22) differensial tenglamani ikki marta
                    integrallashga to‘g‘ri keladi. Bunda nuqtaning to‘g‘ri chiziqli harakatida differensial tenglamani
                    integrallash usullaridan foydalanish mumkin.
                </p>

                <p className="mb-4 te">
                    Agar biror o‘qqa nisbatan tashqi kuchlarning momenti nolga teng bo‘lsa, mazkur o‘qqa nisbatan
                    jismning kinetik momenti o‘zgarmas bo‘ladi.
                </p>

                <p className="mb-4">
                    Aytaylik, <InlineMath math={"\\sum mom_z(\\vec{F_k}^{(e)}) = 0"} /> bo‘lsin u holda
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Oz} \\cdot \\omega = const"} />
                </div>

                <p className="mb-4">ko‘rinishdagi tenglikka ega bo‘lamiz.</p>

                <p className="mb-4">(24.6) tenglikni</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"K_{Oz} = I_{Oz} \\cdot \\omega = I_{Oz} \\omega_0 = const"} />
                </div>

                <p className="mb-4">deb yozish ham mumkin.</p>
            </div>
        </>
    );
};

export default QozgalmasOq97; 