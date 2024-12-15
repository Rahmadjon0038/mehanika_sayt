import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image2_24 from '../../assets/bolim@2Image/image2_24.png';

const FazodagiKuchlarMuvоzanati = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.13 – §. Fazoda ixtiyoriy joylashgan kuchlar sistemasining muvozanati
                </h2>

                <p className="mb-4">
                    Bu paragrafda siz statikaning ikkinchi masalasi, ya’ni fazoda ixtiyoriy joylashgan kuchlar sistemasining muvozanat shartlari bilan tanishasiz.
                </p>

                <p className="mb-4">
                    Fazoda ixtiyoriy joylashgan kuchlar sistemasini bitta bosh vektor <InlineMath math={`R`} /> va bitta bosh moment <InlineMath math={`M_0`} /> bilan almashtirish to'g'risidagi teoremadan foydalanib, muvozanat shartlari keltirib chiqariladi.
                </p>

                 <h3 className="text-xl font-semibold mb-2">Teorema (Geometrik shart)</h3>
                 <p className="mb-4 te">
                    Fazoda ixtiyoriy joylashgan kuchlar sistemasi ta’sirida qattiq jism muvozanatda bo’lishi uchun kuchlar sistemasining bosh vektori va bosh momenti alohida-alohida nolga teng bo’lishi zarur va yetarlidir.
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`R = 0, \\quad M_0 = 0 \\quad (2.48)`} />
                </div>

                <p className="mb-4">
                     Demak, (2.48) shart fazoda ixtiyoriy joylashgan kuchlar sistemasi muvozanatining zaruriy va yetarli sharti hisoblanadi. Hamda unga <p className="te"> fazoda ixtiyoriy joylashgan kuchlar sistemasi muvozanatining vektor ifodasi deyiladi.</p>
                </p>

                <div className="text-center py-6">
                    <img
                        src={image2_24}
                        alt="Kuchni keltirish"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Bosh vektor va bosh momentning koordinata o'qlardagi proyeksiyalari orqali yozsak, fazoda ixtiyoriy joylashgan kuchlar sistemasi muvozanat shartlarining analitik ifodasi kelib chiqadi:
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                   <BlockMath math={`
                        \\begin{cases}
                            R_x = \\sum F_{kx} = 0 \\\\
                            R_y = \\sum F_{ky} = 0 \\\\
                            R_z = \\sum F_{kz} = 0 \\\\
                            M_x = \\sum m_{Ox}(F_k) = 0 \\\\
                            M_y = \\sum m_{Oy}(F_k) = 0 \\\\
                            M_z = \\sum m_{Oz}(F_k) = 0
                        \\end{cases} \\quad (2.49)
                    `} />
                </div>

                <p className="mb-4">
                    (2.49) tenglamalar fazoda ixtiyoriy joylashgan kuchlar sistemasi muvozanatining analitik sharti deyiladi va quyidagicha o'qiladi:
                    <p className="te">
                    Fazoda ixtiyoriy joylashgan kuchlar sistemasi ta’sirida erkin jism muvozanatda bo’lishi uchun ularning koordinata o'qlardagi proyeksiyalarining algebraik yig'indilari hamda o'qlarga nisbatan olingan momentlarining algebraik yig'indilari alohida-alohida nolga teng bo'lishi zarur va yetarlidir.</p>
                </p>
            </div>
        </>
    );
};

export default FazodagiKuchlarMuvоzanati;