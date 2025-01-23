import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import  rasm9_1 from '../../assets/bolim@9image/image9_1.png'

const SistemaMasalalar91 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    9.1-§. Sistema massalar markazining harakati haqidagi teorema
                </h2>
                <p className="mb-4">
                    Baʼzi masalalarni yechishda agar sistema qattiq jismdan iborat bo‘lsa, mexanik sistema massalar markazining harakatini bilish yetarli bo‘ladi. Massalar markazi harakatining differensial tenglamasini keltirib chiqarish uchun (8.7) ko‘rinishidagi sistema harakat differensial tenglamasidan foydalanamiz. Tenglamalar sistemaning chap va oʻng tomonlarini hadma-had qoʻshib, quyidagi formulani hosil qilamiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"m_k \\vec{r}_k = \\sum \\vec{F}_{ki} + \\sum \\vec{F}_{ke} \\quad (9.1)"} />
                </div>
                <p className="mb-4">
                    (8.2) formulaga ko‘ra <InlineMath math={"m_k \\vec{r}_k = m \\vec{r}_c"} /> edi. Bu tenglamaning ikkala tomonini vaqt bo‘yicha ikki marta differensiallaymiz.
                    <BlockMath math={"m_k \\frac{d^2 \\vec{r}_k}{dt^2} = m \\frac{d^2 \\vec{r}_c}{dt^2}"} />
                    Bu yerda <InlineMath math={"\\frac{d^2 \\vec{r}_k}{dt^2} = \\vec{a}_k"} /> va <InlineMath math={"\\frac{d^2 \\vec{r}_c}{dt^2} = \\vec{a}_c"} /> hamda, ichki kuchlarning xossasidan <InlineMath math={"\\sum \\vec{F}_{ki} = 0"} /> ekanini hisobga olib, (9.1) formulani quyidagi koʻrinishda yozish mumkin:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"m \\vec{a}_c = \\sum \\vec{F}_{ke} \\quad (9.2)"} />
                </div>
                <p className="mb-4">
                    (9.2) tenglik massalar markazining harakati to‘g‘risidagi teoremaning ifodasi boʻlib, quyidagicha oʻqiladi: <span className="te"> Sistemaning massasi bilan massalar markazi tezlanishining koʻpaytmasi sistemaga taʼsir qiluvchi tashqi kuchlarning geometrik yigʻindisiga teng. Ya’ni sistema massalar markazi tashqi kuchlar taʼsirida xuddi moddiy nuqta kabi harakatda boʻladi.
                    </span>
                </p>
                <p className="mb-4">
                    Koʻrinib turibdiki, (9.2) formulada nomaʼlum ichki kuchlar qatnashmaydi, masalalar yechishda bu ancha qulaylik keltiradi. Mazkur formulani Dekart koordinatalariga proeksiyalab skalyar tenglamalar sistemasiga ega bo‘lamiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"mx_c = \\sum F_{kxe}, \quad my_c = \\sum F_{kye}, \quad mz_c = \\sum F_{kze} \\quad (9.3)"} />
                </div>
                <p className="mb-4">
                    Teoremadan foydalanib, mexanik sistemaning bitta nuqtasi, massalar markazining tashqi kuchlar taʼsirida harakati toʻgʻrisida mulohaza yuritish va shu nuqtaning harakatini bilish mumkin, xolos. Sistema massalar markazi harakati to‘g‘risidagi teoremadan quyidagi natijalar kelib chiqadi:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2 te">- sistemaga taʼsir qiluvchi tashqi kuchlarning geometrik yigʻindisi nolga teng boʻlsa, sistema massalar markazining harakati oʻzgarmas boʻladi. Ya’ni  <InlineMath math={"\\sum \\vec{F}_{ke} = 0"} /> bo‘lsa, <InlineMath math={"m \\vec{r}_c = 0"} /> bo‘lib, <InlineMath math={"\\vec{r}_c = \\vec{v}_c = const"} /> bo‘ladi;</li>
                    <li className="mb-2 te">- agar sistemaga taʼsir qiluvchi tashqi kuchlarning biror oʻqqa proeksiyalarining algebraik yigʻindisi nolga teng boʻlsa, massalar markazining harakati shu oʻq boʻylab oʻzgarmas boʻladi.</li>
                </ul>







                <p className="mb-4">
                    Aytaylik, tashqi kuchlarning <InlineMath math={"Ox"} /> oʻqdagi proeksiyalarining yigʻindisi nolga teng boʻlsin. Yani <InlineMath math={"\\sum F_{kxe} = 0"} /> bo‘lsa, (9.3) dan <InlineMath math={"m \\ddot{x}_c = 0"} /> deb yozish mumkin, demak, <InlineMath math={"\\ddot{x}_c = 0"} />, bundan <InlineMath math={"x_c = v_{cx} = const"} /> kelib chiqadi.
                </p>
                <p className="mb-4 te">
                    Bu ikki natija odatda massalar markazi harakatining saqlanish qonunlari deyiladi.
                </p>
                <p className="mb-4">
                    Natijalardan shunday xulosa qilish mumkinki, ichki kuchlar sistema massalar markazi harakatiga oshkora taʼsir qila olmaydi, lekin ular taʼsirida tashqi kuch hosil qilinib, harakatni oʻzgartirish mumkin. Misol tariqasida, avtomobil harakatini o‘rganish mumkin. Dvigateldagi gazning porshenga bosimi avtomobilga nisbatan ichki kuch hisoblanadi. Bu kuchning oʻzi avtomobilni harakatga keltira olmaydi. Dvigateldan yetakchi gʻildirakka aylantiruvchi moment uzatilib, gʻildirak bilan tekislik orasidagi ishqalanish kuchi hosil bo‘lsa, avtomobil harakatga keladi, demak, ichki kuchlar taʼsirida tashqi kuch - ishqalanish kuchi hosil qilindi.
                </p>

                <h3 className="text-xl font-bold mb-4">9.1-masala</h3>
                <p className="mb-4">
                    Shaklda tasvirlangan krivoship shatunli <InlineMath math={"OAB"} /> mexanizmning <InlineMath math={"C"} /> massalar markazining harakat tenglamasi va traektoriya tenglamasi aniqlansin. Krivoship bilan shatun uzunliklari va massalari bir xil bo‘lgan bir jinsli sterjenlardan iborat, ya’ni <InlineMath math={"OA = AB = l"} />. Krivoship o‘zgarmas <InlineMath math={"\\omega"} /> burchak tezlik bilan aylanma harakat qiladi. <InlineMath math={"B"} /> surilgich massasi krivoship massasining yarmiga teng. Mexanizm tekislikda joylashgan deb hisoblansin. <InlineMath math={"Ox"} /> va <InlineMath math={"Oy"} /> o‘qlari shakldagidek yo‘naltirilgan (9.1-shakl).
                </p>

                <div className="text-center py-6">
                    <img src={rasm9_1} alt="9.1-shakl" className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3" />
                    <p className="text-sm mt-2">9.1-shakl</p>
                </div>

                <p className="mb-4">
                    <strong>Yechish:</strong> Krivoship <InlineMath math={"OA"} />, shatun <InlineMath math={"AB"} /> va surilgich <InlineMath math={"B"} /> birgalikda mexanik sistema tashkil qiladi.  Krivoship va shatunning massalari <InlineMath math={"m_1 = m_2 = m"} /> desak, <InlineMath math={"B"} /> surilgich massasi <InlineMath math={"m_3 = \\frac{m}{2}"} />. Krivoship og‘irlik markazi <InlineMath math={"C_1(x_1, y_1)"} />, shatun og‘irlik markazi <InlineMath math={"C_2(x_2, y_2)"} />, <InlineMath math={"B"} /> surilgich og‘irlik markazi <InlineMath math={"C_3(x_3, y_3)"} /> nuqtalar koordinatalarini shaklda ko‘rsatamiz. Bu yerda <InlineMath math={"OC_1 = C_1A = AC_2 = C_2B = \\frac{l}{2}"} /> ekanini hamda <InlineMath math={"\\omega"} /> burchak tezlik bilan harakatlanayotgan krivoshipning aylanish burchagi <InlineMath math={"\\varphi = \\omega t"} /> soat miliga qarshi aylanayotganini hisobga olib, <InlineMath math={"C_1"} />, <InlineMath math={"C_2"} /> va <InlineMath math={"B"} /> nuqtalarning koordinatalarini aniqlaymiz:
                </p>
                <p className="mb-4">
                    <InlineMath math={"C_1"} /> nuqta uchun: <InlineMath math={"x_1 = \\frac{1}{2} l \\cos(\\omega t)"} />, <InlineMath math={"y_1 = \\frac{1}{2} l \\sin(\\omega t)"} />
                </p>
                <p className="mb-4">
                    <InlineMath math={"C_2"} /> nuqta uchun: <InlineMath math={"x_2 = \\frac{3}{2} l \\cos(\\omega t)"} />, <InlineMath math={"y_2 = \\frac{1}{2} l \\sin(\\omega t)"} />
                </p>
                <p className="mb-4">
                    <InlineMath math={"B"} /> surilgich koordinatalari: <InlineMath math={"x_3 = 2l \\cos(\\omega t)"} />, <InlineMath math={"y_3 = 0"} />
                </p>


                <p className="mb-4">
                Bularni massalar markazining koordinatalarini aniqlash (9.3) formulalariga qo‘ysak,
                </p>
                 <BlockMath math={"x_C = \\frac{m_1x_1 + m_2x_2 + m_3x_3}{m_1 + m_2 + m_3}, \\quad y_C = \\frac{m_1y_1 + m_2y_2 + m_3y_3}{m_1 + m_2 + m_3}"} />
                <p className="mb-4">
                 hamda masala shartida berilganlarni e’tiborga olib, hisoblashlar amalga oshirilgandan keyin, izlanayotgan krivoship shatunli mexanizm massalar markazining harakat qonuni quyidagi ko‘rinishda aniqlandi:
                </p>
                <BlockMath math={"x_C = \\frac{6}{5} l \\cos(\\omega t), \quad y_C = \\frac{2}{5} l \\sin(\\omega t)"}/>

                <p className="mb-4">
                Bu tenglamalardan <InlineMath math={"\\omega t"} /> o‘zgaruvchini chiqarib tashlasak, traektoriya tenglamasi kelib chiqadi:
                </p>
                <BlockMath math={"\\frac{x_C^2}{(\\frac{6}{5}l)^2} + \\frac{y_C^2}{(\\frac{2}{5}l)^2} = 1"} />
                <p className="mb-4">
                Demak, krivoship shatunli mexanizm massalar markazining traektoriyasi yarim o‘qlari <InlineMath math={"a = \\frac{6}{5}l"} /> ,  <InlineMath math={"b = \\frac{2}{5}l"} /> bo‘lgan ellipsdan iborat ekan.
                </p>

            </div>
        </>
    );
};

export default SistemaMasalalar91; 