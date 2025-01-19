import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";
import image5_11 from '../../assets/bolim@5image/image5_11.png';
import image5_12 from '../../assets/bolim@5image/image5_12.png';

const TekisParalelHarakatDagi57 = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1940px] mx-auto mt-10 pt-20">
        <h1 className="text-2xl font-bold mb-6 text-center">
          5.8 – §. Tekis parallel harakatdagi jismning harakat tenglamalari
        </h1>

        <p className="mb-4">
          Tekis parallel harakat xususiyatini tushunish uchun quyidagicha mulohaza qilamiz. Aytaylik,
          jismning barcha nuqtalari <InlineMath math={"Oxy"} /> tekisligiga parallel tekisliklarda
          harakatlansin. Faraz qilaylik, <InlineMath math={"P"} /> tekislik <InlineMath math={"Oxy"} />
          tekislikka parallel bo'lsin (5.11 – shakl).
          <div className="text-center py-6">
            <img
              src={image5_11}
              alt="Qo'zg'almas o'q atrofida aylanma harakat"
              className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
            />
          </div>
          Jismda <InlineMath math={"P"} /> tekislikka
          perpendikulyar qilib o'tkazilgan <InlineMath math={"A_1A_2"} /> kesma harakatini kuzatsak,
          u har doim o'z-o'ziga parallel qoladi, ya'ni u ilgarilanma harakat qiladi, demak, bu kesma
          harakatini o'rganish uchun uning bitta nuqtasi, ya'ni <InlineMath math={"P"} /> tekislikning
          jism bilan kesishishi natijasida hosil bo'lgan <InlineMath math={"S"} /> tekis yuzaga tegishli
          <InlineMath math={"A"} /> nuqtasining harakatini o'rganish yetarli.
        </p >

        <p className="mb-4">
          Huddi shu kabi, jismda <InlineMath math={"P"} /> tekisligiga perpendikulyar qilib olingan
          <InlineMath math={"B_1B_2"} /> kesmaning <InlineMath math={"S"} /> yuza bilan kesishgan
          joydagi <InlineMath math={"B"} /> nuqtasining harakatini o'rganish kifoya. Faraz qilamizki,
          bu ishni <InlineMath math={"S"} /> yuzadagi barcha nuqtalarni qamrab olguncha davom ettirish mumkin.
        </p>

        <p className="mb-4 te">
          Shunday qilib, tekis parallel harakat qilayotgan jism harakatini o'rganish uchun jismda
          <InlineMath math={"Oxy"} /> tekislikka parallel qilib, fikran o'tkazilgan <InlineMath math={"P"} />
          tekislikning jism bilan kesishishi natijasida hosil bo'lgan <InlineMath math={"S"} /> tekis
          yuzaning harakatini o'rgansak yetarli bo'ladi va bu <InlineMath math={"S"} /> yuzaga tekis shakl deb ataladi.
        </p>

        <p className="mb-4">
          Tekis shaklning o'z tekisligidagi harakati uning ixtiyoriy ikki nuqtasi holati yoki shu
          nuqtalarni tutashtiruvchi kesma holati bilan to'liq aniqlanadi.
        </p>

        <p className="mb-4">
          Tekis shakl harakatini undagi kinematik holati aniq bo'lgan bitta nuqtasi harakatiga bog'lab
          o'rganish qulay bo'ladi. Bunday nuqta qutb nuqta deyiladi.
        </p>

        <p className="mb-4">
          Tekis shaklning biror A nuqtasini qutb uchun qabul qilib, shakl harakatlanayotgan tekislikda
          <InlineMath math={"Oxy"} /> koordinatalar sistemasini joylashtirsak, A nuqta harakatini
          <InlineMath math={"x_A"} />, <InlineMath math={"y_A"} /> koordinatalar orqali aniqlash mumkin
          (5.12 – shakl). Tekis shaklda olingan ixtiyoriy <InlineMath math={"AB"} /> kesmaning
          <InlineMath math={"Ox"} /> o'q bilan tashkil qilgan burchagi <InlineMath math={"\\phi"} />
          <div className="text-center py-6">
            <img
              src={image5_12}
              alt="Qo'zg'almas o'q atrofida aylanma harakat"
              className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
            />
          </div>
          vaqtning funksiyasi sifatida o'zgaradi. Shunday qilib, tekis shaklning harakati quyidagi
          tenglamalar bilan aniqlanadi.
        </p>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"\\begin{cases} x_A = f_1(t) \\\\ y_A = f_2(t) \\\\ \\phi = f_3(t) \\end{cases} \\quad (5.25)"} />
        </div>

        <p className="mb-4 te">
          Bu tenglamalar tekis shaklning harakat tenglamalari deyiladi. Xususiy holda, biror onda
          <InlineMath math={"\\phi = const"} /> bo'lsa tekis shakl oniy ilgarilanma harakatda bo'ladi.
          Agar biror vaqtda <InlineMath math={"x_A"} /> va <InlineMath math={"y_A"} /> larning qiymati
          o'zgarmas bo'lsa, tekis shakl harakat tekisligiga perpendikulyar o'q atrofida aylanma harakatda bo'ladi.
        </p>

        <p className="mb-4">
          Tekis shakl qutb nuqta atrofida oniy aylanma harakatda bo'lganda uning barcha nuqtalari bir xil
          burchak tezlikka va bir xil burchak tezlanishga ega bo'ladi.
        </p>

        <div className="bg-gray-200 p-4 flex justify-center mb-6">
          <BlockMath math={"\\omega = \\frac{d\\phi}{dt}, \\quad \\varepsilon = \\frac{d\\omega}{dt} = \\frac{d^2\\phi}{dt^2} \\quad (5.26)"} />
        </div>

        <p className="mb-4">
          <InlineMath math={"\\omega"} /> - tekis shakl burchak tezligi va <InlineMath math={"\\varepsilon"} /> -
          burchak tezlanishi bo'lib, ular erkin vektor kattalik, yo'nalishlari shakl tekisligiga perpendikulyar
          ravishda yo'nalgan va tekis shaklning ixtiyoriy nuqtasiga qo'yilgan bo'lishi mumkin.
        </p>

      </div >
    </>
  );
};

export default TekisParalelHarakatDagi57;