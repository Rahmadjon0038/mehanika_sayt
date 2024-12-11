import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Navbar componentasini import qilish
import "katex/dist/katex.min.css"; // KaTeX CSS import qilish
import image2_8 from '../../assets/bolim@2Image/image2_8.png'
const BirTomongaYonalganParallelKuchlar = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.4 – §. Bir tomonga qarab yo’nalgan o’zaro parallel ikkita kuchni qo’shish
                </h2>

                <p className="mb-4">
                    Jismning A va B nuqtalariga qo’yilgan, bir tomonga qarab parallel yo’nalgan <InlineMath math={`\\vec{F_1}`} />, <InlineMath math={`\\vec{F_2}`} /> kuchlar berilgan bo’lsin (2.8 – shakl).
                </p>

                <p className="mb-4">
                    A va B nuqtalarga ta’sir chiziqlari AB to’g’ri chiziqda yotuvchi ixtiyoriy <InlineMath math={`(\\vec{Q_1}, \\vec{Q_2}) \\sim 0`} /> nol sistemani qo'yamiz (<InlineMath math={`\\vec{Q_1} = -\\vec{Q_2}`} />). A nuqtaga <InlineMath math={`\\vec{Q_1}`} /> kuch, B nuqtaga esa <InlineMath math={`\\vec{Q_2}`} /> kuch qo’yiladi.
                </p>

                <p className="mb-4">
                    A nuqtadagi <InlineMath math={`\\vec{F_1}`} /> va <InlineMath math={`\\vec{Q_1}`} /> kuchlar kesishuvchi kuchlar bo’lganligi uchun <InlineMath math={`\\vec{R_1} = \\vec{F_1} + \\vec{Q_1}`} /> kuch bilan, B nuqtadagi <InlineMath math={`\\vec{F_2}`} /> va <InlineMath math={`\\vec{Q_2}`} /> kuchlarni <InlineMath math={`\\vec{R_2} = \\vec{F_2} + \\vec{Q_2}`} /> kuch bilan almashtiramiz. <InlineMath math={`\\vec{R_1}`} /> va <InlineMath math={`\\vec{R_2}`} /> kuchlarning ta’sir chiziqlarini kesishguncha davom ettiramiz. Kesishish nuqtasini O harfi bilan belgilaymiz va u nuqtaga <InlineMath math={`\\vec{R_1}`} /> va <InlineMath math={`\\vec{R_2}`} /> kuchlarni ko’chiramiz. Shu nuqtada <InlineMath math={`\\vec{R_1}`} /> kuchni <InlineMath math={`\\vec{F_1}`} /> va <InlineMath math={`\\vec{Q_1}`} /> tashkil etuvchilarga, <InlineMath math={`\\vec{R_2}`} /> kuchni esa <InlineMath math={`\\vec{F_2}`} />, <InlineMath math={`\\vec{Q_2}`} /> tashkil etuvchilarga ajratamiz. O nuqtaga qo’yilgan <InlineMath math={`\\vec{F_1}`} /> va <InlineMath math={`\\vec{F_2}`} /> kuchlarga hamda <InlineMath math={`(\\vec{Q_1}, \\vec{Q_2}) \\sim 0`} /> nol sistemaga ega bo’ldik.
                </p>

                <p className="mb-4">
                    Agar <InlineMath math={`(\\vec{Q_1}, \\vec{Q_2}) \\sim 0`} /> nol sistemani olib tashlasak, <InlineMath math={`\\vec{F_1}`} /> va <InlineMath math={`\\vec{F_2}`} />
                    <div className="text-center py-6">
                        <img
                            src={image2_8}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    kuchlar bir to’g’ri chiziq bo’ylab yo’nalganligi uchun ularni qo’shib, teng ta’sir etuvchini aniqlash mumkin.
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`R = F_1 + F_2 \\qquad (2.10)`} />
                </div>

                <p className="mb-4">
                    <InlineMath math={`\\vec{R}`} /> kuchni ta’sir chizig’i bo’ylab AB chiziq ustidagi C nuqtaga ko’chiramiz va uning qo’yilish nuqtasini shakldagi uchburchaklarning o’xshashligidan foydalanib aniqlaymiz.
                    <InlineMath math={`\\triangle OAC \\sim \\triangle OA_1C_1`} />, <InlineMath math={`\\triangle OCB \\sim \\triangle OC_2B_1`} /> ekanligidan foydalanib. Quyidagi tengliklarni yozish mumkin.
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\frac{AC}{OC} = \\frac{A_1C_1}{OC}, \\quad \\frac{BC}{OC} = \\frac{B_1C_2}{OC_2}`} />
                    <p className="mt-2">bulardan</p>
                    <BlockMath math={`\\frac{AC}{OC} = \\frac{Q_1}{F_1}, \\quad \\frac{BC}{OC} = \\frac{Q_2}{F_2}`} />
                </div>


                <p className="mb-4">
                    <InlineMath math={`AC \\cdot F_1 = OC \\cdot Q_1`} /> va <InlineMath math={`BC \\cdot F_2 = OC \\cdot Q_2`} /> munosabatlarga ega bo’lamiz.
                </p>

                <p className="mb-4">
                    Bu yerda <InlineMath math={`Q_1 = Q_2`} /> ekanligini hisobga olsak, yuqoridagi tengliklarning o’ng tomonlari o’zaro teng bo’ladi. U holda <InlineMath math={`AC \\cdot F_1 = BC \\cdot F_2`} /> va bundan
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\frac{AC}{BC} = \\frac{F_2}{F_1} \\qquad (2.11)`} />
                </div>

                <p className="mb-4">
                    tenglikni hosil qilamiz. Demak, (2.10) va (2.11) tenglamalardan quyidagi xulosa kelib chiqadi.
                </p>

                <p className="mb-4">
                    Bir tomonga qarab yo’nalgan ikkita parallel kuchning teng ta’sir etuvchisi berilgan kuchlarga parallel, uning miqdori berilgan kuchlar miqdorlarining algebraik yig’indisiga teng, qo’yilish nuqtasi berilgan kuchlar qo’yilgan nuqtalar orasidagi masofani kuchlar nisbatiga teskari mutanosib nisbatda qismlarga bo’ladi.
                </p>


            </div>
        </>
    );
};

export default BirTomongaYonalganParallelKuchlar;