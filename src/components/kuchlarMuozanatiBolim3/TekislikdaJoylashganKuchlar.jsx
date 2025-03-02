import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image3_5 from '../../assets/bolim@3image/image3_5.png';
import image3_6 from '../../assets/bolim@3image/image3_6.png';
import image3_7 from '../../assets/bolim@3image/image3_7.png';
import image3_8 from '../../assets/bolim@3image/image3_8.png';
import qr from '../../assets/qrcode/lesson34.png'

const TekislikdaKuchlarSystemasiMuvozanati = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    3.3 – §. Tekislikda joylashgan kuchlar sistemasining muvozanatiga doir masalalar
                </h2>
                <div className="text-center mb-6">
                    <a href="https://www.youtube.com/watch?v=W9pKTzSTnBQ">
                        <img

                            src={qr}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-48"
                        />
                    </a>
                </div>
                {/* a) Tekislikda parallel kuchlar */}
                <h3 className="text-xl font-semibold mb-2">
                    a) Tekislikda parallel kuchlar
                </h3>
                <p className="mb-4">
                    Tekislikda parallel kuchlar sistemasining muvozanatini tekshirish ko’pincha amaliy masalalarni yechishda katta ahamiyatga ega.
                </p>

                {/* 3.1–masala */}
                <h4 className="text-lg font-semibold mb-2">3.1–masala.</h4>
                <p className="mb-4">
                    Balkonni ushlab turadigan gorizontal balkaga intensivligi <InlineMath math={`q=2 \\text{ kN/m}`} /> bo’lgan tekis taqsimlangan yuk ta’sir etadi. Balkaning erkin uchiga ustundan <InlineMath math={`P=2 \\text{ kN}`} /> og’irlik tushadi. Ustun o’qidan devorgacha bo’lgan <InlineMath math={`l=1.5 \\text{ m}`} /> masofada balka biriktirilgan joydagi reaksiya kuchlarini topilsin <span className="italic">(3.5 – shakl)</span>.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image3_5}
                        alt="Balkon diagrammasi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <h4 className="text-lg font-semibold mb-2">Yechish.</h4>
                <p className="mb-4">
                    Balkani bog’lanishdan ozod qilib, aktiv va reaksiya kuchlarini ishchi sxemada ko’rsatamiz. B nuqtadagi qistirib mahkamlash reaksiya kuchlari <InlineMath math={`R_{Bx}, R_{By}`} /> va <InlineMath math={`M`} /> qarshilik ko’rsatuvchi momentdan iborat.
                </p>
                <p className="mb-4">
                    Tekis tarqalgan kuchni balka markaziga qo’yilgan <InlineMath math={`Q = 1.5q = 3 \\text{ kN}`} /> kuch bilan almashtiramiz.
                </p>
                <p className="mb-4">
                    Ustunning balkaga ta’sir kuchi <InlineMath math={`P`} /> berilgan. <InlineMath math={`O_x`} /> o’qi bo’ylab aktiv kuchlar yo’q bo’lgani uchun <InlineMath math={`R_{Bx}=0`} /> <span className="italic">(3.6 – shakl)</span>.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image3_6}
                        alt="Balkon diagrammasi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Ta’sir qiluvchi kuchlar sistemasi tekislikda parallel kuchlar sistemasidan iborat bo’lgani uchun quyidagi tenglamalardan foydalanamiz:
                </p>

                {/* Formula Bloklari */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`F_{ky}=0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`R_{By} - Q - P = 0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`R_{By} = Q + P = 5 \\text{ kN}`} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`\\text{mom} B F_k = 0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`M - 0.75 \\cdot Q - P \\cdot 1.5 = 0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`M = 0.75 \\cdot Q + P \\cdot 1.5 = 5.25 \\text{ kNm}`} />
                    </div>
                </div>

                <p className="mb-4">
                    <span className="font-semibold">Javob:</span> <InlineMath math={`R_{By}=5 \\text{ kN}, \\quad M=5.25 \\text{ kNm}`} />
                </p>

                {/* Masala b) */}
                <h3 className="text-xl font-semibold mb-2">
                    b) Tekislikda ixtiyoriy joylashgan kuchlar sistemasining masalalari
                </h3>

                {/* 3.2-masala */}
                <h4 className="text-lg font-semibold mb-2">3.2–masala.</h4>
                <p className="mb-4">
                    AB transmission valga og’irliligi <InlineMath math={`P_1=3 \\text{ kN}, \\quad P_2=5 \\text{ kN}, \\quad P_3=2 \\text{ kN}`} /> bo’lgan uchta shkiv o’rnatilgan. O’lchamlar shaklda ko’rsatilgan. A podshipnikning reaksiya <InlineMath math={`RA`} /> B podshipnik reaksiyasiga teng bo’lishi uchun, <InlineMath math={`P_2`} /> og’irlikdagi shkivni <InlineMath math={`B`} /> podshipnikdan qanday <InlineMath math={`x`} /> masofada o’rnatish kerak. Valning og’irligi hisobga olinmasin <span className="italic">(3.7–shakl)</span>.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image3_7}
                        alt="Balkon diagrammasi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <h4 className="text-lg font-semibold mb-2">Yechish.</h4>
                <p className="mb-4">
                    Shakldagidek ishchi sxema tuzib olamiz. Masala shartiga ko’ra <InlineMath math={`RA = RB`} /> bo’lishi talab qilingan, valga faqat parallel kuchlar sistemasi ta’sir qiladi. Demak, tekislikda parallel kuchlar sistemasi muvozanat tenglamalaridan foydalanamiz:
                </p>

                {/* Formula Bloklari */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`\\text{mom} A F_k = 0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`-95 P_1 - 300 - x P_2 - 205 P_3 + 300 RB = 0`} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`F_{ky}=0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`RA - P_1 - P_2 - P_3 + RB = 0`} />
                    </div>
                </div>

                <p className="mb-4">
                    Tuzilgan tenglamalardan foydalanib, noma’lumlar aniqlanadi:
                </p>
                <p className="mb-4">
                    <InlineMath math={`2 RA = P_1 + P_2 + P_3 = 3 + 5 + 2 = 10`} />, <InlineMath math={`RA = RB = 5 \\text{ kN}`} />
                </p>
                <p className="mb-4">
                    <InlineMath math={`-953 - 300 \\cdot 5 + x \\cdot 5 - 205 \\cdot 2 + 300 \\cdot 5 = 0`} />, <InlineMath math={`x = 139`} />
                </p>

                <p className="mb-4">
                    <span className="font-semibold">Javob:</span> <InlineMath math={`x = 139 \\text{ cm}, \\quad RA = RB = 5 \\text{ kN}`} />
                </p>

                {/* 3.3-Masala */}
                <h4 className="text-lg font-semibold mb-2">3.3–masala.</h4>
                <p className="mb-4">
                    Og’irligi <InlineMath math={`600 \\text{ N}`} />, uzunligi <InlineMath math={`4 \\text{ m}`} /> bo’lgan bir jinsli balka bir uchi bilan silliq tekislikka va oraliqdagi <InlineMath math={`B`} /> nuqtada balandligi <InlineMath math={`3 \\text{ m}`} /> bo’lgan ustunning uchiga tiralgan, balka vertikal bilan <InlineMath math={`30^\\circ`} /> burchak tashkil qiladi. Balkani tekislik bo’ylab tortilgan <InlineMath math={`CA`} /> arqon shu holatda ushlab turadi. Ishqalanishni hisobga olmay, arqonning tortish kuchi, ustunning reaksiyasi, hamda tekislikning <InlineMath math={`C`} /> nuqtadagi reaksiya kuchi aniqlansin <span className="italic">(3.8 – shakl)</span>.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image3_8}
                        alt="Balkon diagrammasi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <h4 className="text-lg font-semibold mb-2">Yechish.</h4>
                <p className="mb-4">
                    Balkaning o’rtasiga qo’yilgan og’irlik kuchi <InlineMath math={`P`} />, <InlineMath math={`C`} /> nuqtaga qo’yilgan arqonning taranglik kuchi <InlineMath math={`T`} /> hamda <InlineMath math={`C`} /> nuqtadagi <InlineMath math={`R_c`} /> tekislikning reaksiya kuchi, <InlineMath math={`B`} /> nuqtada ustunning reaksiya kuchi <InlineMath math={`RB`} /> ta’sirida balkaning muvozanatini tekshiramiz.
                </p>
                <p className="mb-4">
                    Bu kuchlar sistemasi tekislikda ixtiyoriy joylashgan kuchlar sistemasini tashkil qiladi. Muvozanat tenglamalarini tuzamiz <span className="italic">(3.9 – shakl)</span>:
                </p>

                {/* Formula Bloklari */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`F_{kx}=0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`RB \\cos 30^\\circ - T = 0`} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`F_{ky}=0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`RB \\sin 30^\\circ + RC - P = 0`} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`\\text{mom} C F_k = 0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`POC \\cdot 60^\\circ - RB \\cdot BC = 0`} />
                    </div>
                </div>

                <p className="mb-4">
                    Shakldan <InlineMath math={`OC = 2 \\text{ m}`} />, <InlineMath math={`ABBC = \\cos 30^\\circ`} />, <InlineMath math={`BC = AB \\cos 30^\\circ = 30.866 \\text{ m}`} /> lardan foydalanib, noma’lumlar aniqlanadi:
                </p>
                <p className="mb-4">
                    <InlineMath math={`RB = POC \\cdot 60^\\circ \\cdot BC = 173 \\text{ N}`} />
                </p>
                <p className="mb-4">
                    <InlineMath math={`RC = P - RB \\sin 30^\\circ = 600 - 173 \\times 12 = 513.5 \\text{ N}`} /> <span className="italic">;</span>
                </p>
                <p className="mb-4">
                    <InlineMath math={`T = RB \\cos 30^\\circ = 150 \\text{ N}`} /> <span className="italic">.</span>
                </p>

                {/* Masala 3.4 */}
                <h4 className="text-lg font-semibold mb-2">3.4–masala.</h4>
                <p className="mb-4">
                    Shakldagi balkaning ikkita nuqtasiga miqdorlari ma’lum kuchlar qo’yilgan, bir qismiga yoyilgan kuch ta'sir etadi. Yoyilgan kuchning intensivligi hamda o’lchamlar shaklda berilgan. Balkaning <InlineMath math={`A`} /> va <InlineMath math={`B`} /> tayanchlardagi reaksiya kuchlari aniqlansin <span className="italic">(3.10 – shakl)</span>.
                </p>

                <h4 className="text-lg font-semibold mb-2">Yechish.</h4>
                <p className="mb-4">
                    Yoyilgan kuchni <InlineMath math={`Q=2q=6 \\text{ kN}`} /> ga teng to’plangan kuch bilan almashtiramiz. Bu kuch yoyilgan qismning o’rtasiga qo’yilgan. Mazkur kuchni hamda topish talab etilgan noma’lum reaksiya <InlineMath math={`RB, RAx, RAy`} /> kuchlarning yo’nalishlarini shaklda ko’rsatamiz.
                </p>
                <p className="mb-4">
                    Tekislikda ixtiyoriy joylashgan kuchlar sistemasining quyidagi muvozanat tenglamalarini tuzamiz:
                </p>

                {/* Formula Bloklari */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`F_{kx}=0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`-RA_x - 6 \\cdot \\cos 45^\\circ = 0`} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`\\text{mom} A F_k = 0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`5 \\cdot 6 - RB \\cdot 4 + 8 \\cdot 3 + 6 \\cdot 2 \\cdot \\sin 45^\\circ = 0`} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`\\text{mom} B F_k = 0`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`1 \\cdot 6 - 8 \\cdot 1 - 6 \\cdot \\sin 45^\\circ \\cdot 2 + 4 RA_y = 0`} />
                    </div>
                </div>

                <p className="mb-4">
                    Demak, <InlineMath math={`RA_x = -6 \\cdot \\cos 45^\\circ = -4.2 \\text{ kN}`} />, <InlineMath math={`RA_y = 10.24 = 2.6 \\text{ kN}`} />, <InlineMath math={`RB = 15.6 \\text{ kN}`} />.
                </p>
                <p className="mb-4">
                    <span className="font-semibold">Javob:</span> <InlineMath math={`RA_x = -4.2 \\text{ kN}, \\quad RA_y = 2.6 \\text{ kN}, \\quad RB = 15.6 \\text{ kN}`} />
                </p>
                <p className="mb-4">
                    <InlineMath math={`RA_x`} /> ning qiymati oldidagi (<span className="text-red-500">-</span>) ishora bu vektor aslida shaklda ko’rsatilganiga qarama-qarshi yo’nalganligini bildiradi.
                </p>

                {/* Agar rasm kerak bo'lsa, quyidagi divni yoqing */}
                {/*
                <div className="text-center py-6">
                    <img
                        src={image3_4}
                        alt="Balkon diagrammasi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                */}
            </div>
        </>
    );
};

export default TekislikdaKuchlarSystemasiMuvozanati;