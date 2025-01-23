import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image8_10 from '../../assets/bolim@8image/image8_10.png';
import image8_11 from '../../assets/bolim@8image/image8_11.png';
import image8_12 from '../../assets/bolim@8image/image8_12.png';

const TekislikksaNisBatan86 = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1940px] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">
          8.6 – §. Tekislikka nisbatan inersiya momenti. Koordinata o‘qlariga
          nisbatan inersiya momentlari. Bosh inersiya o‘qlari
        </h2>

        <p className="mb-4">
          Qattiq jismning nuqtaga va o‘qqa nisbatan inersiya momentidan tashqari
          tekislikka nisbatan inersiya momenti, markazdan qochma inersiya
          momenti tushunchalaridan ham foydalaniladi. Bunday inersiya momentlarni
          Dekart koordinata o‘qlariga va tekisligiga nisbatan hisoblashlarni
          ko‘rib chiqamiz.
        </p>

        <p className="mb-4 te">
          Qattiq jismning tekislikka nisbatan inersiya momenti deb, jismda
          olingan har bir nuqtaning massasi bilan mazkur nuqtadan tekislikka
          tushirilgan perpendikulyar kesmalarning kvadratlari ko‘paytmalarining
          yig‘indisiga aytiladi (8.10-shakl).
        </p>
        <div className="text-center py-6">
          <img
            src={image8_10}
            alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <p className="mb-4">
          Jismda olingan har bir <InlineMath math={"M_k"} /> nuqtadan{" "}
          <InlineMath math={"xOy, \\; yOz, \\; zOx"} /> tekisliklariga shakldagidek
          perpendikulyar kesmalar tushiramiz:
          <br />
          <InlineMath math={"M_k d_k = z_k,"} /> <InlineMath math={"\\quad M_k b_k = y_k,"} />{" "}
          <InlineMath math={"\\quad M_k a_k = x_k"} />
        </p>

        <p className="mb-4">
          Jismning koordinata tekisliklariga nisbatan inersiya momentini{" "}
          <InlineMath math={"I_{xOy}, \\; I_{yOz}, \\; I_{zOx}"} /> deb
          belgilaymiz. Demak, ta’rifga ko‘ra quyidagicha yozamiz:
        </p>

        <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={`
\\begin{aligned}
I_{xOy} &= \\sum m_k z_k^2, \\\\
I_{zOx} &= \\sum m_k y_k^2, \\\\
I_{yOz} &= \\sum m_k x_k^2
\\quad (8.15)
\\end{aligned}
          `}
          />
        </div>

        <p className="mb-4">
          Shakldan hamda <InlineMath math={"(8.10)"} /> va{" "}
          <InlineMath math={"(8.11)"} /> formulalardan foydalanib, Dekart
          koordinata o‘qlariga nisbatan hamda <InlineMath math={"O"} />{" "}
          koordinatalar boshiga nisbatan inersiya momentlarini quyidagicha yozish
          mumkin:
        </p>

        <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={`
\\begin{aligned}
I_{Ox} &= \\sum_{k=1}^n m_k\\,\\bigl(y_k^2 + z_k^2\\bigr), 
\\quad I_{Oy} = \\sum_{k=1}^n m_k\\,\\bigl(x_k^2 + z_k^2\\bigr),\\\\
I_{Oz} &= \\sum_{k=1}^n m_k\\,\\bigl(x_k^2 + y_k^2\\bigr), 
\\quad I_{O} = \\sum_{k=1}^n m_k\\,\\bigl(x_k^2 + y_k^2 + z_k^2\\bigr)
\\quad (8.16)
\\end{aligned}
          `}
          />
        </div>

        <p className="mb-4">
          Bu yerda <InlineMath math={"x_k, y_k, z_k"} /> lar sistema (jism)ning{" "}
          <InlineMath math={"M_k"} /> nuqtasining koordinatalari. Agar sistema
          to‘liq muhitdan iborat jism bo‘lsa, <InlineMath math={"(8.15)"} /> va{" "}
          <InlineMath math={"(8.16)"} /> formulalarni integral ko‘rinishda yozish
          mumkin:
        </p>

        <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={`
\\begin{aligned}
I_{Ox} &= \\int \\bigl(y^2+z^2\\bigr)\\,dm, 
\\quad I_{Oy} = \\int \\bigl(x^2+z^2\\bigr)\\,dm, \\\\
I_{Oz} &= \\int \\bigl(x^2+y^2\\bigr)\\,dm, 
\\quad I_{O} = \\int \\bigl(x^2+y^2+z^2\\bigr)\\,dm.
\\quad (8.17)
\\end{aligned}
          `}
          />
        </div>

        <p className="mb-4">
          Bu formulalardan, ularni o‘zaro qo‘shish natijasida quyidagi muhim
          bog‘lanish kelib chiqadi:
        </p>

        <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"2 I_{O} = I_{Ox} + I_{Oy} + I_{Oz} \\quad (8.18)"} />
        </div>

        <p className="mb-4">
          Agar <InlineMath math={"O"} /> nuqtani koordinata boshi qilib, boshqa{" "}
          <InlineMath math={"O x' y' z'"} /> koordinatalar sistemasini qursak,
        </p>

        <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={"2 I_{O} = I_{Ox'} + I_{Oy'} + I_{Oz'} \\quad (8.19)"}
          />
        </div>

        <p className="mb-4">
          formula o‘rinli bo‘ladi. <InlineMath math={"(8.18)"} /> va{" "}
          <InlineMath math={"(8.19)"} />
          munosabatlardan
        </p>

        <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={
              "I_{Ox} + I_{Oy} + I_{Oz} = I_{Ox'} + I_{Oy'} + I_{Oz'} \\quad (8.20)"
            }
          />
        </div>

        <p className="mb-4 ">
          tenglik hosil bo‘ladi. <span className="te">Demak, bitta nuqtaga o‘rnatilgan Dekart
            koordinatalar sistemasida koordinata o‘qlarining yo‘nalishi o‘zgarsa
            ham, koordinatalar boshiga nisbatan olingan inersiya momenti o‘zgarmas
            bo‘ladi. Bu xulosaga bitta nuqtaga o‘rnatilgan o‘qlarga nisbatan
            inersiya momentining <em>invarianti</em> deyiladi </span>  (8.11-shakl).
        </p>
        <div className="text-center py-6">
          <img
            src={image8_11}
            alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>

        <p className="mb-4">
          <InlineMath math={"O"} /> nuqtani koordinatalar boshi qilib{" "}
          <InlineMath math={"Oxyz"} /> koordinatalar sistemasini o‘tkazsak, bu
          o‘qlarga nisbatan <em>markazdan qochma inersiya momenti</em> deb,
          quyidagi formulalar bilan aniqlanadigan kattaliklarga aytiladi.
        </p>

        <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={`
\\begin{aligned}
I_{xy} &= \\sum_k m_k\\,x_k\\,y_k, \\\\
I_{yz} &= \\sum_k m_k\\,y_k\\,z_k, \\\\
I_{zx} &= \\sum_k m_k\\,z_k\\,x_k
\\quad (8.21)
\\end{aligned}
          `}
          />
        </div>

        <p className="mb-4">
          Markazdan qochma inersiya momenti nuqta koordinatalarining
          ko‘paytmasidan iborat bo‘lgani uchun musbat, manfiy qiymatlarni qabul
          qilishi, ba’zi hollarda koordinatalar sistemasining tanlanishiga
          bog‘liq ravishda nolga teng bo‘lishi ham mumkin.
        </p>

        <p className="mb-4">
          Qo‘zg‘almas o‘q atrofida aylanayotgan jismning harakatida podshipniklarga
          tushayotgan bosim kuchini aniqlashda markazdan qochma inersiya momentini
          hisobga olish muhim ahamiyatga ega.
        </p>

        <h3 className="text-xl font-semibold mb-4">Bosh inersiya o‘qlari</h3>

        <p className="mb-4">
          Bir jinsli, simmetriya o‘qiga ega bo‘lgan jism berilgan bo‘lsin.{" "}
          <InlineMath math={"Oxyz"} /> koordinatalar sistemasining{" "}
          <InlineMath math={"Oz"} /> o‘qini jismning simmetriya o‘qi bo‘ylab
          yo‘naltiramiz. U holda simmetriklik xossasiga ko‘ra har bir
          koordinatalari <InlineMath math={"(x_k,\\;y_k,\\;z_k)"} /> bo‘lgan{" "}
          <InlineMath math={"m_k"} /> massali nuqtaga, unga simmetrik,
          koordinatalari <InlineMath math={"(-x_k,\\;-y_k,\\;z_k)"} /> bo‘lgan
          xuddi shunday boshqa bir nuqta topiladi. Bu mulohazadan foydalanib,
          <InlineMath math={"\\sum m_k x_k z_k = 0"} /> va{" "}
          <InlineMath math={"\\sum m_k y_k z_k = 0"} /> ekaniga ishonamiz, chunki
          bu yig‘indi belgisi ostidagi qo‘shiluvchilar, miqdorlari teng,
          qarama-qarshi ishorali juftliklardan iborat. Demak, (22.14) formuladan
        </p>

        <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={`
\\begin{aligned}
I_{xz} &= 0, \\\\
I_{yz} &= 0
\\quad (8.22)
\\end{aligned}
          `}
          />
        </div>

        <p className="mb-4">
          ifodalarga ega bo‘lamiz. Shunday qilib,{" "}
          <InlineMath math={"Oz"} /> o‘qqa nisbatan massaning simmetrik
          tarqalganligi, ikkita markazdan qochma inersiya momentining nolga
          tengligi bilan izohlanar ekan.
        </p>

        <p className="mb-4 te">
          Indeksida <InlineMath math={"z"} /> qatnashgan markazdan qochma
          inersiya momentlari nolga teng bo‘lsa, jismning{" "}
          <InlineMath math={"O"} /> nuqtasi uchun <InlineMath math={"Oz"} /> o‘qi{" "}
          <em>bosh inersiya o‘qi</em> deyiladi.
        </p>

        <p className="mb-4">
          Mulohazalardan shunday xulosa qilinadi: agar jism simmetriya o‘qiga ega
          bo‘lsa, bu o‘q jismning ixtiyoriy nuqtasi uchun bosh inersiya o‘qi
          bo‘ladi. Bosh inersiya o‘qi simmetriya o‘qi bo‘lishi shart emas.
          Quyidagi simmetriya tekisligiga ega bir jinsli jismni qaraylik
          (8.12-shakl). Aytaylik, <InlineMath math={"abcd"} /> tekisligi
          simmetriya tekisligi bo‘lsin.
        </p>
        <div className="text-center py-6">
          <img
            src={image8_12}
            alt="8.1 – shakl - Mexanik Sistema Massasi va Massalar Markazi"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <p className="mb-4">
          Bu tekislikda yotuvchi <InlineMath math={"Ox"} /> va{" "}
          <InlineMath math={"Oz"} /> o‘qlarini, ularga perpendikulyar qilib{" "}
          <InlineMath math={"Oy"} /> o‘qini o‘tkazaylik. U holda{" "}
          <InlineMath math={"m_k"} /> massali,{" "}
          <InlineMath math={`(x_k,\\;y_k,\\;z_k)`} />
          koordinatali har bir nuqtaga, xuddi shunday massali, koordinatalari{" "}
          <InlineMath math={`(x_k,\\;-y_k,\\;z_k)`} /> bo‘lgan boshqa bir nuqta
          topiladi. Natijada, xuddi yuqorida ko‘rgan misolga o‘xshash:
        </p>

        <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={`\\sum m_k x_k y_k = 0, \\quad \\sum m_k y_k z_k = 0 \\quad (8.23)`}
          />
        </div>

        <p className="mb-4">
          ya’ni <InlineMath math={"I_{xy} = 0"} />,{" "}
          <InlineMath math={"I_{yz} = 0"} /> tengliklarga ega bo‘lamiz. Demak,{" "}
          <InlineMath math={"O"} /> nuqta uchun <InlineMath math={"Oy"} /> o‘q
          bosh inersiya o‘qi bo‘lar ekan. Shunday qilib, agar jism simmetriya
          tekisligiga ega bo‘lsa, shu tekislikka perpendikulyar bo‘lib, shu
          tekislikni kesib o‘tgan ixtiyoriy o‘q <InlineMath math={"O"} /> nuqta
          uchun jismning bosh inersiya o‘qi bo‘ladi.
        </p>

        <p className="mb-4">
          Shakldagi jism uchun <InlineMath math={"Oz"} /> o‘qi ham bosh inersiya
          o‘qi bo‘lib, <InlineMath math={"(8.23)"} /> formulaga ko‘ra{" "}
          <InlineMath math={"I_{xz} = 0"} />,{" "}
          <InlineMath math={"I_{yz} = 0"} /> edi.
        </p>

        <p className="mb-4">
          <InlineMath math={"Oy"} /> o‘qining bosh inersiya o‘qi ekanidan{" "}
          <InlineMath math={"I_{xy} = 0"} />,{" "}
          <InlineMath math={"I_{yz} = 0"} /> tengliklar bajariladi. Demak,
        </p>

        <div className="bg-gray-200 p-2 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={
              "I_{xy} = 0, \\quad I_{yz} = 0, \\quad I_{zx} = 0. \\quad (8.24)"
            }
          />
        </div>

        <p className="mb-4">
          Natijada, barcha markazdan qochma inersiya momentlar nolga teng bo‘lsa,{" "}
          <InlineMath math={"Oxyz"} /> koordinatalar sistemasining barcha o‘qlari{" "}
          <InlineMath math={"O"} /> nuqta uchun bosh inersiya o‘qlari hisoblanadi.
        </p>

        <p className="mb-4 te">
          Demak, bir jinsli jism simmetriya tekisligiga ega bo‘lsa, inersiya bosh
          o‘qlaridan biri simmetriya tekisligiga perpendikulyar bo‘ladi hamda
          ikkita inersiya bosh o‘qlari shu tekislikda yotadi.
        </p>

        <p className="mb-4">
          Bosh inersiya o‘qlariga nisbatan hisoblangan inersiya momenti jismning
          <em> bosh inersiya momenti</em> deyiladi.
        </p>

        <p className="mb-4">
          Massalar markazidan o‘tuvchi bosh inersiya o‘qlari, jismning massalar
          markaziga nisbatan <em>markaziy bosh inersiya o‘qlari</em> deyiladi.
        </p>

        <p className="mb-4">
          Yuqoridagi misolda simmetriya o‘qiga yoki simmetriya tekisligiga ega
          bo‘lgan bir jinsli jism uchun bosh inersiya o‘qlarini ko‘rdik. Ixtiyoriy
          ko‘rinishdagi jismning ixtiyoriy nuqtasidan o‘zaro perpendikulyar uchta
          o‘qlarni shunday o‘tkazish mumkinki, <InlineMath math={"(8.24)"} />{" "}
          tenglik albatta bajariladi va bu o‘qlar tanlangan o‘sha nuqta uchun bosh
          inersiya o‘qlari bo‘ladi. Qattiq jismning qo‘zg‘almas o‘q atrofida
          aylanma harakat dinamikasini o‘rganishda bosh inersiya o‘qlarini topib,
          koordinata o‘qlarini ular bo‘ylab yo‘naltirilsa, shu koordinatalar
          sistemasiga nisbatan differensial tenglamalar tuzilsa, tenglamada
          markazdan qochma inersiya momentlari qatnashmaydi, natijada, hal
          qilishga oson differensial tenglamalar sistemasi hosil bo‘ladi.
        </p>
      </div>
    </>
  );
};

export default TekislikksaNisBatan86; 