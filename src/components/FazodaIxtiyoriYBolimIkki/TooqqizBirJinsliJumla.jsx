import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Navbar componentasini import qilish
import "katex/dist/katex.min.css"; // KaTeX CSS import qilish
import image2_12 from '../../assets/bolim@2Image/image2_12.png'
import image2_13 from '../../assets/bolim@2Image/image2_13.png'
import image2_14 from '../../assets/bolim@2Image/image2_14.png'
import image2_15 from '../../assets/bolim@2Image/image2_15.png'
import image2_17 from '../../assets/bolim@2Image/image2_16.png'
const OgirlikMarkaziYangi = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.9-§. Bir jinsli jismlarning og‘irlik markazini aniqlash usullari (Davomi)
                </h2>

                <h3 className="text-xl font-semibold mb-2">10.1-masala (Yechish)</h3>
                <p className="mb-4">
                    Tekis ferma og‘irlik markazining koordinatalari topilsin. Ferma yettita bir jinsli sterjendan tashkil topgan bo‘lib, uzunliklari shaklda ko‘rsatilgan (2.12-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image2_12}
                        alt="Kuch ta'sir chizig'i"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Yechish. Tekshirilayotgan tekis ferma simmetriya o‘qiga ega bo‘lmaganligi uchun og‘irlik markazining ikkita koordinatasini topish kerak. Fermani tashkil qilgan sterjenlarning og‘irliklari uzunlik birligiga to‘g‘ri mutanosib bo‘lib, ularning o‘rtasiga qo‘yilgan bo‘ladi. Koordinata o‘qlari shakldagidek yo‘nalgan bo‘lsin. (2.35) formulaga ko‘ra bir jinsli, faqat uzunlikka ega jismlarning og‘irlik markazining koordinatalarini topish mumkin.
                </p>
                <p className="mb-4">
                    Tekis ferma ekanini hisobga olsak:
                    <div className="bg-gray-200 p-4 rounded-md mb-6">
                        <BlockMath math={`x_C = \\frac{\\sum l_k x_k}{\\sum l_k}`} />
                        <BlockMath math={`y_C = \\frac{\\sum l_k y_k}{\\sum l_k}`} />
                    </div>
                </p>
                <p className="mb-4">
                    Shakldan foydalanib, sterjenlar uzunliklarini
                    <InlineMath math={`l_1 = 3m, l_2 = 2.5m, l_3 = l_6 = 2.5m, l_4 = l_7 = 2m, l_5 = 1.5m`} />
                    hamda har bir sterjenning og‘irlik markazi koordinatalarini aniqlaymiz.
                </p>
                <p className="mb-4">
                    <InlineMath math={`x_1 = 0, x_2 = 1, x_3 = 1, x_4 = 1, x_5 = 2, x_6 = x_7 = 3`} /><br />
                    <InlineMath math={`y_1 = 1.5, y_2 = 2.25, y_3 = 0.75, y_4 = 0, y_5 = 0.75, y_6 = 0.75, y_7 = 0`} />
                </p>
                <p className="mb-4">
                    Topilgan qiymatlarni formulaga qo‘ysak, tekis ferma og‘irlik markazining koordinatalari kelib chiqadi:
                    <div className="bg-gray-200 p-4 rounded-md mb-6">
                        <BlockMath math={`x_C = \\frac{23.5}{16} = 1.47m`} />
                        <BlockMath math={`y_C = \\frac{0.94}{16} = 0.94m`} />
                    </div>
                </p>

                <h3 className="text-xl font-semibold mb-2">2.4-masala</h3>
                <p className="mb-4">
                    Tavrli kesimning og‘irlik markazidan AD tomongacha bo‘lgan masofa topilsin. Tavr balandligi h, devorning qalinligi b, tokchasining kengligi AD=a, qalinligi d ga teng (2.13-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image2_13}
                        alt="Kuch ta'sir chizig'i"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Yechish. Ko‘rilayotgan kesim yuzasi AD tomonning o‘rtasidan o‘tuvchi By simmetriya o‘qiga ega. Shu sababli uning og‘irlik markazi By o‘qi ustida yotadi. Kesim yuzasini ikkita to‘g‘ri to‘rtburchaklardan iborat qismlarga ajratamiz.
                </p>
                <p className="mb-4">
                    Ajratilgan to‘g‘ri to‘rtburchaklarning yuzalarini va og‘irlik markazlarini aniqlab, (2.29) formulaga qo‘yamiz.
                    <div className="bg-gray-200 p-4 rounded-md mb-6">
                        <BlockMath math={`S_1 = a d, y_1 = \\frac{d}{2}`} />
                        <BlockMath math={`S_2 = b h - d, y_2 = \\frac{h + d}{2}`} />
                        <BlockMath math={`y_C = \\frac{S_1 y_1 + S_2 y_2}{S_1 + S_2} = \\frac{a d \\frac{d}{2} + b h \\frac{h + d}{2}}{a d + b h - d}`} />
                    </div>
                </p>

                <h3 className="text-xl font-semibold mb-2">Manfiy yuzalar usuli</h3>
                <p className="mb-4">
                    Agar bir jinsli jismning ma’lum qismlari qirqib tashlangan bo‘lsa, bunday jismning og‘irlik markazini aniqlashda manfiy yuza qo‘shish usulidan foydalaniladi
                    <div className="text-center py-6">
                        <img
                            src={image2_14}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>

                    . Bu usul bo‘laklarga bo‘lish usulining xususiy holi bo‘lib, uning mohiyati shundan iboratki, jism to‘liq va qirqilgan qismlardan iborat deb qaraladi. Bunda qirqilgan bo‘lak yuzasi manfiy deb olinadi hamda (2.29) formuladan foydalaniladi.
                </p>









                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.5-masala. Bir jinsli tekis jism og‘irlik markazining koordinatalari aniqlansin
                </h2>
                <p className="mb-4">
                    O‘lchamlari sm larda shaklda ko‘rsatilgan, yuzaga ega bir jinsli tekis jism og‘irlik markazining koordinatalari aniqlansin (10.5-shakl).
                </p>

                <h3 className="text-xl font-semibold mb-2">Yechish</h3>
                <p className="mb-4">
                    Berilgan tekis yuzani og‘irlik markazlarini aniqlash mumkin bo‘lgan shakllarga bo‘lamiz. Yuzani bitta to‘g‘ri to‘rtburchak, bitta uchburchak va manfiy yuzali bitta yarim doiraga ajratish mumkin. Dekart koordinatalar sistemasida berilgan o‘lchamlarni hisobga olib hamda (10.17) formuladan foydalanib, masala hal qilinadi (2.15-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image2_15}
                        alt="Kuch ta'sir chizig'i"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <div className="bg-gray-200 p-4 rounded-md mb-6">
                    <BlockMath math={`x_C = \\frac{S_1 x_1 + S_2 x_2 + S_3 x_3}{S_1 + S_2 + S_3}`} />
                    <BlockMath math={`y_C = \\frac{S_1 y_1 + S_2 y_2 + S_3 y_3}{S_1 + S_2 + S_3}`} />
                </div>
                <p className="mb-4">
                    Bu yerda:
                    <ul className="list-disc list-inside">
                        <li><InlineMath math={`S_1 = 2400 \\text{ sm}^2`} /></li>
                        <li><InlineMath math={`S_2 = 600 \\text{ sm}^2`} /></li>
                        <li><InlineMath math={`S_3 = \\frac{1}{2} \\pi r^2 \\approx 353.25 \\text{ sm}^2`} /></li>
                        <li><InlineMath math={`x_1 = 30 \\text{ sm}`} /></li>
                        <li><InlineMath math={`x_2 = 60 + \\frac{1}{3} \\times 30 = 70 \\text{ sm}`} /></li>
                        <li><InlineMath math={`x_3 = 20 + \\frac{1}{5} = 35 \\text{ sm}`} /></li>
                        <li><InlineMath math={`y_1 = 20 \\text{ sm}`} /></li>
                        <li><InlineMath math={`y_2 = \\frac{1}{3} \\times 40 = 13.33 \\text{ sm}`} /></li>
                        <li><InlineMath math={`y_3 = h - \\frac{2}{3} r \\sin \\alpha = 40 - \\frac{60}{3} \\approx 33.6 \\text{ sm}`} /></li>
                    </ul>
                </p>
                <p className="mb-4">
                    Topilgan qiymatlarni yuqoridagi formulaga qo‘yib, talab qilingan kattaliklarni aniqlaymiz:
                    <div className="bg-gray-200 p-4 rounded-md mb-6">
                        <BlockMath math={`x_C = \\frac{72000 + 42000 - 12363.75}{2646.75} = 38.4 \\text{ sm}`} />
                        <BlockMath math={`y_C = \\frac{48000 + 12000 - 11857.5}{2646.75} = 18.2 \\text{ sm}`} />
                    </div>
                </p>

                <h2 className="text-2xl font-bold mb-4 text-center">
                    Tajriba usuli bilan ba’zi jismlarning og‘irlik markazlarini aniqlash
                </h2>
                <p className="mb-4">
                    Bir jinsli bo‘lmagan murakkab shaklli tekis jismlarning og‘irlik markazlarini aniqlashda quyidagi usuldan foydalanish mumkin. (2.16-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image2_17}
                        alt="Kuch ta'sir chizig'i"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pga osish usuli</h3>
                <p className="mb-4">
                    Yassi jismning ixtiyoriy A1 nuqtasidan ipga osamiz. Jism ipning taranglik kuchi va og‘irlik kuchi ta’sirida muvozanatda turadi. Bu kuchlar bitta vertikal to‘g‘ri chiziqda yotadi <InlineMath math={`G = -T`} />. Og‘irlik kuchining ta’sir chizig‘ini A1A2 bilan belgilaymiz.
                </p>
                <p className="mb-4">
                    Shu tarzda jismning B1 nuqtasidan osib, og‘irlik kuchining ta’sir chizig‘ini B1B2 bilan belgilaymiz. Natijada, A1A2 va B1B2 chiziqlarning kesishgan nuqtasi C jismning og‘irlik markazini bildiradi.
                </p>
            </div>
        </>
    );
};

export default OgirlikMarkaziYangi;