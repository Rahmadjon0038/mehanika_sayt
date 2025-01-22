import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";
import image7_5 from '../../assets/bolim@7image/image7_5.png';
import image7_6 from '../../assets/bolim@7image/image7_6.png';

const MOddiyNuqta76 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.6 – §. Moddiy nuqta dinamikasining birinchi asosiy masalasini
                    yechishga doir masalalar.
                </h2>
                <p className="mb-4 font-bold">
                    7.1-мasala. Massasi <InlineMath math={"m"} /> ga teng bo’lgan
                    moddiy nuqtaning harakat qonuni quyidagi ko’rinishda vektor
                    tenglama bilan berilgan:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={"\\vec{r}=\\vec{a} \\cdot \\vec{i} \\cdot \\cos{kt} + \\vec{b} \\cdot \\vec{j} \\cdot \\sin{kt}"}
                    />
                </div>
                <p className="mb-4">
                    Bunda <InlineMath math={"a, b, k"} /> o’zgarmas sonlar,{" "}
                    <InlineMath math={"\\vec{i}"} /> va <InlineMath math={"\\vec{j}"} />{" "}
                    lar <InlineMath math={"Ox"} /> va <InlineMath math={"Oy"} />{" "}
                    o’qlarining birlik yo’naltiruvchi vektorlari. Shu harakatni yuzaga
                    keltiruvchi kuch aniqlansin.
                </p>
                <p className="mb-4">
                    <span className="font-bold">Yechish.</span> Koordinata o’qlarini
                    shaklda ko’rsatilgandek o’tkazsak, <InlineMath math={"M"} /> nuqta
                    koordinatalari,{" "}
                    <InlineMath math={"x = a \\cdot \\sin{kt}, y=b \\cdot \\cos{kt}"} />{" "}
                    tenglamalar bilan ifodalanadi. Kinematikadan ma’lumki, bunday
                    harakatdagi nuqtaning traektoriyasi yarim o’qlari{" "}
                    <InlineMath math={"a"} /> va <InlineMath math={"b"} /> o’zgarmas
                    sonlardan iborat bo’lgan ellipsdir (7.5– shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image7_5}
                        alt="3.18-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Berilgan harakat qonunidan ikki marta hosila olamiz
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "\\vec{\\dot{r}}=\\vec{a} \\cdot k \\cdot \\vec{i} \\cdot \\sin{kt} + \\vec{b} \\cdot k \\cdot \\vec{j} \\cdot \\cos{kt}"
                        }
                    />
                </div>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "\\vec{\\ddot{r}}= - k^2 \\left( \\vec{a} \\cdot \\vec{i} \\cdot \\cos{kt} + \\vec{b} \\cdot \\vec{j} \\cdot \\sin{kt} \\right)."
                        }
                    />
                </div>
                <p className="mb-4">
                    7.5 formulaga ko’ra ta’sir etuvchi kuchni aniqlaymiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "\\vec{F}=m\\vec{\\ddot{r}}= - m \\cdot k^2 \\left( \\vec{a} \\cdot \\vec{i} \\cdot \\cos{kt} + \\vec{b} \\cdot \\vec{j} \\cdot \\sin{kt} \\right) = - m \\cdot k^2 \\vec{r}"
                        }
                    />
                </div>
                <p className="mb-4">
                    Demak, nuqtaga ta’sir qiluvchi kuch ellips markaziga qarab
                    yo’nalgan bo’lib, nuqtadan markazgacha bo’lgan masofaga mutanosib,
                    markaziy kuchdan iborat ekan.
                </p>

                <p className="mb-4 font-bold">
                    7.2-masala. Moddiy nuqta, shaklda ko’rsatilgandek,{" "}
                    <InlineMath math={"F_1"} /> va <InlineMath math={"F_2"} /> kuchlar
                    ta’sirida <InlineMath math={"Ox"} /> o’qi bo’ylab harakatlanadi
                    (7.6 – shakl). Nuqta to’g’ri chiziqli harakat qilishi uchun{" "}
                    <InlineMath math={"F_2"} /> kuch qanday shartni bajarishi
                    aniqlansin.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image7_6}
                        alt="3.18-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    <span className="font-bold">Yechish.</span> Harakat{" "}
                    <InlineMath math={"Ox"} /> o’qi bo’ylab to’g’ri chiziqli
                    harakatda bo’lishi uchun boshlang’ich tezlik va ta’sir qiluvchi
                    kuchlarning teng ta’sir etuvchisi <InlineMath math={"Ox"} /> o’qda
                    yotishi zarur va yetarli. Bu shart bajarilishi uchun berilgan ikki
                    kuchning <InlineMath math={"Oy"} /> o’qdagi proyeksiyalarining
                    algebraik yig’indisi nolga teng bo’lishi kerak, shakldan
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={"\\sum F_{ky}=0 , \\quad F_1 \\sin \\alpha-F_2=0,"}
                    />
                </div>
                <p className="mb-4">
                    bundan, <InlineMath math={"F_2=F_1 \\sin \\alpha"} /> shart
                    bajarilsa, moddiy nuqta <InlineMath math={"Ox"} /> o’qi bo’ylab
                    harakatlanadi.
                </p>

                <p className="mb-4 font-bold">
                    7.3-masala. Massasi <InlineMath math={"0,2 kg"} /> bo’lgan
                    moddiy nuqtaning harakati
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={"x=3\\cos 2\\pi t \\text{ sm}, \\quad y=4\\sin \\pi t \\text{ sm}"}
                    />
                </div>
                <p className="mb-4">
                    tenglamalar bilan berilgan, (bu yerda <InlineMath math={"t"} />{" "}
                    sekundlar hisobida) nuqtaga ta’sir qiluvchi kuchning proeksiyalari
                    uning koordinatalari orqali ifodalansin.
                </p>
                <p className="mb-4">
                    <span className="font-bold">Yechish.</span> Moddiy nuqtaning
                    kinematik harakat tenglamalari tekislikda koordinatalar usulida
                    berilgan. Harakat qonunidan ikki marta vaqt bo’yicha hosila olamiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={"\\dot{x}=-6\\sin 2\\pi t , \\qquad \\dot{y}=4\\cos \\pi t,"}
                    />
                </div>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "\\ddot{x}=-12 \\pi^2 \\cos 2\\pi t =4 \\pi^2 x, \\qquad \\ddot{y}=-4 \\pi^2 \\sin \\pi t =- \\pi^2 y,"
                        }
                    />
                </div>
                <p className="mb-4">
                    (7.12) formuladan moddiy nuqtaga ta’sir qiluvchi, kuchning
                    koordinata o’qlaridagi proyeksiyalarini aniqlaymiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "F_x=m\\ddot{x}=-m 4 \\pi^2 \\cdot x \\cdot \\frac{kg \\cdot sm}{s^2}=-0,0789 \\cdot x \\cdot \\frac{kg \\cdot sm}{s^2}=-0,0789 \\cdot x \\text{ N;}"
                        }
                    />
                </div>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "F_y=m\\ddot{y}=-m \\pi^2 \\cdot y \\cdot \\frac{kg \\cdot sm}{s^2}=-0,0197 \\cdot y \\cdot \\frac{kg \\cdot sm}{s^2}=-0,0197 \\cdot y \\text{ N}"
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default MOddiyNuqta76;
