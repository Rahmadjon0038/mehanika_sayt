import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image8_8 from '../../assets/bolim@8image/image8_8.png';
import image8_9 from '../../assets/bolim@8image/image8_9.png';


const MarkazgaVaOqqa85 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    8.5 – §. Markazga va o‘qqa nisbatan inersiya momentlari. Inersiya radiusi
                </h2>

                <p className="mb-4">
                    Mexanik sistema <InlineMath math={"n"} /> ta moddiy nuqtadan tashkil
                    topgan bo‘lsin. Sistema ixtiyoriy <InlineMath math={"M_k"} /> nuqtasining
                    massasi <InlineMath math={"m_k"} />, mazkur nuqtadan qo‘zg‘almas{" "}
                    <InlineMath math={"O"} /> nuqtagacha masofani{" "}
                    <InlineMath math={"r_k"} /> deb belgilasak, quyidagi ta’rif o‘rinli
                    bo‘ladi.
                </p>

                <p className="mb-4 te">
                    <InlineMath math={"n"} /> ta moddiy nuqtadan tashkil topgan mexanik
                    sistema (jism)ning biror <InlineMath math={"O"} /> markazga nisbatan
                    inersiya momenti deb, nuqtalarning massasi bilan mazkur nuqtalardan{" "}
                    <InlineMath math={"O"} /> markazgacha bo‘lgan masofalarning kvadrati
                    ko‘paytmalarining yig‘indisiga aytiladi (8.8-shakl):
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_8}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_0 = \\sum_{k=1}^n m_k\\,r_k^2 \\quad (8.9)"} />
                </div>

                <p className="mb-4">
                    Biror markazga (nuqtaga) nisbatan inersiya momenti odatda sistemaning{" "}
                    <em>qutb inersiya momenti</em> deyiladi. Agar mexanik sistema to‘liq
                    muhitdan iborat qattiq jism bo‘lsa, jismda olingan elementar bo‘lakcha
                    massasini <InlineMath math={"dm"} /> va bo‘lakchadan{" "}
                    <InlineMath math={"O"} /> nuqtagacha masofani{" "}
                    <InlineMath math={"r"} /> desak, <InlineMath math={"(8.9)"} /> yig‘indini
                    integral bilan almashtirish mumkin:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_0 = \\int_V r^2 \\, dm \\quad (8.10)"} />
                </div>

                <p className="mb-4 te">
                    <InlineMath math={"n"} /> ta moddiy nuqtadan tashkil topgan mexanik
                    sistemaning (jismning) biror <InlineMath math={"OZ"} /> o‘qqa nisbatan
                    inersiya momenti deb, jismda olingan nuqtalarning massalari bilan
                    mazkur nuqtadan o‘qqacha bo‘lgan masofa kvadrati ko‘paytmalarining
                    yig‘indisiga teng skalyar kattalikka aytiladi (8.9-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_9}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{OZ} = \\sum_k m_k\\,h_k^2 \\quad (8.11)"} />
                </div>

                <p className="mb-4">
                    Xususiy holda, agar sistema qattiq jism bo‘lib, qattiq jism to‘liq
                    muhitdan iborat bo‘lsa, <InlineMath math={"(8.11)"} /> formuladagi
                    yig‘indi belgisini integral bilan almashtirish mumkin. <InlineMath math={"V"} /> –
                    jism hajmi, <InlineMath math={"\\rho"} /> – jism materialining zichligi va
                    elementar bo‘lakchaning massasi <InlineMath math={"dm = \\rho\\, dV"} />{" "}
                    ekani hisobga olinsa, <InlineMath math={"(8.11)"} /> quyidagi
                    ko‘rinishga keladi:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "I_{OZ} = \\int_V h^2 \\, dm \\quad \\text{yoki} \\quad I_{OZ} = \\int_V \\rho\\,h^2 \\, dV \\quad (8.12)"
                        }
                    />
                </div>

                <p className="mb-4">
                    Inersiya momentining xalqaro birliklar sistemasidagi o‘lchov birligi{" "}
                    <InlineMath math={"\\text{kg}\\cdot\\text{m}^2"} />.
                </p>

                <p className="mb-4">
                    Markazga va o‘qqa nisbatan inersiya momentlari noldan farqli skalyar va
                    musbat kattalik. Formulalardan ko‘rinib turibdiki, bir xil shakldagi
                    har xil materialdan yasalgan jismlarning inersiya momentlari har xil
                    bo‘ladi. Shuning uchun massaga bog‘liq bo‘lmagan kattalik{" "}
                    <em>inersiya radiusi</em> tushunchasi qabul qilingan. <span className="te"> Qattiq jismning
                        biror <InlineMath math={"OZ"} /> o‘qqa nisbatan inersiya radiusi deb,
                        quyidagi formula bilan aniqlanadigan kattalikka aytiladi. </span>
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"i_z = \\sqrt{\\frac{I_{OZ}}{m}} \\quad (8.13)"} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math={"m"} /> jism massasi. Agar jismning biror
                    o‘qqa nisbatan inersiya radiusi berilgan bo‘lsa, shu o‘qqa nisbatan
                    inersiya momenti
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{OZ} = m \\cdot i_z^2 \\quad (8.14)"} />
                </div>

                <p className="mb-4">
                    formuladan aniqlanadi. Muhandislik hisoblashlarda qo‘llanish uchun
                    ma’lumotnomalarda har xil jismlar uchun ko‘rsatilgan o‘qlarga
                    nisbatan inersiya radiuslarining qiymatlari beriladi.
                </p>

                <p className="mb-4 te">
                    Jismning inersiya radiusi deb, aylanish o‘qidan shunday nuqtagacha
                    bo‘lgan masofaga aytiladiki, bu nuqtaga jism massasini joylashtirib
                    inersiya momenti hisoblansa, jismning o‘qqa nisbatan inersiya
                    momentiga teng bo‘ladi.
                </p>

                <p className="mb-4">
                    Jismlarning o‘qqa nisbatan inersiya radiuslari uzunlik birligida
                    o‘lchanadi.
                </p>
            </div>
        </>
    );
};

export default MarkazgaVaOqqa85;