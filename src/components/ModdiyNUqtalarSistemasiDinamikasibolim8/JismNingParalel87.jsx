import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image8_13 from '../../assets/bolim@8image/image8_13.png';

const JismNingParalel87 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    8.7 – §. Jismning parallel o‘qlarga nisbatan inersiya momentlarini
                    hisoblash (Gyuygens–Shteyner teoremasi)
                </h2>

                <p className="mb-4">
                    O‘zaro parallel o‘qlarga nisbatan jismning inersiya momentlari
                    orasidagi bog‘liqlikni ko‘rib chiqamiz. Aytaylik, ikkita Dekart
                    koordinatalar sistemasi berilgan bo‘lsin. Ulardan biri{" "}
                    <InlineMath math={"C x' y' z'"} /> sistema massalar markaziga
                    o‘rnatilgan, ikkinchisi <InlineMath math={"Oxyz"} /> o‘qlarini unga mos
                    ravishda parallel qilib ixtiyoriy <InlineMath math={"O"} /> nuqtaga
                    o‘rnatilgan.
                </p>

                <p className="mb-4">
                    Mexanik sistemaning biror <InlineMath math={"M_k"} /> nuqtasining
                    massasi <InlineMath math={"m_k"} />,{" "}
                    <InlineMath math={"Oxyz"} /> sistemasidagi koordinatalari{" "}
                    <InlineMath math={"x_k,\\; y_k,\\; z_k"} />,{" "}
                    <InlineMath math={"C x' y' z'"} /> sistemaga nisbatan koordinatalari{" "}
                    <InlineMath math={"x'_k,\\; y'_k,\\; z'_k"} /> bo‘lsin.{" "}
                    <InlineMath math={"(8.17)"} /> formulaga ko‘ra o‘qlarga nisbatan
                    sistemaning inersiya momentini quyidagicha yozish mumkin:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Oz} = \\sum m_k\\bigl(x_k^2 + y_k^2\\bigr), \\quad (8.25)"} />
                </div>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
I_{Cz'} = \\sum m_k\\bigl({x'_k}^2 + {y'_k}^2\\bigr) 
\\quad (8.26)
          `}
                    />
                </div>

                <p className="mb-4">
                    Agar massalar markazi <InlineMath math={"C"} /> nuqtaning{" "}
                    <InlineMath math={"Oxyz"} /> koordinatalar sistemasiga nisbatan
                    koordinatalarini <InlineMath math={"x_C,\\; y_C,\\; z_C"} /> desak,
                    jism ixtiyoriy <InlineMath math={"M_k"} /> nuqtasining parallel
                    koordinatalar sistemasidagi koordinatalari bilan quyidagi munosabatni
                    o‘rnatish mumkin (8.13-shakl):
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_13}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    <InlineMath math={"x_k = x'_k + x_C, \\; y_k = y'_k + y_C, \\; z_k = z'_k + z_C"} />
                </p>

                <p className="mb-4">
                    Bu qiymatlarni <InlineMath math={"(22.18)"} /> (yoki{" "}
                    <InlineMath math={"(8.17)"} /> deb ham nazarda tutishingiz mumkin)
                    formulaga qo‘yib, hisoblashlardan keyin{" "}
                    <InlineMath math={"I_{Oz}"} /> uchun quyidagi ifodaga ega bo‘lamiz:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
I_{Oz} 
= \\sum_{k=1}^N m_k \\bigl({x'_k}^2 + {y'_k}^2\\bigr) 
+ 2 x_C \\sum_{k=1}^N m_k x'_k 
+ 2 y_C \\sum_{k=1}^N m_k y'_k 
+ (x_C^2 + y_C^2) \\sum_{k=1}^N m_k
          `}
                    />
                </div>

                <p className="mb-4">
                    bu yerda <InlineMath math={"\\sum_{k=1}^N m_k = m"} /> jism massasi,{" "}
                    <InlineMath math={"\\sum m_k x'_k = m x'_C = 0"} /> va{" "}
                    <InlineMath math={"\\sum m_k y'_k = m y'_C = 0"} /> ekanini hisobga
                    olamiz, chunki koordinata boshi <InlineMath math={"C"} /> nuqtada{" "}
                    <InlineMath math={"x'_C = 0"} />, <InlineMath math={"y'_C = 0"} />.
                </p>

                <p className="mb-4">
                    Agar <InlineMath math={"Oz"} /> va <InlineMath math={"Cz'"} /> o‘qlar
                    orasidagi masofani <InlineMath math={"x_C^2 + y_C^2 = d^2"} /> desak
                    hamda 
                    <BlockMath math={"\\sum_{k} m_k \\bigl(x'_k{}^2 + y'_k{}^2\\bigr) = I_{Cz'}"} />

                    ekanini hisobga olsak, formula quyidagi ko‘rinishni oladi:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Oz} = I_{Cz'} + m\\,d^2 \\quad (8.27)"} />
                </div>

                <p className="mb-4">
                    Bu formula bittasi massalar markazidan o‘tuvchi, ikkinchisi unga
                    parallel bo‘lgan o‘qlarga nisbatan jismning inersiya momentlari
                    orasidagi munosabatni bildiruvchi, <strong>Gyuygens</strong> yoki{" "}
                    <strong>Shteyner</strong> nomi bilan yuritiladigan teoremaning
                    ifodasidir, u quyidagicha o‘qiladi: <br />{" "}
                    <em>
                        Sistema (yoki jism)ning biror o‘qqa nisbatan inersiya momenti
                        massalar markazidan shu o‘qqa parallel o‘tgan o‘qqa nisbatan
                        inersiya momentiga <span className="te">sistema (jism) massasi bilan o‘qlar orasidagi
                            masofa kvadrati ko‘paytmasining qo‘shilganiga teng </span>
                    </em>
                </p>
            </div>
        </>
    );
};

export default JismNingParalel87; 