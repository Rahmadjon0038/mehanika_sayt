import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";

// Rasmlar importi
import image1_19 from '../../assets/image1_19.png';
import image1_20 from '../../assets/image1_20.png';
import image1_21 from '../../assets/image1_21.png';
import image1_22 from '../../assets/image1_22.png';
import image1_23 from '../../assets/image1_23.png';
import image1_24No from '../../assets/image1_24No.png';

function ForceMomentOnAxis() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center mt-20 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                    {/* Title */}
                    <h1 className="text-2xl font-bold text-center mb-6">
                        1.8 – §. O’qqa nisbatan kuch momenti
                    </h1>

                    {/* Theorem Section */}
                    <h2 className="text-lg font-bold mb-4">Teorema:</h2>
                    <p className="mb-4">
                        Kuch momentining biror o‘qdagi proyeksiyasi, kuchning shu o‘qqa perpendikulyar tekislikdagi proyeksiyasidan o‘q bilan tekislik kesishgan nuqtaga nisbatan olingan momentiga teng.
                    </p>

                    {/* Proof Section */}
                    <h2 className="text-lg font-bold mb-4">Isbot:</h2>
                    <p className="mb-4">
                        Berilgan kuchni biror masalan, <InlineMath>{'Oxy'}</InlineMath> tekislikka proyeksiyalab, mazkur proyeksiyadan
                        <InlineMath>{'O'}</InlineMath> nuqtaga nisbatan moment olamiz (1.19 – shakl).
                        Varinion teoremasidan foydalanib quyidagicha yozish mumkin:
                    </p>
                    <BlockMath>{'M_o(\\vec{F}_{xy}) = xF_y - yF_x'}</BlockMath>
                    <p className="mb-4">(1.18)</p>
                    <p className="mb-4">
                        (1.15) va (1.18) formulalarni solishtirib, quyidagicha xulosa qilish mumkin:
                    </p>
                    <BlockMath>{'M_{Oz}(\\vec{F}) = M_O(\\vec{F}_{xy})'}</BlockMath>
                    <p className="mb-4">
                        Buni <InlineMath>{'M_z(\\vec{F})'}</InlineMath>, ya’ni <InlineMath>{'\\vec{F}'}</InlineMath> kuchning
                        <InlineMath>{'Oz'}</InlineMath> o‘qqa nisbatan momenti deb belgilanadi va o‘qqa nisbatan kuch momenti deyiladi:
                    </p>
                    <BlockMath>{'M_{Oz}(\\vec{F}) = M_O(\\vec{F}_{xy}) = \\pm F_{xy} h^*'}</BlockMath>
                    <p className="mb-4">(1.19)</p>
                    <p className="mb-4">
                        (1.19) ifoda o‘qqa nisbatan kuch momentining analitik ifodasi bo‘lib,
                        <InlineMath>{'h^*'}</InlineMath> – o‘q bilan tekislik kesishgan nuqtadan kuchni tekislikdagi proyeksiyasining ta’sir chizig‘iga tushirilgan perpendikulyar (1.19 b–shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_19}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3"
                        />
                    </div>

                    {/* Force Moment Section */}
                    <h1 className="text-2xl font-bold mb-6">
                        O’qqa nisbatan kuch momenti
                    </h1>
                    <p className="mb-4">
                        O‘qqa nisbatan kuch momenti moment olinayotgan o‘q uchidan qaralganda, kuchning o‘qqa perpendikulyar tekislikdagi proyeksiyasi jismni
                        o‘q atrofida soat miliga teskari aylantirayotgandek ko‘rinsa musbat, aks holda manfiy deb qabul qilingan.
                    </p>
                    <p className="mb-4">
                        <InlineMath>{'(1.19)'}</InlineMath> formulaga ko‘ra kuchdan o‘qqa nisbatan moment olish qoidasini quyidagicha ifodalash mumkin:
                    </p>
                    <ol className="list-decimal list-inside mb-4">
                        <li>O‘qqa perpendikulyar tekislik o‘tkaziladi.</li>
                        <li>Shu tekislikka kuch proyeksiyalanadi.</li>
                        <li>
                            Kuchning tekislikdagi proyeksiyasini vektor kattalik deb hisoblab, o‘q bilan tekislik kesishgan nuqtani moment markazi qilib, proyeksiyadan
                            nuqtaga nisbatan olingan moment kabi moment olinadi.
                        </li>
                    </ol>
                    <p className="mb-4">
                        Quyidagi hollarda o‘qqa nisbatan kuch momenti nolga teng bo‘ladi:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <InlineMath>{'h^* = 0'}</InlineMath> bo‘lsa, ya’ni kuchning ta’sir chizig‘i moment olinayotgan o‘qni kesib o‘tsa;
                        </li>
                        <li>
                            <InlineMath>{'F_{xy} = 0'}</InlineMath> bo‘lsa, ya’ni kuch moment olinayotgan o‘qqa parallel bo‘lsa.
                        </li>
                    </ul>
                    <p className="mb-4">
                        Bu ikki holning mazmunini birlashtirib, quyidagicha bayon qilish mumkin:
                    </p>
                    <p className="mb-4">
                        Agar o’q va kuch bir tekislikda yotsa kuchning mazkur o’qqa nisbatan momenti nolga teng bo’ladi.
                    </p>



                    <h2 className="text-lg font-bold mb-4">
                        1.6-masala
                    </h2>

                    <p className="mb-4">
                        Oxy tekislikda yotuvchi <InlineMath>{'F = 420 N'}</InlineMath> kuch koordinatalari <InlineMath>{'x_A = 0.2 m, y_A = 0.3 m'}</InlineMath>, bo‘lgan A nuqtaga <InlineMath>{'α = 30°'}</InlineMath> burchak ostida qo‘yilgan. O nuqtaga nisbatan kuchning momenti aniqlansin (1.20 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_20}
                            alt="Kuch momenti"
                            className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3"
                        />
                    </div>

                    <h2 className="text-lg font-bold mb-4">Yechish:</h2>
                    <p className="mb-4">
                        Varinion teoremasidan foydalanamiz, kuch tekislikda yotgani uchun (1.20) ning skalyar yig‘indisidan foydalanamiz:
                    </p>


                    <BlockMath>
                        {'mom_o(F) = mom_o(F_x) + mom_o(F_y)'}
                    </BlockMath>
                    <p className="mb-4">
                        <InlineMath>{'mom_o(F_x) = F  cos(30°)  0.3 = 108.36 Nm'}</InlineMath>
                    </p>
                    <p className="mb-4">
                        <InlineMath>{'mom_o(F_y) = F  sin(30°)  0.2 = 42 Nm'}</InlineMath>
                    </p>
                    <p className="mb-4">
                        Demak, <InlineMath>{'mom_o(F) = 150.56 Nm'}</InlineMath>.
                    </p>



                    <h2 className="text-lg font-bold mb-4">
                        1.7-masala
                    </h2>





                    <p className="mb-4">
                        Agar traktor og‘irlik markazining koordinatalari <InlineMath>{'h = 731 mm, a = 813 mm'}</InlineMath> bo‘lsa, Traktor A nuqta atrofida ag‘darilib ketmaydigan bo‘ylama ustuvorligini qanoatlantiruvchi <InlineMath>{'α'}</InlineMath> burchak aniqlansin (1.21 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_21}
                            alt="Kuch momenti"
                            className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3"
                        />
                    </div>

                    <h2 className="text-lg font-bold mb-4">Yechish:</h2>
                    <p className="mb-4">
                        Traktor A nuqta atrofida ag‘darilishi oldidan uning og‘irlik kuchi <InlineMath>{'G'}</InlineMath> ning A nuqtaga nisbatan momenti, hamda B nuqtadagi reaksiya kuchi nolga teng bo‘ladi, chunki chegaraviy muvozanat holatida traktor B nuqtaga bosim ko‘rsatmaydi:
                    </p>
                    <BlockMath>
                        {'mom_A(G) = Gx = 0  va  R_B = 0'}
                    </BlockMath>
                    <p className="mb-4">
                        Bu yerda <InlineMath>{'x'}</InlineMath>, <InlineMath>{'G'}</InlineMath> – og‘irlik kuchining A nuqtaga nisbatan yelkasi, uni 1.21 – shakldan aniqlaymiz:
                    </p>


                    <BlockMath>
                        {'x = a cos(α) - h sin(α)'}
                    </BlockMath>
                    <p className="mb-4">
                        <InlineMath>{'G ∙ x = 0'}</InlineMath> formulada <InlineMath>{'G ≠ 0'}</InlineMath> bo‘lgani uchun <InlineMath>{'x = 0'}</InlineMath> bo‘lishi kerak. Demak,
                    </p>
                    <BlockMath>
                        {'a cos(α) - h sin(α) = 0'}
                    </BlockMath>
                    <p className="mb-4">
                        Bundan <InlineMath>{'tg(α) = a / h'}</InlineMath> = <InlineMath>{'813 / 731 = 1.1402'}</InlineMath> va <InlineMath>{'α = 48°45′'}</InlineMath> ekanligini aniqlaymiz.
                    </p>
                    <p className="mb-4">
                        Traktor A nuqta atrofida ag‘darilib ketmasligi uchun <InlineMath>{'α < 48°'}</InlineMath> bo‘lishi yetarli.
                    </p>
                    <h1 className="text-xl font-bold  mb-6">
                        1.8-masala
                    </h1>
                    <p className="mb-4">
                        Tomonlarining uzunligi <InlineMath>{'a'}</InlineMath> bo‘lgan kubning yon tomoni diagonali bo‘ylab, shaklda ko‘rsatilgandek <InlineMath>{'F'}</InlineMath> kuch qo‘yilgan, uning O nuqtaga nisbatan momenti hisoblansin (1.22 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_22}
                            alt="Diagram"
                            className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3"
                        />
                    </div>

                    <h2 className="text-lg font-bold mb-4">Yechish:</h2>
                    <p className="mb-4">
                        Avvalo, kuchning koordinata o‘qlariga nisbatan momentlarini hisoblaymiz. <InlineMath>{'F'}</InlineMath> kuch qo‘yilgan A nuqta koordinatalari:
                    </p>
                    <BlockMath>
                        {'x = a, y = a, z = 0'}
                    </BlockMath>
                    <p className="mb-4">
                        <InlineMath>{'F'}</InlineMath> kuchining koordinata o‘qlaridagi proyeksiyalari:
                    </p>
                    <BlockMath>
                        {'F_x = -(√2/2)F, F_y = 0, F_z = (√2/2)F'}
                    </BlockMath>
                    <p className="mb-4">
                        Momentlarni hisoblaymiz:
                    </p>
                    <BlockMath>
                        {'M_{ox}(F) = yF_z - zF_y = (√2/2)Fa'}
                    </BlockMath>
                    <BlockMath>
                        {'M_{oy} = zF_x - xF_z = -(√2/2)Fa'}
                    </BlockMath>
                    <BlockMath>
                        {'M_{oz} = xF_y - yF_x = (√2/2)Fa'}
                    </BlockMath>
                    <p className="mb-4">
                        Demak, O nuqtaga nisbatan kuch momentining modulini quyidagicha aniqlaymiz:
                    </p>
                    <BlockMath>
                        {'M_o(F) = √(M_{ox}^2 + M_{oy}^2 + M_{oz}^2) = √((√2/2 Fa)^2 + (-√2/2 Fa)^2 + (√2/2 Fa)^2) = √(3/2) ∙ F ∙ a = 1.22 ∙ a ∙ F'}
                    </BlockMath>

                    <h1 className="text-xl font-bold  mt-12 mb-6">
                        1.9-masala
                    </h1>
                    <p className="mb-4">
                        Qirralari <InlineMath>{'a = 0.75 m'}</InlineMath> bo‘lgan kubning tomoniga miqdori <InlineMath>{'F = 16 N'}</InlineMath> bo‘lgan kuch shakldagidek o‘rnatilgan. <InlineMath>{'F'}</InlineMath> kuchning <InlineMath>{'Ox'}</InlineMath> o‘qiga nisbatan momentini hisoblang (1.23 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_23}
                            alt="Problem diagram"
                            className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3"
                        />
                    </div>
                    <h2 className="text-lg font-bold mb-4">Yechish:</h2>
                    <p className="mb-4">
                        Kuchdan o‘qqa nisbatan moment olish qoidasidan foydalnamiz:
                    </p>
                    <BlockMath>
                        {'m_x(F) = -F cos(45°)a = -16 * 0.71 * 0.75 = -8.49 N·m'}
                    </BlockMath>
                    <p className="mb-4">
                        <InlineMath>{'F'}</InlineMath> kuchining <InlineMath>{'Ox'}</InlineMath> o‘qqa perpendikulyar <InlineMath>{'Oyz'}</InlineMath> tekislikdagi proyeksiyasi <InlineMath>{'F cos(45°)'}</InlineMath> bo‘lib, <InlineMath>{'Ox'}</InlineMath> o‘q atrofida soat mili yo‘nalishida aylanayotgandek ko‘rinadi. Shuning uchun ishorasi manfiy olingan.
                    </p>


                    <h1 className="text-xl font-bold  mb-6">
                        1.10-masala
                    </h1>
                    <p className="mb-4">
                        Shaklda ko‘rsatilgan <InlineMath>{'F'}</InlineMath> kuchning <InlineMath>{'Oz'}</InlineMath> o‘qqa nisbatan momentini hisoblansin. <InlineMath>{'F = 5 N'}</InlineMath>, kub qirralari <InlineMath>{'a = 0.2 m'}</InlineMath> (1.24 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_24No}
                            alt="No solution"
                            className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3"
                        />
                    </div>
                    <h2 className="text-lg font-bold mb-4">Yechish:</h2>
                    <p className="mb-4">
                        Momentni hisoblash formulasi quyidagicha bo‘ladi:
                    </p>
                    <BlockMath>
                        {'M_{Oz}(F) = F cos(45°)a = 5 * 0.71 * 0.2 = 0.71 N·m'}
                    </BlockMath>
                    <p className="mb-4">
                        Shunday qilib, <InlineMath>{'Oz'}</InlineMath> o‘qqa nisbatan kuchning momenti 0.71 N·m ga teng bo‘ladi.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ForceMomentOnAxis;
