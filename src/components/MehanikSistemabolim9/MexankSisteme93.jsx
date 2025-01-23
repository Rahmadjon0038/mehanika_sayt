import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
// Rasm kerak bo'lsa import qiling
import image9_2 from '../../assets/bolim@9image/image9_2.png';
import image9_3 from '../../assets/bolim@9image/image9_3.png';


const MexankSisteme93 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    9.3-§. Mexanik sistema harakat miqdorining o‘zgarishi haqidagi teorema
                </h2>
                <p className="mb-4 te">
                    Mexanik sistema tashkil qiluvchi moddiy nuqtalar harakat miqdorlarining geometrik yig‘indisi (bosh vektori) sistema harakat miqdori deyiladi.
                </p>
                <p className="mb-4">
                    Agar mexanik sistema <InlineMath math={"n"} /> ta nuqtadan tashkil topgan bo‘lsa, <InlineMath math={"M_k"} /> nuqtasining massasi <InlineMath math={"m_k"} />, tezligini <InlineMath math={"\\vec{v}_k"} /> desak, sistema harakat miqdorining vektorini quyidagicha yozish mumkin:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\vec{Q} = \\sum m_k \\vec{v}_k \\quad (9.6)"} />
                </div>
                <p className="mb-4">
                    Massalar markazining ta’rifiga ko‘ra <InlineMath math={"m_k \\vec{r}_k = m \\vec{r}_c"} /> tenglikni yozish mumkin, buni hisobga olib, (9.1) tenglamada shakl o‘zgarishni amalga oshirsak, sistema harakat miqdori uchun quyidagi ifodaga ega bo‘lamiz:
                </p>
                <BlockMath math={"\\vec{Q} = \\sum m_k \\vec{v}_k = \\sum m_k \\frac{d \\vec{r}_k}{dt} = \\frac{d}{dt} \\sum m_k \\vec{r}_k = \\frac{d}{dt} (m \\vec{r}_c) = m \\vec{v}_c"} />
                <p className="mb-4">yoki</p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\vec{Q} = m \\vec{v}_c \\quad (9.7)"} />
                </div>
                <p className="mb-4">
                    bo‘lib, bu yerda <InlineMath math={"m"} /> sistema massasi.
                </p>
                <p className="mb-4 te">
                    Demak, mexanik sistema harakat miqdorining vektori sistema massasi bilan massalar markazi tezligining ko‘paytmasiga teng bo‘lib, yo‘nalishi mazkur tezlik yo‘nalishi bilan bir xil bo‘ladi (9.2-shakl).  {/* Agar rasm bo'lsa, shu yerga qo'ying */}
                </p>
                <div className="text-center py-6">
                    <img
                        src={image9_2}
                        alt="Qo'zg'almas o'q atrofida aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>


                <p className="mb-4">
                    (9.7) tenglikni Dekart koordinata o‘qlariga proeksiyalab, sistema harakat miqdori bosh vektorining proeksiyalarini aniqlash mumkin. Ular
                </p>
                <div className="text-center py-6">
                    <img
                        src={image9_3}
                        alt="Qo'zg'almas o'q atrofida aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\begin{cases} Q_x = \\sum m_k v_{kx} = m v_{cx} \\\\ Q_y = \\sum m_k v_{ky} = m v_{cy} \\\\ Q_z = \\sum m_k v_{kz} = m v_{cz} \\end{cases} \\quad (9.8)"} />
                </div>
                <p className="mb-4">
                    ko‘rinishda bo‘lib, ular quyidagicha o‘qiladi.
                </p>
                <p className="mb-4 te">
                    Mexanik sistema harakat miqdori vektorining biror o‘qdagi proeksiyasi, sistema tashkil qiluvchi moddiy nuqtalar harakat miqdorlarining mazkur o‘qdagi proeksiyalarining algebraik yig‘indisiga yoki sistema massasi bilan massalar markazi tezligining shu o‘qdagi proeksiyasining ko‘paytmasiga teng.
                </p>
            </div>
        </>
    );
};

export default MexankSisteme93; 