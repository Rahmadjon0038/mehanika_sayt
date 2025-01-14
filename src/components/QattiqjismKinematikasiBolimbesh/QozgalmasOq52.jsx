import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image5_3 from '../../assets/bolim@5image/image5_3.png';

const QozgalmasOq52 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    5.2 – §. Qattiq jismning qo’zg’almas o’q atrofida aylanma harakati. Burchak tezlik va burchak tezlanish
                </h2>

                <p className="mb-4 te">
                    Qattiq jismning harakati davomida uning ikkita nuqtasi harakatsiz qolsa, qattiq jismning bunday harakatiga qo’zg’almas o’q atrofida aylanma harakat deyiladi. Mazkur qo’zg’almas nuqtalar orqali o’tuvchi to’g’ri chiziqqa aylanish o’qi deyiladi.
                </p>

                <p className="mb-4">
                    Qattiq jismning qo’zg’almas o’q atrofida aylanma harakatini o’rganish uchun qo’zg’almas o’q orqali o’tuvchi ikkita tekislik o’tkazamiz. Ulardan biri jism bilan mahkam bog’langan va jism bilan birgalikda harakatlanuvchi <InlineMath math={"P"} /> tekislik, ikkinchisi esa qo’zg’almas qilib o’tkazilgan <InlineMath math={"P_0"} /> tekislik. Bu ikki tekislik orasidagi burchakni <InlineMath math={"\\phi"} /> deb belgilasak, ko’ramizki, <InlineMath math={"P"} /> tekislik <InlineMath math={"P_0"} /> tekislikka nisbatan shu burchakka burilsa, jismning barcha nuqtalari shu burchakka buriladi. Demak, agar vaqtning funksiyasi sifatida <InlineMath math={"\\phi = \\phi(t)"} /> burchakning qiymatini aniqlash mumkin bo’lsa, jismning harakati berilgan deyish mumkin. <InlineMath math={"\\phi"} /> - burchakka aylanish burchagi deyiladi.
                </p>

                <p className="mb-4">
                    Jism <InlineMath math={"A_z"} /> o’qi atrofida aylanganda mazkur burchak vaqtning bir qiymatli uzluksiz funksiyasi sifatida o’zgaradi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\phi = \\phi(t) \\quad (5.5)"} />
                </div>

                <p className="mb-4 te">
                    Ushbu funksiyaga qattiq jisimning qo’zg’almas o’q atrofida aylanma harakat tenglamasi deyiladi.
                </p>

                <p className="mb-4">
                    Aytaylik, <InlineMath math={"t"} /> vaqtda ikkita tekislik orasidagi burchak <InlineMath math={"\\phi"} />, <InlineMath math={"t + \\Delta t"} /> vaqtda aylanish burchagi <InlineMath math={"\\phi_{t + \\Delta t}"} /> bo’lsin, bundan <InlineMath math={"\\Delta t"} /> vaqtda
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\Delta \\phi = \\phi_{t + \\Delta t} - \\phi_t"} />
                </div>

                <p className="mb-4">
                    burchakka burilganligi kelib chiqadi. Aylanish burchagi orttirmasining vaqt orttirmasiga nisbati <InlineMath math={"\\frac{\\Delta \\phi}{\\Delta t}"} /> cheksiz kichik vaqtdagi burchakning o’rtacha burilish tezligi deyiladi. <InlineMath math={"\\Delta t \\to 0"} /> dagi o’rtacha burilish tezligining qiymatiga jismning burchak tezligi deyiladi (5.3-shakl):
                </p>

                <div className="text-center py-6">
                    <img
                        src={image5_3}
                        alt="Qo'zg'almas o'q atrofida aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\omega = \\frac{d\\phi}{dt} = \\dot{\\phi} \\quad (5.6)"} />
                </div>

                <p className="mb-4 te">
                    Aylanish burchagidan vaqt bo’yicha olingan birinchi tartibli hosilaga qo’zg’almas o’q atrofida aylanuvchi jismning burchak tezligi deyiladi. <InlineMath math={"\\phi"} /> ning o’zgarish qonuniga mos ravishda burchak tezlik musbat yoki manfiy qiymatlarni qabul qilishi mumkin. Aylanish burchagi radianda, vaqt esa sekundda o’lchanadi. Demak, burchak tezlik <InlineMath math={"\\text{rad/s}"} /> larda o’lchanadi.
                </p>

                <p className="mb-4">
                    Burchak tezlik jismning aylanish yo’nalishini belgilaydi. <InlineMath math={"\\omega = f'(t) > 0"} /> bo’lsa, <InlineMath math={"f'(t)"} /> funksiya o’suvchi, ya’ni aylanish o’qi uchidan qaralganda harakat soat miliga teskari yo’nalishda bo’ladi deb qabul qilingan. <InlineMath math={"\\omega = f'(t) < 0"} /> bo’lsa, <InlineMath math={"f'(t)"} /> funksiya kamayuvchi, jism aylanish o’qi uchidan qaralganda soat mili yo’nalishida aylanayotgan bo’ladi deb qabul qilingan.
                </p>

                <p className="mb-4">
                    Agar harakat davomida <InlineMath math={"\\omega = \\omega_0 = \\text{const}"} /> bo'lsa, <InlineMath math={"\\frac{d\\phi}{dt} = \\omega_0 = \\text{const}"} />. < InlineMath math={"d\\phi = \\omega_0 dt"} /> bo’lib, uni integrallasak, <InlineMath math={"\\phi = \\omega_0 t + C_1"} /> kelib chiqadi. Agar <InlineMath math={"t = 0"} /> da <InlineMath math={"\\phi = 0"} /> boshlang’ich shartdan foydalansak, integral o’zgarmasi <InlineMath math={"C_1 = 0"} /> ekanligi ma’lum bo’ladi, va tekis aylanma harakat tenglamasiga ega bo’lamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\phi = \\omega_0 t \\quad (5.7)"} />
                </div>

                <p className="mb-4">
                    Agar harakat boshida aylanish burchagi nolga teng, ya’ni <InlineMath math={"t = 0"} /> da <InlineMath math={"\\phi_0 = 0"} /> bo’lsa,
                </p>














                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\phi = \\omega t \\quad (5.8)"} />
                </div>

                <p className="mb-4">
                    sodda ko’rinishdagi tekis aylanma harakat tenglamasi hosil bo’ladi.
                </p>


                <p className="mb-4">
                    Texnika masalalarida asosan, jismlarning tekis aylanma harakatiga duch kelinadi, ko’pincha ularning minutiga aylanishlar soni <InlineMath math={"n"} /> berilgan bo’ladi. Burchak tezlik bilan bir minutdagi aylanishlar soni orasidagi quyidagi bog’lanish mavjud. <InlineMath math={"n"} /> – bir minutdagi aylanishlar soni bolsa, bir sekunddagi aylanishlar <InlineMath math={"\\frac{n}{60}"} />, jism to’la aylanganda <InlineMath math={"2\\pi"} /> burchakka buriladi. U holda aylanish tezligi, ya’ni burchak tezlik:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\omega = \\frac{2\\pi n}{60} = \\frac{\\pi n}{30} \\text{ rad/s} \\quad (5.9)"} />
                </div>

                <p className="mb-4">
                    Aytaylik, jismning <InlineMath math={"t"} /> vaqtdagi burchak tezligi <InlineMath math={"\\omega(t)"} />, <InlineMath math={"t + \\Delta t"} /> vaqtdagi burchak tezligi <InlineMath math={"\\omega_{t + \\Delta t}"} /> bo’lsin, U holda, <InlineMath math={"\\Delta t"} /> vaqtda burchak tezligining o’zgarishi quyidagicha hisoblanadi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\Delta \\omega = \\omega_{t + \\Delta t} - \\omega_t"} />
                </div>

                <p className="mb-4">
                    Burchak tezlik orttirmasining vaqt orttirmasiga nisbati <InlineMath math={"\\frac{\\Delta \\omega}{\\Delta t}"} /> jismning o’rtacha burchak tezlanishi deyiladi. Bu munosabatning <InlineMath math={"\\Delta t \\to 0"} /> dagi qiymati jismning burchak tezlanishi deyiladi va <InlineMath math={"\\epsilon"} /> harfi bilan belgilanadi. Burchak tezlanish <InlineMath math={"\\text{rad/s}^2"} /> larda o’lchanadi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\epsilon = \\frac{\\Delta \\omega}{\\Delta t} = \\frac{d\\omega}{dt} = \\frac{d}{dt} \\left( \\frac{d\\phi}{dt} \\right) = \\frac{d^2 \\phi}{dt^2} \\quad (5.10)"} />
                </div>

                <p className="mb-4 te">
                    Vaqt birligi ichida burchak tezlikning o’zgarishi burchak tezlanish deyiladi. Ya’ni jismning aylanma harakat burchak tezligidan vaqt bo’yicha olingan birinchi tartibli hosila jismning burchak tezlanishi deyiladi.
                </p>

                <p className="mb-4">
                    Tenglamada <InlineMath math={"\\frac{d\\omega}{dt} > 0"} /> bo’lsa, <InlineMath math={"\\omega"} /> ortib boradi, harakat tezlanuvchan, <InlineMath math={"\\frac{d\\omega}{dt} < 0"} /> bo’lsa, <InlineMath math={"\\omega"} /> kamayuvchi bo’lib, harakat sekinlanuvchan aylanma harakat deyiladi.
                </p>

                <p className="mb-4">
                    Agar <InlineMath math={"\\omega = \\omega_0 = \\text{const}"} /> bo’lsa, <InlineMath math={"\\frac{d\\omega}{dt} = 0"} />, dan <InlineMath math={"d\\omega = 0 dt"} /> bo’lib, uni integrallasak:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\omega = \\omega_0 t + C_1"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"C_1"} /> integrallash o’zgarmasini boshlang’ich shartlardan, ya’ni <InlineMath math={"t = 0"} /> da <InlineMath math={"\\omega = \\omega_0"} /> shartdan aniqlanadi: Demak, <InlineMath math={"C_1 = \\omega_0"} /> bo’lib, tekis o’zgaruvchan aylanma harakat burchak tezligi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\omega = \\omega_0 + \\epsilon t \\quad (5.11)"} />
                </div>

                <p className="mb-4">
                    (5.11) tenglikdan foydalanib, tekis o’zgaruvchan aylanma harakat tenglamasini keltirib chiqaramiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"d\\phi = (\\omega_0 + \\epsilon t) dt"} />
                </div>

                <p className="mb-4">
                    Buni integrallab,
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\phi = \\omega_0 t + \\frac{\\epsilon t^2}{2} + C_2"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"t = 0"} /> da <InlineMath math={"\\phi = \\phi_0"} /> shartlardan foydalanib, <InlineMath math={"C_2 = \\phi_0"} /> bo’lishini topamiz.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\phi = \\phi_0 + \\omega_0 t + \\frac{\\epsilon t^2}{2} \\quad (5.12)"} />
                </div>

                <p className="mb-4">
                    Ko’rinishidagi qo’zg’almas o’q atrofida tekis o’zgaruvchan aylanma harakat tenglamasiga ega bo’ldik.
                </p>

                {/* <div className="text-center py-6">
                    <img
                        src={image5_4}
                        alt="Tekis o'zgaruvchan aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div> */}



            </div >
        </>
    );
};

export default QozgalmasOq52;
