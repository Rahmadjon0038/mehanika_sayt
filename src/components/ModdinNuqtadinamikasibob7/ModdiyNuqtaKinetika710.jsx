import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image7_17 from '../../assets/bolim@7image/image7_17.png'; // Rasm yo'lini to'g'rilang

const ModdiyNuqtaKinetika710 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.10-§ Moddiy nuqta kinetik energiyasi. Kuchning bajargan ishi. Quvvat.
                </h2>

                <p className="mb-4">
                    Moddiy nuqta kinetik energiyasining o’zgarishi haqidagi teoremani o’rganishni boshlashdan oldin dinamikaning asosiy kattaliklaridan bo’lgan moddiy nuqtaning kinetik energiyasi va kuchning bajargan ishi tushunchalari bilan tanishib chiqamiz.
                </p>

                <p className="mb-4">
                    <span className="te">
                    Moddiy nuqta massasi bilan tezlik kvadrati ko’paytmasining yarmiga teng bo’lgan kattalik nuqtaning kinetik energiyasi deyiladi. </span><InlineMath math={"\\frac{mv^2}{2}"} /> ko’rinishida yoziladi. Nuqta kinetik energiyasi skalyar, musbat, kattalik bo’lib, uni harakat energiyasi ham deb yuritiladi. Kinetik energiya tezlik tufayli hosil bo’ladi. Shuning uchun kinetik energiyani tirik kuch ham deb yuritilgan. Kinetik energiya xalqaro birliklar sistemasida: <InlineMath math={"kg \\cdot \\frac{m^2}{c^2} = N \\cdot m"} /> larda, texnik birliklar sistemasida: <InlineMath math={"kgk \\cdot m"} /> larda o’lchanadi. Nuqtaning biror masofaga ko’chishida, unga ta’sir qiluvchi kuchning bajargan ishi, shu kuchning xususiyatini belgilovchi asosiy dinamik kattaliklardan biri hisoblanadi.
                </p>

                <p className="mb-4 font-bold te">
                    Kuchning elementar ishi.
                </p>
                <p className="mb-4 te">
                    Elementar fizika kursidan ma’lumki biror <InlineMath math={"M"} /> moddiy nuqta miqdor va yo’nalishi o’zgarmas <InlineMath math={"\\vec{F}"} /> kuch ta’sirida <InlineMath math={"BC"} /> to’g’ri chiziq bo’ylab <InlineMath math={"M_1"} /> holatdan <InlineMath math={"M_2"} /> holatga ko’chganda bajarilgan ish kuch bilan ko’chishning skalyar ko’paytmasiga teng edi, ya’ni, <InlineMath math={"M_1M_2=\\vec{s}"} /> bo`lsa,
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"A = \\vec{F} \\cdot \\vec{s} = F \\cdot s \\cdot \\cos(\\vec{F},\\vec{s})"} />
                </div>

                <p className="mb-4">
                    ko’rinishda yozish mumkin. Agar kuch bilan ko’chish bir to’g’ri chiziq bo’ylab bir tomonga yo’nalgan bo’lsa <InlineMath math={"A=F \\cdot s"} /> formuladan bajarilgan ish topiladi. Agar ko`chish kuch orasidagi burchak 90° bo`lsa, <InlineMath math={"\\cos(\\vec{F},\\vec{s}) = \\cos 90° = 0"} /> bo`lib, kuchning bajargan ishi nolga teng.
                </p>

                <p className="mb-4">
                    Moddiy nuqta miqdor va yo’nalishi o’zgaruvchi <InlineMath math={"\\vec{F}"} /> kuch ta’sirida ixtiyoriy <InlineMath math={"BC"} /> traektoriya bo’ylab <InlineMath math={"M_1"} /> holatdan <InlineMath math={"M_2"} /> holatga o’tganda kuchning bajargan ishini hisoblashni ko’rib chiqamiz.
                </p>

                <p className="mb-4">
                    Buning uchun <InlineMath math={"M_1M_2"} /> egri chiziqni shunday kichik bo’laklarga bo’lib chiqaylikki, bu chiziqlarni to’g’ri chiziqlardan iborat deb, hamda shu bo’lakchaga ta’sir qiluvchi kuch miqdor va yo’nalishi jihatdan o’zgarmas bo’ladi deb qarash mumkin bo’lsin. Har bir cheksiz kichik bo’lakchada kuchning bajargan ishini hisoblashda elementar ish tushunchasi kiritiladi.
                </p>

                <p className="mb-4 te">
                    <InlineMath math={"\\vec{F}"} /> kuchning biror elementar (cheksiz kichik) <InlineMath math={"d\\vec{s}"} /> ko’chishda bajargan elementar ishi deb, kuch bilan elementar ko’chishning skalyar ko’paytmasiga aytiladi va quyidagicha belgilanadi (7.17-shakl).
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"dA = \\vec{F} \\cdot d\\vec{s} \\qquad (7.28)"} />
                </div>

                <div className="text-center py-6">
                    <img
                        src={image7_17}
                        alt="7.17-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    (7.28) formuladan kuchning to’la bajargan ishini aniqlash uchun quyidagicha fikr yuritamiz. <InlineMath math={"d\\vec{s}"} /> ko'chish <InlineMath math={"M_1M_2"} /> egri chiziq bir bo’lakchaning uzunligi. Agar Dekart koordinatalar sistemasida hisob boshlangan nuqtaning radius vektori <InlineMath math={"\\vec{r_1}"} /> ni koordinatalar boshiga o’rnatsak, <InlineMath math={"d\\vec{s}"} /> ko'chish tugagan nuqta radius vektorini <InlineMath math={"\\vec{r_2}"} /> deb belgilasak <InlineMath math={"d\\vec{r}=\\vec{r_2}-\\vec{r_1}"} /> deb yozish mumkin. Aytilgandek, <InlineMath math={"d\\vec{s}"} /> elementar ko'chish juda kichik bo’lganligi uchun <InlineMath math={"d\\vec{s}"} /> yoy, <InlineMath math={"d\\vec{r}"} /> kesmaga teng. <InlineMath math={"d\\vec{s}=d\\vec{r}"} /> deyish mumkin. Mulohazalardan foydalanib, (7.28) formulani quyidagi ko’rinishda yozamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"dA = \\vec{F} \\cdot d\\vec{r} \\qquad (7.29)"} />
                </div>

                <p className="mb-4">
                    Agar <InlineMath math={"\\vec{F}"} /> kuchning koordinata o’qlaridagi proeksiyalari <InlineMath math={"F_x, F_y, F_z"} />, <InlineMath math={"d\\vec{r}"} /> orttirmaning koordinata o’qlaridagi proeksiyalari <InlineMath math={"dx,dy, dz"} /> bo’lsa, (6.29) formulani quyidagicha yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"dA = F_x dx + F_y dy + F_z dz \\qquad (7.30)"} />
                </div>

                <p className="mb-4">
                    Bu tenglikning o’ng tomoni differensial ko’rinishda yozilsa ham, umumiy holda, biror funktsiyaning to’la differensialini ifodalamaydi. 7.28, 7.29, 7.30 tenglamalar o’zaro ekvivalent tenglamar hisoblanadi.
                </p>

                <p className="mb-4">
                    <InlineMath math={"BC"} /> traektoriya ustidagi <InlineMath math={"M_1M_2"} /> egri chiziq bo’ylab (7.30) ifodani integrallasak kuchning to’la bajargan ishini aniqlash formulasi kelib chiqadi.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"A = \\int_{M_1}^{M_2} (F_x dx + F_y dy + F_z dz) \\qquad (7.31)"} />
                </div>

                <p className="mb-4 te">
                    Bu yerda kuchning berilishiga qarab egri chiziq bo’ylab integrallash amali bajariladi va kuchning to’la bajargan ishi aniqlanadi. Tenglikning o’ng tomoni egri chiziqli integral deyiladi.
                </p>

                <p className="mb-4 te">
                    Agar moddiy nuqtaga <InlineMath math={"\\vec{F_1}, \\vec{F_2}, \\vec{F_3}, \\dots, \\vec{F_n}"} /> kuchlar sistemasi ta’sir etsa, teng ta’sir etuvchining biror ko’chishda to’la bajargan ishi tashkil etuvchi kuchlarning shu ko’chishda bajargan ishlarining yig’indisiga teng. Ya’ni, kuchlar sistemasi ta’sirida to’la bajarilgan ish quyidagicha aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"A = A^{\\vec{F_1}} + A^{\\vec{F_2}} + \\dots + A^{(\\vec{F_n})} \\qquad (7.32)"} />
                </div>

                <p className="mb-4">
                    Bajarilgan ishning xalqaro birliklar sistemasidagi o’lchov birligi: <InlineMath math={"N \\cdot m = Joul"} />, Texnik birliklar sistemasidagi o’lchov birligi: <InlineMath math={"kgk \\cdot m"} /> hisoblanadi. <InlineMath math={"\\vec{F}"} /> kuchning quvvati deb, bajarilgan ishning tezligini tushunish mumkin, yani, <span className="te"> vaqt birligi ichida bajarilgan ishga quvvat deyiladi. Quvvat, odatda <InlineMath math={"W"} /> harfi bilan belgilanadi.</span>
                </p>

                <p className="mb-4">
                    Bajarilgan ish <InlineMath math={"A"} /> vaqtning funksiyasi sifatida qaraladi. Bajarilgan ishning vaqt bo’yicha hosilasini quyidagi ko’rinishlarda yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"W = \\frac{dA}{dt} = \\frac{(\\vec{F} \\cdot d\\vec{r})}{dt} = \\vec{F} \\cdot \\vec{v} = \\vec{F} \\frac{d\\vec{r}}{dt} \\qquad (7.33)"} />
                </div>
                <p>yoki</p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">

                    <BlockMath math={"W = \\vec{F} \\cdot \\vec{v} = F_x v_x + F_y v_y + F_z v_z \\qquad (7.34)"} />
                </div>

                <p className="mb-4">
                    (7.33) va (7.34) formulalar quyidagicha o’qiladi. <span className="te"> Kuchning shu kuch qo’yilgan nuqta tezligiga skalyar ko’paytmasi quvvat deyiladi. (7.34) </span> ifodani quyidagi ko’rinishda ham yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"W = (\\vec{F} \\cdot \\vec{v}) = F_x \\dot{x} + F_y \\dot{y} + F_z \\dot{z} \\qquad (7.35)"} />
                </div>

                <p className="mb-4">
                    Agar bajarilgan ishning vaqt bo’yicha o’zgarishi teng o’lchovli bo’lsa, quvvat o’zgarmas bo’ladi, va <InlineMath math={"W = \\frac{A}{t}"} /> (7.36) ko`rinishda yoziladi. <span className="te"> Quvvat vaqt birligi ichida bajarilgan ishga teng bo’ladi. Xalqaro birliklar sistemasida quvvat o’lchov birligi: <InlineMath math={"\\frac{Joul}{s} = vatt"} /> </span>
                </p>

                <p className="mb-4">
                    Texnik birliklar sistemasida quvvatning o’lchov birligi: <InlineMath math={"kgk \\cdot \\frac{m}{s}"} />, qabul qilingan. Quvvatning kattaroq o’lchov birliklari sifatida 1 kilovatt: <InlineMath math={"1 kvt = 1000 vt, \\quad 1 ot kuchi = 75 kgk \\cdot \\frac{m}{S}"} /> birliklar ishlatiladi.
                </p>
            </div>
        </>
    );
};

export default ModdiyNuqtaKinetika710;
 ;

