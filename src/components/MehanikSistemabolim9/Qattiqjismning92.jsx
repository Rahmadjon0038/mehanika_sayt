import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";

const Qattiqjismning92 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    9.2-§. Qattiq jismning ilgarilanma harakat differensial tenglamalari
                </h2>
                <p className="mb-4">
                    Kinematikadan ma’lumki, ilgarilanma harakatdagi qattiq jismning barcha nuqtalari tezlanishlarining miqdor va yo‘nalishlari bir xil bo‘ladi. Demak, ixtiyoriy nuqtasining tezlanishi <InlineMath math={"\\vec{a}"} /> jism massalar markazining tezlanishiga teng deyish mumkin, <InlineMath math={"\\vec{a} = \\vec{a}_C"} />. Shuning uchun sistema massalar markazining harakati haqidagi teoremani qattiq jismning ilgarilanma harakatiga tatbiq etsak, qattiq jism ilgarilanma harakat differensial tenglamasining vektor ko‘rinishi kelib chiqadi:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"m \\vec{a}_C = \\sum \\vec{F}_{ke} \\quad \\text{yoki} \\quad m \\ddot{\\vec{r}}_C = \\vec{R}_e \\quad (9.4)"} />
                </div>
                <p className="mb-4">
                    bu yerda <InlineMath math={"\\vec{a}_C"} /> jism massalar markazining tezlanishi, <InlineMath math={"\\sum \\vec{F}_{ke}"} /> yoki <InlineMath math={"\\vec{R}_e"} /> jismga taʼsir qiluvchi tashqi kuchlarning geometrik yig‘indisi, bosh vektor.
                </p>
                <p className="mb-4">
                    (9.4) tenglikni Dekart koordinata o‘qlariga proeksiyalab, qattiq jism ilgarilanma harakat differensial tenglamasining koordinata o‘qlaridagi proeksiyalarini yozamiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"M \\ddot{x}_C = \\sum F_{kxe}, \\quad M \\ddot{y}_C = \\sum F_{kye}, \\quad M \\ddot{z}_C = \\sum F_{kze} \\quad (9.5)"} />
                </div>
                <p className="mb-4">
                    Tenglamadagi <InlineMath math={"x_C, y_C, z_C"} /> qattiq jism massalar markazining koordinatalari, <InlineMath math={"F_{kxe}, F_{kye}, F_{kze}"} /> tashqi kuchlarning koordinata o‘qlaridagi proeksiyalarining yig‘indisi. Ilgarilanma harakatdagi qattiq jismning erkinlik darajasi uchga teng bo‘lgani uchun uchta differensial tenglama tuzish mumkin. Qattiq jismning ilgarilanma harakat differensial tenglamasi, moddiy nuqtaning harakat differensial tenglamasi kabi bo‘lgani uchun massasi jism massasiga teng bo‘lgan moddiy nuqta harakatidek o‘rganiladi, yaʼni dinamikaning ikki asosiy masalasi hal qilinadi.
                </p>
            </div>
        </>
    );
};

export default Qattiqjismning92; 