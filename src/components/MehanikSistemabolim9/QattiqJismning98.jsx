import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image9_12 from "../../assets/bolim@9image/image9_12.png"; // Rasmni import qiling
import image9_11 from "../../assets/bolim@9image/image9_11.png"; // Rasmni import qiling

const QattiqJismning98 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    9.8-§. Qattiq jismning tekis parallel harakat differensial tenglamasi
                </h2>

                <p className="mb-4">
                    Nazariy mexanikaning “Kinematika” (5.8-§) qismidan ma’lumki, qattiq jismning tekis parallel
                    harakatini, jism parallel harakat qilayotgan tekislikka jismdan qirqib olingan tekis shakl
                    harakatini o‘rganishga keltirilgan edi. Tekis shakl harakati esa shaklda tanlab olingan qutb
                    nuqtaning ilgarilanma harakati va tekis shakl boshqa nuqtalarining shu qutb nuqta atrofida aylanma
                    harakatini o‘rganishga keltirilgan bo‘lib, harakat tenglamasi
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"x_C = f_1(t), \\quad y_C = f_2(t), \\quad \\varphi = f_3(t)"} />
                </div>

                <p className="mb-4">ko‘rinishda edi.</p>
                <div className="text-center py-6">
                    <img
                        src={image9_11}
                        alt="G'ildirak harakati"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Sistema massalar markazining harakati to‘g‘risidagi hamda massalar markazi atrofidagi aylanma
                    harakatiga massalar markaziga nisbatan kinetik momentining o‘zgarishi haqidagi teoremalarni
                    tatbiq etib, tekis parallel harakatdagi qattiq jism harakat differensial tenglamasini keltirib
                    chiqaramiz. Aytaylik, m massali jism <InlineMath math={"\\vec{F_1}^{(e)}, \\vec{F_2}^{(e)},…, \\vec{F_n}^{(e)}"} /> tashqi kuchlar sistemasi ta’sirida harakatda bo‘lsin. C massalar markazi jismdan qirqib olingan
                    tekislikda yotsin. C massalar markazini qutb nuqta deb tanlab, tekis harakat qilayotgan jism
                    massalar markazi yotgan tekislikda Oxy qo‘zg‘almas koordinatalar sistemasini o‘tkazamiz. Bu
                    koordinatalar sistemasiga nisbatan C massalar markazi bilan birgalikda harakatlanuvchi Cx1y1
                    qo‘zg‘aluvchi koordinatalar sistemasini ham tanlaymiz (24.6-shakl). Qo‘zg‘almas koordinatalar
                    sistemasiga nisbatan C massalar markazining koordinatalari xc va yc bo‘lsin. U holda massalar
                    markazining harakati haqidagi teoremaga muvofiq qattiq jismning tekis harakatida C massalar
                    markazining Oxy qo‘zg‘almas koordinatalar sistemasiga nisbatan ilgarilanma harakat differensial
                    tenglamasini quyidagicha yozishimiz mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
                        \\begin{cases}
                            m \\ddot{x_C} = \\sum F_{kx}^{(e)} \\\\
                            m \\ddot{y_C} = \\sum F_{ky}^{(e)}
                        \\end{cases}
                    `}
                    />
                </div>

                <p className="mb-4">
                    Tekis shakl nuqtalarining massalar markazi atrofida aylanma harakatiga sistema kinetik momenti
                    o‘zgarishi haqidagi teoremani qo‘llab, tekis harakat differensial tenglamasining uchinchisi
                    aniqlanadi:
                </p>

                <p className="mb-4">
                    Sistema kinetik momenti o‘zgarishi haqidagi teoremaning Cz o‘qdagi proeksiyasini yozamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{dK_{Cz}}{dt} = \\sum mom_{Cz}(\\vec{F_k}^{(e)})"} />
                </div>

                <p className="mb-4">
                    Tekis parallel harakatdagi jismning Cz o‘qqa nisbatan kinetik momenti:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"K_{Cz} = I_{Cz} \\cdot \\omega"} />
                </div>

                <p className="mb-4">
                    ko‘rinishida bo‘ladi, bu yerda <InlineMath math={"I_{Cz}"} /> – jismning Cz o‘qqa nisbatan
                    inersiya momenti, <InlineMath math={"\\omega"} /> – burchak tezlik. <InlineMath math={"I_{Cz}"} />
                    o‘zgarmas kattalik bo‘lgani uchun Cz o‘qqa nisbatan aylanma harakat kinetik momentining o‘zgarishi
                    haqidagi teoremani yozamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Cz} \\frac{d\\omega}{dt} = \\sum mom_{Cz}(\\vec{F_k}^{(e)})"} />
                </div>

                <p className="mb-4">
                    Agar Cz o‘q atrofida jismning aylanish burchagi <InlineMath math={"\\varphi"} /> desak, (9.27) ni
                    quyidagicha yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"I_{Cz} \\ddot{\\varphi} = \\sum mom_{Cz}(\\vec{F_k}^{(e)})"} />
                </div>

                <p className="mb-4 te">
                    Shunday qilib, uchta erkinlik darajasiga ega, tekis parallel harakatdagi qattiq jism uchun uchta
                    differensial tenglamaga ega bo‘lamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
                        \\begin{cases}
                            m \\ddot{x_C} = \\sum F_{kx}^{(e)} \\\\
                            m \\ddot{y_C} = \\sum F_{ky}^{(e)} \\\\
                            I_{Cz} \\ddot{\\varphi} = \\sum mom_{Cz}(\\vec{F_k}^{(e)})
                        \\end{cases}
                    `}
                    />
                </div>

                <p className="mb-4 te">
                    (9.28) tenglama yordamida qattiq jismning tekis parallel harakatida dinamikaning ikki asosiy
                    masalasini yechish mumkin. Ya’ni tekis shakl harakati berilsa, ta’sir qiluvchi kuchlarni, ta’sir
                    qiluvchi kuchlar va boshlang‘ich shartlar ma’lum bo‘lsa, harakat qonunini aniqlash mumkin. Bunda
                    albatta jism massasi va massalar markaziga nisbatan inersiya momenti berilgan bo‘lishi kerak.
                </p>

                {/* 9.6-masala */}
                <h3 className="text-xl font-semibold mb-2 mt-6">9.6-masala</h3>
                <p className="mb-4">
                    Massasi m, radiusi r bo‘lgan g‘ildirak gorizontal tekislikda massalar markazi C nuqtaga qo‘yilgan
                    gorizontal kuch ta’sirida sirpanmasdan to‘g‘ri chiziqli harakatlanmoqda. C nuqtaning harakat
                    qonuni <InlineMath math={"x_C = \\frac{at^2}{2}"} /> ko‘rinishda ifodalanadi. Bu yerda a &gt; 0
                    o‘zgarmas son. Ox o‘q harakat yo‘nalishida deb hisoblansin. G‘ildirak bir jinsli diskdan iborat
                    deb, Q kuch miqdori, g‘ildirak bilan tekislik orasidagi sirpanish ishqalanish kuchi Fishq va
                    tekislikning normal reaksiya kuchi N aniqlansin (9.12-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image9_12}
                        alt="G'ildirak harakati"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <h4 className="text-lg font-medium mb-2">Yechish</h4>
                <p className="mb-4">
                    Ox o‘q yo‘nalishi berilgan, Oy o‘qni vertikal pastga yo‘naltiramiz. <InlineMath math={"\\varphi"} /> burchak soat
                    mili yo‘nalishida deb hisoblaymiz. G‘ildirakka G og‘irlik kuchi, Q harakatlantiruvchi berilgan
                    kuch, N gorizontal tekislikning normal reaksiya kuchi va Fishq tekislik bilan g‘ildirak orasidagi
                    harakatga qarshi yo‘nalgan ishqalanish kuchidan iborat tashqi kuchlar ta’sir qiladi. Berilgan
                    masala uchun tekis shakl harakat differensial tenglamasining ko‘rinishi quyidagicha bo‘ladi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`
                        \\begin{cases}
                            m \\ddot{x_C} = Q - F_{ishq} \\\\
                            m \\ddot{y_C} = G - N \\\\
                            \\frac{mr^2}{2} \\ddot{\\varphi} = F_{ishq} \\cdot r
                        \\end{cases}
                    `}
                    />
                </div>

                <p className="mb-4">
                    Shakldan <InlineMath math={"y_C = r"} /> o‘zgarmas son ekanini hisobga olsak,{" "}
                    <InlineMath math={"\\ddot{y_C} = 0"} /> bo‘lib, ikkinchi tenglamadan:
                </p>

                <p className="mb-4">
                    N = G yoki N = mg ekani aniqlanadi. G‘ildirak sirpanmasdan dumalayotgani uchun tekislikka tegib
                    turgan nuqtasi p tezliklar oniy markazi bo‘lib, C nuqtaning tezligini vC=rω ko‘rinishda ifodalash
                    mumkin, bu tezlik Ox o‘qqa parallel yo‘nalganligini hisobga olib, xC=r ifodaga ega bo‘lamiz.
                </p>

                <p className="mb-4">Bundan <InlineMath math={"\\ddot{x_C} = r \\ddot{\\varphi}"} />. Masala shartiga ko‘ra C nuqtaning harakat qonuni</p>

                <p className="mb-4"><InlineMath math={"x_C = \\frac{at^2}{2}"} /> edi, bundan ikki marta hosila olsak, <InlineMath math={"\\ddot{x_C} = a"} /> tenglikni olamiz. <InlineMath math={"\\ddot{x_C}"} /> uchun olingan ikkita munosabatni tenglashtirib,</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\ddot{\\varphi} = \\frac{\\ddot{x_C}}{r} = \\frac{a}{r}"} />
                </div>

                <p className="mb-4">burchak tezlanishini aniqladik. Bu qiymatni differensial tenglamalarning uchinchisiga qo‘yib, izlanayotgan ishqalanish kuchining miqdorini aniqlaymiz:</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"F_{ishq} = \\frac{m \\cdot a}{2}"} />
                </div>

                <p className="mb-4">Buni tenglamalar sistemasining birinchi tenglamasiga qo‘yib, Q kuchning miqdorini aniqlaymiz:</p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"Q = \\frac{3}{2} m \\cdot a"} />
                </div>
            </div>
        </>
    );
};

export default QattiqJismning98;