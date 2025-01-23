import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image8_5 from '../../assets/bolim@8image/image8_5.png';

const MexanikMasssi83 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    8.3 – §. Mexanik sistema harakat differensial tenglamalari
                </h2>

                <p className="mb-4">
                    Aytaylik, mexanik sistema <InlineMath math={"n"} /> ta moddiy nuqtadan
                    tashkil topgan bo‘lsin. Sistema nuqtalariga bogʻlanishlardan ozod
                    qilish prinsipini qo‘llab, bog‘lanishlar taʼsirini reaksiya kuchlari
                    bilan almashtirib olamiz.
                </p>

                <p className="mb-4">
                    Mexanik sistemaning ixtiyoriy <InlineMath math={"M_k"} /> nuqtasiga
                    taʼsir qiluvchi ichki va tashqi kuchlarning teng taʼsir etuvchilarini{" "}
                    <InlineMath math={"\\vec{F}_{k}^{\\, i}"} /> va{" "}
                    <InlineMath math={"\\vec{F}_{k}^{\\, e}"} /> deb belgilaylik. U holda,
                    sistemaning har bir nuqtasini tashqi va ichki kuchlar taʼsirida
                    harakatlanuvchi erkin moddiy nuqta deb qarash mumkin bo‘ladi
                    (8.5–shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_5}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Har bir nuqta harakatiga dinamikaning asosiy qonunini qo‘llaymiz.
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`\\begin{cases}
m_1\\vec{a}_1 = \\vec{F}_1^{\\, i} + \\vec{F}_1^{\\, e} \\\\
m_2\\vec{a}_2 = \\vec{F}_2^{\\, i} + \\vec{F}_2^{\\, e} \\\\
\\cdots\\\\
m_n\\vec{a}_n = \\vec{F}_n^{\\, i} + \\vec{F}_n^{\\, e}
\\end{cases}
\\quad (8.6)`}
                    />
                </div>

                <p className="mb-4">
                    yoki
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`\\begin{cases}
m_1\\ddot{\\vec{r}}_1 = \\vec{F}_1^{\\, i} + \\vec{F}_1^{\\, e} \\\\
m_2\\ddot{\\vec{r}}_2 = \\vec{F}_2^{\\, i} + \\vec{F}_2^{\\, e} \\\\
\\cdots\\\\
m_n\\ddot{\\vec{r}}_n = \\vec{F}_n^{\\, i} + \\vec{F}_n^{\\, e}
\\end{cases}
\\quad (8.7)`}
                    />
                </div>

                <p className="mb-4">
                    Qo‘zg‘almas koordinatalar sistemasiga <InlineMath math={"(8.7)"} />{" "}
                    tenglamalarni proyeksiya-lasak, quyidagi tenglamalar sistemasiga ega
                    bo‘lamiz:
                </p>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`\\begin{cases}
m_k\\ddot{x}_k = F_{kx}^{\\, i} + F_{kx}^{\\, e},\\\\
m_k\\ddot{y}_k = F_{ky}^{\\, i} + F_{ky}^{\\, e},\\\\
m_k\\ddot{z}_k = F_{kz}^{\\, i} + F_{kz}^{\\, e}
\\end{cases}
\\quad (8.8)`}
                    />
                </div>

                <p className="mb-4">
                    bu yerda <InlineMath math={"k = 1, 2, \\ldots, n"} /> bo‘lib,
                    sistemani tashkil qiluvchi moddiy nuqtalar soni.
                </p>

                <p className="mb-4 te">
                    <InlineMath math={"(8.7)"} /> tenglamalar sistemasi mexanik sistema{" "}
                    <em>harakat differensial tenglamasining vektor ko‘rinishi</em>,{" "}
                    <InlineMath math={"(8.8)"} /> tenglamalar sistemasini esa mexanik
                    sistema harakat differensial tenglamasining koordinata oʻqlaridagi
                    proyeksiyalari deyiladi.
                </p>

                <p className="mb-4">
                    Umumiy holda <InlineMath math={"(8.7)"} /> vektor koʻrinishdagi
                    tenglamalar soni <InlineMath math={"n"} /> ta, <InlineMath math={"(8.8)"} />{" "}
                    skalyar koʻrinishdagi tenglamalar soni <InlineMath math={"3n"} /> ta
                    bo‘ladi.
                </p>

                <p className="mb-4">
                    <InlineMath math={"(8.8)"} /> koʻrinishdagi mexanik sistema harakat
                    differensial tenglamasidan foydalanib, sistema nuqtalarining harakat
                    qonunlarini oʻrganishda dinamikaning ikkita asosiy masalasini yechish
                    mumkin.
                </p>

                <p className="mb-4">
                    <InlineMath math={"3n"} /> ta harakat differensial tenglamalarni ikki
                    marta integrallashda <InlineMath math={"6n"} /> ta integral
                    oʻzgarmaslari hosil bo‘ladi, ularni aniqlashda boshlang‘ich
                    shartlardan foydalanib <InlineMath math={"6n"} /> ta bog‘lanishlar
                    tenglamasini tuzish talab etiladi. Bu albatta taʼsir qiluvchi
                    kuchlarning turiga bog‘liq ravishda juda katta hisoblash amallarini
                    bajarishga olib keladi. Bunday masalalarni hal etishda hozirgi zamon
                    EHMlaridan foydalanish maqsadga muvofiq. Har qanday murakkab
                    koʻrinishdagi differensial tenglamalarni taqribiy hisoblash
                    usullaridan foydalanib yechishda juda katta yutuqlarga erishilgan va
                    hisoblashlarni juda katta aniqlikda bajarish mumkin.
                </p>
            </div>
        </>
    );
};

export default MexanikMasssi83; 