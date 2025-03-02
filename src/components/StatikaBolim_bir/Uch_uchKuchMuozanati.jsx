import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import 'katex/dist/katex.min.css'; // Import KaTeX styles
import image1_3Qr from '../../assets/image1_3Qr.png'
import image1_7 from '../../assets/image1_7.png'
import image1_8 from '../../assets/image1_8.png'
import image1_9a from '../../assets/image1_9a.png'
import image1_9b from '../../assets/image1_9b.png'
import Navbar from "../Navbar";
import NavigationButtons from "../home/ArrowButtons";
import qr from '../../assets/qrcode/lesson3qr.png'

function Uch_uchKuchMuozanati() {
    const mathStyle = {
        color: "blue",  // Apply blue color to math formulas
    };

    
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center mt-20 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        1.3 – §. Uch kuch muvozanati haqidagi teoremaga doir masalalar
                    </h1>
                    <div className="text-center mb-6">
                        <a href="https://youtu.be/9fivN9aj_ao">
                            <img
                                src={qr}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto rounded-lg shadow-lg w-48"
                            />
                        </a>
                    </div>
                    {/* 1.1-Masala */}
                    <h2 className="text-lg font-bold mb-4">1.1-masala:</h2>
                    <p className="mb-4">
                        Gorizontga <InlineMath style={mathStyle} math={"\\alpha = 45^\\circ"} /> burchak ostida qo’yilgan stropila oyog’i bo’ylab
                        <InlineMath style={mathStyle} math={"Q=2.5 \\ \\text{kN}"} /> kuch ta’sir qiladi. Bu holda gorizontal to’sin bo’ylab qanday
                        <InlineMath style={mathStyle} math={"\\vec{S}"} /> zo’riqish va vertikal yo’nalishda devorga qanday
                        <InlineMath style={mathStyle} math={"\\vec{P}"} /> bosim kuchi ta’sir qilishni aniqlansin (1.7 – shakl).
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
                        <InlineMath style={mathStyle} math={"O"} /> nuqta muvozanatda turishi kerak. Bu nuqtaga stropila oyog’idan tushayotgan
                        <InlineMath style={mathStyle} math={"\\vec{Q}"} /> kuch, to’singa ta’sir qilayotgan
                        <InlineMath style={mathStyle} math={"\\vec{S}"} /> zo’riqish kuchi, devorga tushayotgan
                        <InlineMath style={mathStyle} math={"\\vec{P}"} /> bosim kuchiga miqdori teng yo’nalishi qarama-qarshi bo’lgan devorning normal reaksiya kuchi
                        <InlineMath style={mathStyle} math={"\\vec{N}"} /> (<InlineMath style={mathStyle} math={"\\vec{P} = -\\vec{N}"} />) ta’sir qiladi.
                    </p>
                    <p className="mb-4">
                        Ya’ni uchta kuch ta’sirida <InlineMath style={mathStyle} math={"O"} /> nuqta muvozanatda turibdi. Ularga "Uch kuch haqidagi" teoremani qo’llab, yopiq kuch uchburchagi tuziladi va uchburchak tomonlari bilan burchaklari orasidagi munosabatdan foydalanib, masala hal qilinadi. Sinuslar teoremasiga ko’ra:
                    </p>
                    <BlockMath style={mathStyle} math={"\\frac{N}{\\sin 45^\\circ} = \\frac{S}{\\sin 45^\\circ} = \\frac{Q}{\\sin 90^\\circ}"} />
                    <p className="mb-4">Demak:</p>
                    <BlockMath style={mathStyle} math={"N = S = Q \\sin 45^\\circ = 2.5 \\cdot 0.71 = 1.77 \\ \\text{kN}"} />
                    <p className="mb-4">
                        Devorga va to’singa bir xil kuch tushib turibdi. Stropila oyog’i bilan to’sin orasidagi burchak o’zgarsa bu qiymatlar o’zgaradi.
                    </p>

                    {/* 1.2-Masala */}
                    <h2 className="text-lg font-bold mb-4">1.2-masala:</h2>
                    <p className="mb-4">
                        Og’irligi <InlineMath style={mathStyle} math={"20 \\ \\text{N}"} /> bo’lgan elektr lampa (fonar)
                        <InlineMath style={mathStyle} math={"AB"} /> sterjen yordamida shipga osilgan va
                        <InlineMath style={mathStyle} math={"BC"} /> sterjen bilan devorga tortib qo’yilgan.
                        Burchaklar <InlineMath style={mathStyle} math={"\\alpha = 60^\\circ"} />, <InlineMath style={mathStyle} math={"\\beta = 135^\\circ"} />
                        deb olib, <InlineMath style={mathStyle} math={"AB"} /> sterjenning
                        <InlineMath style={mathStyle} math={"\\vec{S}_A"} />, <InlineMath style={mathStyle} math={"BC"} /> sterjenning
                        <InlineMath style={mathStyle} math={"\\vec{S}_C"} /> zo’riqish kuchlari aniqlansin (1.8 – shakl).
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
                        Fonar, og’irlik kuchi <InlineMath style={mathStyle} math={"\\vec{P}"} />, sterjenlarning zo’riqish kuchlari
                        <InlineMath style={mathStyle} math={"\\vec{S}_A"} /> va <InlineMath style={mathStyle} math={"\\vec{S}_C"} /> ta’sirida
                        <InlineMath style={mathStyle} math={"B"} /> nuqtada muvozanatda turibdi.
                    </p>
                    <p className="mb-4">
                        Demak, bu kuchlarni o’ziga parallel ko’chirib, yo’nalishlarini e’tiborga olib, yopiq kuch uchburchagini qurib olamiz. Uchburchakning ichki burchaklari ma’lumligidan, hamda sinuslar teoremasidan foydalanib, no’malum kuchlar aniqlanadi:
                    </p>


                    <BlockMath style={mathStyle} math={`S_C = \\frac{P \\cdot \\sin(30^\\circ)}{\\cos(15^\\circ)} = \\frac{200.5}{0.966} = 10.4 \\text{N}`} />
                    <BlockMath style={mathStyle} math={`S_A = \\frac{P \\cdot \\sin(45^\\circ)}{\\cos(15^\\circ)} = \\frac{200.71}{0.966} = 14.6 \\text{N}`} />

                    <p className="mb-4">
                        Javob: S_C = 10.4 N, S_A = 14.6 N.
                    </p>

                    <h3 className="text-lg font-bold mb-4" style={mathStyle}>1.3 – masala. Tog’larda qurilgan temir yo’lda yo’lning dara ichidagi bir qismi</h3>
                    <p className="mb-4">
                        Rasmda ko'rsatilgan kabi, AB osmaga 500 kN kuch ta’sir etadi deb hisoblab, AC va AD sterjenlardagi zo’riqishlarni aniqlash kerak.
                    </p>
                    <p className="mb-4" style={mathStyle}>
                        <b>Yechish:</b> Masaladagi qurilma muvozanat holatida turishi uchun AC va AD sterjenlar biriktirilgan A sharnir qo'yilgan P⃗ kuch ta'sirida muvozanatda turishi kerak.
                    </p>
                    <p className="mb-4">
                        A sharnir S⃗AC – AC sterjendagi, S⃗AD – AD sterjendagi zo’riqish kuchlari hamda P⃗ kuch ta’sirida turibdi deb "Uch kuch haqidagi" teoremadan foydalanamiz.
                    </p>
                    <p className="mb-4">
                        Kuchlarning yo’nalishlarini hisobga olib, shakldagidek yopiq kuch uchburchagini tuzamiz.
                    </p>




                    <p className="mb-4">
                        Bunda sterjenlar A sharnirni ko’tarib turibdi, deb hisoblaymiz. S⃗AC va S⃗AD larni sharnirga tomon yo’naltiramiz.
                        Burchaklar ma’lumligidan sinuslar teoremasini qo’llaymiz.
                    </p>

                    {/* Sinuslar teoremasi */}
                    <BlockMath math={`\\frac{S_{AC}}{\\sin(90^\\circ - \\alpha)} = \\frac{S_{AD}}{\\sin(90^\\circ - \\alpha)} = \\frac{P}{\\sin(2\\alpha)}`} />
                    <BlockMath math={`S_{AC} = S_{AD} = \\frac{P}{2 \\cdot \\sin(\\alpha)}`} />

                    <p className="mb-4">
                        Shakldan, sin(α) ni aniqlaymiz:
                    </p>

                    {/* Sinus hisoblash */}
                    <BlockMath math={`\\sin(\\alpha) = \\frac{6.1}{\\sqrt{11.65^2 + 6.1^2}} = \\frac{6.1}{13.15} = 0.4639`} />

                    <p className="mb-4">
                        Endi formulaga qo‘yib hisoblasak:
                    </p>

                    {/* Hisoblash */}
                    <BlockMath math={`S_{AC} = S_{AD} = \\frac{500}{2 \\cdot 0.4639} = 539 \\text{ kN}`} />

                    <p className="mb-4">
                        Demak, S_AC = S_AD = 539 kN, bo'lib 500 kN yukni ko’tarish uchun har bir sterjenga 539 kN dan zo’riqish kuchi tushmoqda.
                    </p>

                    <p className="mb-4">
                        Nazariy mexanikada
                        <div className="grid lg:grid-cols-2 py-3 justify-center gap-6">
                            <img src={image1_9a} alt="" />
                            <img src={image1_9b} alt="" />
                        </div>
                        masalalar yechishda geometriya formulalaridan foydalanilsa, masala geometrik usulda yechildi deyiladi.
                    </p>

                </div>
            </div>
        </>
    );
}

export default Uch_uchKuchMuozanati;
