import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image3_18 from '../../assets/bolim@3image/image3_18.png';
import image3_19 from '../../assets/bolim@3image/image3_19.png';
import image3_20 from '../../assets/bolim@3image/image3_20.png';
import image3_21 from '../../assets/bolim@3image/image3_21.png';
import image3_22 from '../../assets/bolim@3image/image3_22.png';

const DumalanibIshqalanishK38 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    3.8 – §. Dumalanib ishqalanish kuchi
                </h2>

                {/* ... Avvalgi matn ... */}
                <p className="mb-4 te">Jismni biror sirt ustida dumalashiga qarshilik korsatadigan kuchga
                    dumalanishdagi ishqalanish kuchi deyiladi.</p>
                <p className="mb-4">

                    Dumalanishdagi ishqalanish,
                    albatta dumaloq jismlarning sirtlari orasida hosil bo’ladi. Kuchlar
                    ta’sirida jism biror sirt ustida dumalayotganda, bu jism sirtlarining
                    ezilishi natijasida sirpanishdan tashqari dumalashiga qarshilik qiluvchi
                    kuchlar hosil bo’ladi. Bunday jismlarga vagonlar va barcha turdagi
                    avtomobil g’ildiraklarini, sharikli va rolikli podshipniklarni misol
                    qilish mumkin.
                </p>
                <p className="mb-4">
                    Odatda g’ildiraklar dumalab harakatlanishi uchun ularning markaziga
                    og’irlik kuchidan tashqari tekislik urinmasiga parallel yo’nalishdagi{" "}
                    <InlineMath math="Q" /> kuch yoki momenti <InlineMath math="M" /> ga
                    teng bo’lgan juft kuch qo’yiladi. Bunday kuchlar ta’siridagi g’ildirak
                    “yetakchi-yetaklanuvchi” deyiladi (3.18 – shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image3_18}
                        alt="3.18-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4 te">
                    Agar <InlineMath math="M=0" /> bo’lib, <InlineMath math="Q \ne 0" />{" "}
                    bo’lsa yetaklanuvchi g’ildirak, <InlineMath math="M \ne 0" /> va{" "}
                    <InlineMath math="Q = 0" /> bo’lsa yetaklovchi g’ildirak deyiladi.
                </p>
                <p className="mb-4">
                    Aktiv kuchlar ta’sirida g’ildirakning sirtga tegib turgan{" "}
                    <InlineMath math="A" /> nuqtasida hech qanday ezilish (deformatsiya)
                    bo’lmasa, g’ildirak ham sirpanib, ham dumalab harakatlanadi.
                    G’ildiraklarni harakatlari o’rganilayotganda sof dumalab
                    harakatlanishga erishish ahamiyatli hisoblanadi. Quyida dumalashdagi
                    ishqalanish kuchining xususiyatlari bilan tanishasiz. Og’irligi{" "}
                    <InlineMath math="G" /> ga va radiusi <InlineMath math="r" /> ga teng
                    bo’lgan silindr shaklidagi jism gorizontal tekislikda turgan bolsin.
                    (3.19 – shakl).
                    <div className="text-center py-6">
                        <img
                            src={image3_19}
                            alt="3.19-shakl"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    Gorizontal tekislikdagi silindrning og’irlik kuchi{" "}
                    <InlineMath math="G" /> bilan tekislikning <InlineMath math="A" />{" "}
                    nuqtadagi normal reaksiya kuchi ozaro muvozanatlashadi, yani{" "}
                    <InlineMath math="N = -G" />. Silindr markaziga gorizontal yo’nalishda
                    biror <InlineMath math="Q" /> kuch ta’sir etsa, bu kuchning miqdori
                    ma’lum bir qiymatga yetguncha silindr dumalamaydi. Harakat
                    bo’lmasligiga sabab, silindr bilan tekislik orasida ozgina ezilish,
                    ya’ni deformatsiyalanish hosil bo’lib, <InlineMath math="N" /> normal
                    reaksiya kuchi <InlineMath math="A" /> nuqtaga emas, balki jismning
                    dumalanish tomoniga surilgan va ezilish yuzasining oxirgi <InlineMath math="A_1" />{" "}
                    nuqtasiga qo’yilgan bo’ladi. Natijada, harakatga keltiruvchi, ya’ni
                    silindrni dumalashiga yordam beruvchi <InlineMath math="(F_{ishq}, Q)" />{" "}
                    juft kuchga qarshilik qiluvchi <InlineMath math="(G, N)" /> juft kuch
                    hosil bo’ladi (3.20 – shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image3_20}
                        alt="3.20-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Harakatga kelish arafasida sistema muvozanat holatida deb, <InlineMath math="O" /> nuqtaga nisbatan moment olib, tenglama tuzamiz.
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math="\text{mom}_0 F_k = 0, \quad -F_{ishq}r + \delta N = 0, \quad F_{ishq} = \frac{\delta}{r} N \quad (3.8)" />
                </div>
                <p className="mb-4">
                    munosabatga ega bo’lamiz, bu yerda <InlineMath math="\delta" /> – sirtning ezilish yuzasining kengligini bildiradi, sm larda o’lchanadi. <InlineMath math="\delta" /> – dumalanishdagi ishqalanish koeffitsienti ham deyiladi. Keltirib chiqarilgan (3.8) formula quyidagicha o’qiladi va dumalab ishqalanish qonuni deyiladi.
                </p>
                <p className="mb-4 te">
                    Dumalanishdagi ishqalanish kuchi normal bosimga to’g’ri mutanosib, silindr radiusiga teskari mutanosib.
                </p>
                <p className="mb-4">
                    Ayrim hollarda <InlineMath math="\frac{\delta}{r} = k" /> o'lchovsiz kattalikka ham dumalanishdagi ishqalanish koeffitsienti deyiladi. U holda (3.8) ni quyidagicha yozish mumkin:
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math="F_{ishq} = k \cdot N \quad (3.9)" />
                </div>
                <p className="mb-4">
                    <InlineMath math="k" /> juda kichkina son bo’lib, g’ildiraklarni yerga tegib turgan qismi yuzasining kengligini shu g’ildirak radiusiga nisbati deb tushunish mumkin. Sirpanib ishqalanish koeffitsienti <InlineMath math="f \in [0,1)" /> edi, <InlineMath math="k" /> koeffitsient <InlineMath math="f" /> dan ancha kichik bo’lganligi uchun, dumaloq jismlarni sudrashdan ko’ra dumalatib harakatlantirish osonroq bo’ladi.
                </p>
                {/* Qo'shimcha ma'lumotlar */}
                <p className="mb-4">
                    Dumalab ishqalanish koeffitsienti tajriba yo’li bilan aniqlanadi va
                    malumotnomalarda beriladi. Masalan, vagon g’ildiraklarining relslar
                    ustida dumalab ishqalanishida{" "} <InlineMath math="\delta \approx 0.005" /> sm
                    qilib olingan. Yog’ochdan yasalgan jism yog’och ustida dumalab
                    ishqalanish koeffisiyenti <InlineMath math="\delta" /> 0,05 dan 0,08
                    sm gacha.
                </p>
                <p className="mb-4 te">
                    Dumalab ishqalanish koeffitsienti jismning harakatlanish tezligiga
                    bog’liq bo’lmaydi. Dumalab ishqalanish qonuniyatini yaxshiroq tasavvur
                    qilish uchun quyidagi masalalarni ko’rib chiqamiz.
                </p>

                {/* 3.6-masala */}
                <h3 className="text-xl font-bold mb-2">3.6-masala</h3>
                <p className="mb-4">
                    Og’irligi <InlineMath math="G" />, radiusi <InlineMath math="r" /> bo’lgan
                    g’ildirak markaziga gorizontal yo’nalgan <InlineMath math="Q" /> kuch
                    qo’yilgan. Agar sirpanib ishqalanish koeffitsienti <InlineMath math="f" />, dumalanishdagi ishqalanish koeffitsienti <InlineMath math="\delta" /> bo’lsa, <InlineMath math="Q" /> kuchning g’ildirak muvozanatda
                    qoladigan miqdori aniqlansin.
                </p>
                <p className="mb-2 font-bold">Yechish:</p>
                <p className="mb-4">
                    G’ildirakka qo’yilgan <InlineMath math="G" />, <InlineMath math="Q" />,{" "}
                    <InlineMath math="F_{ishq}" />, <InlineMath math="N" /> kuchlar
                    tekislikda ixtiyoriy joylashgan kuchlar sistemasidan iborat. (3.21 –
                    shakl)
                </p>
                <div className="text-center py-6">
                    <img
                        src={image3_21}
                        alt="3.21-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath
                        math="\begin{cases}
              F_{kx} = 0, & Q - F_{ishq} = 0, \\
              F_{ky} = 0, & N - G = 0, \\
              m_A F = 0, & G\delta - Qr = 0.
            \end{cases}"
                    />
                </div>
                <p className="mb-4">
                    Birinchi tenglamadan <InlineMath math="Q = F_{ishq}" />, ikkinchi
                    tenglamadan <InlineMath math="G = N" /> larga ega bo’lamiz. Oxirgi
                    tenglamadan <InlineMath math="G\delta = Qr" /> tengliklarga ega
                    bo’lamiz. <InlineMath math="Qr" /> dumalatuvchi, ya’ni dumalanish
                    momenti, <InlineMath math="G\delta = N\delta" /> dumalanishga
                    qarshilik ko’rsatuvchi moment deyiladi. Bulardan hamda, sirpanishdagi
                    ishqalanish qonunidan foydalanib, quyidagi munosabatni hosil qilamiz.
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math="F_{ishq} \le fN" />
                </div>

                <p className="mb-4">
                    g’ildirakning muvozanatda qolish shartidan
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math="Q \le \frac{\delta}{r}N" />
                </div>
                <p className="mb-4">
                    kelib chiqadi.
                </p>

                <p className="mb-4">
                    Demak, <InlineMath math="Q = F_{ishq}" /> va <InlineMath math="F_{ishq} \le fN" /> lardan{" "} <InlineMath math="Q \le fN" /> shart bajarilsa sirpanmaydi, <InlineMath math="Q \le \frac{\delta}{r}G" /> shart bajarilsa g’ildirak dumalamaydi. Ikkita munosabat bir vaqtda bajarilsa g’ildirak sirpanmay, dumalamay, muvozanat holatda qoladi.
                </p>

                {/* 3.7-masala */}
                <h3 className="text-xl font-bold mb-2">3.7-masala</h3>
                <p className="mb-4">
                    Shaklda berilgan silindir bilan tekislik orasigdagi sirpanib ishqalanish
                    koeffitsient <InlineMath math="f" />, dumalashdagi ishqalanish
                    koeffisienti <InlineMath math="\delta" /> ma’lum bo’lsa, silindir
                    muvozanatda bo’lishi uchun qiya tekislikning gorizont bilan tashkil
                    qilgan <InlineMath math="\alpha" /> burchagi qanday bo’lishi
                    kerak? (3.22 – shakl)
                </p>
               
                <div className="text-center py-6">
                    <img
                        src={image3_22}
                        alt="3.22-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-2 font-bold">Yechish:</p>
                <p className="mb-4">
                    Ta’sir qiluvchi kuchlarni shaklda ko’rsatamiz. Kuchlar sistemasi uchun
                    muvozanat tenglamalarini tuzamiz,
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath
                        math="\begin{cases}
            F_{kx} = 0, & -F_{ishq} + G \sin \alpha = 0, \\
            F_{ky} = 0, & N - G \cos \alpha = 0, \\
            \text{mom}_A F_k = 0, & N\delta - G r \sin \alpha = 0.
          \end{cases}"
                    />
                </div>
                <p className="mb-4">
                    Bundan tashqari, Kulon qonuniga ko’ra jism muvozanatda turishi uchun
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math="F_{ishq} \le fN, \quad F_{ishq} \le \frac{\delta}{r} N" />
                </div>
                <p className="mb-4">
                    munosabatlar o’rinli bo’lishi kerak. Muvozanat tenglamalaridan
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math="F_{ishq} = G \sin \alpha, \quad N = G \cos \alpha, \quad N\delta = r G \sin \alpha" />
                </div>

                <p className="mb-4">
                    tengliklarni olamiz. Bularni qonunlarga qo’ysak kerakli xulosaga ega
                    bo’lamiz.
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math="\frac{F_{ishq}}{N} \le f, \quad \frac{G \sin \alpha}{G \cos \alpha} \le f, \quad \tg \alpha \le f," />
                    <BlockMath math="\frac{F_{ishq}r}{N} \le \delta , \quad \frac{r G \sin \alpha}{G \cos \alpha} \le \delta, \quad \tg \alpha \le \frac{\delta}{r}" />
                </div>
                <p className="mb-4">
                    Demak, silindr muvozanat holatida qolishi uchun <InlineMath math="\alpha" /> burchak
                </p>
                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math="\tg \alpha \le f, \quad \tg \alpha \le \frac{\delta}{r}" />
                </div>
                <p className="mb-4">
                    shartlarni bir vaqtda bajarishi shart.
                </p>
            </div>
        </>
    );
};

export default DumalanibIshqalanishK38;