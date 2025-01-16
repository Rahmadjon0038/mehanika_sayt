import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";
import image5_13 from '../../assets/bolim@5image/image5_13.png';
import image5_14 from '../../assets/bolim@5image/image5_14.png';
import image5_15 from '../../assets/bolim@5image/image5_15.png';
import image5_16 from '../../assets/bolim@5image/image5_16.png';
import image5_17 from '../../assets/bolim@5image/image5_17.png';

const TekisShaklIxtiyoriy58 = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1940px] mx-auto mt-10 pt-20">
        <h1 className="text-2xl font-bold mb-6 text-center">
          5.9 – §. Tekis shakl ixtiyoriy nuqtasi tezligini qutb nuqtadan foydalanib aniqlash
        </h1>

        <p className="mb-4">
          Tekis shaklni <InlineMath math={"Oxy"} /> tekisligidagi harakatida <InlineMath math={"A"} /> nuqta
          qutb nuqta va uning radius vektori <InlineMath math={"\\vec{r}_A"} /> bo'lsin,
          <InlineMath math={"B"} /> ixtiyoriy nuqtaning radius vektori <InlineMath math={"\\vec{r}_B"} /> bo'lsin
          (5.13 – shakl). Shakldan
        </p>
        <div className="text-center py-6">
          <img
            src={image5_13}
            alt="Qo'zg'almas o'q atrofida aylanma harakat"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"\\vec{r}_B = \\vec{r}_A + \\vec{AB} \\quad (5.26)"} />
        </div>

        <p className="mb-4">
          ko'rinishda yozish mumkin. (5.26) ni vaqt bo'yicha differensiallab
        </p>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"\\frac{d\\vec{r}_B}{dt} = \\frac{d\\vec{r}_A}{dt} + \\frac{d\\vec{AB}}{dt} \\quad (5.27)"} />
        </div>

        <p className="mb-4">
          formulaga ega bo'lamiz.
        </p>

        <p className="mb-4">
          <InlineMath math={"\\frac{d\\vec{r}_B}{dt} = \\vec{v}_B"} /> - <InlineMath math={"B"} /> nuqtaning tezligi,
          <InlineMath math={"\\frac{d\\vec{r}_A}{dt} = \\vec{v}_A"} /> - <InlineMath math={"A"} /> qutb nuqta tezligini bildiradi.
          <InlineMath math={"\\frac{d\\vec{AB}}{dt} = \\vec{v}_{BA}"} />, <InlineMath math={"B"} /> nuqtaning
          <InlineMath math={"A"} /> nuqta atrofida aylanishidan hosil bo'lgan tezlik bo'lib, uni aylanma harakatdagi
          tezlik kabi
        </p>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"\\vec{v}_{BA} = \\vec{\\omega} \\times \\vec{AB} \\quad (5.28)"} />
        </div>

        <p className="mb-4">
          ko'rinishida yozish mumkin. Bu yerda <InlineMath math={"\\vec{\\omega}"} /> jismning
          <InlineMath math={"A"} /> nuqtasidan o'tgan shakl tekisligiga perpendikulyar o'q atrofida
          aylanish burchak tezligi.
        </p>

        <p className="mb-4">
          Demak, (5.27) formulani quyidagi ko'rinishda yozish mumkin:
        </p>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"\\vec{v}_B = \\vec{v}_A + \\vec{v}_{BA} \\quad (5.29)"} />
        </div>

        <p className="mb-4">
          yoki
        </p>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"\\vec{v}_B = \\vec{v}_A + \\vec{\\omega} \\times \\vec{AB} \\quad (5.30)"} />
        </div>

        <p className="mb-4">
          Bu yerda <InlineMath math={"\\vec{\\omega} \\perp \\vec{AB}"} /> bo'lgani uchun (5.28) formuladagi
          <InlineMath math={"\\vec{v}_{BA}"} /> tezlikning modulini <InlineMath math={"v_{BA} = \\omega \\cdot AB"} />
          ko'rinishda yozish mumkin.
        </p>


















        <p className="mb-4 te">
          Tekis parallel harakatda jismning ixtiyoriy <InlineMath math={"B"} /> nuqtasining tezligi,
          qutb deb ataluvchi <InlineMath math={"A"} /> nuqta tezligi bilan <InlineMath math={"A"} /> nuqta
          atrofida <InlineMath math={"B"} /> nuqtaning aylanishidan hosil bo'lgan tezliklarning geometrik
          yig'indisiga teng.
        </p>

        <p className="mb-4">
          Jismning aylanish burchak tezligi qutb nuqtasining tanlanishiga bog'liq emas. Yo'nalishi burchak
          tezlikning shakl tekisligiga perpendikulyar o'qdagi proyeksiyaga qarab aniqlanadi,
          <InlineMath math={"\\omega > 0"} /> bo'lsa harakat soat miliga teskari yo'nalishda,
          <InlineMath math={"\\omega < 0"} /> bo'lsa, harakat soat mili bo'ylab aylanayotgan bo'ladi.
          <InlineMath math={"A"} /> nuqtaning tezligi ma'lum bo'lsa va burchak tezlikning ishorasiga qarab
          <InlineMath math={"B"} /> nuqtaning tezligi yo'nalishini 5.14 a,b,c–shaklda ko'rsatilgan ko'rinishlarda
          aniqlash mumkin.
        </p>
        <div className="text-center py-6">
          <img
            src={image5_14}
            alt="Qo'zg'almas o'q atrofida aylanma harakat"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <h3 className="text-xl font-bold mb-4">5.1–masala</h3>

        <p className="mb-4">
          <InlineMath math={"r"} /> radiusli g'ildirak to'g'ri chiziqli rels bo'ylab sirpanmasdan dumalaydi.
          G'ildirak <InlineMath math={"O"} /> markazining tezligi <InlineMath math={"v_0 = 2"} /> m/s ga teng
          (5.15 – shakl). G'ildirakning vertikal va gorizontal diametrlari uchlarining tezligi topilsin?
        </p>
        <div className="text-center py-6">
          <img
            src={image5_15}
            alt="Qo'zg'almas o'q atrofida aylanma harakat"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <p className="mb-4">
          <strong>Yechish.</strong> G'ildirak sirpanmasdan dumalayotgani uchun g'ildirakning relsga tegishib
          turgan <InlineMath math={"P"} /> nuqtasining tezligi nolga teng. Demak, <InlineMath math={"P"} /> nuqta
          g'ildirak nuqtalari uchun tezliklar oniy markazi bo'ladi. <InlineMath math={"O"} /> nuqta tezligi
          <InlineMath math={"v_0"} /> ma'lumligidan g'ildirakning oniy burchak tezligini aniqlaymiz:
        </p>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"v_B = \\omega \\cdot OP \\quad \\text{dan} \\quad \\omega = \\frac{v_0}{OP} = \\frac{v_0}{r}"} />
        </div>

        <p className="mb-4">
          Oniy markaz xossalariga asosan <InlineMath math={"A"} />, <InlineMath math={"B"} />,
          <InlineMath math={"C"} /> nuqtalarning tezliklari miqdorini aniqlaymiz:
        </p>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"v_A = \\omega \\cdot AP = \\frac{v_0}{r} \\cdot r \\cdot 2 = 2.83 \\text{ m/s}"} />
        </div>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"v_B = \\omega \\cdot BP = \\frac{v_0}{r} \\cdot 2r = 4 \\text{ m/s}"} />
        </div>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"v_C = \\omega \\cdot CP = \\frac{v_0}{r} \\cdot 2r = 2.83 \\text{ m/s}"} />
        </div>

        <p className="mb-4">
          <InlineMath math={"A"} />, <InlineMath math={"B"} />, <InlineMath math={"C"} /> – tezlik vektorlari,
          mos ravishda <InlineMath math={"A"} />, <InlineMath math={"B"} />, <InlineMath math={"C"} /> nuqtalarni
          <InlineMath math={"P"} /> bilan tutashtiruvchi chiziqqa perpendikulyar harakat yo'nalishiga mos
          yo'nalgan bo'ladi.
        </p>







        <p className="mb-4">
          Ba`zi hollarda tekis shakl ikki nuqtasi tezliklarining proyeksiyalari to'g'risida teoremadan
          foydalanish oson bo`ladi
        </p>

        <p className="mb-4 font-bold te">
          Teоrema: Tekis parallel harakatdagi jismning ixtiyoriy ikki nuqtasi tezligining shu nuqtalardan
          o'tuvchi o'qdagi prоyeksiyalari o'zarо teng.
        </p>

        <p className="mb-4">
          5.16-shakldan <InlineMath math={"\\vec{v}_B = \\vec{v}_A + \\vec{v}_{BA}"} /> tenglikni
          <InlineMath math={"AB"} /> o'qqa proyeksiyalaymiz.
        </p>
        <div className="text-center py-6">
          <img
            src={image5_16}
            alt="Qo'zg'almas o'q atrofida aylanma harakat"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"v_{B_{pr_{AB}}} = v_{A_{pr_{AB}}} + v_{BA_{pr_{AB}}}"} />
        </div>

        <p className="mb-4">
          <InlineMath math={"\\vec{v}_{BA} \\perp AB"} /> bo'lgani uchun <InlineMath math={"v_{BA_{pr_{AB}}} = 0"} />.
          Demak,
        </p>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"v_{B_{pr_{AB}}} = v_{A_{pr_{AB}}} \\quad (5.31)"} />
        </div>

        <p className="mb-4">
          Teorema isbotlandi.
        </p>

        <h3 className="text-xl font-bold mb-4">5.2-masala</h3>

        <p className="mb-4">
          Shakldagi krivoship-shatunli mexanizm berilgan. Agar <InlineMath math={"AC = CB = l"} />,
          <InlineMath math={"AC"} /> krivoshipning burchak tezligi <InlineMath math={"\\omega"} />,
          <InlineMath math={"AC \\perp BC"} /> ekanligi ma'lum bo'lsa, <InlineMath math={"B"} /> porshenning
          tezligi topilsin (5.17 – shakl).
        </p>
        <div className="text-center py-6">
          <img
            src={image5_17}
            alt="Qo'zg'almas o'q atrofida aylanma harakat"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <p className="mb-4">
          <strong>Yechish.</strong> Ma'lumki, BC shatun tekis parallel harakatda, uning <InlineMath math={"C"} />
          nuqtasi <InlineMath math={"AC"} /> krivoshipga ham tegishli ekanligidan
          <InlineMath math={"v_C = \\omega AC"} /> kelib chiqadi.
        </p>

        <p className="mb-4">
          Porshen tezligi <InlineMath math={"B"} /> nuqtadan <InlineMath math={"A"} /> ga qarab yo'naladi
          (5.17 – shakl) bu holda (5.31) formulaga ko'ra <InlineMath math={"v_{C_{pr_{BC}}} = v_{B_{pr_{BC}}}"} />
          deb yozish mumkin. Demak,
        </p>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"v_C = v_B\\cos 45°, \\quad \\text{yoki} \\quad v_C = v_B\\frac{\\sqrt{2}}{2}"} />
        </div>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"\\text{bundan} \\quad v_B = v_C\\sqrt{2}"} />
        </div>

        <p className="mb-4">
          ma'lumki, <InlineMath math={"v_C = \\omega l"} /> bo'lib, <InlineMath math={"v_B = \\omega l\\sqrt{2}"} />
          kelib chiqadi.
        </p>

        <p className="mb-4">
          Ba`zan tezliklar оniy markazi degan nuqtadan foydalanish masala yechishni osonlashtiradi.
        </p>

        <p className="mb-4 font-bold">
          Tekis parallel harakatdagi jismning qaralayotgan vaqtda tezligi nоlga teng bo'lgan nuqtasiga tezliklar
          оniy markazi yoki oniy aylanish markazi deyiladi va P harfi bilan belgilanadi.
        </p>

        <p className="mb-4">
          Agar 5.17 – shakldagidek bir jism qo'zg'almas ikkinchi bir jism ustida sirpanmasdan dumalayotgan bo'lsa
          <InlineMath math={"P"} /> nuqta tezliklar oniy markazi bo`ladi.
        </p>

      </div>
    </>
  );
};

export default TekisShaklIxtiyoriy58;