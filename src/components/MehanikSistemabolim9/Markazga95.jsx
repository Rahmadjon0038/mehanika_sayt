import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image9_5 from '../../assets/bolim@9image/image9_5.png';  // Agar rasmlar bo'lsa
import image9_6 from '../../assets/bolim@9image/image9_6.png';

const Markazga95 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    9.5-§. Mexanik sistemaning markazga va o‘qqa nisbatan kinetik momenti
                </h2>

                <p className="mb-4">
                    Mexanik sistema n ta moddiy nuqtadan tashkil topgan bo‘lib, ularning massalari{" "}
                    <InlineMath math={"m_1, m_2, …, m_n"} /> bo‘lsin. Ixtiyoriy{" "}
                    <InlineMath math={"M_k"} /> nuqtaning biror qo‘zg‘almas <InlineMath math={"O"} /> nuqtaga
                    qo‘yilgan radius vektori <InlineMath math={"r_k"} />, tezligi <InlineMath math={"v_k"} />
                    bo‘lsin (9.5-shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image9_5}
                        alt="Mexanik sistema"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4 te">
                    Sistema tashkil qiluvchi moddiy nuqtalar harakat miqdorlaridan biror O markazga nisbatan
                    olingan momentlarning geometrik yig‘indisi mexanik sistemaning mazkur nuqtaga nisbatan
                    olingan harakat miqdori bosh momenti yoki kinetik momenti deyiladi.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"K_O = \\sum_{k=1}^{n} (r_k \\times m_k v_k)"} />
                </div>

                <p className="mb-4">
                    Sistema kinetik momenti <InlineMath math={"K_O"} /> deb belgilanadi va moment olingan O
                    nuqtaga qo‘yilgan bo‘ladi. Agar O nuqtani koordinata boshi deb (9.12) formulani Dekart
                    koordinatalar sistemasiga proeksiyalasak, quyidagi skalyar ifodalarga ega bo‘lamiz.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
                        K_{Ox} = \\sum_{k=1}^{n} m_k (y_k \\dot{z_k} - z_k \\dot{y_k}), \\\\
                        K_{Oy} = \\sum_{k=1}^{n} m_k (z_k \\dot{x_k} - x_k \\dot{z_k}), \\\\
                        K_{Oz} = \\sum_{k=1}^{n} m_k (x_k \\dot{y_k} - y_k \\dot{x_k})
                    `}
                    />
                </div>

                <p className="mb-4">
                    (9.13) formulalar yordamida mexanik sistemaning koordinata o‘qlariga nisbatan kinetik momenti
                    hisoblanadi. Bu yerda <InlineMath math={"x_k, y_k, z_k"} /> lar <InlineMath math={"M_k"} />{" "}
                    nuqtaning qo‘zg‘almas <InlineMath math={"O"} /> markazga qo‘yilgan <InlineMath math={"r_k"} />{" "}
                    radius vektorining koordinatalari, <InlineMath math={"\\dot{x_k}, \\dot{y_k}, \\dot{z_k}"} />{" "}
                    lar <InlineMath math={"v_k"} /> tezlikning koordinata o‘qlardagi proeksiyalari.
                </p>

                <p className="mb-4 te">
                    Biror <InlineMath math={"Oz"} /> o‘qqa nisbatan sistema kinetik momenti deb, sistema tashkil
                    qiluvchi moddiy nuqtalarning mazkur o‘qqa nisbatan harakat miqdori momentlarining algebraik
                    yig‘indisiga aytiladi.
                </p>

                <p className="mb-4">
                    Biror <InlineMath math={"O"} /> markazga nisbatan hisoblangan sistema kinetik momenti bilan shu
                    markazdan o‘tuvchi Oz o‘qqa nisbatan kinetik momenti orasida quyidagi bog‘lanish mavjud:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"K_z = K_{Oz} = K_O \\cos(K_O, z)"} />
                </div>

                <p className="mb-4">
                    Qo‘zg‘almas o‘q atrofida aylanma harakat qilayotgan qattiq jismning aylanish o‘qiga nisbatan
                    kinetik momentini hisoblashni ko‘rib chiqaylik.
                </p>

                <p className="mb-4">
                    Aytaylik, qattiq jism Oz qo‘zg‘almas o‘q atrofida <InlineMath math={"\\omega"} /> burchak
                    tezligi bilan aylanayotgan bo‘lsin. Aylanish o‘qidan <InlineMath math={"h_k"} /> masofada
                    joylashgan ixtiyoriy <InlineMath math={"M_k"} /> nuqtaning massasi <InlineMath math={"m_k"} />,
                    tezligi <InlineMath math={"v_k = \\omega h_k"} />, harakat miqdori{" "}
                    <InlineMath math={"m_k v_k"} /> bo‘lib, <InlineMath math={"h_k"} /> kesmaga hamda Oz o‘qqa
                    perpendikulyar yo‘nalgan bo‘ladi. Shu nuqtaning Oz o‘qqa nisbatan harakat miqdoridan olingan
                    momentni quyidagicha yozish mumkin (9.6-shakl):
                </p>

                <div className="text-center py-6">
                    <img
                        src={image9_6}
                        alt="Aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"mom_{Oz} (m_k v_k) = h_k m_k v_k = m_k h_k^2 \\cdot \\omega"} />
                </div>

                <p className="mb-4">
                    Agar jismning barcha nuqtalari uchun kinetik momentni hisoblasak:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"K_{Oz} = \\sum_{k=1}^{n} m_k h_k^2 \\cdot \\omega"} />
                </div>

                <p className="mb-4">
                    bu yerda <InlineMath math={"I_{Oz} = \\sum_{k=1}^{n} m_k h_k^2"} /> ekani hisobga olinsa,
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"K_{Oz} = I_{Oz} \\cdot \\omega"} />
                </div>

                <p className="mb-4">formula kelib chiqadi.</p>

                <p className="mb-4 te">
                    Shunday qilib, aylanma harakatdagi qattiq jismning aylanish o‘qiga nisbatan kinetik momenti
                    aylanish burchak tezligi bilan jismning mazkur o‘qqa nisbatan inersiya momentining
                    ko‘paytmasiga teng.
                </p>

                <p className="mb-4">
                    Kinetik moment ishorasi burchak tezlik ishorasiga mos tushadi. Harakat soat mili
                    yo‘nalishiga qarshi yo‘nalishda bo‘lsa, kinetik moment musbat deb qabul qilingan. Agar mexanik
                    sistema qo‘zg‘almas o‘qlar atrofida aylanuvchi bir nechta jismlardan tashkil topgan bo‘lsa,
                    mazkur mexanik sistema kinetik momenti quyidagicha aniqlanadi.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"K_{Oz} = I_{1z} \\omega_1 + I_{2z} \\omega_2 + … + I_{nz} \\omega_n"} />
                </div>

                <p className="mb-4">
                    Bunda <InlineMath math={"\\omega_1, \\omega_2, …, \\omega_n"} /> lar sistema tashkil qiluvchi n
                    ta jismning mos ravishda Oz o‘q atrofida aylanish burchak tezliklari,{" "}
                    <InlineMath math={"I_{1z}, I_{2z},…, I_{nz}"} /> lar esa jismlarning Oz o‘qqa nisbatan
                    inersiya momentlarini ifodalaydi.
                </p>
            </div>
        </>
    );
};

export default Markazga95; 