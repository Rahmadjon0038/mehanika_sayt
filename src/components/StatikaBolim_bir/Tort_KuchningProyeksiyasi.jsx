import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import image1_11 from '../../assets/image1_11.png'
import image1_12a from '../../assets/image1_12a.png'
import image1_12b from '../../assets/image1_12b.png'
import image1_13 from '../../assets/image1_13.png'
import image1_14 from '../../assets/image1_14.png'
import image1_14Qr from '../../assets/image1_14Qr.png'
import Navbar from "../Navbar";
import NavigationButtons from "../home/ArrowButtons";

import qr from '../../assets/qrcode/lesson4qr.png'


function ProjectionAndProblems() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center mt-20 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        1.4 – §. Kuchning o’qdagi va tekislikdagi proeksiyasi
                    </h1>
                    <div className="text-center mb-6">
                        <a href="https://youtu.be/bmbBh7-jfkM">
                            <img
                                src={qr}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto rounded-lg shadow-lg w-48"
                            />
                        </a>
                    </div>
                    <p className="mb-4">
                        Mexanika masalalarini yechishda, kuchlarni tashkil etuvchilarga ajratishda, kuchning analitik qiymatlarini hisoblashda kuchning oqdagi va tekislikdagi proeksiylari tushunchasi katta ahamiyatga ega.
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_11}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg w-full sm:w-3/5 lg:w-1/2"
                        />
                    </div>
                    <p className="mb-4">
                        Kuchning oqdagi proeksiyasi (boshqa barcha vektorlarniki kabi) skalyar kattalik bo`lib kuchning qo’yilgan nuqtasi
                        <InlineMath math={"A"} /> va oxirgi nuqtasi <InlineMath math={"B"} /> dan o’qqa tushirilgan perpendikulyarlar orasidagi kesma kuchning o’qdagi proeksiyasini ifodalaydi:
                    </p>
                    <BlockMath math={"F_x = ab = F \\cos \\alpha, \\quad Q_x = cd = -Q \\cos \\varphi, \\quad P_x = 0"} />
                    <p className="mb-4">
                        Boshqacha aytganda, kuchning o’qdagi proeksiyasi deb, kuch moduli bilan kuch vektori hamda o’qning musbat yo’nalishi orasidagi burchak kosinusi ko’paytmasiga aytiladi. Agar kuch vektori bilan o’q orasidagi burchak o’tkir bo’lsa, kuchning o’qdagi proeksiyasi musbat, burchak o’tmas bo’lsa manfiy bo’ladi. Kuch o’qqa perpendikulyar bo’lsa kuchning mazkur o’qdagi proeksiyasi nolga teng.
                    </p>

                    <h2 className="text-lg font-bold mb-4">
                        <InlineMath math={"\\vec{F}"} /> Kuchning Оxyz Dekart koordinata o’qlaridagi prоeksiyasi
                    </h2>
                    <p className="mb-4">
                        <InlineMath math={"\\vec{F}"} /> kuchning Оxyz Dekart koordinata o’qlaridagi prоeksiyasini aniqlash uchun
                        <InlineMath math={"\\vec{F}"} /> kuch qo’yilgan nuqtani koordinata boshi qilib olib, kuchning
                        <InlineMath math={"x, y, z"} /> koordinata o’qlari bilan tashkil qilgan burchaklarini mos ravishda
                        <InlineMath math={"\\alpha, \\beta, \\gamma"} /> bilan belgilasak (1.5) formulaga ko’ra (1.11 – shakl):
                    </p>
                    <BlockMath math={"\\{\\begin{aligned} F_x &= F \\cos \\alpha \\\\ F_y &= F \\cos \\beta \\\\ F_z &= F \\cos \\gamma \\end{aligned}\\}"} />
                    <p className="mb-4">(1.6)</p>
                    <p className="mb-4">
                        Agar kuchning koordinata o’qlaridagi prоeksiyalari ma’lum bo’lsa, kuch modulini parallelepipedning diagonali sifatida aniqlanadi:
                    </p>
                    <BlockMath math={"F = \\sqrt{F_x^2 + F_y^2 + F_z^2}"} />
                    <p className="mb-4">(1.7)</p>

                    <h2 className="text-lg font-bold mb-4">
                        Kuch yo’nalishi yo’naltiruvchi kosinuslari va tekislikdagi prоeksiyasi
                    </h2>
                    <p className="mb-4">
                        Kuch yo’nalishi yo’naltiruvchi kosinuslari deb ataluvchi o‘q bilan kuch orasidagi burchak kosinuslari yordamida aniqlanadi:
                    </p>
                    <BlockMath math={"\\cos \\alpha = \\frac{F_x}{F}, \\quad \\cos \\beta = \\frac{F_y}{F}, \\quad \\cos \\gamma = \\frac{F_z}{F}"} />
                    <p className="mb-4">(1.8)</p>
                    <p className="mb-4">
                        <InlineMath math={"\\vec{F}"} /> kuchning
                        <InlineMath math={"Oxy"} /> tekislikdagi prоeksiyasi deb,
                        <InlineMath math={"\\vec{F}_{xy}"} /> kuchning qo’yilish nuqtasidan va oxiridan shu tekislikka tushirilgan perpendikulyarlar orasidagi
                        <InlineMath math={"\\vec{F}_{xy}"} /> vektor ga aytiladi.
                    </p>
                    <div className="md:flex justify-center">
                        <div className="text-center my-6">
                            <img
                                src={image1_12b}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/1"
                            />
                        </div>
                        <div className="text-center my-6">
                            <img
                                src={image1_12a}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/1"
                            />
                        </div>
                    </div>
                    <p className="mb-4">
                        Demak, vektоrning tekislikdagi prоeksiyasini ham vektоr kattalik deb hisoblasak, uning moduli quyidagicha aniqlanadi:
                    </p>
                    <BlockMath math={"F_{xy} = F \\cos \\theta"} />
                    <p className="mb-4">
                        Bu yerda <InlineMath math={"\\theta"} /> burchak
                        <InlineMath math={"\\vec{F}"} /> kuch bilan
                        <InlineMath math={"Oxy"} /> tekislik orasidagi burchakdir.
                    </p>
                    <p className="mb-4">
                        Bu holda, kuchning o‘qdagi prоeksiyasi quyidagicha aniqlanadi (1.12 – shakl):
                    </p>
                    <BlockMath math={"\\{\\begin{aligned} F_x &= F_{xy} \\cos \\varphi = F \\cos \\theta \\cos \\varphi \\\\ F_y &= F_{xy} \\sin \\varphi = F \\cos \\theta \\sin \\varphi \\\\ F_z &= F \\sin \\theta \\end{aligned}\\}"} />
                    <p className="mb-4">(1.9)</p>



                    <h2 className="text-lg font-bold mb-4">1.4-masala:</h2>
                    <p className="mb-4">
                        Vertikal simyog’ochning A nuqtasiga <InlineMath math={"F_1 = F_2 = F_3 = 10 \\ N"} /> kuchlar qo’yilgan. Agar bu kuchlar shakldagidek joylashtirilgan va <InlineMath math={"\\alpha = 60^\\circ"} /> bo’lsa, berilgan kuchlar sistemasining Ax gorizontal o’qdagi tashkil etuvchilarining yig’indisi topilsin.
                    </p>

                    <div className="text-center my-6">
                        <img
                            src={image1_13}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                        />
                    </div>
                    <h3 className="text-lg font-bold mb-4">Yechish:</h3>
                    <p className="mb-4">
                        Har bir kuchning Ax o’qdagi proyeksiyasini topib, ularni algebraik qo’shamiz:
                    </p>

                    <BlockMath math={"F_{1x} = F_1 \\cos(90^\\circ - \\alpha) = F_1 \\sin(\\alpha)"} />
                    <BlockMath math={"F_{2x} = F_2"} />
                    <BlockMath math={"F_{3x} = F_3 \\cos(90^\\circ - \\alpha) = F_3 \\sin(\\alpha)"} />

                    <p className="mb-4">
                        Barcha proyeksiyalarni qo’shish:
                    </p>

                    <BlockMath math={"F_{1x} + F_{2x} + F_{3x} = F_1 \\sin(\\alpha) + F_2 + F_3 \\sin(\\alpha)"} />

                    <p className="mb-4">
                        Natijada:
                    </p>

                    <BlockMath math={"F_{total} = 10 (2 \\sin(60^\\circ) + 1) = 10 (1.73 + 1) = 27.3 \\ N"} />

                    <p className="mb-4">
                        Javob: <InlineMath math={"27.3 \\ N"} />
                    </p>




                    <h1 className="text-2xl font-bold mb-6">1.5-masala</h1>
                    <p className="mb-4">
                        Qattiq jismning O nuqtasiga quyidagi kuchlar ta’sir etadi:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>F₁ = 1 N</li>
                        <li>F₂ = 2 N</li>
                        <li>F₃ = 3 N</li>
                        <li>F₄ = 4 N</li>
                    </ul>
                    <p className="mb-4">
                        α = 30°, β = 45°, γ = 60° burchaklar berilgan bo’lsa, kuchlarning Oy o’qdagi proyeksiyalarining yig’indisi topilsin.
                    </p>

                    <div className="text-center my-6">
                        <img
                            src={image1_14}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                        />
                    </div>
                    <h3 className="text-lg font-semibold mb-4">Yechish:</h3>
                    <p className="mb-4">
                        Berilgan barcha kuchlarning Oy o’qidagi proyeksiyalarini aniqlaymiz:
                    </p>
                    <BlockMath math={"F_{1y} = F_1 \\sin(\\alpha)"} />
                    <BlockMath math={"F_{2y} = F_2 \\cos(\\beta)"} />
                    <BlockMath math={"F_{3y} = -F_3 \\cos(\\gamma)"} />
                    <BlockMath math={"F_{4y} = -F_4"} />

                    <p className="mb-4">Ularning algebraik yig'indisini hisoblaymiz:</p>
                    <BlockMath math={"F_{1y} + F_{2y} + F_{3y} + F_{4y} = F_1 \\sin(\\alpha) + F_2 \\cos(\\beta) - F_3 \\cos(\\gamma) - F_4"} />

                    <p className="mb-4">Natija:</p>
                    <BlockMath math={"F_{total} = 1 \\sin(30^\\circ) + 2 \\cos(45^\\circ) - 3 \\cos(60^\\circ) - 4"} />
                    <p className="mb-4">Javob: <InlineMath math={"-3.58 N"} /></p>
                </div>
            </div>
        </>
    );
}

export default ProjectionAndProblems;
