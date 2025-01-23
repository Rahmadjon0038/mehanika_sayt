import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image7_19 from '../../assets/bolim@7image/image7_19.png'; // Rasm yo'lini to'g'rilang

const Mahinalar712 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.12 -§. Mashinalarning mexanik foydali ish koeffitsiyenti
                </h2>

                <p className="mb-4">
                    Mashinalarning quvvati tushunchasini o‘rnatishda mashinaga ta’sir qiluvchi kuchlarni ko‘rib chiqish kerak. Bu kuchlarni asosan uch turga ajratish mumkin:
                </p>
                <ul className="list-disc pl-8 mb-4">
                    <li>Musbat ish bajaruvchi, ya’ni harakatlantiruvchi kuchlar. Masalan, ichki yonuv dvigatellardagi gaz yonishidan silindrdagi porshenga ko‘rsatiladigan bosim kuchi.</li>
                    <li>Manfiy, ish bajaruvchi, ya’ni harakatga qarshilik qiluvchi kuchlar. Qarshilik qiluvchi kuchlar ikki guruhga bo‘linadi: a) foydali qarshilik kuchlari – bu kuchlar mashina mo‘ljallangan ishni bajarishidan kelib chiqadi, masalan, transport vositasiga ortilgan yuk va shu kabilar. b) zararli qarshilik kuchlari, ya’ni salbiy qarshilik kuchlari, masalan, ishqlanish kuchlari, shamolning qarshilik kuchi va boshqalar.</li>
                    <li>Mashinadagi ba’zi bir qismlarning goh manfiy, goh musbat ish bajaruvchi og‘irlik kuchlari. Aslida mashinaning to‘la sikldagi harakatida bu kuchlarning bajargan ishi nolga teng bo‘ladi.</li>
                </ul>

                <p className="mb-4 te">
                    Mashinalarning barqarorlashgan harakatida uning kinetik energiyasi o‘zgarmaydi, mashinaga ta’sir qiluvchi harakatlantiruvchi va qarshilik kuchlarning bajargan ishlarining yig‘indisi nolga teng bo‘ladi.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"A_{h,k} - A_{f,q} - A_{z,q} = 0."} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math={"A_{h,k}"} />- harakatlantiruvchi kuchlarning bajargan ishi, <InlineMath math={"A_{f,q}"} />- foydali qarshilik kuchining bajargan ishi, <InlineMath math={"A_{z,q}"} />- zararli qarshilik kuchlarining bajargan ishi. Qarshilik kuchlarining bajargan ishlari manfiy ishora bilan olindi.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"A_{h,k} = A_{f,q} + A_{z,q}"} />
                </div>

                <p className="mb-4 te">
                    Demak, mashinaning barqarorlashgan harakatida harakatlantiruvchi kuchning bajargan ishi qarshilik kuchlarining bajargan ishiga miqdor jihatdan teng bo‘ladi. Ya’ni mashina sarf qilgan ish foydali va zararli kuchlarning bajargan ishiga teng.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"A_{sarf} = A_{f,q} + A_{z,q}"} />
                </div>

                <p className="mb-4">
                    Mashinalarning mexanik foydali ish koeffitsiyenti uning barqarorlashgan harakatida foydali qarshilik kuchlari bajargan ishning mashinaning harakati davomida sarf qilgan ishi nisbatiga teng.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\eta = \\frac{A_{f,q}}{A_{sarf}} < 1"} />
                </div>

                <p className="mb-4">
                    Agar mashinaning foydali quvvati <InlineMath math={"W_f"} /> va dvigatel quvvati <InlineMath math={"W_d"} /> ma’lum bo‘lsa, mashinalarning foydali ish koeffitsiyentini
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\eta = \\frac{W_f}{W_d}"} />
                </div>

                <p className="mb-4">
                    nisbatdan aniqlash mumkin.
                </p>
                <p className="mb-4">
                    Yuqorida aniqlangan formulalardan ko`rinadiki, quvvat berilgan tezlikka mos kerakli harakatni bajarishga sarf bo`ladi. Ya`ni:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"A = F \\cdot s \\cos \\alpha, \\quad W = F \\cdot \\vartheta \\cdot \\cos \\alpha,"} />
                </div>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">

                    <BlockMath math={"A = M_{ayl} \\cdot \\varphi, \\quad W = M_{ayl} \\cdot \\omega."} />
                </div>
                <p>
                    formulalar o`rinli, bu erda <InlineMath math={"\\alpha"} /> burchak kuch bilan harakat yo`nalishi orasidagi burchak, <InlineMath math={"M_{ayl}"} />-deb aylantiruvchi moment belgilangan.
                </p>
                <p className="mb-4">
                   <InlineMath math={"\\eta"} /> – mexanizm foydali ish koeffitsientini aniqlashga doir masala ko`ramiz.
                </p>

                <p className="mb-4 font-bold">
                    7.13 - Masala. Og`irligi 3 kN bo`lgan yukni 10 m balandlikka 2 sekundda ko`tarish uchun shakildagidek g`altakka o`rnatilgan motorning quvvati qancha bo`lishi aniqlansin. Harakat tekis, hamda g`altak mexanizmi uchun <InlineMath math={"\\eta=0,75"} /> deb hisoblansin (7.19 - shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image7_19}
                        alt="7.19-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    <span className="font-bold">Yechish:</span> Motor quvvati yukni 10 m balandlikka ko`tarishga hamda qo`shimcha qarshiliklarni yengishga sarf bo`ladi.
                </p>

                <p className="mb-4">
                    Foydali sarf bo`lgan quvvat <InlineMath math={"W = F \\cdot \\vartheta \\cdot \\cos \\alpha"} /> formuladan aniqlanadi.
                </p>

                <p className="mb-4">
                    Harakat to`g`ri chiziqli bo`lgani uchun
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\alpha = 0°, \\quad \\vartheta = \\frac{s}{t} = \\frac{10}{2} = 5 \\frac{m}{s}; \\quad 3 kN = 3000 N,"} />
                </div>

                <p className="mb-4">
                    bularni formulaga qo`yamiz.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"W_{foy} = 3000 \\cdot 5 = 15000 \\text{ vt}"} />
                </div>

                <p className="mb-4">
                    demak motorning foydali ishga sarf bo`lgan quvvatini aniqladik. To`la sarf bo`lgan quvvati
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"W_{to'la} = \\frac{W_{foy}}{\\eta} = \\frac{15000}{0.75} = 20000 \\text{ vt} = 20 \\text{ kvt}"} />
                </div>

                <p className="mb-4">
                    quvvat sarflanmoqda.
                </p>
            </div>
        </>
    );
};

export default Mahinalar712; 