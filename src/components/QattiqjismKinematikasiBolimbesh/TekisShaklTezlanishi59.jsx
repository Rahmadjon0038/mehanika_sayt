import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";
import image5_19 from '../../assets/bolim@5image/image5_19.png';

const TekisShaklTezlanishi59 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-10 pt-20">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    5.10 – §. Tekis shakl nuqtalarining tezlanishi
                </h1>
                <p className="mb-4 font-bold">
                    Teorema. Tekis shakl ixtiyoriy nuqtasining tezlanishi qutb nuqta tezlanishi bilan mazkur
                    nuqtaning qutb atrofida aylanishidan hosil bo'lgan tezlanishlarning geometrik yig'indisiga
                    teng (5.18– shakl).
                </p>

                <p className="mb-4">
                    <strong>Isbot.</strong> Tekis shakl ixtiyoriy nuqtasining tezligi
                    <InlineMath math={"\\vec{v}_B = \\vec{v}_A + \\vec{\\omega} \\times \\vec{AB}"} /> formuladan
                    aniqlanar edi. Bu formulani vaqt bo'yicha differensiallab <InlineMath math={"B"} /> nuqta
                    tezlanishini aniqlash mumkin
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\frac{d\\vec{v}_B}{dt} = \\frac{d\\vec{v}_A}{dt} + \\frac{d\\vec{\\omega}}{dt} \\times \\vec{AB} + \\vec{\\omega} \\times \\frac{d\\vec{AB}}{dt} \\quad (5.32)"} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math={"\\frac{d\\vec{\\omega}}{dt} = \\vec{\\varepsilon}"} /> tekis shaklning
                    burchak tezlanishi, <InlineMath math={"\\frac{d\\vec{v}_A}{dt} = \\vec{a}_A"} />
                    <InlineMath math={"A"} /> nuqtaning tezlanishi.
                </p>

                <p className="mb-4">
                    <InlineMath math={"\\frac{d\\vec{v}_B}{dt} = \\vec{a}_B"} /> <InlineMath math={"B"} /> nuqtaning tezlanishi.
                </p>

                <p className="mb-4">
                    <InlineMath math={"\\frac{d\\vec{AB}}{dt} = \\vec{\\omega} \\times \\vec{AB} = \\vec{v}_{BA}"} />
                    <InlineMath math={"B"} /> nuqtaning <InlineMath math={"A"} /> qutb atrofida aylanishidan hosil
                    bo'lgan tezlik.
                </p>

                <p className="mb-4">
                    Ma'lumki <InlineMath math={"\\vec{\\varepsilon}"} /> vektor ham <InlineMath math={"\\vec{\\omega}"} />
                    vektor kabi, shakl tekisligiga perpendikulyar yo'nalgan bo'ladi
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{\\varepsilon} = \\frac{d\\vec{\\omega}}{dt} = \\frac{d^2\\phi}{dt^2}\\vec{k} = \\ddot{\\phi}\\vec{k}"} />
                </div>

                <p className="mb-4">
                    Demak, <InlineMath math={"A"} /> va <InlineMath math={"B"} /> nuqtalar tezlanishlari оrasida
                    quyidagi bоg'lanish bоr:
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{a}_B = \\vec{a}_A + \\vec{\\varepsilon} \\times \\vec{AB} + \\vec{\\omega} \\times \\vec{v}_{BA} \\quad (5.33)"} />
                </div>

                <p className="mb-4">
                    (5.33) formuladagi оxirgi ikkita qo'shiluvchi <InlineMath math={"B"} /> nuqtaning
                    <InlineMath math={"A"} /> nuqta atrоfida aylanma harakatini aniqlaydi. Qo'zg'almas o'q
                    atrofida aylanma harakatdan bizga ma'lumki,
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{a}_{BA}^n = \\vec{\\omega} \\times \\vec{v}_{BA} \\quad \\text{va} \\quad \\vec{a}_{BA}^{\\tau} = \\vec{\\varepsilon} \\times \\vec{AB}"} />
                </div>

                <p className="mb-4">
                    deb belgilashimiz mumkin.
                </p>

                <p className="mb-4">
                    Yuqoridagi belgilashlardan foydalanib, (5.33) ni boshqacha ko'rinishda yozamiz.
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{a}_B = \\vec{a}_A + \\vec{a}_{BA}^n + \\vec{a}_{BA}^{\\tau} \\quad (5.34)"} />
                </div>

                <p className="mb-4">
                    Bu erda <InlineMath math={"\\vec{a}_{BA} = \\vec{a}_{BA}^n + \\vec{a}_{BA}^{\\tau}"} />,
                    <InlineMath math={"B"} /> nuqtaning <InlineMath math={"A"} /> qutb nuqta atrofida aylanma
                    harakatdagi tezlanishini ifodalaydi. Demak,
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{a}_B = \\vec{a}_A + \\vec{a}_{BA} \\quad (5.35)"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"\\vec{a}_{BA}^n"} /> va <InlineMath math={"\\vec{a}_{BA}^{\\tau}"} />
                    vektorlarning mоdullarini quyidagicha yozish mumkin.
                </p>




















                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_{BA}^n = \\omega^2 \\cdot BA, \\quad a_{BA}^\\tau = \\varepsilon \\cdot BA"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"a_{BA}^n"} /> <InlineMath math={"B"} /> nuqtani <InlineMath math={"A"} /> qutb
                    nuqta atrofida aylanishida markazga intilma tezlanish deyiladi (5.18 – shakl).
                </p>

                <p className="mb-4">
                    <InlineMath math={"a_{BA}^\\tau"} /> <InlineMath math={"B"} /> nuqtani <InlineMath math={"A"} />
                    nuqta atrofida aylanishida aylanma tezlanish deyiladi. <InlineMath math={"a_{BA}^n"} /> tezlanish
                    <InlineMath math={"B"} /> nuqtadan <InlineMath math={"A"} /> qutb nuqtaga qarab yo'nalgan,
                    <InlineMath math={"a_{BA}^\\tau"} /> tezlanish <InlineMath math={"BA"} /> kesmaga perpendikulyar
                    yo'nalgan bo'ladi.
                </p>

                <p className="mb-4">
                    Ya'ni <InlineMath math={"a_{BA}^n \\perp a_{BA}^\\tau"} />, bulardan foydalanib,
                    <InlineMath math={"a_{BA}"} /> ning miqdor va yo'nalishini aniqlash mumkin.
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_{BA} = BA\\sqrt{\\omega^4 + \\varepsilon^2} \\quad (5.36)"} />
                </div>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\tan \\mu = \\frac{\\varepsilon}{\\omega^2} \\quad (5.37)"} />
                </div>

                <p className="mb-4">
                    Bu erda <InlineMath math={"\\mu"} /> <InlineMath math={"a_{BA}"} /> tezlanish bilan
                    <InlineMath math={"a_{BA}^n"} /> tezlanish orasidagi burchak. (5.36) dan ko'rinib turibdiki,
                    tekis shakl harakatida jism nuqtasining tezlanishini aniqlash uchun jismning burchak tezligi,
                    burchak tezlanishini topish va qutb nuqtasini bilish kerak. Qutb nuqta uchun shunday nuqtani
                    tanlash kerakki, bu nuqta tezlanishini masala shartidan topish oson bo'lsin.
                </p>

                <h3 className="text-xl font-bold mb-4">5.3-masala</h3>

                <p className="mb-4">
                    Uzunligi 40 sm bo'lgan <InlineMath math={"OA"} /> krivoship <InlineMath math={"O"} /> nuqtadan
                    o'tgan tekislikka perpendikulyar o'q atrofida aylanib, 80 sm uzunlikdagi <InlineMath math={"AB"} />
                    shatunni harakatga keltiradi. <InlineMath math={"B"} /> polzun gorizont bilan 45° burchak tashkil
                    qiluvchi <InlineMath math={"ED"} /> yo'nalishda harakatlanadi. <InlineMath math={"B"} /> polzunning
                    tezlanishi hamda <InlineMath math={"AB"} /> shatunning burchak tezlanishi aniqlansin. Bunda
                    <InlineMath math={"\\beta = 90°"} />, <InlineMath math={"\\omega_{OA} = 2 \\text{ rad/s}"} />,
                    <InlineMath math={"\\varepsilon_O = 0"} /> deb hisoblansin (5.19 shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image5_19  }
                        alt="Qo'zg'almas o'q atrofida aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    <strong>Yechish:</strong> <InlineMath math={"B"} /> nuqta tezlanishi quyidagi formuladan aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{a}_B = \\vec{a}_A + \\vec{a}_{BA}^n + \\vec{a}_{BA}^\\tau \\quad (\\ast)"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"A"} /> nuqta <InlineMath math={"O"} /> nuqta atrofida aylanayotgani uchun,
                    uning tezlanishi <InlineMath math={"\\vec{a}_A = \\vec{a}_A^n + \\vec{a}_A^\\tau"} /> ko'rinishda
                    topiladi. Bu yerda <InlineMath math={"\\varepsilon_{OA} = 0"} /> bo'lgani uchun
                    <InlineMath math={"a_A^\\tau = 0"} />, demak,
                </p>



















                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_A = a_A^n = \\omega_{AO}^2 \\cdot AO = 2^2 \\cdot 40 = 1.6 \\text{ m/s}^2"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"a_A^n"} /> – tezlanish <InlineMath math={"A"} /> nuqtadan
                    <InlineMath math={"O"} /> nuqtaga qarab yo'naladi. <InlineMath math={"a_{BA}^n"} /> tezlanish
                    <InlineMath math={"B"} /> nuqtadan <InlineMath math={"A"} /> nuqtaga qarab yo'nalgan bo'lib, miqdori:
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_{BA}^n = \\omega_{AB}^2 \\cdot AB"} />
                </div>

                <p className="mb-4">
                    ga teng, bu yerda <InlineMath math={"\\omega_{AB}"} /> <InlineMath math={"AB"} /> shatunning
                    burchak tezligi. Uni aniqlash uchun, shatunning tezliklar oniy markazidan foydalanamiz. Tezliklar
                    oniy markazi <InlineMath math={"\\vec{v}_A"} /> va <InlineMath math={"\\vec{v}_B"} /> tezliklarga
                    o'tkazilgan perpendikulyarlar kesishgan nuqta bo'ladi.
                </p>

                <p className="mb-4">
                    <InlineMath math={"\\vec{v}_A \\perp AB"} /> hamda <InlineMath math={"\\vec{v}_B"} />
                    <InlineMath math={"ED"} /> chiziq bo'ylab yo'nalganligidan foydalanib ularning yo'nalishlarini
                    qo'yamiz va tezliklar oniy markazi <InlineMath math={"P"} /> ni aniqlaymiz.
                </p>

                <p className="mb-4">
                    Shakldan <InlineMath math={"\\triangle ABP"} /> teng yonli ekanligini ko'rish mumkin.
                </p>

                <p className="mb-4">
                    Demak,
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"AB = AP = 80 \\text{ sm}"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"AB"} /> shatun burchak tezligi quyidagi formuladan aniqlanadi
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\omega_{AB} = \\frac{v_A}{AP} = \\frac{\\omega_{AO} \\cdot OA}{AP} = 1 \\text{ rad/s}"} />
                </div>

                <p className="mb-4">
                    Bulardan foydalanib, <InlineMath math={"a_{BA}^n"} /> ni aniqlaymiz.
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_{BA}^n = \\omega_{AB}^2 \\cdot AB = 80 \\text{ sm/s}^2"} />
                </div>

                <p className="mb-4">
                    Masala shartidan <InlineMath math={"\\vec{a}_B"} /> tezlanish <InlineMath math={"DE"} /> chiziq
                    bo'ylab yo'nalishi ma'lum. <InlineMath math={"\\vec{a}_{AB}"} /> tezlanish esa
                    <InlineMath math={"AB"} /> ga perpendikulyar yo'naladi. <InlineMath math={"B"} /> nuqtani
                    koordinatalar boshi qilib, <InlineMath math={"Bx"} /> va <InlineMath math={"By"} /> o'qlarni
                    o'tkazamiz va shu o'qlarga (*) formuladagi tezlanishlarni proyeksiyalaymiz.
                </p>

                <p className="mb-4">
                    <InlineMath math={"Bx"} /> o'qdagi proyeksiyasi:
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_B\\cos 45° = a_{BA}^n"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"By"} /> o'qdagi proyeksiyasi:
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_B\\cos 45° = -a_A + a_{BA}^\\tau"} />
                </div>

                <p className="mb-4">
                    Bulardan:
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_B = \\frac{a_{BA}^n}{\\cos 45°} = \\frac{80}{\\sqrt{2}} \\text{ cm/s}^2 = 1.12 \\text{ m/s}^2"} />
                </div>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_{BA}^\\tau = a_B \\cos 45° + a_A = 240 \\text{ cm/s}^2 = 2.4 \\text{ m/s}^2"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"a_{BA}^\\tau = \\varepsilon_{AB} \\cdot AB"} /> formuladan
                    <InlineMath math={"\\varepsilon_{AB}"} /> aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\varepsilon_{AB} = \\frac{a_{BA}^\\tau}{AB} = \\frac{240}{80} = 3 \\text{ rad/s}^2"} />
                </div>

                <p className="mb-4 font-bold">
                    Javob: <InlineMath math={"a_B = 1.12 \\text{ m/s}^2"} />,
                    <InlineMath math={"\\varepsilon_{AB} = 3 \\text{ rad/s}^2"} />
                </p>

            </div>
        </>
    );
};

export default TekisShaklTezlanishi59;