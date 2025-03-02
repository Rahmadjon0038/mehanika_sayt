import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image7_11 from '../../assets/bolim@7image/image7_11.png'; // Rasm yo'lini to'g'rilang
import image7_12 from '../../assets/bolim@7image/image7_12.png'; // Rasm yo'lini to'g'rilang
import qr from '../../assets/qrcode/lesson78.png'

const ModdiyNuqta78 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.8– §. Moddiy nuqta dinamikasining ikkinchi asosiy masalasini yechishga doir masalalar.
                </h2>
                <div className="text-center mb-6">
                    <a href="https://www.youtube.com/watch?v=Tgpj5naDVjI&ab_channel=NAZARIYMEXANIKA">
                        <img

                            src={qr}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-48"
                        />
                    </a>
                </div>
                <p className="mb-4">
                    Moddiy nuqta harakat differensial tenglamasini integrallash yo’li bilan dinamikaning ikkinchi asosiy masalasini yechish quyidagi tartibda amalga oshiriladi:
                </p>

                <ul className="list-decimal pl-8 mb-4">
                    <li>Harakati o’rganilayotgan moddiy nuqta ajratib olinadi.</li>
                    <li>Harakat turiga qarab sanoq sistemasi tanlanadi. Koordinatalar sistemasining boshi qilib harakat boshlangan nuqtani tanlash maqsadga muvofiq.  O’qlar harakat yo’nalishida yo’naltiriladi.</li>
                    <li>Moddiy nuqta ixtiyoriy holatda joylashtirilib, unga ta’sir qiluvchi barcha aktiv va bog’lanish reaksiya kuchlari shaklda tasvirlanadi.</li>
                    <li>Harakat differensial tenglamasining tanlangan koordinatalar sistemasidagi proyeksiyalari tuziladi. Tenglamalar sistemasining o’ng tomonida joylashgan kuchlar proyeksiyalarining barchasi bitta o’zgaruvchining funksiyasi sifatida ifodalanadi.</li>
                    <li>Tuzilgan harakat differensial tenglamalari ikki marta integrallanadi. Bunda tenglamaning turiga qarab oliy matematikaning differensial tenglamalarni integrallash usullaridan foydalaniladi.</li>
                    <li>Integrallash natijasida hosil bo’lgan o’zgarmas sonlar aniqlanadi. Buning uchun masala shartida keltirilgan boshlang’ich shartlardan foydalanib tenglamalar tuziladi va ularni birgalikda yechib integral o’zgarmaslari topiladi. Ulardan foydalanib nuqtaning harakat qonunlari aniqlanadi.</li>
                    <li>Keltirib chiqarilgan harakat qonunidan foydalanib, masala shartida aniqlash talab etilgan kattaliklar topiladi.</li>
                </ul>

                <p className="mb-4">
                    Quyida harakati to’g’ri chiziqli bo’lgan hol uchun moddiy nuqta harakat differensial tenglamasini integrallab masalalar yechishni ko’rib chiqamiz.
                </p>

                <p className="mb-4 font-bold">
                    7.8 – Masala.   Yer sirtiga H balandlikdan tushib kelayotgan o’zgarmas <InlineMath math={"G"} /> og’irlikdagi jism harakat tenglamasi aniqlansin. Jism moddiy nuqta deb qabul qilinsin, havoning qarshiligi hisobga olinmasin.
                </p>

                <p className="mb-4">
                    <span className="font-bold">Yechish:</span> Jismni moddiy nuqta deb, boshlang’ich paytda turgan nuqtaning holatini koordinata boshi qilib, harakat yo’nalishida <InlineMath math={"Oy"} /> o’qini yo’naltiramiz. Nuqtaga o’zgarmas og’irlik kuchi <InlineMath math={"G"} /> ta’sir  qiladi, xolos. Harakat differensial tenglamasining <InlineMath math={"Oy"} /> o’qdagi proyeksiyasini tuzamiz 7.11 – shakl.
                </p>

                <div className="text-center py-6">
                    <img
                        src={image7_11}
                        alt="7.11-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <p>
                        <InlineMath math={"m\\ddot{y} = \\sum F_{ky}"} /> dan foydalansak,
                    </p>
                </div>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">

                    <BlockMath math={"m\\ddot{y} = G \\quad \\text{yoki} \\quad \\ddot{y} = g"} />
                </div>

                <p className="mb-4">
                    Demak, nuqtaning  <InlineMath math={"Oy"} />  o’qi bo’ylab, tezlanishi ikki marta integrallaymiz
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\dot{y} = gt + C_1 \\qquad (a)"} />
                    <BlockMath math={"y = \\frac{gt^2}{2} + C_1t + C_2 \\qquad (b)"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"C_1, C_2"} /> integral o’zgarmaslarini aniqlash uchun boshlang’ich shartlardan foydalanamiz. <InlineMath math={"t=0"} /> da <InlineMath math={"y= v_0=0"} /> ekanligini hisobga olib, <InlineMath math={"(a)"} /> tenglamadan <InlineMath math={"C_1=0"} /> ni, <InlineMath math={"t=0"} /> da <InlineMath math={"y = 0"} /> qiymatlarni <InlineMath math={"(b)"} /> formulaga qo’yib <InlineMath math={"C_2= 0"} /> ekanligini aniqlaymiz.
                </p>

                <p className="mb-4">
                    Demak, <InlineMath math={"\\dot{y} = gt, \\quad y = \\frac{gt^2}{2}"} /> bo’lib, ular jismning erkin tushish qonunlarini ifodalaydi. Tengliklardan shunday xulosalarni aytish mumkin: jismning erkin tushish tezligi tushish vaqtiga mutanosib. Erkin tushayotgan jism o’tgan yo’li tushish vaqtining kvadratiga mutanosib. Yuqorida keltirilgan jismning erkin tushish qonunlari birinchi bo’lib Galiley tomonidan tajriba yo’li bilan aniqlangan.
                </p>

                <p className="mb-4">
                    Topilgan harakat qonunidan hamda balandligi <InlineMath math={"H"} /> ma’lumligidan foydalanib, jismning erkin tushish vaqtini aniqlash mumkin.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"H = \\frac{gt^2}{2} , \\qquad t_н = \\sqrt{\\frac{2H}{g}}"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"t_н"} /> - jismning <InlineMath math={"H"} /> balandlikdan erkin tushish vaqti.
                </p>

                <p className="mb-4 font-bold">
                    7.9 – masala. Massasi <InlineMath math={"m"} /> bo’lgan yuk silliq gorizontal tekislikda <InlineMath math={"F"} /> kuch ta’sirida boshlang’ich tezliksiz harakatga keltirilgan. <InlineMath math={"F"} /> kuchning qiymati vaqtning funksiyasi sifatida <InlineMath math={"F=kt"} /> qonunga ko’ra o’zgaradi. Yukning harakat qonuni aniqlansin.
                </p>

                <p className="mb-4">
                    <span className="font-bold">Yechish:</span> Yuk boshlang’ich holatda turgan nuqtani sanoq boshi deb qabul qilamiz va <InlineMath math={"Ox"} /> o’qni harakat bo’ylab yo’naltiramiz (7.12 – shakl). Yukni moddiy nuqta deb tasvirlab, unga ta’sir qiluvchi <InlineMath math={"G"} /> og’irlik kuchi, <InlineMath math={"N"} /> tekislikning normal reaksiya kuchi hamda berilgan <InlineMath math={"F"} /> kuchni shaklda tasvirlaymiz. Harakat differensial tenglamasining <InlineMath math={"Ox"} /> o’qdagi proyeksiyasini yozamiz: <InlineMath math={"m\\ddot{x} = F_x"} />, shakldan ko’rinib turibdiki, <InlineMath math={"N_x=0, G_x=0"} />, demak, <InlineMath math={"m\\ddot{x}=kt"} /> hosil bo’ladi.
                </p>

                <div className="text-center py-6">
                    <img
                        src={image7_12}
                        alt="7.12-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p>
                    <InlineMath math={"\\dot{x} = \\frac{dx}{dt}"} /> munosabatni tenglamaga qo’yib ikkala tomonini <InlineMath math={"dt"} /> ga ko’paytiramiz va <InlineMath math={"m d\\dot{x} = ktdt"} /> ni xosil qilamiz.
                </p>

                <p className="mb-4">
                    Differensial tenglama integrallash uchun qulay ko’rinishga keltirildi, integrallaymiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"m\\dot{x} = \\frac{kt^2}{2} + C_1"} />
                </div>

                <p className="mb-4">
                    Bu tenglikda <InlineMath math={"x = \\frac{dx}{dt}"} /> ekanligini hisobga olib, ikkala tomonini <InlineMath math={"dt"} /> ga ko’paytirib yana bir marta integrallaymiz.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"mdx = \\left(\\frac{kt^2}{2} + C_1\\right)dt"} />
                    <BlockMath math={"mx = \\frac{kt^3}{6} + C_1t + C_2"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"C_1"} /> va <InlineMath math={"C_2"} /> integral o’zgarmaslarini boshlang’ich shartlardan foydalanib aniqlaymiz. <InlineMath math={"t=0"} /> da <InlineMath math={"\\dot{x}=0"} /> shartdan <InlineMath math={"C_1=0"} /> kelib chiqadi.
                </p>

                <p className="mb-4">
                    <InlineMath math={"t=0"} /> da <InlineMath math={"x=0"} /> shartdan <InlineMath math={"C_2=0"} /> kelib chiqadi. Demak, yukning natijaviy harakat qonuni aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"x = \\frac{k}{6m}t^3"} />
                </div>

                <p className="mb-4">
                    Shunday qilib, yukning bosib o’tgan yo’li vaqtning kubiga mutanosib ekan.
                </p>
            </div>
        </>
    );
};

export default ModdiyNuqta78;

