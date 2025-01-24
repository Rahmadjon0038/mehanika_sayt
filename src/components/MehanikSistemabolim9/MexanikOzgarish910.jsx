import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image9_18 from "../../assets/bolim@9image/image9_18.png"; // Rasmni import qiling
import image9_19 from "../../assets/bolim@9image/image9_19.png"; // Rasmni import qiling

const MexanikOzgarish910 = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1940px] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">
          9.10-§. Mexanik sistema kinetik energiyasining o‘zgarishi haqidagi teorema
        </h2>

        <p className="mb-4">
          Moddiy nuqta uchun keltirib chiqarilgan kinetik energiyaning o‘zgarishi haqidagi teorema mexanik sistemaning har bir nuqtasi uchun o‘rinli. Sistemaning biror <InlineMath math={"M_k"} /> nuqtasining massasi <InlineMath math={"m_k"} />, tezligi <InlineMath math={"v_k"} /> bo‘lsin. Mazkur nuqtaga ta’sir qiluvchi <InlineMath math={"F_k^i"} /> ichki va <InlineMath math={"F_k^e"} /> tashqi kuchlarni hisobga olib, kinetik energiyaning o‘zgarishi haqidagi teoremaning differensial ko‘rinishini yozamiz:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"d\\left(\\frac{m_k v_k^2}{2}\\right) = dA_k^e + dA_k^i"} />
        </div>

        <p className="mb-4">
          Bu yerda <InlineMath math={"dA_k^e"} /> va <InlineMath math={"dA_k^i"} /> mos ravishda nuqtaga ta’sir qiluvchi tashqi va ichki kuchlarning elementar ishlari. Bunday tenglamani mexanik sistemaning barcha nuqtalari uchun yozib, ularni hadma-had qo‘shsak, quyidagi tenglikka ega bo‘lamiz:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"d\\left(\\sum \\frac{m_k v_k^2}{2}\\right) = \\sum dA_k^e + \\sum dA_k^i"} />
        </div>

        <p className="mb-4">
          yoki
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"dT = dA^e + dA^i \\quad (9.34)"} />
        </div>

        <p className="mb-4">
          (9.34) tenglik sistema kinetik energiyasining o‘zgarishi haqidagi teoremaning differensial ifodasi deyiladi. Agar sistema nuqtalarining barcha chekli ko‘chishda, boshlang‘ich holatdagi sistema kinetik energiyasi <InlineMath math={"T_0"} /> va oxirgi holatdagi kinetik energiyasi <InlineMath math={"T_1"} /> ma’lum bo‘lsa, (9.34) ni integrallab quyidagi tenglikka ega bo‘lamiz:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"T_1 - T_0 = A^e + A^i \\quad (9.35)"} />
        </div>

        <p className="mb-4">
          (9.35) tenglama sistema kinetik energiyasining o‘zgarishi haqidagi teoremaning chekli ko‘rinishi deyiladi va quyidagicha o‘qiladi:
        </p>
        <p className="mb-4 italic te">
          Biror chekli ko‘chishda sistema kinetik energiyasining o‘zgarishi sistemaga ta’sir qiluvchi ichki va tashqi kuchlarning shu ko‘chishdagi to‘la bajargan ishlarining yig‘indisiga teng.
        </p>




        <div className="text-center py-6">
          <img
            src={image9_18}
            alt="Qattiq jismning tekis parallel harakati"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>



        <p className="mb-4">
          Bu teoremada ichki kuchlarning bajargan ishi ham hisobga olinadi. Masalan, sistemaga tegishli <InlineMath math={"B_1"} /> va <InlineMath math={"B_2"} /> nuqtalarning oʻzaro ta’sirlari ichki kuch boʻlib, haqiqatan ham, <InlineMath math={"F_{12}^i = -F_{21}^i"} /> (23.34-shakl) tenglik bajariladi. Lekin bu kuchlar ta’sirida <InlineMath math={"B_1"} /> nuqta <InlineMath math={"B_2"} /> tomonga qarab, <InlineMath math={"B_2"} /> nuqta <InlineMath math={"B_1"} /> tomonga qarab harakatlanishi mumkin. Bu holda ikkala kuchning ham bajargan ishi musbat boʻladi, ularning yigʻindisi, albatta, nolga farqli. Sistema kinetik energiyasining oʻzgarishi haqidagi teoremadan foydalanib masalalar yechishda quyidagi muhim holatlarni eʼtiborga olish zarur:
        </p>

        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">
            <strong>Mexanik sistema o‘zgarmaydigan sistemadan iborat bo‘lsa:</strong>
            <p className="mt-1">
              Harakati davomida sistemaning oʻzaro ta’sirlashuvchi nuqtalari orasidagi masofa oʻzgarmay qolsa, sistema nuqtalariga qo‘yilgan ichki kuchlarning bajargan ishlari yigʻindisi nolga teng boʻladi. U holda <InlineMath math={"dA_k^i = 0"} /> boʻlib, (9.34) va (9.35) tengliklar quyidagi koʻrinishni oladi:
            </p>
            <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
              <BlockMath math={"dT = dA^e \\\\ yoki \\\\ T_1 - T_0 = A^e \quad (9.36)"} />
            </div>
          </li>
          <li className="mb-2">
            <strong>Sistemaga qo‘yilgan bog‘lanishlar ideal bog‘lanishlardan iborat bo‘lsa:</strong>
            <p className="mt-1">
              Yaʼni vaqt oʻtishi bilan oʻzgarmaydigan bogʻlanishlardan iborat boʻlsa, sistemaga ta’sir qiluvchi ichki va tashqi kuchlarni bogʻlanishlarning reaksiya kuchlari va aktiv kuchlarga ajratish mumkin. Sistemaning biror <InlineMath math={"M_k"} /> nuqtasiga qo‘yilgan aktiv kuchning bajargan elementar ishi <InlineMath math={"dA_k^a"} /> shu nuqtaga qo‘yilgan reaksiya kuchning bajargan elementar ishi <InlineMath math={"dA_k^r"} /> desak, (9.36) formulani <InlineMath math={"dT = dA_k^a + dA_k^r"} /> koʻrinishda yozish mumkin.
            </p>
            <p className="mt-1">
              Vaqt oʻtishi bilan oʻzgarmaydigan bogʻlanishdagi sistemaning elementar koʻchishida bogʻlanish reaksiya kuchlari bajargan elementar ishlarning yigʻindisi nolga teng boʻlsa, bunday bogʻlanishlar ideal bogʻlanishlar deyiladi.
            </p>
            <p className="mt-1">
              Agar sistemaga shunday bogʻlanishlar qo‘yilgan boʻlsa, <InlineMath math={"dA_k^r = 0"} /> shart bajariladi. U holda oʻzgarmaydigan, ideal bogʻlanishdagi sistema kinetik energiyasining ixtiyoriy chekli koʻchishdagi oʻzgarishi, ta’sir qiluvchi aktiv kuchlarning shu koʻchishdagi bajargan elementar ishlarning yigʻindisiga teng:
            </p>
            <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
              <BlockMath math={"dT = dA_k^a \\\\ va \\\\ T_1 - T_0 = A^a \quad (9.37)"} />
            </div>
            <p className="mb-4">
              Demak, ideal bogʻlanishdagi mexanik sistema harakatini oʻrganishda ichki kuchlar ish bajarmasligi ahamiyatga ega.
            </p>
          </li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">
          Misol:
        </h3>
        <p className="mb-4">
          9.10-masala. Shaklda uchta jismdan tashkil topgan mexanik sistema berilgan. 1-tishli gʻildirakning radiusi <InlineMath math={"r = 0.1 \, \text{m}"} /> boʻlib, aylanish oʻqiga nisbatan inersiya momenti <InlineMath math={"I_1 = 0.1 \, \text{kg} \cdot \text{m}^2"} />, 2-reyka va 3-yukning umumiy massasi <InlineMath math={"m = 100 \, \text{kg}"} />. Sistema boshlangʻich holatda tinch boʻlib, reyka <InlineMath math={"s = 0.2 \, \text{m}"} /> surilganda uning tezligi aniqlansin.
        </p>
        <div className="text-center py-6">
          <img
            src={image9_19}
            alt="Qattiq jismning tekis parallel harakati"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>

        <h4 className="text-lg font-semibold mt-6 mb-2">
          Yechish:
        </h4>
        <p className="mb-4">
          Mexanik sistema 1-tishli gʻildirak, 2-reyka va 3-yuklardan tashkil topgan. Boshlangʻich holatda tinch turgani uchun kinetik energiyaning oʻzgarishi haqidagi teoremaning <InlineMath math={"T = A^e"} /> koʻrinishidan foydalanamiz.
        </p>
        <p className="mb-4">
          Reyka <InlineMath math={"s = 0.2 \, \text{m}"} /> surilgandagi sistema kinetik energiyasini aniqlaymiz:
        </p>
        <p className="mb-4">
          <InlineMath math={"T = T_1 + T_2"} />
        </p>
        <p className="mb-4">
          <InlineMath math={"T_1"} /> tishli gʻildirakning qoʻzgʻalmas oʻq atrofida aylanma harakatidagi kinetik energiya boʻlib, <InlineMath math={"T_1 = \\frac{1}{2} I_1 \\omega^2"} /> formuladan aniqlanadi. 2 va 3 jismlarni birgalikdagi ilgarilanma harakatdagi jism deb qarash mumkin, ularning kinetik energiyasini <InlineMath math={"T_2"} /> bilan belgilasak, <InlineMath math={"T_2 = \\frac{1}{2} m v_C^2"} /> formuladan aniqlanadi. Tishli gʻildirak bilan reyka tegib turgan nuqtalarning tezliklari bir xil boʻlgani uchun <InlineMath math={"v_C = \\omega r"} />, <InlineMath math={"\\omega = \\frac{v_C}{r}"} /> deyish mumkin. Bularni formulaga qoʻyib, sistema kinetik energiyasini hisoblaymiz:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"T = \\frac{1}{2} I_1 \\left(\\frac{v_C}{r}\\right)^2 + \\frac{1}{2} m v_C^2 = \\frac{1}{2} v_C^2 \\left(\\frac{I_1}{r^2} + m\\right) = \\frac{1}{2} v_C^2 (0.1/0.01 + 100) = 55 v_C^2"} />
        </div>

        <p className="mb-4">
          <InlineMath math={"G_2"} /> reyka bilan yukning birgalikdagi ogʻirlik kuchi ish bajaradi, uni hisoblaymiz:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"A^e = F_e \cdot s = G_2 \cdot s = m g s = 100 \\cdot 9.81 \\cdot 0.2 = 196.2"} />
        </div>

        <p className="mb-4">
          Aniqlangan sistema kinetik energiyasi miqdori bilan kuchlarning bajargan ishini tenglashtirsak, <InlineMath math={"55 v_C^2 = 196.2"} /> hosil boʻladi. Bundan reykaning tezligini aniqlaymiz:
        </p>
        <p className="mb-4">
          <InlineMath math={"v_C = \\sqrt{\\frac{196.2}{55}} = \\sqrt{3.566} \\approx 1.89 \, \\text{m/s}"} />
        </p>


      </div>
    </>
  );
};

export default MexanikOzgarish910; 