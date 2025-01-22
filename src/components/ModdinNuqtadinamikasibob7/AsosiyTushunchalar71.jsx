import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";

const Tushuncha71 = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1940px] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">
          7.1–§. Asosiy tushunchalar. Amalda uchraydigan ba’zi kuchlarning
          tasnifi.
        </h2>

        <p className="mb-4">
          Dinamikaning asosiy tushunchalaridan biri{" "}
          <span className="font-bold">moddiy nuqta</span> tushunchasidir.
           <span className="te">Inersial sanoq sistemasiga nisbatan harakati davomida o’lchamlarini
          hisobga olmasa ham bo’laveradigan jismlar moddiy nuqta deb qabul
          qilingan. </span> Ilgarilanma harakatdagi jismni, uning barcha nuqtalari bir
          xil tezlikka va bir xil tezlanishga ega bol’ganganligi uchun, massasi
          jism massasiga teng va bir nuqtada to’plangan moddiy nuqta deb
          qabul qilish mumkin.
        </p>
        <p className="mb-4">
          Dinamikaning asosiy tushunchalaridan yana biri{" "}
          <span className="font-bold">massa</span> tushunchasidir <span className="te"> Jismlarning
          inertligini belgilovchi kattalik massa deb ataladi.</span>
        </p>
        <p className="mb-4">
          <span className="font-bold">Inertlik</span> deganda, jismlarning bir
          hil kuch ta’sirida turli xil harakat olishi tushuniladi. Ya’ni,
          ikkita jismga bir hil kuch ta’sir ettirilsa massasi kattarog’i
          sekinroq harakatlanadi, massasi kamrog’i tezroq harakatlanadi.
          Nazariy mexanikada massa o’zgarmas, skalyar va musbat kattalik
          hisoblanadi.
        </p>
        <p className="mb-4">
          Harakat o’rganilar ekan, sanoq sistemasi tanlanadi.{" "}
          <span className="font-bold">
            Absolyut qo’zg’almas koordinatalar sistemasi
          </span>{" "}
          deganda koordinatalar boshi Quyoshda joylashgan, o’qlari qo’zg’almas
          yulduzlarga tomon yo’nalgan sanoq sistemasi tushuniladi. Bunday
          sistema <span className="font-bold">inersial sanoq sistemasi</span>{" "}
          deyiladi. Odatda, ko’pgina mexanik masalalarni yechishda Yer bilan
          mahkam bog’langan koordinatalar sistemasini ham inersial sistema deb
          qabul qilish mumkin.
        </p>
        <p className="mb-4">
          Dinamikaning asosiy masalalarini yechshda ko’p uchraydigan
          quyidagi o’zgaruvchi va o’zgarmas kuchlar bilan tanishamiz.
          O’zgaruvchi kuchlarning o’zgarish qonuniyati tajribalar asosida
          aniqlanadi.
        </p>
        <h3 className="text-xl font-bold mb-2">1. Og’irlik kuchi.</h3>
        <p className="mb-4">
        <span className="te"> Yerning jismga ta’siriga, ya’ni tortish kuchiga{" "}
          <span className="font-bold">og’irlik kuchi</span> deyiladi. </span> Og’irlik
          kuchini, odatda, <InlineMath math={"G"} /> harfi bilan belgilanadi.
          Bu kuch Yer sharining ixtiyoriy nuqtasida, Yer shariga yaqin joyda
          joylashgan barcha jismlarga ta’sir qiladi. Og’irlik kuchining
          yo’nalishi gorizontal tekislikka perpendikulyar bo’lib, miqdori
          jism og’irligiga teng, deb qabul qilingan.
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"G=mg,"} />
        </div>
        <p className="mb-4">
          bu yerda <InlineMath math={"g"} /> erkin tushish tezlanishi bo’lib,
          jismning dengiz sathidan qanday balandlikda joylashganiga va turgan
          joyining geografik kengligiga bog’liq bo’ladi.
        </p>
        <p className="mb-4">
          (7.1) formuladan ko’riniib turibdiki, jismning og’irligi berilgan
          bo’lsa, massasini aniqlash, yoki massasi ma’lum bo’lsa og’irligini
          aniiqlash mumkin.
        </p>
        <h3 className="text-xl font-bold mb-2">2. Ishqalanish kuchi.</h3>
        <p className="mb-4">
          Sirpanishdagi ishqalanish (quruq ishqalanish) kuchining miqdori,
          Kulon qonuniga ko’ra quyidagi formula orqali aniqlanadi:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"F=f \\cdot N"} />
        </div>
        <p className="mb-4">
          <InlineMath math={"f"} /> sirpanishdagi ishqalanish koeffitsienti,{" "}
          <InlineMath math={"N"} /> tekislikning normal reaksiya kuchi.
        </p>
        <h3 className="text-xl font-bold mb-2">3. Elastiklik kuchi.</h3>
        <p className="mb-4">
          Umumiy holda elastiklik kuchining miqdorini Guk qonuni orqali
          aniqlash mumkin. Xususan, kuchning shu kuch ta’sirida jismda hosil
          bo’lgan deformatsiyaga mutanosibligidan, prujinada hosil bo’lgan
          chiziqli elastiklik kuchini
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"F=c \\cdot \\lambda"} />
        </div>
        <p className="mb-4">
          <InlineMath math={"\\lambda"} /> prujinaning cho’zilishi (yoki
          siqilishi), <InlineMath math={"c"} /> prujinaning bikrlik
          koeffitsienti bo’lib, xalqaro birliklar sistemasida{" "}
          <InlineMath math={"N/m"} /> larda o’lchanadi.
        </p>
        <h3 className="text-xl font-bold mb-2">
          4. Jismlarning o’zaro tortishish kuchi.
        </h3>
        <p className="mb-4">
          Bu kuchni Nyutonning butun olam tortishish qonuniga ko’ra
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"F= \\gamma \\cdot \\frac{m_1 m_2}{r^2}"} />
        </div>
        <p className="mb-4 te">
          Ya’ni, o’zaro tortishish kuchi moddiy nuqtalar massalari
          ko’paytmasiga to’g’ri mutanosib, ular orasidagi masofaning
          kvadratiga teskari mutanosib bo’ladi. Bu yerda{" "}
          <InlineMath math={"\\gamma"} /> gravitatsiya doimiysi bo’lib,
          xalqaro birliklar sistemasida:{" "}
          <InlineMath math={"\\gamma=6,673 \\cdot 10^{-11} \\frac{m^3}{kg \\cdot s^2}"} />{" "}
          ga teng deb olingan. <InlineMath math={"m_1, m_2"} />- kattaliklar
          o’zaro tortishayotgan moddiy nuqtalrning gravitatsiya massalari
          deyiladi. <InlineMath math={"r"} />- moddiy nuqtalar orasidagi
          masofa. Tajribalar asosida juda katta aniqlikkacha inertlik massa
          bilan gravitatsiya massasi ekvivalent ekanligi isbotlangan.
        </p>
      </div>
    </>
  );
};

export default Tushuncha71;


