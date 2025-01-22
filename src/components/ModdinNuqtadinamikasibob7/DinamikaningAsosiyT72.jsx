import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";
import image7_1 from '../../assets/bolim@7image/image7_1.png';
import image7_2 from '../../assets/bolim@7image/image7_2.png';
import image7_3 from '../../assets/bolim@7image/image7_3.png';

const DinamikaningAsosiyT72 = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1940px] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">
          7.2 – §. Dinamikaning asosiy qonunlari
        </h2>

        <p className="mb-4">
          Dinamikada insoniyatning ko’p yillik tajribalari natijasida ishonch
          hosil qilingan aksiomalarga tayanib ish ko’riladi. Ushbu aksiomalar
          ingliz olimi Isaak Nyuton tomonidan kashf qilingan qonunlar sifatida
          talqin etiladi. Bu qonunlarni birinchi bo’lib I. Nyuton o’zining 1687
          - yilda yozilgan “Philosophiae naturalis principia mathematica” deb
          nomlangan kitobida keltirgan. Quyida bu qonunlarni soddalashtirilgan
          holda, moddiy nuqta harakatiga nisbatan talqinini bayon qilamiz.
        </p>
        <h3 className="text-xl font-bold mb-2">1. Inersiya qonuni.</h3>
        <p className="mb-4 te">
          Tashqi muhitdan ajratilgan moddiy nuqtaga kuch ta’sir ettirilmasa,
          u o’zining tinch yoki to’g’ri chiziqli tekis harakat holatini
          saqlaydi. Bu qonunni birinchi bo’lib italialik mexanik olim Galileo
          Galiley (1564 -1642) kashf qilgan. Jismlarning tezligini yoki tinch
          holatini saqlashga intilishi ham jismning inertlik xossasini
          bildiradi.
        </p>
        <h3 className="text-xl font-bold mb-2">2. Dinamikaning asosiy qonuni.</h3>
        <p className="mb-4 te">
          Inersial sanoq sistemasiga nisbatan harakatlanayotgan moddiy
          nuqtaning tezlanishi ta’sir qiluvchi kuchga mutanosib va shu kuch
          yo’nalishida bo’ladi 7.1-shakl
        </p>
        <div className="text-center py-6">
          <img
            src={image7_1}
            alt="3.18-shakl"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <p className="mb-4">
          Agar ta’sir qiluvchi kuchni <InlineMath math={"F"} />, tezlanishni{" "}
          <InlineMath math={"a"} /> desak, dinamikaning asosiy qonuni
          quyidagi ko’rinishda ifodalanadi
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"F=ma"} />
        </div>
        <p className="mb-4 te">
          bu yerda: <InlineMath math={"m"} />- o’zgarmas miqdor, mutanosiblik
          koeffisienti moddiy nuqtaning inertlik massasi deyiladi.
        </p>
        <p className="mb-4">
          Klassik mexanikada biror jismning tinch holatdagi massasi uning
          harakatdagi massasi bilan bir xil deb qabul qilingan. Shuni
          ta’kidlash lozimki, klassik mexanikada inertlik massasi moddiy
          nuqtaning o’zigagina bog’liq. Ta’sir qiluvchi kuchning tabiatiga
          yoki harakatning turiga ya’ni tezlik va tezlanishlarga bog’liq
          bo’lmaydi. (7.5) vektor formulaga ko’ra kattaliklarning son
          qiymatlari orasidagi bog’lanishni quyidagicha yozish mumkin:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"F=ma \\quad \\text{yoki} \\quad m=\\frac{F}{a}"} />
        </div>
        <p className="mb-4">
          Qonundagi ta’sir qiluvchi kuch tushunchasi ham ahamiyatli kattalik
          bo’lib, kuch manbai boshqa jism yoki kuch maydoni shakilda bo’lishi
          mumkin.
        </p>
        <h3 className="text-xl font-bold mb-2">
          3. Ta’sirning aks ta’sirga tenglik qonuni.
        </h3>
        <p className="mb-4 te">
          Jismlarning o’zaro ta’siri miqdor jihatdan teng bo’lib bir to’g’ri
          chiziq bo’ylab qarama qarshi tomonga yo’nalgan bo’ladi.
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"F_{21}=-F_{12}"} />
        </div>
        <p className="mb-4">
          Bu qonun ikkita jism har qanday holatda, ya’ni tinch yoki harakatda
          bo’lsa ham o’rinli bo’lib, jismlarning o’zaro mexanik
          ta’sirlarining tabiatini ifodalaydi (7.2–shakl).
        </p>
        <div className="text-center py-6">
          <img
            src={image7_2}
            alt="3.18-shakl"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">
          4. Kuchlar ta’sirining mustaqillik prinsipi.
        </h3>
        <p className="mb-4 te">
          Moddiy nuqtaning bir nechta kuch ta’sirida olgan tezlanishi, har bir
          kuchning alohida ta’siridan olgan tezlanishlarining geometrik
          yig’indisiga teng.
        </p>
        <p className="mb-4">
          Aytaylik, <InlineMath math={"M"} /> nuqtaga bir vaqtning o’zida{" "}
          <InlineMath math={"F_1, F_2, \\dots F_n"} /> kuchlar sistemasi ta’sir
          qilsin. Agar barcha kuchlar ta’sirida nuqtaning olgan tezlanishini{" "}
          <InlineMath math={"a"} /> desak,
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={"ma=F_1+ F_2+\\dots+F_n"}
          />
        </div>
        <p className="mb-4">
          o’rinli bo’ladi. Har bir kuchning alohida ta’sirida nuqtaning olgan
          tezlanishlarini <InlineMath math={"a_1, a_2, \\dots, a_n"} /> deb
          belgilasak, dinamikaning asosiy qonuniga ko’ra quyidagicha yozish
          mumkun (7.3 – shakl):
        </p>
        <div className="text-center py-6">
          <img
            src={image7_3}
            alt="3.18-shakl"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={"\\begin{cases} ma_1=F_1, \\\\ ma_2=F_2, \\\\ \\dots \\\\ ma_n=F_n \\end{cases}"}
          />
        </div>
        <p className="mb-4">
          Bu tengliklarni hadma-had qo’shsak,
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"m(a_1+ a_2+a_3+\\dots+a_n)= F_1+ F_2+\\dots+F_n"} />
        </div>
        <p className="mb-4">
          (7.8) va 7.9 formulalarni solishtirsak,
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"a=a_1+ a_2+a_3+\\dots+a_n"} />
        </div>
        <p className="mb-4">
          ekanligi kelib chiqadi. Bu qonun ham klassik mexanikaning boshqa
          qonunlari kabi kuzatuv va tajribalar asosida ta’sdiqlangan. Klassik
          mexanikaning yuqorida keltirilgan qonunlari tezligi yorug’lik
          tezligidan ancha kichik tezlikka ega moddiy jismlar uchun o’rinli.
          Bu qonunlar asosida harakatlanayotgan ixtiyoriy mexanik sistema
          uchun ta’sir qiluvchi kuchlar ma’lum bo’lsa harakat differensial
          tenglamasini tuzish mumkin.
        </p>
      </div>
    </>
  );
};

export default DinamikaningAsosiyT72;
