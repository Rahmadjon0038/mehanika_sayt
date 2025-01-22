import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";

const MehanikOlchovBirliklari73 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.3 – §. Mexanik o’lchov birliklar sistemasi
                </h2>
                <p className="mb-4">
                    Mexanikada asosan ikkita o’lchov birliklar sistemasida ish olib
                    boriladi. Bu birliklar sistemasi bir-biridan dinamikaning asosiy
                    qonuniga kirgan kattaliklarni qaysi biri asosiy birliklar, qaysi
                    biri hosilaviy birlik qilib tanlanishi bilan farqlanadi.
                </p>
                <p className="mb-4 te">
                    <span className="font-bold ">
                        Xalqaro birliklar sistemasi (SI birliklar sistemasi)
                    </span>{" "}
                    da asosiy o’lchov birligi sifatida: uzunlik o’lchov birligi{" "}
                    <span className="font-bold">metr (m)</span>, vaqt o’lchov birligi{" "}
                    <span className="font-bold">sekund (s)</span>, massa o’lchov
                    birligi <span className="font-bold">kilogramm (kg)</span> olinadi.{" "}
                    <InlineMath math={"F=ma"} /> formulaga ko’ra kuchning o’lchov
                    birligi, hosilaviy birlik sifatida keltirib chiqariladi, Nyuton
                    formulasidan foydalanilganligi uchun uning sharafiga kuch birligi
                    Nyuton deb qabul qilingan.

                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"F=ma=kg \\cdot m/s^2=1 \\text{ Nyuton}=1 N"} />
                </div>
                <p className="mb-4">
                    Ya’ni bir kilogramm massali moddiy nuqtaga{" "}
                    <InlineMath math={"1 m/s^2"} /> tezlanish bera oladigan kuch bir
                    Nyuton N deb qabul qilingan. Demak, mexanikada bundan keyin
                    uchraydigan barcha kattaliklarning o’lchov birliklari hosilaviy
                    o’lchov birligi sifatida keltiriladi.
                </p>
                <p className="mb-4 te">
                    <span className="font-bold">Texnik birliklar sistemasi</span>da
                    asosiy o’lchov birligi sifatida uzunlik o’lchov birligi{" "}
                    <span className="font-bold">metr (m)</span>, vaqt o’lchov birligi{" "}
                    <span className="font-bold">sekund (s)</span> kuch o’lchov birligi{" "}
                    <span className="font-bold">kilogramm kuch (kgk)</span> qabul
                    qilingan. Massa birligi asosiy formulaga ko’ra aniqlanadi va
                    texnik massa birligi <span className="font-bold">t.m.b</span> deb
                    yuritiladi.
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={"m=\\frac{F}{a}=\\frac{kgk \\cdot s^2}{m}=1 \\text{ (t.m.b)}."}
                    />
                </div>
                <p className="mb-4">
                    Demak, <InlineMath math={"1 kg"} /> kuch jismga{" "}
                    <InlineMath math={"1 \\frac{m}{s^2}"} /> tezlanish bersa, uning
                    massasi <InlineMath math={"1"} /> texnik massa birligida bo’ladi.
                </p>
                <p className="mb-4">
                    Quyidagi bog’lanishlar orqali bu ikki o’lchov birliklar
                    sistemasining biridan ikkinchisiga o’tish mumkin.
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "1 \\text{ Nyuton} = 0,102 \\text{ kgk}, \\quad 1 \\text{ kgk} = 9,81 \\text{ Nyuton}, \\quad 1 \\text{ t.m.b} = 9,81 \\text{ kg}"
                        }
                    />
                </div>
                <p className="mb-4">
                    Ma’lumotnomalarda texnik o’lchov birliklar sistemasini{" "}
                    <span className="font-bold">MKGKS</span> deb ham yuritiladi.
                </p>
            </div>
        </>
    );
};

export default MehanikOlchovBirliklari73;
