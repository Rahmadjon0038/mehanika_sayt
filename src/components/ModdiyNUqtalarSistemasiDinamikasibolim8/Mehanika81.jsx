import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
// Agar shakllar kerak bo'lsa, ularni shu tarzda import qiling
import image8_1 from '../../assets/bolim@8image/image8_1.png';

const Mehanika81 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    8.1 – §. Mexanik sistema massasi. Mexanik sistema massalar markazi.
                </h2>

                {/* Taqdimot */}
                <p className="mb-4 te">
                    Harakatlari va holatlari o’zaro bog’liq bo’lgan moddiy nuqtalar to’plami –
                    <strong> moddiy nuqtalar sistemas</strong> yoki <strong> mexanik sistema</strong> deyiladi.
                </p>

                <p className="mb-4">
                    Ixtiyoriy ko’rinishdagi mashina va mexanizmlar mexanik sistemaga misol bo’la oladi.
                    <span className="te">
                        Harakati davomida mexanik sistema nuqtalari orasidagi masofa o’zgarmasdan qolsa,
                        bunday sistema <strong> o’zgarmas mexanik sistema</strong> deyiladi. </span>Qattiq jismlar ham
                    o’zgarmaydigan mexanik sistema deb qabul qilinadi. Bunda qattiq jismni
                    tashkil qiluvchi nuqtalari orasidagi masofa jismning o’lchamlariga nisbatan
                    juda kichik bo'lganligidan massa hajm bo’yicha tarqalgan deb hisoblanadi.
                </p>

                {/* Sistema Massasi */}
                <p className="mb-4">
                    Mexanik sistema
                    <strong> n ta moddiy nuqtadan</strong> tashkil topgan bo’lib, ularning massalari
                    <InlineMath math={"m_1, m_2, \dots, m_n"} /> bo’lsin. Dekart koordinatalar sistemasida
                    mazkur <InlineMath math={"n"} /> ta nuqtadan tashkil topgan mexanik sistema
                    <InlineMath math={"M_1, M_2, \dots, M_n"} /> moddiy nuqtalarning
                    koordinatalar boshiga nisbatan radius-vektorilari mos ravishda
                    <InlineMath math={"\\mathbf{r}_1, \\mathbf{r}_2, \dots, \\mathbf{r}_n"} />
                    bo’lib, ularning koordinatalari
                    <InlineMath math={"x_1, y_1, z_1, x_2, y_2, z_2, \dots, x_n, y_n, z_n"} /> bo’lsin
                    (<InlineMath math={"8.1 – shakl"} />).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_1}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                    <p className="mb-4 te">
                        Sistema tashkil qiluvchi barcha nuqtalar massalarining yigʻindisiga
                        <strong> mexanik sistema massasi</strong> deyiladi:
                    </p>

                    <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                        <BlockMath math={"m = \sum_{k=1}^{n} m_k \quad (8.1)"} />
                    </div>

                    {/* Massalar Markazi */}
                    <p className="mb-4 te">
                        Radius vektori quyidagi formula bilan aniqlanadigan <strong>C nuqta</strong>
                        <strong> moddiy nuqtalar sistemasining massalar markazi</strong> deyiladi:
                    </p>

                    <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                        <BlockMath math={"\\mathbf{r}_c = \\frac{1}{m} \\sum_{k=1}^{n} m_k \\mathbf{r}_k \\quad (8.2)"} />
                    </div>

                    <p className="mb-4">
                        <InlineMath math={"(8.2)"} /> ifodani Dekart koordinatalar sistemasiga proyeksiyalab,
                        massalar markazining koordinatalarini aniqlash mumkin:
                    </p>

                    <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                        <BlockMath math={
                            `
                        x_c = \\frac{1}{m} \\sum_{k=1}^{n} m_k x_k, \\quad 
                        y_c = \\frac{1}{m} \\sum_{k=1}^{n} m_k y_k, \\quad 
                        z_c = \\frac{1}{m} \\sum_{k=1}^{n} m_k z_k \\quad (8.3)
                        `
                        } />
                    </div>

                    <p className="mb-4">
                        Bu formuladagi <InlineMath math={"\\mathbf{r}_k"} /> va
                        <InlineMath math={"x_k, y_k, z_k"} /> lar mos ravishda mexanik sistema
                        <InlineMath math={"M_k"} /> moddiy nuqtasining radius-vektori va uning koordinatalari.
                    </p>

                    <p className="mb-4">
                        <InlineMath math={"(8.2)"} /> va
                        <InlineMath math={"(8.3)"} /> formulalardan koʻrinib turibdiki, mexanik sistema
                        oʻzgarmaydigan, qattiq jismdan iborat bo`lsa, massalar markazi ogʻirlik markazi bilan
                        ustma-ust tushadi. Agar
                        <InlineMath math={"(8.2) = \\frac{1}{m} \\sum_{k=1}^{n} m_k g \\mathbf{r}_k"} />
                        tenglamaning ikki tomonini <InlineMath math={"g"} /> erkin tushish tezlanishiga koʻpaytirib,
                        <InlineMath math={"G = mg"} /> ekanini hisobga olsak, u quyidagi koʻrinishni oladi:
                    </p>

                    <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                        <BlockMath math={
                            `
                        \\mathbf{r}_c = \\frac{1}{mg} \\sum_{k=1}^{n} G \\mathbf{r}_k 
                        \\quad yoki \\quad 
                        \\mathbf{r}_c = \\frac{1}{G} \\sum_{k=1}^{n} G \\mathbf{r}_k 
                        `
                        } />
                    </div>

                    <p className="mb-4">
                        Sistema massalari markazi sistemaning biror nuqtasi bilan ustma-ust tushmasligi ham
                        mumkin. Masalan, bir jinsli halqaning massalar markazi geometrik markazida bo’ladi va
                        halqaga tegishli bo’lmaydi.
                    </p>

                    <p className="mb-4">
                        <InlineMath math={"(8.2)"} /> va
                        <InlineMath math={"(8.3)"} /> formulalardan koʻramizki, sistema massalari markazning
                        holati ta’sir etuvchi kuchlarga bog’liq bo’lmay, sistema nuqtalari massalarining
                        taqsimlanishiga bog’liq bo’ladi. Mexanik sistema harakatini o’rganishda
                        <strong> massalar markazi</strong> tushunchasi katta ahamiyatga ega.
                    </p>

                    <p className="mb-4">
                        Agar moddiy nuqtalar sistemasini tashkil qiluvchi moddiy nuqtalar bir-biriga
                        nisbatan harakatlansa, massalar markazi ogʻirlik markazi bilan bir nuqtada bo’lmaydi.
                        Dinamikada massalar markazi tushunchasini ishlatish maqsadga muvofiq.
                        <strong> Massalar markazini inersiya markazi</strong> ham deyish mumkin.
                    </p>

                </div>
            </div>
        </>
    );
};

export default Mehanika81; 