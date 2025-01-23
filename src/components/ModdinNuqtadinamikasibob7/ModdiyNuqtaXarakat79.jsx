import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image7_14 from '../../assets/bolim@7image/image7_14.png'; // Rasm yo'lini to'g'rilang
import image7_15 from '../../assets/bolim@7image/image7_15.png'; // Rasm yo'lini to'g'rilang
import image7_16 from '../../assets/bolim@7image/image7_16.png'; // Rasm yo'lini to'g'rilang

const ModdiyNuqtaXarakat79 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.9- §. Moddiy nuqta harakat miqdorining o’zgarishi haqidagi teorema.
                </h2>

                <p className="mb-4">
                    Moddiy nuqta dinamikasining asosiy kattaliklaridan biri harakat miqdori tushunchasidir. <span className="te"> Moddiy nuqta massasi bilan tezligining ko’paytmasiga teng bo’lgan vektor kattalik moddiy nuqtaning harakat miqdori deyiladi. <InlineMath math={"q=mv"} /> deb belgilanadi, nuqtaning harakat miqdori tezlik bilan bir xil yo’naladi. Harakat miqdorining xalqaro o’lchov birliklar sistemasidagi birligi <InlineMath math={"[q]=kg \\cdot m/s"} /> da, texnik o’lchov birliklar sistemasida <InlineMath math={"kgk \\cdot s"} /> larda o’lchanadi </span> (7.14 - shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image7_14}
                        alt="7.14-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Moddiy nuqta harakat miqdorining Dekart koordinatalaridagi proeksiyalari quyidagicha yoziladi:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"q_x=mv_x=m\\dot{x}, \\quad q_y=mv_y=m\\dot{y}, \\quad q_z=mv_z=m\\dot{z}"} />
                </div>

                <p className="mb-4 te">
                    Kuch bilan kuchning elementar ta`sir vaqtiga ko’paytmasi kuchning elementar impulsi deyiladi.
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"dS=F dt \\qquad (7.21)"} />
                </div>

                <p className="mb-4">
                    vektor kattalik kuchning elementar impulsini ifodalaydi, u kuch yo’nalishida bo’ladi. Agar kuchning biror chekli <InlineMath math={"[t_1, t_2]"} /> oraliqda ta’sir etishi ma’lum bo’lsa (7.21) ifodani shu oraliqda integrallab to’la impulsni hisoblash mumkin,
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"S = \\int_{t_1}^{t_2} F dt \\qquad (7.22)"} />
                </div>

                <p className="mb-4">
                    Biror chekli vaqt oralig’ida kuch miqdor va yo’nalish jihatdan o’zgarmas bo’lsa (7.22) ifodani quyidagicha yoziladi
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"S= F(t_2-t_1) \\qquad (7.23)"} />
                </div>

                <p className="mb-4">
                    Kuch impulsi xalqaro o’lchov birliklar sistemasida <InlineMath math={"N \\cdot s"} /> larda, texnik birliklar sistemasida <InlineMath math={"kgk \\cdot s"} /> larda o’lchanadi.
                </p>

                <p className="mb-4">
                    Kuch impulsining Dekart koordinatalardagi proyeksiyalarini (7.22) formuladan foydalanib quyidagicha yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"S_x = \\int_{t_1}^{t_2} F_x dt, \\quad S_y = \\int_{t_1}^{t_2} F_y dt, \\quad S_z = \\int_{t_1}^{t_2} F_z dt \\qquad (7.24)"} />
                </div>

                <p className="mb-4">
                    (7.22) va (7.24) formulalardan ko’rinib turibdiki, kuch va uning koordinata o’qlaridagi proyeksiyalari o’zgarmas bo’lsa, yoki, faqat vaqtning funksiyasi bo’lsa, yuqoridagi tengliklarni integrallash mumkin.
                </p>

                <p className="mb-4">
                    Moddiy nuqta harakat miqdori bilan ta’sir qiluvchi kuch impulsi orasidagi bog’lanishni ifodalovchi teoremani isbotlaymiz. Dinamikaning asosiy qonunining ifodasi bo’lgan <InlineMath math={"F=ma"} /> tenglikdagi massa o’zgarmas kattalik, <InlineMath math={"F"} /> ta’sir qilayotgan kuchlar sistemasining teng ta’sir etuvchisi va tezlanish <InlineMath math={"a=\\frac{dv}{dt}"} /> ekanligini e’tiborga olib, quyidagi shakl almashtirishni bajaramiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{d}{dt}(mv) = F, \\quad \\text{yoki} \\quad d(mv) = F dt \\qquad (7.25)"} />
                </div>

                <p className="mb-4">
                    Hosil bo’lgan ifoda moddiy nuqta harakat miqdori o’zgarishi haqidagi teoremaning defferensial ko’rinishi deyiladi va quyidagicha o’qiladi.
                </p>

                <p className="mb-4 te">
                    Moddiy nuqta harakat miqdorining to’liq defferensiali shu nuqtaga ta’sir qiluvchi kuchlarning elementar impulsiga teng.
                </p>

                <p className="mb-4">
                    Agar moddiy nuqtaning biror chekli vaqt oralig’idagi harakati ma’lum bo’lsa ya'ni <InlineMath math={"t=t_1"} /> vaqtda <InlineMath math={"v_1"} /> tezlikka, <InlineMath math={"t=t_2"} /> vaqtda <InlineMath math={"v_2"} /> tezlikka erishgani ma’lum bo’lsa (7.25) tenglamani integrallasak,
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"mv_2 - mv_1 = \\int_{t_1}^{t_2} F dt \\qquad (7.26)"} />
                </div>

                <p className="mb-4">
                    ko’rinishdagi ifodaga ega bo’lamiz. Hosil bo’lgan tenglamaga moddiy nuqta harakat miqdorining o’zgarishi haqidagi teoremaning integral ko’rinishi deyiladi va quyidagicha o’qiladi.
                </p>

                <p className="mb-4 te">
                    Moddiy nuqta harakat miqdorining biror chekli vaqt oralig’ida o’zgarishi, shu vaqt oralig’ida ta’sir qiluvchi kuchlarning to’la impulsiga teng.
                </p>

                <p className="mb-4">
                    Agar Dekart koordinatalar sistemasida moddiy nuqtaning radius vektori <InlineMath math={"r= x \\cdot i + y \\cdot j + z \\cdot k"} />, tezligi <InlineMath math={"v= v_x i + v_y j + v_z k"} />, ta`sir qiluvchi kuchlar sistemasining teng ta`sir etuvchisi, <InlineMath math={"F = F_x i + F_y j + F_z k"} /> berilgan bo’lsa, (bu yerda <InlineMath math={"x, y, z"} /> nuqtaning koordinatalari, <InlineMath math={"v_x, v_y, v_z"} /> tezlikning koordinata o’qlaridagi proeksiyalari, <InlineMath math={"i, j, k"} /> koordinata o’qlarining yo’naltiruvchi birlik vektorlari) (7.26) vektor tenglamani koordinata o’qlariga proeksiyalab quyidagi uchta skalyar munosabatga ega bo’lamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={`\\begin{cases}
                            mv_{2x} - mv_{1x} = \\int_0^t F_x dt = S_x \\\\
                            mv_{2y} - mv_{1y} = \\int_0^t F_y dt = S_y \\\\
                            mv_{2z} - mv_{1z} = \\int_0^t F_z dt = S_z
                        \\end{cases} \\qquad (7.27)`}
                    />
                </div>

                <p className="mb-4">
                    (7.26) va (7.27) formulalarning o’ng tomonidagi ifodadan ko’rinib turibdiki, ta’sir qiluvchi kuch o’zgarmas yoki vaqtga bog’liq bo’lsa, integrallash amalini bajarish mumkin, va bu teoremani qo’llab masalalar yechish maqsadga muvofiq bo’ladi.
                </p>

                <p className="mb-4 font-bold">
                    7.11–masala. Temir yo’l vagoni yo’lning gorizontal qismida to’g’ri chiziqli harakat qiladi. Tormozlanganda hosil bo’ladigan qarshilik kuchi vagon og’irligining 0.1 qismiga teng, tormozlash boshlangan paytda vagonning tezligi <InlineMath math={"20 m/s"} /> ga teng bo’lsa vagonning tormozlanish vaqti aniqlansin.
                </p>

                <p className="mb-4">
                    <span className="font-bold">Yechish:</span> Vagonni moddiy nuqta deb, tormoz berilgan holatni koordinata boshi deb harakat yo’nalishida <InlineMath math={"Ox"} /> o’qni o’rnatamiz. Ta’sir qiluvchi kuchlarni shaklda tasvirlaymiz. Moddiy nuqtaga og’irlik kuchi <InlineMath math={"G"} />, qarshilik kuchi <InlineMath math={"R"} />, tekislikning normal reaksiya kuchi <InlineMath math={"N"} /> ta’sir qiladi (7.15-shakl). Harakat miqdorining o’zgarishi haqidagi teoremaning <InlineMath math={"Ox"} /> o’qiga proeksiyasidan foydalanamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"mv_{2x} - mv_{1x} = \\int_{t_1}^{t_2} F_x dt"} />
                </div>

                <p className="mb-4">
                    Formulaga masala shartida berilganlarni keltirib qo’yamiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"v_{2x} = v = 0, \\quad v_{1x} = v_0 = 20 \\frac{m}{s}, \\quad F_x = -R = -0.1 \\cdot G = -0.1 \\cdot mg"} />
                </div>

                <div className="text-center py-6">
                    <img
                        src={image7_15}
                        alt="7.15-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Tormoz boshlangan vaqtni <InlineMath math={"t_1=0"} />, to’xtagan vaqtini <InlineMath math={"t_2=T"} /> deymiz va mazkur oraliqda integrallash amalini bajaramiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"-mv_0 = -\\int_0^T 0.1 \\cdot mg \\cdot dt"} />
                </div>

                <p className="mb-4">
                    Tenglikdan <InlineMath math={"v_0 = 0.1 \\cdot g \\cdot T"} /> hosil bo’ladi, bundan <InlineMath math={"T = \\frac{v_0}{0.1g} = 20.4 s"} /> aniqlanadi. Demak, gorizontal to’g’ri chiziqli yo’lda <InlineMath math={"20 m/s"} /> tezlik bilan harakatlanayotgan vagonning tormozlanish vaqti <InlineMath math={"20.4 s"} /> ekan.
                </p>

                <p className="mb-4 font-bold">
                    7.12–masala. Moddiy nuqta <InlineMath math={"M"} /> vertikal bo’ylab faqat og’irlik kuchi ta’sirida yuqoriga harakatlanadi. Agar moddiy nuqta vertikal bo’yicha <InlineMath math={"v_0=9.81 m/s"} /> boshlang’ich tezlik bilan harakatlansa, qancha vaqtdan keyin maksimal balandlikka ko’tariladi.
                </p>

                <p className="mb-4">
                    <span className="font-bold">Yechish:</span> Harakat yo`nalishida <InlineMath math={"Oy"} /> vertikal o`qni o`tkazamiz, <InlineMath math={"M"} /> nuqta eng baland holatga yetganda tezligi nolga teng bo’ladi, yani <InlineMath math={"v=0"} />. <InlineMath math={"h"} /> balandlikka ko’tarilguncha faqat og’irlik kuchi ta’sirida harakatlanadi.
                </p>

                <p className="mb-4">
                    Harakat miqdorining o’zgarishi haqidagi teoremani <InlineMath math={"Oy"} /> o’qida <InlineMath math={"O,h"} /> oralbqda qo’llaymiz (7.16 – shakl), harakat <InlineMath math={"O,t"} /> vaqt mobaynida davom etadi, deb hisoblaymiz.
                </p>

                <div className="text-center py-6">
                    <img
                        src={image7_16}
                        alt="7.16-shakl"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"mv_y - mv_{0y} = \\int_0^t (-G)dt"} />
                </div>

                <p className="mb-4">
                    Masala shartiga ko’ra <InlineMath math={"v_y=0, v_{0y}= 9.81 m/s, G=mg"} />, bularni tenglamaga qo’ysak <InlineMath math={"v_0=gt"} /> kelib chiqadi. Demak <InlineMath math={"t=\\frac{v_0}{g}"} />, ya'ni <InlineMath math={"t=1s"} /> vaqtdan keyin maksimal balandlikka ko’tariladi.
                </p>
            </div>
        </>
    );
};

export default ModdiyNuqtaXarakat79;
 