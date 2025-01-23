import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
// Agar shakllar kerak bo'lsa, ularni shu tarzda import qiling
// import image7_43 from '../../assets/bolim@7image/image7_43.png';

const ModdiyNUqtaKinetik714 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.14 – §. Moddiy nuqta kinetik energiyasining o’zgarishi haqidagi teorema. Masalalar.
                </h2>

                {/* Kiritish */}
                <p className="mb-4">
                    Mazkur teoremada moddiy nuqta kinetik energiyasi bilan ta’sir qiluvchi kuchning bajargan ishi orasidagi munosabat keltirib chiqarilgan. Dinamikaning asosiy tenglamasini{" "}
                    <InlineMath math={"m \\frac{dv}{dt} = \\mathbf{F}"} /> ko’rinishida yozib olamiz, bu yerda{" "}
                    <InlineMath math={"\\mathbf{F}"} /> moddiy nuqtaga ta’sir etayotgan barcha kuchlarning teng ta’sir etuvchisi. Tenglamani ikki tomonini{" "}
                    <InlineMath math={"d\\mathbf{r}"} /> radius vektor orttirmasiga skalyar ko’paytiramiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"m \\frac{dv}{dt} \\cdot d\\mathbf{r} = \\mathbf{F} \\cdot d\\mathbf{r} \\quad (7.42)"} />
                </div>

                <p className="mb-4">
                    Ma’lumki, <InlineMath math={"\\mathbf{F} \\cdot d\\mathbf{r} = dA"} /> bo’lib, moddiy nuqtaga ta’sir qiluvchi kuchlar sistemasi teng ta’sir etuvchining elementar ishini bildiradi. Tenglamaning chap tomonini quyidagi ko’rinishda yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"m \\frac{dv}{dt} \\cdot d\\mathbf{r} = m \\frac{dv}{dt} \\cdot \\frac{d\\mathbf{r}}{dt} dt = m \\mathbf{v} \\cdot d\\mathbf{v} = d\\left( \\frac{mv^2}{2} \\right)"} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math={"v^2"} /> ekanligini hisobga olsak, keltirib chiqarilgan ifodani (7.42) formulaga qo’yib:
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"d\\left( \\frac{mv^2}{2} \\right) = dA \\quad (7.43)"} />
                </div>

                <p className="mb-4">
                    (7.43) ko’rinishdagi kinetik energiyaning o’zgarishi haqidagi teoremaning differensial ifodasi kelib chiqadi. Moddiy nuqta kinetik energiyasining to’la differentsiali ta’sir qiluvchi barcha kuchlarning elementar ishiga teng. Agar formulaga kiruvchi kattaliklarni vaqtga bog’liq deb hisoblab, ikki tomonini{" "}
                    <InlineMath math={"dt"} /> ga bo’lsak, quyidagi munosabat kelib chiqadi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"\\frac{d}{dt} \\left( \\frac{mv^2}{2} \\right) = \\frac{dA}{dt} = W \\quad (7.44)"} />
                </div>

                <p className="mb-4 te">
                    Demak, moddiy nuqta kinetik energiyasining vaqt bo’yicha differentsiali nuqtaga qo’yilgan teng ta’sir etuvchi kuchning quvvatiga teng.
                </p>

                <p className="mb-4">
                    Aytaylik, <InlineMath math={"M"} /> nuqta <InlineMath math={"BC"} /> egri chiziq bo’ylab <InlineMath math={"M_1"} /> holatdan <InlineMath math={"M_2"} /> holatga ko’chgan bo’lsin. Agar <InlineMath math={"M_1"} /> nuqtadagi tezligi <InlineMath math={"v_1"} /> bo’lib, <InlineMath math={"M_2"} /> nuqtadagi tezligi <InlineMath math={"v_2"} /> bo’lsa, (7.43) tenglamani ikki tomonini <InlineMath math={"M_1 M_2"} /> egri chiziq bo’ylab integrallash mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"\\int_{M_1}^{M_2} d\\left( \\frac{mv^2}{2} \\right) = \\int_{M_1}^{M_2} dA \\quad (7.45)"} />
                </div>

                <p className="mb-4">
                    Tenglamaning o’ng tomoni <InlineMath math={"\\mathbf{F}"} /> teng ta’sir etuvchining <InlineMath math={"M_1 M_2"} /> egri chiziqli yo’lda bajarilgan ishini bildiradi. Chap tomonini integrallashda funksiyaning to’la differentsialidan egri chiziq bo’ylab olingan integral shu funktsiyaning o’ziga tengligidan foydalanilsa,
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"\\frac{mv_2^2}{2} - \\frac{mv_1^2}{2} = A \\quad (7.46)"} />
                </div>

                <p className="mb-4">
                    kelib chiqadi. <span className="te">Demak, moddiy nuqta kinetik energiyasining biror cheklangan masofada o’zgarishi shu masofadagi ta’sir qiluvchi kuchlarning to’la bajarilgan ishiga teng. </span>  <InlineMath math={"(7.46)"} /> formula moddiy nuqta kinetik energiyasining o’zgarishi haqidagi teoremaning cheklangan ko’rinishi deyiladi. Bu teoremadan foydalanib quyidagi ko’rinishdagi masalalarni yechish maqsadga muvofiq bo’ladi:
                </p>

                <ul className="list-disc ml-6 mb-4">
                    <li>
                        Moddiy nuqta harakat qonunini bilmasdan turib ta’sir qiluvchi barcha kuchlarning bajarilgan ishini hisoblash mumkin bo’lgan holat;
                    </li>
                    <li>
                        Berilgan tezliklardan foydalanib, bajarilgan ishni hisoblash mumkin bo’lgan holat.
                    </li>
                </ul>

                {/* Agar kerak bo'lsa, shakllarni shu tarzda qo'shing */}
                {/*
                <div className="text-center py-6">
                    <img
                        src={image7_43}
                        alt="Shakl 7.43 - Kinetik Energiya Teorema"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                */}
            </div>
        </>
    );
};

export default ModdiyNUqtaKinetik714; ;