
import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Navbar componentasini import qilish
import "katex/dist/katex.min.css"; // KaTeX CSS import qilish
import image2_9 from '../../assets/bolim@2Image/image2_9.png'

const QaramaQarshiParallelKuchlar = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.5– §. Miqdorlari teng bo’lmagan, o’zaro parallel, qarama-qarshi tomonga yo’nalgan ikkita kuchni qo’shish
                </h2>

                <p className="mb-4">
                    A va B nuqtalarga qo’yilgan o’zaro parallel, qarama-qarshi tomonga yo’nalgan <InlineMath math={`\\vec{F_1}`} /> va <InlineMath math={`\\vec{F_2}`} /> kuchlar berilgan va <InlineMath math={`F_1 > F_2`} /> bo’lsin. Shu kuchlarning yig’indisi bo’lgan <InlineMath math={`\\vec{R}`} /> vektorning yo’nalishi, miqdori va qo’yilish nuqtasini aniqlash kerak.
                </p>

                <p className="mb-4">
                    Bu ikkita kuchni qo’shish uchun <InlineMath math={`F_1 > F_2`} /> ekanligini hisobga olib, yuqoridagi (2.10) va (2.11) formulalardan foydalanib, <InlineMath math={`\\vec{F_1}`} /> kuchni shu kuchga parallel va u bilan bir tomonga yo’nalgan ikkita <InlineMath math={`\\vec{F_2'}`} /> va <InlineMath math={`\\vec{R}`} /> kuchlarga ajratamiz. B nuqtaga qo’yilgan <InlineMath math={`\\vec{F_2'}`} /> kuchni <InlineMath math={`\\vec{F_2'} = -\\vec{F_2}`} /> munosabatni bajaradigan qilib tanlanadi (2.9 – shakl).

                    <div className="text-center py-6">
                        <img
                            src={image2_9}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>

                    Shunday qilib, <InlineMath math={`(\\vec{F_1}, \\vec{F_2}) \\sim (\\vec{R}, \\vec{F_2}, \\vec{F_2'})`} /> hosil bo’ladi, bu yerda <InlineMath math={`(\\vec{F_2}, \\vec{F_2'}) \\sim 0`} /> ekanligi hisobga olsak, uni tashlab yuborish mumkin. Demak, <InlineMath math={`(\\vec{F_1}, \\vec{F_2}) \\sim \\vec{R}`} /> kelib chiqadi. (2.10) formuladan foydalanib,
                </p>

                <p className="mb-4">
                    <InlineMath math={'F_1 = R + F_2'} /> deb yozish mumkin, yoki (<InlineMath math={`F_2' = -F_2`} />) ni inobatga olinsa,
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`R = F_1 - F_2 \\qquad (2.12)`} />
                </div>

                <p className="mb-4">
                    kelib chiqadi. (2.11) formuladan foydalanib, <InlineMath math={`\\vec{R}`} /> ning qo’yilish nuqtasini aniqlaymiz. Shakldan,
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\frac{R}{F_2'} = \\frac{AB}{AC} \\quad \\frac{F_1 - F_2}{F_2} = \\frac{AB}{AC}`} />
                </div>


                <p className="mb-4">
                    bundan
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\frac{F_1}{F_2} = \\frac{AB + AC}{AC} \\quad \\text{yoki} \\quad \\frac{F_1}{F_2} = \\frac{BC}{AC} \\qquad (2.13)`} />
                </div>

                <p className="mb-4">
                    (2.12) va (2.13) formulalardan quyidagi natija kelib chiqadi.
                </p>

                <p className="mb-4">
                    O’zaro parallel, qarama-qarshi yo’nalgan miqdorlari teng bo’lmagan ikki kuchning teng ta’sir etuvchisi shu kuchlarga parallel, miqdori kuchlarning kattasidan kichigini ayirilganiga teng. Qo’yilish nuqtasi kuchlar orasidagi kesmaning katta kuch qo’yilgan tomon davomida yotadi, shu nuqtadan kichik kuchgacha bo’lgan masofani katta kuchgacha bo’lgan masofaga nisbati katta kuchning kichik kuchga nisbatiga teng bo’ladi.
                </p>
            </div>
        </>
    );
};

export default QaramaQarshiParallelKuchlar;