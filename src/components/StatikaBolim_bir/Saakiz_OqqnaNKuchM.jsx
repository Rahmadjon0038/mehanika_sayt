import React from "react";
import image1_19 from '../../assets/image1_19.png'
import image1_20 from '../../assets/image1_20.png'
import image1_21 from '../../assets/image1_21.png'
import image1_22 from '../../assets/image1_22.png'
import image1_23 from '../../assets/image1_23.png'
import image1_24No from '../../assets/image1_24No.png'
import MathJax from "react-mathjax";
import Navbar from "../Navbar";

function ForceMomentOnAxis() {
    return (
        <><Navbar />
            <MathJax.Provider>
                <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center mt-20 p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                        <h1 className="text-2xl font-bold text-center mb-6">
                            1.8 – §. O’qqa nisbatan kuch momenti
                        </h1>
                        <h2 className="text-lg font-bold mb-4">Teorema:</h2>
                        <p className="mb-4">
                            Kuch momentining biror o‘qdagi proyeksiyasi, kuchning shu o‘qqa perpendikulyar tekislikdagi proyeksiyasidan o‘q bilan tekislik kesishgan nuqtaga nisbatan olingan momentiga teng.
                        </p>
                        <h2 className="text-lg font-bold mb-4">Isbot:</h2>
                        <p className="mb-4">
                            Berilgan kuchni biror masalan, <MathJax.Node inline formula={"Oxy"} /> tekislikka proyeksiyalab, mazkur proyeksiyadan
                            <MathJax.Node inline formula={"O"} /> nuqtaga nisbatan moment olamiz (1.19 – shakl).
                            Varinion teoremasidan foydalanib quyidagicha yozish mumkin:
                        </p>
                        <MathJax.Node formula={"M_o(\\vec{F}_{xy}) = xF_y - yF_x"} />
                        <p className="mb-4">(1.18)</p>
                        <p className="mb-4">
                            (1.15) va (1.18) formulalarni solishtirib, quyidagicha xulosa qilish mumkin:
                        </p>
                        <MathJax.Node formula={"M_{Oz}(\\vec{F}) = M_O(\\vec{F}_{xy})"} />
                        <p className="mb-4">
                            Buni <MathJax.Node inline formula={"M_z(\\vec{F})"} />, ya’ni <MathJax.Node inline formula={"\\vec{F}"} /> kuchning
                            <MathJax.Node inline formula={"Oz"} /> o‘qqa nisbatan momenti deb belgilanadi va o‘qqa nisbatan kuch momenti deyiladi:
                        </p>
                        <MathJax.Node formula={"M_{Oz}(\\vec{F}) = M_O(\\vec{F}_{xy}) = \\pm F_{xy} h^*"} />
                        <p className="mb-4">(1.19)</p>
                        <p className="mb-4">
                            (1.19) ifoda o‘qqa nisbatan kuch momentining analitik ifodasi bo‘lib,
                            <MathJax.Node inline formula={"h^*"} /> – o‘q bilan tekislik kesishgan nuqtadan kuchni tekislikdagi proyeksiyasining ta’sir chizig‘iga tushirilgan perpendikulyar (1.19 b–shakl).
                        </p>
                        <div className="text-center my-6">
                            <img
                                src={image1_19}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                            />
                        </div>
                        <h1 className="text-2xl font-bold  mb-6">
                            O’qqa nisbatan kuch momenti
                        </h1>
                        <p className="mb-4">
                            O‘qqa nisbatan kuch momenti moment olinayotgan o‘q uchidan qaralganda, kuchning o‘qqa perpendikulyar tekislikdagi proyeksiyasi jismni
                            o‘q atrofida soat miliga teskari aylantirayotgandek ko‘rinsa musbat, aks holda manfiy deb qabul qilingan.
                        </p>
                        <p className="mb-4">
                            <MathJax.Node inline formula={"(1.19)"} /> formulaga ko‘ra kuchdan o‘qqa nisbatan moment olish qoidasini quyidagicha ifodalash mumkin:
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
                                <MathJax.Node inline formula={"h^* = 0"} /> bo‘lsa, ya’ni kuchning ta’sir chizig‘i moment olinayotgan o‘qni kesib o‘tsa;
                            </li>
                            <li>
                                <MathJax.Node inline formula={"F_{xy} = 0"} /> bo‘lsa, ya’ni kuch moment olinayotgan o‘qqa parallel bo‘lsa.
                            </li>
                        </ul>
                        <p className="mb-4">
                            Bu ikki holning mazmunini birlashtirib, quyidagicha bayon qilish mumkin:
                        </p>
                        <p className="mb-4">
                            Agar o’q va kuch bir tekislikda yotsa kuchning mazkur o’qqa nisbatan momenti nolga teng bo’ladi.
                        </p>
                        <h2 className="text-lg font-bold mb-4">1.6-masala:</h2>
                        <p className="mb-4">
                            <MathJax.Node inline formula={"Oxy"} /> tekislikda yotuvchi <MathJax.Node inline formula={"F = 420 \\text{ N}"} /> kuch
                            koordinatalari <MathJax.Node inline formula={"x_A = 0.2 \\text{ m}, \\; y_A = 0.3 \\text{ m}"} /> bo‘lgan
                            <MathJax.Node inline formula={"A"} /> nuqtaga <MathJax.Node inline formula={"\\alpha = 30^\\circ"} /> burchak ostida qo‘yilgan.
                            <MathJax.Node inline formula={"O"} /> nuqtaga nisbatan kuchning momenti aniqlansin (1.20 – shakl).
                        </p>
                        <div className="text-center my-6">
                            <img
                                src={image1_20}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                            />
                        </div>
                        <h3 className="text-md font-bold mb-4">Yechish:</h3>
                        <p className="mb-4">
                            Varinion teoremasidan foydalanamiz, kuch tekislikda yotgani uchun quyidagi skalyar yig‘indidan foydalanamiz:
                        </p>
                        <MathJax.Node formula={"mom_o(\\vec{F}) = mom_o(\\vec{F}_x) + mom_o(\\vec{F}_y)"} />
                        <MathJax.Node formula={"mom_o(\\vec{F}_x) = F \\cos 30^\\circ \\cdot 0.3 = 108.36"} />
                        <MathJax.Node formula={"mom_o(\\vec{F}_y) = F \\sin 30^\\circ \\cdot 0.2 = 42"} />
                        <p className="mb-4 text-center">
                            Demak, <MathJax.Node inline formula={"mom_o(\\vec{F}) = 150.56 \\text{ N·m}"} />.
                        </p>
                        <h2 className="text-lg font-bold mb-4">1.7-masala:</h2>
                        <p className="mb-4">
                            Agar traktor og‘irlik markazining koordinatalari
                            <MathJax.Node inline formula={"h = 731 \\text{ mm}, \\; a = 813 \\text{ mm}"} /> bo‘lsa,
                            traktor <MathJax.Node inline formula={"A"} /> nuqta atrofida ag‘darilib ketmaydigan bo‘ylama ustuvorligini qanoatlantiruvchi
                            <MathJax.Node inline formula={"\\alpha"} /> burchak aniqlansin (1.21 – shakl).
                        </p>
                        <div className="text-center my-6">
                            <img
                                src={image1_21}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                            />
                        </div>
                        <h3 className="text-md font-bold mb-4">Yechish:</h3>
                        <p className="mb-4">
                            Traktor <MathJax.Node inline formula={"A"} /> nuqta atrofida ag‘darilishi oldidan uning og‘irlik kuchi
                            <MathJax.Node inline formula={"G"} /> ning <MathJax.Node inline formula={"A"} /> nuqtaga nisbatan momenti hamda
                            <MathJax.Node inline formula={"B"} /> nuqtadagi reaksiya kuchi nolga teng bo‘ladi, chunki chegaraviy muvozanat holatida traktor
                            <MathJax.Node inline formula={"B"} /> nuqtaga bosim ko‘rsatmaydi:
                        </p>
                        <MathJax.Node formula={"mom_A(\\vec{G}) = Gx = 0, \\; \\; R_B = 0"} />
                        <p className="mb-4">
                            Bu yerda <MathJax.Node inline formula={"x"} /> va <MathJax.Node inline formula={"G"} /> – og‘irlik kuchining
                            <MathJax.Node inline formula={"A"} /> nuqtaga nisbatan yelkasi. Uni (1.21 – shakl) dan aniqlaymiz:
                        </p>
                        <MathJax.Node formula={"x = a \\cos \\alpha - h \\sin \\alpha"} />
                        <p className="mb-4">
                            <MathJax.Node inline formula={"G \\cdot x = 0"} /> formulada <MathJax.Node inline formula={"G \\neq 0"} /> bo‘lgani uchun
                            <MathJax.Node inline formula={"x = 0"} /> bo‘lishi kerak. Demak:
                        </p>
                        <MathJax.Node formula={"a \\cos \\alpha - h \\sin \\alpha = 0"} />
                        <p className="mb-4">
                            Bundan <MathJax.Node inline formula={"\\tan \\alpha = \\frac{a}{h} = \\frac{813}{731} = 1.1402"} /> va
                            <MathJax.Node inline formula={"\\alpha = 48^\\circ 45'"} /> ekanligini aniqlaymiz.
                        </p>
                        <p className="mb-4">
                            Traktor <MathJax.Node inline formula={"A"} /> nuqta atrofida ag‘darilib ketmasligi uchun
                            <MathJax.Node inline formula={"\\alpha < 48^\\circ"} /> bo‘lishi yetarli.
                        </p>






                        {/* 1.8-masala */}
                        <h2 className="text-lg font-bold mb-4">1.8-masala:</h2>
                        <p className="mb-4">
                            Tomonlarining uzunligi <MathJax.Node inline formula={"a"} /> bo‘lgan kubning yon tomoni dioganali bo‘ylab,
                            shaklda ko‘rsatilgandek <MathJax.Node inline formula={"\\vec{F}"} /> kuch qo‘yilgan, uning
                            <MathJax.Node inline formula={"O"} /> nuqtaga nisbatan momenti hisoblansin (1.22 – shakl).
                        </p>

                        <div className="text-center my-6">
                            <img
                                src={image1_22}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                            />
                        </div>
                        <h3 className="text-md font-bold mb-4">Yechish:</h3>
                        <p className="mb-4">
                            Avvalo, kuchning koordinata o‘qlariga nisbatan momentlarini hisoblaymiz.
                            <MathJax.Node inline formula={"\\vec{F}"} /> kuch qo‘yilgan <MathJax.Node inline formula={"A"} /> nuqta koordinatalari:
                            <MathJax.Node inline formula={"x = a, \\; y = a, \\; z = 0"} />.
                            Kuchning koordinata o‘qlaridagi proyeksiyalari:
                        </p>
                        <MathJax.Node formula={"F_x = -\\frac{\\sqrt{2}}{2}F, \\; F_y = 0, \\; F_z = \\frac{\\sqrt{2}}{2}F"} />
                        <p className="mb-4">Momentlar:</p>
                        <MathJax.Node formula={"M_{ox}(\\vec{F}) = yF_z - zF_y = \\frac{\\sqrt{2}}{2}Fa"} />
                        <MathJax.Node formula={"M_{oy}(\\vec{F}) = zF_x - xF_z = -\\frac{\\sqrt{2}}{2}Fa"} />
                        <MathJax.Node formula={"M_{oz}(\\vec{F}) = xF_y - yF_x = \\frac{\\sqrt{2}}{2}Fa"} />
                        <p className="mb-4">
                            O nuqtaga nisbatan kuch momentining modulini hisoblaymiz:
                        </p>
                        <MathJax.Node formula={"M_o(\\vec{F}) = \\sqrt{M_{ox}^2 + M_{oy}^2 + M_{oz}^2}"} />
                        <MathJax.Node formula={"= \\sqrt{\\left(\\frac{\\sqrt{2}}{2}Fa\\right)^2 + \\left(-\\frac{\\sqrt{2}}{2}Fa\\right)^2 + \\left(\\frac{\\sqrt{2}}{2}Fa\\right)^2}"} />
                        <MathJax.Node formula={"= \\sqrt{\\frac{3}{2}}Fa = 1.22aF"} />

                        {/* 1.9-masala */}
                        <h2 className="text-lg font-bold mb-4">1.9-masala:</h2>
                        <p className="mb-4">
                            Qirralari <MathJax.Node inline formula={"a = 0.75 \\text{ m}"} /> bo‘lgan kubning tomoniga
                            miqdori <MathJax.Node inline formula={"F = 16 \\text{ N}"} /> bo‘lgan kuch shakldagidek o‘rnatilgan.
                            <MathJax.Node inline formula={"\\vec{F}"} /> kuchning <MathJax.Node inline formula={"Ox"} /> o‘qiga nisbatan momentini hisoblang (1.23 – shakl).
                        </p>
                        <div className="text-center my-6">
                            <img
                                src={image1_23}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                            />
                        </div>
                        <h3 className="text-md font-bold mb-4">Yechish:</h3>
                        <p className="mb-4">
                            Kuchdan o‘qqa nisbatan moment olish qoidasidan foydalanamiz:
                        </p>
                        <MathJax.Node formula={"m_x(\\vec{F}) = -F \\cos 45^\\circ \\cdot a"} />
                        <MathJax.Node formula={"= -16 \\cdot 0.71 \\cdot 0.75 = -8.49 \\text{ Nm}"} />
                        <p className="mb-4">
                            <MathJax.Node inline formula={"\\vec{F}"} /> kuchning <MathJax.Node inline formula={"Ox"} /> o‘qqa perpendikulyar
                            <MathJax.Node inline formula={"Oyz"} /> tekislikdagi proyeksiyasi <MathJax.Node inline formula={"F \\cos 45^\\circ"} /> bo‘lib,
                            <MathJax.Node inline formula={"Ox"} /> o‘q atrofida soat mili yo‘nalishida aylanayotgandek ko‘rinadi.
                            Shuning uchun ishorasi manfiy olingan.
                        </p>
                        <div className="text-center my-6">
                            <img
                                src={image1_24No}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/4"
                            />
                        </div>
                        {/* 1.10-masala */}
                        <h2 className="text-lg font-bold mb-4">1.10-masala:</h2>
                        <p className="mb-4">
                            Shaklda ko‘rsatilgan <MathJax.Node inline formula={"\\vec{F}"} /> kuchning <MathJax.Node inline formula={"Oz"} /> o‘qqa nisbatan momenti
                            hisoblansin. <MathJax.Node inline formula={"F = 5 \\text{ N}"} />, kub qirralari <MathJax.Node inline formula={"a = 0.2 \\text{ m}"} />
                            (1.24 – shakl).
                        </p>
                        <h3 className="text-md font-bold mb-4">Yechish:</h3>
                        <MathJax.Node formula={"M_{Oz}(\\vec{F}) = F \\cos 45^\\circ \\cdot a"} />
                        <MathJax.Node formula={"= 5 \\cdot 0.71 \\cdot 0.2 = 0.71 \\text{ Nm}"} />
                    </div>
                </div>
            </MathJax.Provider>
        </>
    );
}

export default ForceMomentOnAxis;
