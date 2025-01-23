import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image9_4 from '../../assets/bolim@9image/image9_4.png';

const Sistemeharakat94 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    9.4-§. Mexanik sistema harakat miqdori bosh vektorining o‘zgarishi haqidagi teorema
                </h2>

                <p className="mb-4">
                    (9.7) tenglamadan vaqt bo‘yicha hosila olsak:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{dQ}{dt} = m \\frac{dv_c}{dt} = m \\cdot a_c"} />
                </div>

                <p className="mb-4">
                    hosil bo‘ladi. Massalar markazining harakati to‘g‘risidagi teoremaga ko‘ra{" "}
                    <InlineMath math={"m a_c = F^{(e)}"} /> ekanligini e’tiborga olsak, (9.9) ifodani
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{dQ}{dt} = F^{(e)}"} />
                </div>

                <p className="mb-4">
                    ko‘rinishda yozish mumkin. (9.10) tenglama <span className="te"> mexanik sistema harakat miqdorining o‘zgarishi
                    haqidagi teoremaning differensial ko‘rinishi deyiladi va quyidagicha o‘qiladi: Mexanik
                    sistema harakat miqdorining vaqt bo‘yicha hosilasi ta’sir qiluvchi tashqi kuchlarning
                    geometrik yig‘indisiga teng.
                    </span>
                </p>

                <p className="mb-4">
                    (9.10) tenglamani Dekart koordinatalar sistemasiga proeksiyalasak:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={"\\frac{dQ_x}{dt} = F^{(e)}_x, \\quad \\frac{dQ_y}{dt} = F^{(e)}_y, \\quad \\frac{dQ_z}{dt} = F^{(e)}_z"}
                    />
                </div>

                <p className="mb-4">skalyar ko‘rinishidagi tenglamalar sistemasiga ega bo‘lamiz.</p>

                <p className="mb-4 te">
                    Demak, sistema harakat miqdorining biror o‘qdagi, proeksiyasining vaqt bo‘yicha hosilasi
                    sistemaga ta’sir qiluvchi tashqi kuchlarning mazkur o‘qdagi proeksiyalarining algebraik
                    yig‘indisiga teng.
                </p>

                <p className="mb-4">
                    (9.10) va (9.11) tenglamalardan ko‘rinadiki, mexanik sistema harakat miqdorining o‘zgarishi
                    faqat tashqi kuchlar ta’sirida yuzaga keladi.
                </p>

                <h3 className="text-xl font-semibold mb-2 mt-6">9.2-masala</h3>
                <p className="mb-4">
                    Temir yo‘lning gorizontal qismida ikkita vagon ketma-ket harakatlanmoqda. Birinchi vagon
                    massasi <InlineMath math={"m_1 = 6 \\cdot 10^4 kg"} /> va tezligi{" "}
                    <InlineMath math={"v_1 = 1 m/s"} />, ikkinchi vagon massasi{" "}
                    <InlineMath math={"m_2 = 2 \\cdot 10^4 kg"} /> va tezligi <InlineMath math={"v_2 = 3 m/s"} />.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image9_4   }
                        alt="Qo'zg'almas o'q atrofida aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Ikkinchi vagon birinchi vagonga yetib oladi va unga ulanadi. Barcha qarshilik kuchlarini
                    hisobga olmasdan ikkita vagonning birgalikdagi tezligi aniqlansin.
                </p>

                <h4 className="text-lg font-medium mb-2">Yechish</h4>
                <p className="mb-4">
                    Vagonlarni birgalikda sistema desak, gorizontal yo‘lda harakatlanmoqda. Ta’sir qiluvchi
                    tashqi kuchlarning Ox o‘qidagi proeksiyalarining yig‘indisi nolga teng bo‘lgani uchun sistema
                    harakat miqdori saqlanish qonunining Ox o‘qidagi proeksiyasidan foydalanamiz.
                </p>

                <p className="mb-4">
                    <InlineMath math={"F^{(e)}_x = 0"} /> bo‘lgani uchun <InlineMath math={"Q_{1x} = Q_{0x}"} />{" "}
                    bo‘ladi hamda
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"Q_{0x} = m_1 v_{1x} + m_2 v_{2x}, \\quad Q_{1x} = (m_1 + m_2)v"} />
                </div>

                <p className="mb-4">
                    tengliklardan va masala shartidan foydalanib, quyidagicha yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"(m_1 + m_2)v = m_1 v_1 + m_2 v_2"} />
                </div>

                <p className="mb-4">bundan</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"v = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}"} />
                </div>

                <p className="mb-4">tenglik hosil qilamiz.</p>

                <p className="mb-4">
                    Demak, berilgan kattaliklarni hisoblasak, vagonlarning birgalikdagi tezligi{" "}
                    <InlineMath math={"v = \\frac{12}{8} = 1.5 m/s"} /> kelib chiqadi.
                </p>
            </div>
        </>
    );
};

export default Sistemeharakat94; 