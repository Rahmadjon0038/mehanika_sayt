import React from "react";
import MathJax from "react-mathjax";
import image1_3Qr from '../../assets/image1_3Qr.png'
import image1_7 from '../../assets/image1_7.png'
import image1_8 from '../../assets/image1_8.png'
import image1_9a from '../../assets/image1_9a.png'
import image1_9b from '../../assets/image1_9b.png'
import Navbar from "../Navbar";

function TheoremProblems() {
    return (
        <>
        <Navbar/>
        <MathJax.Provider>
            <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center mt-20 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        1.3 – §. Uch kuch muvozanati haqidagi teoremaga doir masalalar
                    </h1>
                    <div className="text-center my-6">
                        <img
                            src={image1_3Qr}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg  sm:w-3/5 lg:w-1/5"
                        />
                    </div>

                    {/* 1.1-Masala */}
                    <h2 className="text-lg font-bold mb-4">1.1-masala:</h2>
                    <p className="mb-4">
                        Gorizontga <MathJax.Node inline formula={"\\alpha = 45^\\circ"} /> burchak ostida qo’yilgan stropila oyog’i bo’ylab
                        <MathJax.Node inline formula={"Q=2.5 \\ \\text{kN}"} /> kuch ta’sir qiladi. Bu holda gorizontal to’sin bo’ylab qanday
                        <MathJax.Node inline formula={"\\vec{S}"} /> zo’riqish va vertikal yo’nalishda devorga qanday
                        <MathJax.Node inline formula={"\\vec{P}"} /> bosim kuchi ta’sir qilishni aniqlansin (1.7 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_7}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    <h3 className="text-md font-semibold mb-2">Yechish:</h3>
                    <p className="mb-4">
                        Shakldagi qurilma muvozanatda bo’lishi uchun stropila oyog’i, to’sin, devor birlashib turgan
                        <MathJax.Node inline formula={"O"} /> nuqta muvozanatda turishi kerak. Bu nuqtaga stropila oyog’idan tushayotgan
                        <MathJax.Node inline formula={"\\vec{Q}"} /> kuch, to’singa ta’sir qilayotgan
                        <MathJax.Node inline formula={"\\vec{S}"} /> zo’riqish kuchi, devorga tushayotgan
                        <MathJax.Node inline formula={"\\vec{P}"} /> bosim kuchiga miqdori teng yo’nalishi qarama-qarshi bo’lgan devorning normal reaksiya kuchi
                        <MathJax.Node inline formula={"\\vec{N}"} /> (<MathJax.Node inline formula={"\\vec{P} = -\\vec{N}"} />) ta’sir qiladi.
                    </p>
                    <p className="mb-4">
                        Ya’ni uchta kuch ta’sirida <MathJax.Node inline formula={"O"} /> nuqta muvozanatda turibdi. Ularga "Uch kuch haqidagi" teoremani qo’llab, yopiq kuch uchburchagi tuziladi va uchburchak tomonlari bilan burchaklari orasidagi munosabatdan foydalanib, masala hal qilinadi. Sinuslar teoremasiga ko’ra:
                    </p>
                    <MathJax.Node formula={"\\frac{N}{\\sin 45^\\circ} = \\frac{S}{\\sin 45^\\circ} = \\frac{Q}{\\sin 90^\\circ}"} />
                    <p className="mb-4">Demak:</p>
                    <MathJax.Node formula={"N = S = Q \\sin 45^\\circ = 2.5 \\cdot 0.71 = 1.77 \\ \\text{kN}"} />
                    <p className="mb-4">
                        Devorga va to’singa bir xil kuch tushib turibdi. Stropila oyog’i bilan to’sin orasidagi burchak o’zgarsa bu qiymatlar o’zgaradi.
                    </p>

                    {/* 1.2-Masala */}
                    <h2 className="text-lg font-bold mb-4">1.2-masala:</h2>
                    <p className="mb-4">
                        Og’irligi <MathJax.Node inline formula={"20 \\ \\text{N}"} /> bo’lgan elektr lampa (fonar)
                        <MathJax.Node inline formula={"AB"} /> sterjen yordamida shipga osilgan va
                        <MathJax.Node inline formula={"BC"} /> sterjen bilan devorga tortib qo’yilgan.
                        Burchaklar <MathJax.Node inline formula={"\\alpha = 60^\\circ"} />, <MathJax.Node inline formula={"\\beta = 135^\\circ"} />
                        deb olib, <MathJax.Node inline formula={"AB"} /> sterjenning
                        <MathJax.Node inline formula={"\\vec{S}_A"} />, <MathJax.Node inline formula={"BC"} /> sterjenning
                        <MathJax.Node inline formula={"\\vec{S}_C"} /> zo’riqish kuchlari aniqlansin (1.8 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_8}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    <h3 className="text-md font-semibold mb-2">Yechish:</h3>
                    <p className="mb-4">
                        Fonar, og’irlik kuchi <MathJax.Node inline formula={"\\vec{P}"} />, sterjenlarning zo’riqish kuchlari
                        <MathJax.Node inline formula={"\\vec{S}_A"} /> va <MathJax.Node inline formula={"\\vec{S}_C"} /> ta’sirida
                        <MathJax.Node inline formula={"B"} /> nuqtada muvozanatda turibdi.
                    </p>
                    <p className="mb-4">
                        Demak, bu kuchlarni o’ziga parallel ko’chirib, yo’nalishlarini e’tiborga olib, yopiq kuch uchburchagini qurib olamiz. Uchburchakning ichki burchaklari ma’lumligidan, hamda sinuslar teoremasidan foydalanib, no’malum kuchlar aniqlanadi:
                    </p>
                    <MathJax.Node formula={"\\frac{S_C}{\\sin 30^\\circ} = \\frac{S_A}{\\sin 45^\\circ} = \\frac{P}{\\sin (90^\\circ + 15^\\circ)}"} />
                    <MathJax.Node formula={"S_C = \\frac{P \\sin 30^\\circ}{\\cos 15^\\circ} = \\frac{20 \\cdot 0.5}{0.966} = 10.4 \\ \\text{N}"} />
                    <MathJax.Node formula={"S_A = \\frac{P \\sin 45^\\circ}{\\cos 15^\\circ} = \\frac{20 \\cdot 0.71}{0.966} = 14.6 \\ \\text{N}"} />
                    <p className="mb-4">Javob: <MathJax.Node inline formula={"S_C = 10.4 \\ \\text{N}, \\ S_A = 14.6 \\ \\text{N}"} /></p>

                    {/* 1.3-Masala */}
                    <h2 className="text-lg font-bold mb-4">1.3-masala:</h2>
                    <p className="mb-4">
                        Tog’larda qurilgan temir yo’lda yo’lning dara ichidagi bir qismi rasmda ko’rsatilgandek osilgan,
                        <MathJax.Node inline formula={"AB"} /> osmaga <MathJax.Node inline formula={"500 \\ \\text{kN}"} /> kuch ta’sir etadi deb hisoblab,
                        <MathJax.Node inline formula={"AC"} /> va <MathJax.Node inline formula={"AD"} /> sterjenlardagi zo’riqishlar aniqlansin (1.9 a,b – shakl).
                    </p>
                    <div className="md:flex ">
                        <div className="text-center my-6">
                            <img
                                src={image1_9a}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/1"
                            />
                        </div>
                        <div className="text-center my-6">
                            <img
                                src={image1_9b}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/1"
                            />
                        </div>
                    </div>

                    <h2 className="text-lg font-bold mb-4">Yechish:</h2>
                    <p className="mb-4">
                        Masaladagi qurilma muvozanat holatida turishi uchun
                        <MathJax.Node inline formula={"AC"} /> va
                        <MathJax.Node inline formula={"AD"} /> sterjenlar biriktirilgan
                        <MathJax.Node inline formula={"A"} /> sharnir qo’yilgan
                        <MathJax.Node inline formula={"\\vec{P}"} /> kuch ta’sirida muvozanatda turishi kerak.
                    </p>
                    <p className="mb-4">
                        <MathJax.Node inline formula={"A"} /> sharnir
                        <MathJax.Node inline formula={"\\vec{S}_{AC}"} /> –
                        <MathJax.Node inline formula={"AC"} /> sterjendagi,
                        <MathJax.Node inline formula={"\\vec{S}_{AD}"} /> –
                        <MathJax.Node inline formula={"AD"} /> sterjendagi zo’riqish kuchlari hamda
                        <MathJax.Node inline formula={"\\vec{P}"} /> kuch ta’sirida turibdi deb "Uch kuch haqidagi" teoremadan foydalanamiz.
                        Kuchlarni yo’nalishlarini hisobga olib shakldagidek yopiq kuch uchburchagini tuzamiz.
                    </p>
                    <p className="mb-4">
                        Bunda sterjenlar
                        <MathJax.Node inline formula={"A"} /> sharnirni ko’tarib turibdi, deb hisoblaymiz
                        <MathJax.Node inline formula={"\\vec{S}_{AC}"} /> va
                        <MathJax.Node inline formula={"\\vec{S}_{AD}"} /> larni sharnirga tomon yo’naltiramiz.
                    </p>
                    <p className="mb-4">Burchaklar ma’lumligidan sinuslar teoremasini qo’llaymiz:</p>
                    <MathJax.Node formula={"\\frac{S_{AC}}{\\sin(90^\\circ - \\alpha)} = \\frac{S_{AD}}{\\sin(90^\\circ - \\alpha)} = \\frac{P}{\\sin 2\\alpha}"} />
                    <p className="mb-4">Yoki:</p>
                    <MathJax.Node formula={"S_{AC} = S_{AD} = \\frac{P}{2 \\sin \\alpha}"} />
                    <p className="mb-4">
                        Shakldan <MathJax.Node inline formula={"\\sin \\alpha"} /> ni aniqlaymiz:
                    </p>
                    <MathJax.Node formula={"\\sin \\alpha = \\frac{6.1}{\\sqrt{11.65^2 + 6.1^2}} = \\frac{6.1}{13.15} = 0.4639"} />
                    <p className="mb-4">
                        Endi formulaga qo’yib hisoblaymiz:
                    </p>
                    <MathJax.Node formula={"S_{AC} = S_{AD} = \\frac{500}{2 \\cdot 0.4639} = 539 \\ \\text{kN}"} />
                    <p className="mb-4">
                        Demak, <MathJax.Node inline formula={"S_{AC} = S_{AD} = 539 \\ \\text{kN}"} />, bo’lib
                        <MathJax.Node inline formula={"500 \\ \\text{kN}"} /> – yukni ko’tarish uchun har bir sterjenga
                        <MathJax.Node inline formula={"539 \\ \\text{kN}"} /> dan zo’riqish kuchi tushmoqda.
                    </p>
                    <p className="mb-4">
                        Nazariy mexanikada masalalar yechishda geometriya formulalaridan foydalanilsa, masala geometrik usulda yechildi deyiladi.
                    </p>
                </div>
            </div>
        </MathJax.Provider>
        </>

    );
}

export default TheoremProblems;
