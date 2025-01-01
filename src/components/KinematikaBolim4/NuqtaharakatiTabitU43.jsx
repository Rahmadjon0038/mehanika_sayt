import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image4_6 from '../../assets/bolim@4image/image4_6.png'
import image4_7 from '../../assets/bolim@4image/image4_7.png'
import image4_8 from '../../assets/bolim@4image/image4_8.png'


const NuqtaharakatiTabitU43 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    4.3 – §. Nuqta harakatining tabiiy usulda berilishi. Harakati tabiiy usulda berilgan nuqtaning tezlik va tezlanishi
                </h2>

                <p className="mb-4 te">
                    Agar bizga nuqta traektoriyasi, traektоriyaning qaysi nuqtasidan boshlab harakat bоshlanganligi ya’ni sanоq bоshi, musbat va manfiy yo’nalishlari ko’rsatilgan holda, traektоriya bo’ylab vaqtning istalgan qiymatida nuqtaning holatini aniqlash mumkin bo’lgan s=ft ko’rinishdagi tenglama berilgan bo’lsa harakat tabiiy usulda berilgan deyiladi.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`s = f(t) \\quad (4.16)`} />
                </div>

                <p className="mb-4">
                    Vaqtning uzluksiz, ikki marta differensiallanuvchi funksiyasidan iborat bo’lib, harakat tabiiy usulda berilganda nuqtaning harakat qonuni deyiladi (4.6 – shakl).
                    <div className="text-center py-6">
                        <img
                            src={image4_6}
                            alt="3.18-shakl"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    Shuni ta’kidlash lozimki, umumiy holda nuqtaning traektoriya bo’ylab harakatida <InlineMath math={`s`} /> bosib o’tgan yo’lning uzunligini bildirmaydi. Vaqtga istalgan qiymat berilsa, shu vaqtda nuqta traektoriyaning qaysi nuqtasi bilan ustma ust tushayotganligini aniqlab beradi.
                </p>

                <h3 className="text-xl font-semibold mb-2">Harakat tabiiy usulda berilganda tezlikni aniqlash</h3>
                <p className="mb-4">
                    Faraz qilaylik, moddiy nuqta <InlineMath math={`\\Delta t = t_1 - t`} /> vaqtda traektоriya bo’ylab, <InlineMath math={`\\Delta s = s_1 - s`} /> ko’chish olsin. O’rtacha tezlikni quyidagicha aniqlaymiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`v^* = \\frac{\\Delta s}{\\Delta t} \\quad (4.17)`} />
                </div>

                <p className="mb-4">
                    <InlineMath math={`\\Delta t \\to 0`} /> dagi <InlineMath math={`v^*`} /> o’rtacha tezlikning qiymati berilgan vaqtda M nuqtaning tezligi deyiladi.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`v = \\frac{\\Delta s}{\\Delta t} = \\frac{ds}{dt} \\quad (4.18)`} />
                </div>

                <p className="mb-4 te">
                    Demak, <InlineMath math={`s = f(t)`} /> harakat qonunidan vaqt bo’yicha olingan birinchi tartibli hosila nuqtaning tezligi deyiladi. Tezlik vektori traektoriya bo’ylab, nuqta harakatlanayotgan tomonga yo’nalgan bo’ladi.
                </p>

                <h3 className="text-xl font-semibold mb-2">Harakat tabiiy usulda berilganda nuqtaning tezlanishi</h3>
                <p className="mb-4">
                    Trayektoriyaning ixtiyoriy nuqtasida joylashgan M nuqtaga tabiiy koordinatalarni 4.2- § dagi mulohazalardan foydalanib o’rnatamiz. Xuddi shunday trayektoriyaning M1 nuqtasiga ham tabiiy koordinatalar sistemasini o’rnatib olamiz (4.7 – shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image4_7}
                        alt="3.18-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Aytaylik, nuqta <InlineMath math={`t`} /> vaqtda <InlineMath math={`v`} /> tezlikka, <InlineMath math={`t + \\Delta t = t_1`} /> vaqtda <InlineMath math={`v_1`} /> tezlikka ega bo’lsin. <InlineMath math={`v`} /> va <InlineMath math={`v_1`} /> tezliklarni shaklda ko’rsatamiz. Ta’rifga ko’ra tezlanish vektori quyidagi formuladan aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`a = \\frac{\\Delta v}{\\Delta t} = \\frac{v_1 - v}{\\Delta t} \\quad (4.19)`} />
                </div>

                <p className="mb-4">
                    Bu tenglikni M va Mn o’qlarga proyeksiyalaymiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`a = \\frac{v_1 - v}{\\Delta t} \\quad (4.20)`} />
                </div>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`a_n = \\frac{v_1^n - v^n}{\\Delta t} \\quad (4.21)`} />
                </div>

                <p className="mb-4">
                    Matematik hisoblashlardan keyin urinma tezlanish uchun formulaga ega bo`lamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`a = \\frac{dv}{dt} \\quad (4.22)`} />
                </div>

                <p className="mb-4 te">
                    <InlineMath math={'a'} /> kattalik tezlanishning <InlineMath math={'Mτ'} /> – urinma
                    o‘qdagi proyeksiyasi, yoki urinma tezlanish deyiladi. Urinma tezlanish moduli shu
                    nuqtadagi tezlik miqdoridan vaqt bo‘yicha olingan birinchi tartibli hosilaga teng.
                    Harakat tabiiy usulda berilganda nuqtaning tezligi{" "}
                    <InlineMath math={`v = \\frac{dS}{dt} = \\dot{s}`} /> ekanligini e’tiborga olsak, urinma
                    tezlanish miqdori uchun quyidagi formulani hosil qilamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`a_τ = \\dot{v} = \\ddot{s}`} />
                </div>

                <p className="mb-4">
                    Urinma tezlanish traektoriyada shu onda o‘tkazilgan urinma bo‘ylab yo‘nalgan bo‘ladi.
                    Agar:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>
                        <InlineMath math={`\\frac{dv}{dt} > 0`} /> bo‘lsa,{" "}
                        <InlineMath math={`a`} /> harakat yo‘nalishida tezlik bilan bir xil yo‘nalgan.
                    </li>
                    <li>
                        <InlineMath math={`\\frac{dv}{dt} < 0`} /> bo‘lsa,{" "}
                        <InlineMath math={`a`} /> tezlikka qarama-qarshi yo‘nalgan.
                    </li>
                </ul>

                <p className="mb-4">
                    Xuddi shunday, yuqoridagilarni e’tiborga olib,{" "}
                    <InlineMath math={`a_n`} /> kattalikni ham hisoblaymiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`a_n = \\frac{v^2}{R} \\quad (4.23)`} />
                </div>

                <p className="mb-4 te">
                    Bu yerda <InlineMath math={`a_n`} /> – harakat tabiiy usulda berilganda tezlanishning
                    normal o‘qdagi proyeksiyasi yoki normal tezlanish deyiladi va u berilgan onda tezlik
                    kvadratini shu joydagi nuqta traektoriyasining egrilik radiusiga nisbatiga teng.
                </p>

                <p className="mb-4">
                    <InlineMath math={`a_n`} /> – normal tezlanish vektori aniqlanayotgan onda traektoriyaga
                    o‘tkazilgan ichki normal bo‘ylab, traektoriyaning botiqligi tomonga yo‘nalgan bo‘ladi.
                </p>

                <p className="mb-4">
                    <InlineMath math={`a_\\tau`} /> va <InlineMath math={`a_n`} /> bo‘lgani uchun harakat
                    tabiiy usulda berilganda nuqta tezlanishining miqdori quyidagi formuladan aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`a = \\sqrt{a_\\tau^2 + a_n^2} \\quad (4.24)`} />
                </div>

                <p className="mb-4">
                    4.8-shaklda <InlineMath math={`a`} /> tezlanish bilan{" "}
                    <InlineMath math={`a_n`} /> normal tezlanish orasidagi burchak{" "}
                    <InlineMath math={`\\alpha`} /> harfi bilan belgilangan:
                </p>
                <div className="text-center py-6">
                    <img
                        src={image4_8}
                        alt="3.18-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>


                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={`\\tan\\alpha = \\frac{a_n}{a_\\tau} \\quad (4.25)`} />
                </div>

                <p className="mb-4">
                    (4.25) formuladan tabiiy koordinatalar sistemasida harakatlanayotgan nuqta tezlashining
                    yo‘nalishi topiladi. Formuladan ko‘rinadiki, tezlanish yopishma tekislikda yotar ekan.
                </p>

                <p className="mb-4">
                    Umumiy holda tezlanish vektorining yo‘nalishi tezlik vektorining miqdor va yo‘nalishi
                    o‘zgarishiga bog‘liq bo‘ladi (4.8 a,b,c,d-shakllar). Xususiy hollarda:{" "}
                    <InlineMath math={`a = 0`} />, agar tezlikning yo‘nalishi o‘zgarmas bo‘lsa, harakat
                    to‘g‘ri chiziqli bo‘lib, normal tezlanish nolga teng bo‘ladi{" "}
                    <InlineMath math={`(a_n = 0)`} />.
                </p>

            </div>
        </>
    );
};

export default NuqtaharakatiTabitU43;


