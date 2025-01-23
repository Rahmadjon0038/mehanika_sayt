import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
// Agar shakllar kerak bo'lsa, ularni shu tarzda import qiling
import image7_24 from '../../assets/bolim@7image/image7_24.png';
import image7_25 from '../../assets/bolim@7image/image7_25.png';

const NuqTaKinetik715ma = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.15 – §. Nuqta kinetik energiyasining o’zgarishi haqidagi teoremani qo’llashga doir masalalar.
                </h2>

                {/* 7.16-Masala */}
                <h3 className="text-xl font-semibold mt-6 mb-4">
                    7.16 - Masala
                </h3>
                <p className="mb-4">
                    Massasi <InlineMath math={"m = 2 \, \text{kg}"} /> bo’lgan yuk <InlineMath math={"h = 5 \, \text{m}"} /> balandlikda joylashgan <InlineMath math={"A"} /> nuqtadan <InlineMath math={"v_0 = 20 \, \text{ms}^{-1}"} /> tezlik bilan otib yuborilganda <InlineMath math={"B"} /> nuqtaga <InlineMath math={"v_1 = 16 \, \text{ms}^{-1}"} /> tezlikda kelib tushdi. Harakat davomida yukka ta’sir qilgan havoning qarshilik kuchi aniqlansin (<InlineMath math={"7.24 – shakl"} />).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image7_24}
                        alt="Shakl 7.24 - Masala Yechnishi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <h4 className="text-lg font-semibold mt-4 mb-2">
                    Yechish:
                </h4>
                <p className="mb-4">
                    Yuk <InlineMath math={"A"} /> nuqtadan <InlineMath math={"B"} /> nuqtaga yetib kelguncha unga og’irlik kuchi <InlineMath math={"G"} /> hamda havoning qarshilik kuchi <InlineMath math={"R"} /> ta’sir qiladi. Yukni moddiy nuqta deb qabul qilamiz va uning harakatiga kinetik energiyaning o’zgarishi haqidagi <InlineMath math={"(7.44)"} /> teoremani qo’llasak, quyidagicha yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"mv_2^2 - mv_0^2 = A_G + A_R"} />
                </div>

                <p className="mb-4">
                    Bunda formulaga ko’ra og’irlik kuchining bajargan ishi <InlineMath math={"A_G = G \\cdot h"} />, bo’lib, yuqoridagi ifodaga qo’ysak, izlanayotgan qarshilik kuchining bajargan ishi kelib chiqadi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"A_R = mv_2^2 - mv_0^2 - mgh = -242 \, \\text{Joul}"} />
                </div>

                <p className="mb-4 font-semibold">
                    Javob: <InlineMath math={"A_R = -242 \, \\text{Joul}"} /> ish bajariladi.
                </p>

                {/* 7.17-Masala */}
                <h3 className="text-xl font-semibold mt-6 mb-4">
                    7.17 - Masala
                </h3>
                <p className="mb-4">
                    Gorizontal tekislikda yotuvchi <InlineMath math={"m"} /> massali yuk <InlineMath math={"v_0"} /> boshlang’ich tezlik bilan turtib yuborildi. Agar harakat davomida o’zgarmas <InlineMath math={"R"} /> qarshilik kuchi ta’sir etsa, to’xtaguncha qancha masofa bosib o’tishi aniqlansin (<InlineMath math={"M0"} /> nuqtaning boshlang’ich holati, <InlineMath math={"M1"} /> to’xtagan nuqtasi) (<InlineMath math={"7.25 – shakl"} />).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image7_24}
                        alt="Shakl 7.24 - Masala Yechnishi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <h4 className="text-lg font-semibold mt-4 mb-2">
                    Yechish:
                </h4>
                <p className="mb-4">
                    Moddiy nuqta deb qabul qilingan yukka harakati davomida <InlineMath math={"G"} /> og’irlik kuchi, <InlineMath math={"R"} /> o’zgarmas qarshilik kuchi, <InlineMath math={"N"} /> tekislikning normal reaksiya kuchlari ta’sir qiladi. <InlineMath math={"M0 M1 = s"} /> ning to’xtaguncha bosib o’tgan yo’li bo’lsin. Kinetik energiyaning o’zgarishi haqidagi teoremaning <InlineMath math={"(7.44)"} /> chekli ko’rinishidan foydalanamiz.
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"mv_2^2 - mv_0^2 = A_G + A_R + A_N"} />
                </div>

                <p className="mb-4">
                    Masala shartiga ko’ra <InlineMath math={"v_1 = 0"} />, <InlineMath math={"G"} /> va <InlineMath math={"N"} /> kuchlar ko’chishga perpendikulyar yo’nalganligi, hamda <InlineMath math={"R = const"} /> bo’lgani uchun faqat <InlineMath math={"R"} /> kuchning <InlineMath math={"s"} /> ko’chishdagi ishini hisoblaymiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 overflow-x-auto">
                    <BlockMath math={"A_R = -R \\cdot s"} />
                </div>

                <p className="mb-4">
                    Demak, <InlineMath math={"-mv_0^2 = -R \\cdot s"} />, bo’lib, bundan <InlineMath math={"R = \\frac{mv_0^2}{s"} />, kelib chiqadi.
                </p>

                <p className="mb-4">
                    Natijadan shunday xulosa qilish mumkin, to’xtash yo’li boshlang’ich tezlikning kvadratiga mutanosib bo’lar ekan, buni transport vositalari harakatiga tatbiq etiladigan bo’lsa, tezlikning oshishi to’xtash yo’lining uzayishiga olib keladi deyish mumkin.
                </p>

            </div>
        </>
    );
};

export default NuqTaKinetik715ma; 