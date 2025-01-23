import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image9_13 from "../../assets/bolim@9image/image9_13.png"; // Rasmni import qiling
import image9_14 from "../../assets/bolim@9image/image9_14.png"; // Rasmni import qiling
import image9_15 from "../../assets/bolim@9image/image9_15.png"; // Rasmni import qiling
import image9_16 from "../../assets/bolim@9image/image9_16.png"; // Rasmni import qiling

const MexanikSxema99 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    9.9-§. Mexanik sistema kinetik energiyasi. Masalalar
                </h2>

                <p className="mb-4">
                    Mexanik sistema n ta moddiy nuqtadan tashkil topgan bo‘lib, Mk moddiy nuqtasining massasi mk,
                    tezligi vk bo‘lsin.
                </p>

                <p className="mb-4 te">
                    Sistema tashkil qiluvchi moddiy nuqtalar kinetik energiyalarining yig‘indisiga teng bo‘lgan skalyar
                    kattalik mexanik sistema kinetik energiyasi deyiladi, quyidagicha belgilanadi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"T = \\sum \\frac{m_k v_k^2}{2}"} />
                </div>

                <p className="mb-4">
                    Kinetik energiya tushunchasi harakat miqdori va kinetik moment tushunchalaridan farqli skalyar va
                    har doim musbat kattalik hisoblanadi. Shuning uchun sistema nuqtalarining harakat yo‘nalishini
                    belgilab bermaydi. Agar ichki kuchlar ta’sirida sistema nuqtalari tezliklarining miqdori o‘zgarsa,
                    sistema kinetik energiyasi ham o‘zgaradi. Demak, kinetik energiyaning harakat miqdori va kinetik
                    momentlardan yana bir farqi uning o‘zgarishiga ichki kuchlar ham ta’sir qiladi.
                </p>

                <p className="mb-4 te">
                    Mexanik sistema bir nechta jismdan tashkil topgan bo‘lsa, sistema kinetik energiyasi mazkur jismlar
                    kinetik energiyalarining yig‘indisiga teng.
                </p>

                <p className="mb-4">
                    Qattiq jismlarning ba’zi bir harakatlarida kinetik energiyani hisoblashni ko‘rib chiqamiz.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-6">1. Qattiq jismning ilgarilanma harakati.</h3>
                <p className="mb-4">
                    Ta’rifga ko‘ra ilgarilanma harakatdagi jismning barcha nuqtalari miqdor va yo‘nalishi bir xil bo‘lgan
                    tezlikda harakatlanadi. Demak, jism ixtiyoriy nuqtasining tezligi massalar markazining tezligiga
                    teng deyish mumkin. <InlineMath math={"v_k = v_C"} /> Shuning uchun (9.29) tenglamani quyidagicha
                    yozish mumkin.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"T = \\sum \\frac{m_k v_C^2}{2} = \\frac{v_C^2}{2} \\sum m_k = \\frac{m \\cdot v_C^2}{2}"} />
                </div>

                <p className="mb-4">ya’ni</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"T_{il} = \\frac{m v_C^2}{2}"} />
                </div>

                <p className="mb-4 te">
                    Ilgarilanma harakatda jism kinetik energiyasi jism massasi bilan massalar markazi tezligi kvadrati
                    ko‘paytmasining yarmiga teng.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-6">2. Qattiq jismning qo‘zg‘almas o‘q atofida aylanma harakati.</h3>
                <p className="mb-4">
                    Aytaylik, jism Oz o‘q atrofida aylanayotgan bo‘lsin, jism ixtiyoriy Mk nuqtasining tezligi{" "}
                    <InlineMath math={"v_k = \\omega \\cdot h_k"} /> formuladan aniqlanadi. Bu yerda <InlineMath math={"\\omega"} />
                    jismning aylanish burchak tezligi, hk – nuqtadan aylanish o‘qigacha bo‘lgan qisqa masofa.
                    Ma’lumotlarni (9.29) formulaga qo‘ysak:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"T = \\sum \\frac{m_k (\\omega \\cdot h_k)^2}{2} = \\frac{\\omega^2}{2} \\sum m_k h_k^2"} />
                </div>

                <p className="mb-4">
                    hosil bo‘ladi. Bu yerda <InlineMath math={"\\sum m_k h_k^2 = I_{Oz}"} /> aylanish o‘qiga nisbatan
                    jismning inersiya momenti ekanini hisobga olsak,
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"T_{ayl} = \\frac{I_{Oz} \\cdot \\omega^2}{2}"} />
                </div>

                <p className="mb-4">kelib chiqadi.</p>

                <p className="mb-4 te">
                    Demak, qo‘zg‘almas o‘q atrofida aylanma harakatdagi jism kinetik energiyasi, aylanish o‘qiga
                    nisbatan jismning inersiya momenti bilan aylanish burchak tezligi kvadrati ko‘paytmasining yarmiga
                    teng.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-6">3. Qattiq jismning tekis parallel harakati.</h3>
                <p className="mb-4">
                    Qattiq jismning tekis parallel harakatini oniy tezliklar markazi P nuqtadan shakl tekisligiga
                    perpendikulyar qilib o‘tkazilgan o‘q atrofida oniy aylanma harakatidan iborat deb qarasak, jism
                    kinetik energiyasini (9.31) formulaga ko‘ra (9.13-shakl)
                </p>

                <div className="text-center py-6">
                    <img
                        src={image9_13}
                        alt="Qattiq jismning tekis parallel harakati"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"T_{t.p} = \\frac{I_P \\cdot \\omega^2}{2}"} />
                </div>

                <p className="mb-4">
                    ko‘rinishda yozish mumkin. Bu yerda IP jismning oniy aylanish o‘qiga nisbatan inersiya momenti, ω
                    jismning burchak tezligi. Oniy aylanish markazi doim o‘zgarib turganligi uchun IP ham o‘zgaruvchi
                    kattalik hisoblanadi. Shuning uchun (9.32) formuladan hamda Gyugens-Shteyner teoremasidan
                    foydalanib, ushbu harakatdagi kinetik energiyani o‘zgarmas kattalik IC massalar markaziga nisbatan
                    jismning inersiya momenti orqali keltirib chiqaramiz. Gyugens-Shtayner teoremasiga ko‘ra:
                </p>

                <div className="text-center py-6">
                    <img
                        src={image9_14}
                        alt="Gyugens-Shteyner teoremasi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    IP=IC+md2 deb yozish mumkim (9.14-shakl). Bu yerda P oniy aylanish markazi, C massalar markazi,
                    d=PC, vC= ω∙d= ω∙PC, ekanini hisobga olib, ularni (9.32) formulaga qo‘ysak:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"T = \\frac{Mv_C^2}{2} + \\frac{I_C \\cdot \\omega^2}{2}"} />
                </div>

                <p className="mb-4 te">Demak, tekis parallel harakatdagi jism kinetik energiyasi jismning massalar markazi bilan birgalikda ilgarilanma harakat kinetik energiyasi va massalar markazidan o‘tuvchi o‘q atrofida aylanma harakat kinetik energiyasining yig‘indisiga teng.</p>

                {/* 9.7-masala */}
                <h3 className="text-xl font-semibold mb-2 mt-6">9.7-masala</h3>
                <p className="mb-4">
                    Krivoship shatunli mexanizmda massasi m=1 kg bo‘lgan AB shatunning shaklda ko‘rsatilgan holati
                    uchun kinetik energiyasi hisoblansin. OA krivoshipning uzunligi 0,5 m bo‘lib, O nuqtadan shakl
                    tekisligiga perpendikulyar o‘tgan o‘q atrofida aylanish burchak tezligi ω=2 s-1.
                </p>

                <div className="text-center py-6">
                    <img
                        src={image9_15}
                        alt="Krivoship shatunli mexanizm"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <h4 className="text-lg font-medium mb-2">Yechish</h4>
                <p className="mb-4">
                    Shaklda ko‘rsatilgan holatda krivoshipga tegishli bo‘lgan A va B nuqtalarning tezliklari miqdor va
                    yo‘nalish jihatdan teng bo‘lib, shatun oniy ilgarilanma harakatda bo‘ladi va barcha nuqtalarining
                    tezliklari bir xil bo‘ladi (9.15-shakl).
                </p>

                <p className="mb-4"><InlineMath math={"v_C = v_B = v_A = \\omega \\cdot OA = 2 \\cdot 0.5 = 1 m/s"} />.</p>

                <p className="mb-4">Demak, (9.29) formuladan foydalansak, shatun kinetik energiyasi quyidagicha bo‘ladi:</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"T_{sh} = \\frac{m \\cdot v_C^2}{2} = \\frac{1 \\cdot 1^2}{2} = 0.5 kg \\cdot m^2/s^2"} />
                </div>

                {/* 9.8-masala */}
                <h3 className="text-xl font-semibold mb-2 mt-6">9.8-masala</h3>
                <p className="mb-4">
                    Massasi m=3 kg, uzunligi AB=1 m bo‘lgan bir jinsli sterjen OZ o‘qi atrofida φ=2∙t2 qonun bilan
                    aylanadi. Harakat boshlangandan t=1 s vaqt o‘tganda sterjenning kinetik energiyasini hisoblang
                    (9.16-shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image9_16}
                        alt="Sterjenning aylanma harakati"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <h4 className="text-lg font-medium mb-2">Yechish</h4>
                <p className="mb-4">
                    Sterjen Oz o‘q atrofida aylanma harakatda bo‘lgani uchun <InlineMath math={"T_{ayl} = \\frac{1}{2} I_{Oz} \\omega^2"} /> formuladan foydalanamiz.
                </p>

                <p className="mb-4">
                    Bir jinsli AB sterjen A uchidan o‘tgan va sterjenga perpendikulyar o‘q atrofida aylanadi ma’lumki,
                    sterjenning aylanish o‘qiga nisbatan inersiya momenti (22.28) formulaga ko‘ra: <InlineMath math={"I_{Oz} = \\frac{m \\cdot l^2}{3}"} />, bu yerda m sterjen massasi, l=AB sterjen uzunligi.
                </p>

                <p className="mb-4">Sterjenning burchak tezligi ω ni aniqlaymiz, <InlineMath math={"\\omega = \\dot{\\varphi} = (2t^2)' = 4t"} />.</p>

                <p className="mb-4">Berilganlar asosida sterjen kinetik energiyasini hisoblaymiz</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"T = \\frac{1}{2} \\frac{ml^2}{3} \\omega^2 = \\frac{1}{2} \\cdot \\frac{3 \\cdot 1^2}{3} \\cdot 4^2 = 8 kg \\cdot m/s^2"} />
                </div>
            </div>
        </>
    );
};

export default MexanikSxema99; 