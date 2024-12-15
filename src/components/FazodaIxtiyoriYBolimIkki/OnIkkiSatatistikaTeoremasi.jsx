import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Navbar componentasini import qilish
import "katex/dist/katex.min.css"; // KaTeX CSS import qilish
import image2_23a from '../../assets/bolim@2Image/image2_23a.png';

const StatikaningAsosiyTeoremasi = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.12 – §. Statikaning asosiy teoremasi (Lui Puanso teoremasi)
                </h2>

                <p className="mb-4">
                    Bu paragrafda kuchni o’ziga parallel ko’chirish to’g’risidagi Puanso lemmasidan foydalanib, fazoda ixtiyoriy joylashgan kuchlar sistemasini, mazkur sistemaga ekvivalent, soddaroq ko’rinishda bo’lgan bitta kuch va bitta juft bilan almashtirish to’g’risidagi statikaning asosiy teoremasi isbotlanadi.
                </p>

                <p className="mb-4">
                    Jismning A1, A2, …, An nuqtalariga qo’yilgan, fazoda ixtiyoriy joylashgan F1, F2, …, Fn kuchlar sistemasi berilgan bo’lsin. Jismda biror O nuqtani tanlab, mazkur nuqtaga berilgan kuchlarning barchasini ko’chiramiz. O keltirish markazini koordinatalar sistemasi markazi deb qabul qilamiz.
                </p>

                <p className="mb-4">
                    Kuchlar qo’yilgan nuqtalarning radius vektorlari mos ravishda r1, r2, …, rn bo’lsin (2.23a – shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image2_23a}
                        alt="Kuchlar qo'yilgan nuqtalar"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Puanso lemmasiga asosan, F1 kuchni O nuqtaga keltirsak, O nuqtada F'1 kuch va momenti M1(F1) bo’lgan juft kuch hosil bo’ladi. F2 kuchni O nuqtaga keltirsak, u erda F'2 kuch va M2(F2) moment hosil bo’ladi. Shuningdek, qolgan barcha kuchlar O keltirish markaziga ko’chirilsa, markazda F1', F2', …, Fn' kuchlar sistemasi va momentlari mo(F1), mo(F2), …, mo(Fn) bo’lgan M1, M2, …, Mn juftlar sistemasi hosil bo’ladi. F1', F2', …, Fn' kuchlar sistemasini bir nuqtaga qo’yilgan kuchlar sistemasi kabi, geometrik qo’shish mumkin.
                </p>



                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`R' = F_1' + F_2' + \\dots + F_n' = F_k'`} />
                    <p className="mt-2">yoki</p>
                    <BlockMath math={`F_1' = F_1, \\quad F_2' = F_2, \\quad \\dots \\quad F_n' = F_n`} />
                    <p className="mt-2">ekanligini hisobga olsak</p>
                    <BlockMath math={`R = F_1 + F_2 + \\dots + F_n = \\sum_{k=1}^{n} F_k, \\quad R = \\sum_{k=1}^{n} F_k \\quad (2.40)`} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math={`R`} /> – fazoda ixtiyoriy joylashgan kuchlar sistemasining geometrik yig'indisi bo'lib, unga bosh vektor deyiladi.
                </p>

                <p className="mb-4">
                    Kuchlar <InlineMath math={`O`} /> markazga ko'chirilganda hosil bo'lgan juft momentlarini quyidagicha yozish mumkin:
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`m_o(F_1) = r_1 \\times F_1, \\quad m_o(F_2) = r_2 \\times F_2, \\quad \\dots \\quad m_o(F_n) = r_n \\times F_n`} />
                    <p className="mt-2">Bu momentlarning barchasi bitta <InlineMath math={`O`} /> nuqtaga nisbatan olinganligi uchun ularni ham geometrik qo'shish imkoniyatiga egamiz</p>
                    <BlockMath math={`m_o(F_1) + m_o(F_2) + \\dots + m_o(F_n) = m_o(F_k)`} />
                    <BlockMath math={`M_o = \\sum_{k=1}^{n} m_o(F_k) \\quad (2.41)`} />
                </div>
                <p className="mb-4">
                    <InlineMath math={`M_o`} /> - fazoda ixtiyoriy joylashgan kuchlardan biror nuqtaga nisbatan olingan momentlarning geometrik yig'indisi bo'lib, unga bosh moment deyiladi.
                </p>
                 <p className="mb-4">
                    Bu tasdiqlar statikaning asosiy teoremasi bo'lgan quyidagi Puanso teoremasining isbotini ifodalaydi.
                        
                        **Teorema:** Fazoda ixtiyoriy joylashgan <InlineMath math={`F_1, F_2, ..., F_n`} /> kuchlar sistemasini jismda tanlab olingan keltirish markaziga qo'yilgan bitta bosh vektor va momenti berilgan kuchlardan keltirish markaziga nisbatan olingan momentlarning geometrik yig'indisiga teng bo'lgan bitta bosh moment bilan almashtirish mumkin.
                </p>
                <p className="mb-4">
                Bunday usul kuchlar sistemasini bir markazga keltirish, kuchlar sistemasini sodda holga keltirish deyiladi.
                </p>

                <p className="mb-4">
                    Bosh vektorning o'qlardagi proyeksiyalarini (2.40) ga asosan, quyidagicha yozish mumkin:
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`
                        \\begin{cases}
                            R_x = \\sum_{k=1}^{n} F_{kx} = F_{1x} + F_{2x} + \\dots + F_{nx} \\\\
                            R_y = \\sum_{k=1}^{n} F_{ky} = F_{1y} + F_{2y} + \\dots + F_{ny} \\\\
                            R_z = \\sum_{k=1}^{n} F_{kz} = F_{1z} + F_{2z} + \\dots + F_{nz}
                        \\end{cases} \\quad (2.42)
                    `} />
                     <p className="mt-2">yoki</p>
                     <BlockMath math={`R = \\sqrt{R_x^2 + R_y^2 + R_z^2} \\quad (2.43)`} />
                     <p className="mt-2">Bulardan foydalanib bosh vektorning miqdori quyidagi formuladan aniqlanadi:</p>
                     <BlockMath math={`R = \\sqrt{F_{kx}^2 + F_{ky}^2 + F_{kz}^2}`} />

                </div>

                <p className="mb-4">
                    Agar <InlineMath math={`\\alpha, \\beta, \\gamma`} /> – burchaklar bosh vektorning mos ravishda <InlineMath math={`x, y, z`} /> koordinata o'qlari bilan tashkil qilgan burchaklari bo'lsa, uning yo'naltiruvchi kosinuslari quyidagi formulalardan aniqlanadi:
                </p>
                  <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\cos \\alpha = \\frac{R_x}{R}, \\quad \\cos \\beta = \\frac{R_y}{R}, \\quad \\cos \\gamma = \\frac{R_z}{R} \\quad (2.44)`} />
                  </div>

                  <p className="mb-4">
                    Bosh momentning koordinata o'qlaridagi proyeksiyalarini quyidagicha yozish mumkin:
                </p>
                   <div className="bg-gray-200 p-4 rounded-md mb-4">
                       <BlockMath math={`M_{Ox} = m_{Ox}(F_k), \\quad M_y = m_{Oy}(F_k), \\quad M_z = m_{Oz}(F_k) \\quad (2.45)`} />
                    <p className="mt-2">Bulardan miqdori:</p>
                    <BlockMath math={`M_0 = \\sqrt{M_x^2 + M_y^2 + M_z^2} \\quad (2.46)`} />
                    <p className="mt-2">formuladan aniqlanadi:</p>
                    <p className="mt-2">Yo'nalishi esa:</p>
                    <BlockMath math={`\\cos \\theta_1 = \\frac{M_x}{M_0}, \\quad \\cos \\theta_2 = \\frac{M_y}{M_0}, \\quad \\cos \\theta_3 = \\frac{M_z}{M_0} \\quad (2.47)`} />
                   </div>
                 <p className="mb-4">
                ko'rinishdagi yo'naltiruvchi kosinuslari yordamida aniqlanadi. Bu yerda <InlineMath math={`\\theta_1, \\theta_2, \\theta_3`} /> – burchaklar bosh momentning mos ravishda <InlineMath math={`x, y, z`} /> koordinata o'qlari bilan tashkil qilgan burchaklari.
                </p>
            </div>
        </>
    );
};

export default StatikaningAsosiyTeoremasi;