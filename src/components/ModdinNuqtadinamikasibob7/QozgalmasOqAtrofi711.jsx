import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image7_18 from '../../assets/bolim@7image/image7_18.png'; // Rasm yo'lini to'g'rilang

const QozgalmasOqAtrofi711 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.11-§. Qo’zg’almas o’q atrofida aylanma harakatdagi jismga qo’yilgan kuchning bajargan ishini hisoblash.
                </h2>

                <p className="mb-4">
                    Aylanma harakatdagi jismning <InlineMath math={"B"} /> nuqtasiga qo`yilgan <InlineMath math={"\\vec{F}"} /> kuchning bajargan ishining hisoblash uchun, uni <InlineMath math={"B\\tau nb"} /> tabiiy koordinata o`qlariga proyektsiyalaymiz. Kuchning <InlineMath math={"B\\tau"} /> o`qdagi proyektsiyasi <InlineMath math={"F_\\tau"} /> bajargan elementar ishi quyidagi formuladan aniqlanadi (boshqa o`qlardagi proyektsiyalaning bajargan ishi nolga teng)(7.18 - shakl):
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"dA = F_\\tau \cdot ds = F_\\tau \cdot h \cdot d\\varphi"} />
                </div>

                <div className="text-center py-6">
                    <img
                        src={image7_18}
                        alt="7.18-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    bu yerda, <InlineMath math={"ds = h \\cdot d\\varphi"} /> kuch qo’yilgan nuqta ko’chishidagi yoy differensiali, <InlineMath math={"d\\varphi"} /> jism aylanish burchagining differensiali. <InlineMath math={"F_\\tau \cdot h"} /> kattalik <InlineMath math={"\\vec{F}"} /> kuchning aylanish o’qiga nisbatan momenti.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"M_e = \\text{mom}_z \\vec{F} = F_\\tau \\cdot h"} />
                </div>

                <p className="mb-4">
                    belgilashni hisobga olib,
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"dA = M_z \cdot d\\varphi \\qquad (7.37)"} />
                </div>

                <p className="mb-4">
                    deb yozish mumkin. Agar jismning aylanish burchagi ma’lum bo’lsa, <InlineMath math={"\\vec{F}"} /> kuchning to’la bajargan ishini hisoblash mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"A = \\int_0^\\varphi M_z \\cdot d\\varphi \\qquad (7.38)"} />
                </div>

                <p className="mb-4">
                    (7.37) tenglikni ikki tomonini <InlineMath math={"dt"} /> ga bo’lsak, qo’zg’almas o’q atrofida aylanma harakatdagi jismga qo’yilgan kuchning quvvati aniqlanadi.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"W = M_z \\cdot \\omega \\qquad (7.39)"} />
                </div>

                <p className="mb-4 te">
                    Demak, aylanayotgan jismga qo’yilgan kuchning quvvati aylantiruvchi moment bilan jismning burchak tezligi kopaytmasiga teng.
                </p>

                <p className="mb-4">
                    (7.39) tenglikdan quyidagi natija kelib chiqadi. <span className="te"> Ma’lum bir quvvatga ega bo’lgan holda aylantiruvchi momentning miqdori orttirilsa, burchak tezlik kamayadi, yoki aksincha, burchak tezlik oshirilsa, aylantiruvchi momentning miqdori kamayadi. </span>
                </p>
            </div>
        </>
    );
};

export default QozgalmasOqAtrofi711;
