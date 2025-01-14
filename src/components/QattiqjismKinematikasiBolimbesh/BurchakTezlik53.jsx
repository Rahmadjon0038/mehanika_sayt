import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image5_4 from '../../assets/bolim@5image/image5_4.png';

const BurchakTezlik53 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    5.3 – §. Burchak tezlik va burchak tezlanish vektorlari
                </h2>

                <p className="mb-4 te">
                    Qo'zg'almas o'q atrofida harakat qilayotgan qattiq jism **burchak tezligining
                    vektori** deb shunday kattalikka aytiladiki, bu vektorning moduli jismning aylanish
                    burchagidan vaqt bo'yicha olingan birinchi tartibli hosilaning absolyut qiymatiga
                    teng, yo'nalishi aylanish o'qi bo'ylab yo'nalgan bo'ladi. Shu vektorning uchidan
                    qaraganimizda jism **soat miliga teskari yo'nalishda** aylanayotgan ko'rinadi
                    (5.4a-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image5_4}
                        alt="Qo'zg'almas o'q atrofida aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">Demak, ta'rifga ko'ra:</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\vec{\\omega} = \\frac{d\\varphi}{dt} \\vec{k} = \\omega_z \\vec{k} \\quad \\ (5.13)"} />
                </div>

                <p className="mb-4">
                    Bu yerda, <InlineMath math={"\\vec{k}"} /> - Oz o'qining birlik vektori,{" "}
                    <InlineMath math={"\\omega_z"} /> - burchak tezlik vektorining Oz o'qi bo'ylab
                    proyeksiyasi.
                </p>

                <p className="mb-4 te">
                    Burchak tezlik vektoridan vaqt bo'yicha olingan birinchi tartibli hosila **burchak
                    tezlanish vektori** deyiladi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\vec{\\varepsilon} = \\frac{d\\vec{\\omega}}{dt} = \\frac{d\\omega_z}{dt} \\vec{k} = \\varepsilon_z \\vec{k} \\quad \\ (5.14)"} />
                </div>

                <p className="mb-4">
                    Bu yerda, <InlineMath math={"\\varepsilon_z = \\frac{d^2\\varphi}{dt^2}"} /> - burchak
                    tezlanish vektorining Oz o'qi bo'ylab proyeksiyasi.
                </p>

                <p className="mb-4">
                    (5.14) formuladan ko'rinadiki, <InlineMath math={"\\vec{\\varepsilon}"} /> vektori
                    ham Oz o'qi bo'ylab yo'nalgan, va agar:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>
                        <InlineMath math={"\\varepsilon_z > 0"} /> bo'lsa,{" "}
                        <InlineMath math={"\\vec{\\varepsilon}"} /> vektori{" "}
                        <InlineMath math={"\\vec{\\omega}"} /> vektori bilan bir xil yo'nalishda.
                    </li>
                    <li>
                        <InlineMath math={"\\varepsilon_z < 0"} /> bo'lsa,{" "}
                        <InlineMath math={"\\vec{\\varepsilon}"} /> vektori{" "}
                        <InlineMath math={"\\vec{\\omega}"} /> vektoriga qarshi yo'nalgan bo'ladi.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default BurchakTezlik53;
