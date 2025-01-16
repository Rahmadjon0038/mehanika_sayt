import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Navbar componentasini import qilish
import "katex/dist/katex.min.css"; // KaTeX CSS import qilish

const BirJinsliJismOgirlikMarkazi = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.8-§. Bir jinsli jismlarning og‘irlik markazini aniqlash
                </h2>

                <p className="mb-4">
                    Og‘irligi <InlineMath math="G" /> ga teng bo‘lgan jism <InlineMath math="V" /> hajmga ega bo‘lsin. Og‘irligi <InlineMath math="G_k" /> bo‘lgan bo‘lakcha hajmi <InlineMath math="\Delta V_k" />, <InlineMath math="\gamma_k" /> - hajm birligiga to‘g‘ri kelgan og‘irlik desak,{' '}
                    <InlineMath math="G_k = \gamma_k \Delta V_k" /> deb yozish mumkin.
                </p>

                <p className="mb-4">
                    Agar jism bir jinsli bo‘lsa, hajm birligiga to‘g‘ri kelgan og‘irlik barcha nuqtalar uchun bir xil <InlineMath math="\gamma_k = \gamma" /> bo‘ladi. U holda{' '}
                    <InlineMath math="G_k = \gamma \Delta V_k \qquad (2.23)" /> deb yozish mumkin.
                </p>

                <p className="mb-4">
                    (2.23) formuladagi <InlineMath math="G_k" /> qiymatini (2.22) ga qo‘yib, hajmga ega bo‘lgan bir jinsli jismning og‘irlik markazi radius vektori va koordinatalarini quyidagicha yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\vec{r_c} = \\frac{\\sum \gamma \\cdot \Delta V_k \\cdot \\vec{r_k}}{\\sum \gamma \\cdot \Delta V_k} = \\frac{\\sum \Delta V_k \\cdot \\vec{r_k}}{V} \\qquad (2.24)`} />
                </div>











                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`x_c = \\frac{\\sum \\Delta V_k x_k}{V}, \\quad y_c = \\frac{\\sum \\Delta V_k y_k}{V}, \\quad z_c = \\frac{\\sum \\Delta V_k z_k}{V}  \\qquad (2.25)`} />
                </div>

                <p className="mb-4">
                    Bu formulada <InlineMath math="V = \\sum \\Delta V_k" /> butun jism hajmini ifodalaydi. (2.24) formuladan <InlineMath math="n \\to \infty" /> da yig‘indining limiti hajm bo‘yicha olingan aniq integralni bildiradi.
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\vec{r_C} = \\frac{\\int_V \\vec{r} \\, dV}{V} \\qquad (2.26)`} />
                    <BlockMath math={`x_c = \\frac{\\int_V x \\, dV}{V}, \\quad y_c = \\frac{\\int_V y \\, dV}{V}, \\quad z_c = \\frac{\\int_V z \\, dV}{V} \\qquad (2.27)`} />
                </div>

                <p className="mb-4">
                    bu yerda <InlineMath math="V = \\int_V dV" /> - butun jism hajmi.
                </p>

                <p className="mb-4">
                    Yuzaga ega bo‘lgan jism uchun ham og‘irlik markazining radius vektori va koordinatalari xuddi shunday aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\vec{r_c} = \\frac{\\sum \Delta S_k \\vec{r_k}}{S} \\qquad (2.28)`} />
                    <BlockMath math={`x_c = \\frac{\\sum \\Delta S_k x_k}{S}, \\quad y_c = \\frac{\\sum \\Delta S_k y_k}{S}, \\quad z_c = \\frac{\\sum \\Delta S_k z_k}{S} \\qquad (2.29)`} />
                </div>

                <p className="mb-4">yoki</p>

                {/* Davomi keyingi javobda */}




                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\vec{r_c} = \\frac{\\int_S \\vec{r} \\, dS}{S} \\qquad (2.30)`} />
                    <BlockMath math={`x_c = \\frac{\\int_S x \\, dS}{S}, \\quad y_c = \\frac{\\int_S y \\, dS}{S}, \\quad z_c = \\frac{\\int_S z \\, dS}{S} \\qquad (2.31)`} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math="S" /> - butun sirt yuzasi. <InlineMath math="x_k, y_k, z_k" /> lar <InlineMath math="\Delta S_k" /> sirt bo‘laklari og‘irlik markazlarining koordinatalari.
                </p>

                <p className="mb-4">
                    Uzunlikka ega bo‘lgan jismlar og‘irlik markazlarining radius vektori va koordinatalari ham quyidagicha aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\vec{r_c} = \\frac{\\sum \\Delta l_k \\vec{r_k}}{L} \\qquad (2.32)`} />
                    <BlockMath math={`x_c = \\frac{\\sum \\Delta l_k x_k}{L}, \\quad y_c = \\frac{\\sum \\Delta l_k y_k}{L}, \\quad z_c = \\frac{\\sum \\Delta l_k z_k}{L} \\qquad (2.33)`} />
                </div>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\vec{r_c} = \\frac{\\int_L \\vec{r} \\, dL}{L} \\qquad (2.34)`} />
                    <p className="mt-2">yoki</p>
                    <BlockMath math={`x_c = \\frac{\\int_L x \\, dL}{L}, \\quad y_c = \\frac{\\int_L y \\, dL}{L}, \\quad z_c = \\frac{\\int_L z \\, dL}{L} \\qquad (2.35)`} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math="L = \\sum l_k" /> - butun chiziqning uzunligi. <InlineMath math="x_k, y_k, z_k" /> lar <InlineMath math="\Delta l_k" /> bo‘lak og‘irlik markazining koordinatalari. (2.24), (2.26), (2.28), (2.30), (2.32), (2.34) formulalardan kasr suratidagi kattaliklar mos ravishda hajm, yuza va chiziqning nuqtaga nisbatan statik momentlarini ifodalaydi.
                </p>

                <p className="mb-4">
                    (2.25), (2.27), (2.29), (2.31), (2.33) va (2.35) formulalarning kasr suratidagi skalyar kattaliklar hajm, yuza yoki chiziqning mos koordinata tekisliklariga nisbatan statik momentlarini ifodalaydi.
                </p>



            </div>
        </>
    );
};

export default BirJinsliJismOgirlikMarkazi;