import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
// Rasmlarni kerakli joydan import qiling
import image7_20 from '../../assets/bolim@7image/image7_20.png';
import image7_21 from '../../assets/bolim@7image/image7_21.png';
import image7_22 from '../../assets/bolim@7image/image7_22.png';
import image7_23 from '../../assets/bolim@7image/image7_23.png';

const MddiyNuqtaTasir713 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.13 – §. Moddiy nuqtaga ta’sir qiluvchi ba’zi bir kuchlarning bajargan ishini hisoblash. Masalalar.
                </h2>

                {/* Og’irlik kuchining bajargan ishi */}
                <p className="mb-4">
                    Og’irlik kuchning bajargan ishi. Aytaylik, moddiy nuqta faqat og’irlik kuchining ta’sirida{" "}
                    <InlineMath math={"M_1(x_1,y_1,z_1)"} /> holatdan{" "}
                    <InlineMath math={"M_2(x_2,y_2,z_2)"} /> holatga o’tgan bo’lsin. (7.31) formulaga ko’ra
                    og’irlik kuchining bajargan ishini quyidagicha yozish mumkin <InlineMath math={"AG = \int_{M_1}^{M_2} G_x \, dx + G_y \, dy + G_z \, dz"} /> 
                    (7.20–shakl). Shakldan{" "}
                    <InlineMath math={"G_x = 0, \quad G_y = 0, \quad G_z = -G"} /> ekanligini hisobga olsak,
                </p>
                <div className="text-center py-6">
                    <img
                        src={image7_20}
                        alt="Shakl 7.24 - Masala Yechnishi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div> 

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"AG = m g (z_1 - z_2) \quad (7.40)"} />
                </div>

                <p className="mb-4">
                    Bu tenglikda <InlineMath math={"z_1 > z_2"} /> bo’lsa, ya’ni moddiy nuqta yuqoridan pastga tushayotgan bo’lsa,{" "}
                    <InlineMath math={"AG > 0"} /> bo’lib, og’irlik kuchining bajargan ishi musbat, agar{" "}
                    <InlineMath math={"z_1 < z_2"} /> bo’lsa, moddiy nuqta yuqoriga ko’tarilayotgan bo’lib,{" "}
                    og’irlik kuchining bajargan ishi manfiy bo’ladi. Agar{" "}
                    <InlineMath math={"z_1 - z_2 = h"} /> deb belgilasak, umumiy ko’rinishda{" "}
                    <InlineMath math={"AG = \pm m g h \quad (7.40)"} /> deb yozish mumkin. Demak, og’irlik kuchi ta’siridagi
                    moddiy nuqta faqat gorizontal tekislikda harakatlansa, <InlineMath math={"h = 0"} /> bo’lib,
                    bajarilgan ish nolga teng bo’ladi.
                </p>

                <p className="mb-4">
                    Formuladan ko’rinib turibdiki, moddiy nuqta og’irlik kuchining bajargan ishi bosib o’tilgan
                    yo’lning ko’rinishiga bog’liq bo’lmasdan tushish yoki ko’tarilish balandligigagina
                    bog’liq bo’ladi. Og’irlik kuchining bajargan ishi og’irlik kuchi qo’yilgan nuqtaning
                    vertikal bo’ylab ko’chishini kuch moduliga ko’paytmasining mos ishora bilan olinganiga
                    teng. Bajargan ishi yo’lning ko’rinishiga bog’liq bo’lmagan kuch potentsial kuch deyiladi.
                </p>

                {/* Ishqalanish kuchining bajargan ishi */}
                <h3 className="text-xl font-semibold mt-6 mb-4">
                    Ishqalanish kuchining bajargan ishi
                </h3>
                <p className="mb-4">
                    <InlineMath math={"M"} /> moddiy nuqta biror g’adir-budur sirtda{" "}
                    <InlineMath math={"M_0 M_1"} /> egri chiziq bo’ylab harakatlanayotgan bo’lsin. Ma’lumki,
                    nuqtaga ta’sir qiluvchi ishqalanish kuchining miqdori Kulon qonuniga asosan{" "}
                    <InlineMath math={"F_{\text{ishq}} = f N"} /> ko’rinishida bo’ladi. Bu yerda{" "}
                    <InlineMath math={"N"} /> tekislikning normal reaksiya kuchi,{" "}
                    <InlineMath math={"f"} /> sirpanishdagi ishqalanish koeffitsienti (7.21-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image7_21}
                        alt="Shakl 7.24 - Masala Yechnishi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div> 

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"A_{F_{\text{ishq}}} = - M_0 M_1 F_{\text{ishq}} \, ds"} />
                </div>

                <p className="mb-4">
                    Agar yo’l davomida ishqalanish kuchi o’zgarmas bo’lsa, bajarilgan ish quyidagicha
                    aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"A_{F_{\text{ishq}}} = - F_{\text{ishq}} \cdot s \quad (7.41)"} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math={"s"} /> masofa{" "}
                    <InlineMath math={"M_0"} /> nuqta bilan{" "}
                    <InlineMath math={"M_1"} /> nuqta orasidagi yoyning uzunligi. Demak, ishqalanish kuchining bajargan
                    ishi yo’lga bog’liq ekan va u potentsial bo’lmagan kuch hisoblanadi.
                </p>

                {/* 7.14-masala */}
                <h3 className="text-xl font-semibold mt-6 mb-4">
                    7.14 - Masala
                </h3>
                <p className="mb-4">
                    Massasi 4080 kg bo’lgan ABSD massiv <InlineMath math={"7.22-shakl"} /> da ko’rsatilgan o’lchamlarga ega.
                    Massivni D qirrasi atrofida aylantirish uchun sarflanadigan ish aniqlansin.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image7_22}
                        alt="Shakl 7.24 - Masala Yechnishi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div> 

                <h4 className="text-lg font-semibold mt-4 mb-2">
                    Yechish.
                </h4>
                <p className="mb-4">
                    Massivni D qirrasi atrofida aylantirishga og’irlik kuchi qarshilik qiladi. Demak, og’irlik 
                    kuchining bajargan ishiga teng ish bajarish kerak. Formulaga ko’ra og’irish kuchining bajargan 
                    ishi{" "}
                    <InlineMath math={"A_G = m g h"} />, bu erda{" "}
                    <InlineMath math={"h"} /> og’irlik kuchi qo’yilgan nuqtaning pasayish masofasi, bo’lib, 
                    <InlineMath math={"h = 4 - 3 = 1 \, \text{m}"} /> shakldan{" "}
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"A_G = 4080 \cdot 9.81 \cdot 1 = 40025 \, \text{joul} \approx 40 \, \text{kJ}"} />
                </div>

                <p className="mb-4 font-semibold">
                    Javob: <InlineMath math={"A_G \approx 40 \, \text{kJ}"} /> ish sarflash kerak.
                </p>

                {/* 7.15-masala */}
                <h3 className="text-xl font-semibold mt-6 mb-4">
                    7.15 – Masala
                </h3>
                <p className="mb-4">
                    Jismga yo’nalishi o’zgarmaydigan, <InlineMath math={"7.23-shakl"} /> ga ko’rsatilgan{" "}
                    <InlineMath math={"F = 4x^3"} /> kuch ta’sir qiladi. Jismni{" "}
                    <InlineMath math={"x = 0"} /> nuqtadan{" "}
                    <InlineMath math={"x = 1 \, \text{m}"} /> bo’lgan nuqtaga kelguncha{" "}
                    <InlineMath math={"F"} /> kuchning bajargan ishini aniqlansin.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image7_23}
                        alt="Shakl 7.24 - Masala Yechnishi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div> 

                <h4 className="text-lg font-semibold mt-4 mb-2">
                    Yechish.
                </h4>
                <p className="mb-4">
                    (7.31) formulaga ko’ra{" "}
                    <InlineMath math={"A_F = \int_{M_0}^{M_1} F_x \, dx"} />, bo’lib, bunda{" "}
                    <InlineMath math={"F_x = F \cos 30^\circ"} />, 
                    bo’lgani uchun:
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"A_F = \int_{0}^{1} F \cos 30^\circ \, dx = \frac{4}{3} x^3 \bigg|_0^1 = 0.86 \, \text{joul}"} />
                </div>

                <p className="mb-4 font-semibold">
                    Javob: <InlineMath math={"A_F = 0.86 \, \text{joul}"} /> ish bajariladi.
                </p>

            </div>
        </>
    );
};

export default MddiyNuqtaTasir713;