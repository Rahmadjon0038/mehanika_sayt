import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image8_2 from '../../assets/bolim@8image/image8_2.png';
import image8_3 from '../../assets/bolim@8image/image8_3.png';
import image8_4 from '../../assets/bolim@8image/image8_4.png';

const IchkivaTashqi82 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    8.2– §. Ichki va tashqi kuchlar. Ichki kuchlarning xossalari
                </h2>

                <p className="mb-4">
                    Nazariy mexanikaning “Statika” qismida jismga taʼsir qiluvchi
                    kuchlarni aktiv va bogʻlanish reaksiya kuchlari deb ikki turga
                    ajratgan edik.
                </p>

                <p className="mb-4">
                    Mexanik sistemaga ta’sir qiluvchi kuchlar sistemasini boshqacha ikki
                    turga ajratiladi: ichki va tashqi kuchlar.
                    <p className="te"> Sistema tashkil qiluvchi
                        moddiy nuqtalarning o‘zaro taʼsirlari ichki kuchlar deyiladi,{" "}
                        <InlineMath math={"\\vec{F}^{\, i}"} /> deb belgilanadi. Sistema
                        nuqtalariga bu sistemaga kirmaydigan moddiy nuqta yoki jism tomonidan
                        qo‘yilgan kuchlar tashqi kuchlar deyiladi,{" "}
                        <InlineMath math={"\\vec{F}^{\, e}"} /> deb belgilanadi. </p>
                </p>

                <p className="mb-4">
                    Kuch belgisining yuqori qismiga qoʻyilgan “i” va “e” belgilari fransuz
                    tilida <em>interieur</em> – ichki, <em>exterieur</em> – tashqi,
                    soʻzlarining bosh harflaridan olingan. Bu tushunchalarni yaxshiroq
                    tasavvur qilish uchun gorizontal yo’lning to’g’ri chiziqli qismida
                    harakatlanayotgan avtomobilga taʼsir qiluvchi kuchlar sistemasini
                    qarab chiqaylik. Avtomobilga yerning tortish kuchi yaʼni ogʻirlik
                    kuchi <InlineMath math={"\\vec{G}"} /> taʼsir qiladi, bu albatta Yer
                    tomonidan avtomobilga, ya’ni mexanik sistemaga qoʻyilgan boʻlib,
                    tashqi kuch hisoblanadi.
                </p>

                <p className="mb-4">
                    Demak, mexanik sistemaning barcha nuqtalariga qo‘yilgan ogʻirlik
                    kuchlari tashqi kuchlar hisoblanadi (7.2-shakl). Havoning qarshilik
                    kuchi <InlineMath math={"\\vec{F}_k"} /> ham tashqi kuch hisoblanadi.
                    Gʻildiraklarni bogʻlanishlardan ozod qilib, yetaklovchi va
                    yetaklanuvchi gʻildiraklarga taʼsir qiluvchi tekislikning normal
                    reaksiya kuchlari <InlineMath math={"\\vec{N}_1"} /> va{" "}
                    <InlineMath math={"\\vec{N}_2"} />, hamda{" "}
                    <InlineMath math={"\\vec{F}_1"} /> va{" "}
                    <InlineMath math={"\\vec{F}_2"} /> ishqalanish kuchlarini koʻrsatamiz.
                </p>

                <p className="mb-4">
                    Demak, <InlineMath math={"\\vec{N}_1"} />,{" "}
                    <InlineMath math={"\\vec{N}_2"} />,{" "}
                    <InlineMath math={"\\vec{F}_1"} />,{" "}
                    <InlineMath math={"\\vec{F}_2"} /> kuchlar ham tekislikning taʼsiridan
                    kelib chiqqanligi uchun tashqi kuchlar turiga kiradi. Shunday qilib
                    avtomobilga oltita <InlineMath math={"\\vec{G}"} />,{" "}
                    <InlineMath math={"\\vec{F}_k"} />,{" "}
                    <InlineMath math={"\\vec{N}_1"} />,{" "}
                    <InlineMath math={"\\vec{N}_2"} />,{" "}
                    <InlineMath math={"\\vec{F}_1"} />,{" "}
                    <InlineMath math={"\\vec{F}_2"} /> tashqi kuchlar taʼsir qiladi.
                </p>

                <p className="mb-4">
                    Ichki yonuv dvigatelini mexanik sistema desak, gaz bosim kuchining
                    dvigatel porsheniga taʼsir kuchi, porshen bosim kuchining shatunga
                    taʼsiri, shatunning tirsakli valga taʼsiri, gʻildirak o’qlarida hosil
                    boʻladigan ishqalanish kuchlari ichki kuchlar hisoblanadi. Shuni
                    taʼkidlash kerakki, baʼzi hollarda ichki kuchlar taʼsirida tashqi kuch
                    hosil bo‘ladi. Masalan, agar 8.2 – shakldagi
                    <div className="text-center py-6">
                        <img
                            src={image8_2}
                            alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    avtomobilning yetaklovchi
                    orqa g‘ildiragiga harakatlantiruvchi moment taʼsir qilmasa, tekislik
                    bilan g‘ildirak orasidagi{" "}
                    <InlineMath math={"\\vec{F}_2"} /> sirpanishdagi ishqalanish kuchi
                    hosil boʻlmas edi. Huddi shuningdek, 8.3 – shakldagi odamning
                    muskullarining harakati natijasida zo’riqish kuchlari hosil bo‘lmasa,
                    oyoq kiyim bilan tekislik orasidagi tashqi kuch, ishqalanish kuchi
                    nolga teng bo‘lib, odam harakatlana olmas edi.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image8_3}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Mexanik sistema qanday tanlab olinishiga qarab, bitta kuchning o‘zi
                    ichki yoki tashqi kuch bo‘lishi ham mumkin. Mexanik sistema
                    nuqtalarining harakati ichki kuchlarga ham tashqi kuchlarga ham,
                    bog‘liq bo‘ladi. Ichki kuchlarning quyidagi ikki xossasini isbot
                    qilamiz:
                </p>

                <ol className="mb-4 list-decimal list-inside">
                    <li className="mb-2 te">
                        Mexanik sistemaga ta’sir qiluvchi barcha ichki kuchlarning geometrik
                        yigʻindisi (yaʼni, ichki kuchlarning bosh vektori) nolga teng.
                    </li>
                </ol>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\vec{F}_{k}^{\\, i} = 0 \\quad (8.4)"} />
                </div>

                <p className="mb-4">
                    Bu xossaning isboti dinamikaning, 3-qonunidan kelib chiqadi. Sistema
                    tashkil qiluvchi nuqtalarning oʻzaro taʼsirlari ichki kuchlar boʻlib,
                    ta’sirning aks ta’sirga tenglik qonuniga koʻra ular miqdor jihatdan
                    teng bir toʻgʻri chiziq boʻylab qarama-qarshi tomonga yoʻnalgan boʻladi
                    (8.4-shakl). <InlineMath math={"\\vec{F}_{12}^{\\, i} = -\\vec{F}_{21}^{\\, i}"} />. Bu
                    ikki kuchlarning yigʻindisi nolga teng. Demak, mexanik sistema
                    <InlineMath math={"n"} /> ta moddiy nuqtadan iborat bo‘lsa ham
                    har ikki nuqtalarning oʻzaro taʼsirlarining yigʻindisi nolga
                    tengligidan (8.4) formula oʻrinli ekanligi kelib chiqadi.
                </p>

                <div className="text-center py-6">
                    <img
                        src={image8_4}
                        alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <ol start={2} className="mb-4 list-decimal list-inside">
                    <li className="mb-2 te">
                        Mexanik sistemaga taʼsir qiluvchi ichki kuchlardan ixtiyoriy{" "}
                        <InlineMath math={"O"} /> markazga nisbatan olingan momentlarining
                        geometrik yig‘indisi (ichki kuchlar bosh momenti) nolga teng.
                    </li>
                </ol>

                <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\vec{r}_k \\times \\vec{F}_{k}^{\\, i} = 0 \\quad \\text{yoki} \\quad \\mathrm{mom}_0\\bigl(\\vec{F}_{k}^{\\, i}\\bigr) = 0 \\quad (8.5)"} />
                </div>

                <p className="mb-4">
                    Xossani isbotlash uchun (7.4)-shakldagi ikkita nuqtaning oʻzaro
                    taʼsir kuchlaridan ixtiyoriy <InlineMath math={"O"} /> nuqtaga
                    nisbatan moment olsak,
                </p>

                <p className="mb-4">
                    <InlineMath math={"\\mathrm{mom}_0\\bigl(\\vec{F}_{12}^{\\, i}\\bigr) = \\vec{r}_1 \\times \\vec{F}_{12}^{\\, i} = -\\vec{F}_{12}^{\\, i} \\cdot h"} />
                    <br />
                    <InlineMath math={"\\mathrm{mom}_0\\bigl(\\vec{F}_{21}^{\\, i}\\bigr) = \\vec{r}_2 \\times \\vec{F}_{21}^{\\, i} = \\vec{F}_{21}^{\\, i} \\cdot h"} />
                </p>

                <p className="mb-4">
                    natijalarga ega bo‘lamiz, bularni hadma-had qoʻshsak{" "}
                    <InlineMath
                        math={
                            "\\mathrm{mom}_0\\bigl(\\vec{F}_{12}^{\\, i}\\bigr) + \\mathrm{mom}_0\\bigl(\\vec{F}_{21}^{\\, i}\\bigr) = -\\vec{F}_{12}^{\\, i}\\cdot h + \\vec{F}_{21}^{\\, i}\\cdot h = 0"
                        }
                    />{" "}
                    kelib chiqadi. Bu munosabatni <InlineMath math={"n"} /> ta nuqtaning
                    oʻzaro taʼsir kuchlariga nisbatan yozish mumkin. Demak, (8.5) formula
                    oʻrinli ekan. Shuni esdan chiqarmaslik kerak, mexanik sistemaga taʼsir
                    qiluvchi ichki kuchlar bosh vektori va bosh momentining nolga tengligi
                    ular taʼsirida jism muvozanatda turishini bildirmaydi. Yaʼni, ichki
                    kuchlar sistemasi muvozanatlashuvchi sistema emas, chunki ular har xil
                    moddiy nuqtalarga qoʻyilgan. Ichki kuchlar taʼsirida mexanik sistema
                    nuqtalari bir-biriga nisbatan harakatlanishi mumkin.
                </p>

                <p className="mb-4">
                    Agar mexanik sistema oʻzgarmas sistemadan, yoki qattiq jismdan iborat
                    boʻlsa, ichki kuchlar o‘zaro muvozanatlashuvchi kuchlar sistemasini
                    tashkil etadi.
                </p>
            </div>
        </>
    );
};

export default IchkivaTashqi82; 