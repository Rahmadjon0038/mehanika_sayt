import React from "react";
import MathJax from "react-mathjax";
import image1_11 from '../../assets/image1_11.png'
import image1_12a from '../../assets/image1_12a.png'
import image1_12b from '../../assets/image1_12b.png'
import image1_13 from '../../assets/image1_13.png'
import image1_14 from '../../assets/image1_14.png'
import image1_14Qr from '../../assets/image1_14Qr.png'
import Navbar from "../Navbar";
function ProjectionAndProblems() {
    return (
        <>
            <Navbar />
            <MathJax.Provider>
                <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center mt-20 p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                        <h1 className="text-2xl font-bold text-center mb-6">
                            1.4 – §. Kuchning o’qdagi va tekislikdagi proeksiyasi
                        </h1>
                        <div className="text-center my-6">
                            <img
                                src={image1_14Qr}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/5"
                            />
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
                            <MathJax.Node inline formula={"A"} /> va oxirgi nuqtasi <MathJax.Node inline formula={"B"} /> dan o’qqa tushirilgan perpendikulyarlar orasidagi kesma kuchning o’qdagi proeksiyasini ifodalaydi:
                        </p>
                        <MathJax.Node formula={"F_x = ab = F \\cos \\alpha, \\quad Q_x = cd = -Q \\cos \\varphi, \\quad P_x = 0"} />
                        <p className="mb-4">
                            Boshqacha aytganda, kuchning o’qdagi proeksiyasi deb, kuch moduli bilan kuch vektori hamda o’qning musbat yo’nalishi orasidagi burchak kosinusi ko’paytmasiga aytiladi. Agar kuch vektori bilan o’q orasidagi burchak o’tkir bo’lsa, kuchning o’qdagi proeksiyasi musbat, burchak o’tmas bo’lsa manfiy bo’ladi. Kuch o’qqa perpendikulyar bo’lsa kuchning mazkur o’qdagi proeksiyasi nolga teng.
                        </p>

                        <h2 className="text-lg font-bold mb-4">
                            <MathJax.Node inline formula={"\\vec{F}"} /> Kuchning Оxyz Dekart koordinata o’qlaridagi prоeksiyasi
                        </h2>
                        <p className="mb-4">
                            <MathJax.Node inline formula={"\\vec{F}"} /> kuchning Оxyz Dekart koordinata o’qlaridagi prоeksiyasini aniqlash uchun
                            <MathJax.Node inline formula={"\\vec{F}"} /> kuch qo’yilgan nuqtani koordinata boshi qilib olib, kuchning
                            <MathJax.Node inline formula={"x, y, z"} /> koordinata o’qlari bilan tashkil qilgan burchaklarini mos ravishda
                            <MathJax.Node inline formula={"\\alpha, \\beta, \\gamma"} /> bilan belgilasak (1.5) formulaga ko’ra (1.11 – shakl):
                        </p>
                        <MathJax.Node formula={"\\{\\begin{aligned} F_x &= F \\cos \\alpha \\\\ F_y &= F \\cos \\beta \\\\ F_z &= F \\cos \\gamma \\end{aligned}\\}"} />
                        <p className="mb-4">(1.6)</p>
                        <p className="mb-4">
                            Agar kuchning koordinata o’qlaridagi prоeksiyalari ma’lum bo’lsa, kuch modulini parallelepipedning diagonali sifatida aniqlanadi:
                        </p>
                        <MathJax.Node formula={"F = \\sqrt{F_x^2 + F_y^2 + F_z^2}"} />
                        <p className="mb-4">(1.7)</p>

                        <h2 className="text-lg font-bold mb-4">
                            Kuch yo’nalishi yo’naltiruvchi kosinuslari va tekislikdagi prоeksiyasi
                        </h2>
                        <p className="mb-4">
                            Kuch yo’nalishi yo’naltiruvchi kosinuslari deb ataluvchi o‘q bilan kuch orasidagi burchak kosinuslari yordamida aniqlanadi:
                        </p>
                        <MathJax.Node formula={"\\cos \\alpha = \\frac{F_x}{F}, \\quad \\cos \\beta = \\frac{F_y}{F}, \\quad \\cos \\gamma = \\frac{F_z}{F}"} />
                        <p className="mb-4">(1.8)</p>
                        <p className="mb-4">
                            <MathJax.Node inline formula={"\\vec{F}"} /> kuchning
                            <MathJax.Node inline formula={"Oxy"} /> tekislikdagi prоeksiyasi deb,
                            <MathJax.Node inline formula={"\\vec{F}_{xy}"} /> kuchning qo’yilish nuqtasidan va oxiridan shu tekislikka tushirilgan perpendikulyarlar orasidagi
                            <MathJax.Node inline formula={"\\vec{F}_{xy}"} /> vektor ga aytiladi.
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
                        <MathJax.Node formula={"F_{xy} = F \\cos \\theta"} />
                        <p className="mb-4">
                            Bu yerda <MathJax.Node inline formula={"\\theta"} /> burchak
                            <MathJax.Node inline formula={"\\vec{F}"} /> kuch bilan
                            <MathJax.Node inline formula={"Oxy"} /> tekislik orasidagi burchakdir.
                        </p>
                        <p className="mb-4">
                            Bu holda, kuchning o‘qdagi prоeksiyasi quyidagicha aniqlanadi (1.12 – shakl):
                        </p>
                        <MathJax.Node formula={"\\{\\begin{aligned} F_x &= F_{xy} \\cos \\varphi = F \\cos \\theta \\cos \\varphi \\\\ F_y &= F_{xy} \\sin \\varphi = F \\cos \\theta \\sin \\varphi \\\\ F_z &= F \\sin \\theta \\end{aligned}\\}"} />
                        <p className="mb-4">(1.9)</p>

                        <h2 className="text-lg font-bold mb-4">1.4-masala:</h2>
                        <p className="mb-4">
                            Vertikal simyog’ochning <MathJax.Node inline formula={"A"} /> nuqtasiga
                            <MathJax.Node inline formula={"F_1 = F_2 = F_3 = 10 \\ \\text{N}"} /> kuchlar qo’yilgan. Agar bu kuchlar shakldagidek joylashtirilgan va
                            <MathJax.Node inline formula={"\\alpha = 60^\\circ"} /> bo’lsa, berilgan kuchlar sistemasining
                            <MathJax.Node inline formula={"A_x"} /> gorizontal o’qdagi tashkil etuvchilarining yig’indisi topilsin (1.13–shakl).
                        </p>
                        <div className="text-center my-6">
                            <img
                                src={image1_13}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                            />
                        </div>
                        <h3 className="text-md font-semibold mb-2">Yechish:</h3>
                        <p className="mb-4">
                            Berilgan kuchlarni <MathJax.Node inline formula={"A_x"} /> o’qdagi proyeksiyalarining yig’indisini aniqlash uchun har bir kuchning shu o’qdagi proyeksiyasini topib, ularni algebraik qo’shiladi:
                        </p>
                        <MathJax.Node formula={"F_{1x} = F_1 \\cos (90^\\circ - \\alpha) = F_1 \\sin \\alpha"} />
                        <MathJax.Node formula={"F_{2x} = F_2"} />
                        <MathJax.Node formula={"F_{3x} = F_3 \\cos (90^\\circ - \\alpha) = F_3 \\sin \\alpha"} />
                        <MathJax.Node formula={"F_{1x} + F_{2x} + F_{3x} = F_1 \\sin \\alpha + F_2 + F_3 \\sin \\alpha"} />
                        <MathJax.Node formula={"= 10 (2 \\sin 60^\\circ + 1) = 10 (1.73 + 1) = 27.3 \\ \\text{N}"} />
                        <p className="mb-4">Javob: <MathJax.Node inline formula={"27.3 \\ \\text{N}"} /></p>

                        <h2 className="text-lg font-bold mb-4">1.5-masala:</h2>
                        <p className="mb-4">
                            Qattiq jismning <MathJax.Node inline formula={"O"} /> nuqtasiga
                            <MathJax.Node inline formula={"F_1 = 1 \\ \\text{N}, F_2 = 2 \\ \\text{N}, F_3 = 3 \\ \\text{N}, F_4 = 4 \\ \\text{N}"} /> kuchlar ta’sir etadi.
                            <MathJax.Node inline formula={"\\alpha = 30^\\circ, \\beta = 45^\\circ, \\gamma = 60^\\circ"} /> burchaklar berilgan bo’lsa, kuchlarning
                            <MathJax.Node inline formula={"O_y"} /> o’qdagi proyeksiyalarining yig’indisi topilsin (1.14–shakl).
                        </p>
                        <div className="text-center my-6">
                            <img
                                src={image1_14}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                            />
                        </div>
                        <h3 className="text-md font-semibold mb-2">Yechish:</h3>
                        <p className="mb-4">
                            Berilgan barcha kuchlarning <MathJax.Node inline formula={"O_y"} /> o’qdagi proyeksiyalarini aniqlaymiz:
                        </p>
                        <MathJax.Node formula={"F_{1y} = F_1 \\cos (90^\\circ - \\alpha) = F_1 \\sin \\alpha"} />
                        <MathJax.Node formula={"F_{2y} = F_2 \\cos \\beta"} />
                        <MathJax.Node formula={"F_{3y} = F_3 \\cos (180^\\circ - \\gamma) = -F_3 \\cos \\gamma"} />
                        <MathJax.Node formula={"F_{4y} = -F_4"} />
                        <p className="mb-4">Algebraik yig’indisini topamiz:</p>
                        <MathJax.Node formula={"F_{1y} + F_{2y} + F_{3y} + F_{4y} = F_1 \\sin \\alpha + F_2 \\cos \\beta - F_3 \\cos \\gamma - F_4"} />
                        <MathJax.Node formula={"= 1 \\sin 30^\\circ + 2 \\cos 45^\\circ - 3 \\cos 60^\\circ - 4"} />
                        <MathJax.Node formula={"= -3.58 \\ \\text{N}"} />
                        <p className="mb-4">Javob: <MathJax.Node inline formula={"-3.58 \\ \\text{N}"} /></p>
                    </div>
                </div>
            </MathJax.Provider >
        </>
    );
}

export default ProjectionAndProblems;
