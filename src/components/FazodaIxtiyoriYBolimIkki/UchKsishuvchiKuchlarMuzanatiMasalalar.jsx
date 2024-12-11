import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Navbar componentasini import qilish
import "katex/dist/katex.min.css"; // KaTeX CSS import qilish
import image2_6 from '../../assets/image2_6.png'
import image2_7 from '../../assets/bolim@2Image/image2_7.png'
const KesishuvchiKuchlarMuvozanatTenglamalari = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1940px] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">
          2.3–§. Kesishuvchi kuchlar sistemasining muvozanatiga doir masalalar
        </h2>
        <p className="mb-4">
          Quyidagi masalani ko'rib chiqamiz:
        </p>

        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <h3 className="text-lg font-semibold">Masala: </h3>
          <p>Radiusi r=1 m, og'irligi P=40 kN bo‘lgan silindrsimon suv isitgich g‘isht devorning chiqiqlarida turadi. Uning og‘irligi devor bo‘ylab tekis taqsimlangan. Devorlar orasidagi masofa 1,6 m. Ishqalanishni hisobga olmay, A va B nuqtalarga tushadigan bosim aniqlansin.</p>
        </div>



        <div className="text-center py-6">
          <img
            src={image2_6}
            alt="Kuch ta'sir chizig'i"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <p className="mb-4">
          Yechish: Silindr, og'irlik markaziga qo'yilgan <InlineMath math={`\\vec{P}`} /> kuchi va g‘isht devor chiqiqlarining <InlineMath math={`\\vec{N_A}, \\vec{N_B}`} /> normal reaksiya kuchlari ta’sirida muvozanatda turibdi.
        </p>

        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <BlockMath math={`\\sum F_{kx} = 0, \\quad \\sum F_{ky} = 0`} />
        </div>

        <p className="mb-4">
          Shaklda r=1 m ekanligini hisobga olsak, <InlineMath math={`sin(\\alpha) = \\frac{0.8}{r} = 0.8`} /> va <InlineMath math={`cos(\\alpha) = \\frac{\\sqrt{1^2 - 0.8^2}}{1} = 0.6`} /> ni aniqlaymiz.
        </p>

        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <BlockMath math={`N_A = N_B = \\frac{P}{2 \\cos(\\alpha)} = \\frac{40}{2 \\times 0.6} = 33.3 \\text{ kN}`} />
        </div>

        <p className="mb-4">
          Demak, <InlineMath math={`N_A`} /> va <InlineMath math={`N_B`} /> qiymatlari 33.3 kN ga teng.
        </p>

        <p className="mb-4">
          Bu tenglamalar kesishuvchi kuchlar sistemasi uchun muvozanat shartlarini ta’minlaydi.
        </p>



        <h2 className="text-xl font-bold mb-4 ">
          2.2-masala
        </h2>
        <p className="mb-4">
          Q = 100 kN yukni AO brus va bir xil uzunlikdagi gorizontal BO va CO zanjirlar ushlab turadi. Brus A nuqtaga sharnir bilan biriktirilgan va gorizontga 45° burchak bilan oqqan. ∠CBO= ∠BCO=45°. Brusdagi zo’riqish va zanjirlarning taranglik kuchi topilsin (2.7-shakl).
        </p>
        <div className="text-center py-6">
          <img
            src={image2_7}
            alt="Kuch ta'sir chizig'i"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <h3 className="text-lg font-semibold mb-4">Yechish:</h3>

        <p className="mb-4">
          Berilgan Q yukning og’irligi O nuqtaga tushadi. Bu nuqta AO brus hamda BO va CO zanjirlar bilan bog’langan. Bog’lanishlarning ta’sirini kuchlar bilan almashtiramiz. AO brusning ta’sirini <InlineMath math={`\\vec{S}`} /> kuch bilan, BO va CO zanjirlar ta’sirini <InlineMath math={`\\vec{T_1}`} /> va <InlineMath math={`\\vec{T_2}`} /> reaksiya kuchlari bilan almashtiramiz. AO brus siqiladi, shu sababli brusning <InlineMath math={`\\vec{S}`} /> reaksiya kuchi A dan O ga qarab yo’nalgan, BO va CO zanjirlar esa tortilib turgani uchun ularning reaksiyalari (<InlineMath math={`\\vec{T_1}`} /> va <InlineMath math={`\\vec{T_2}`} />) O dan B ga va O dan C ga qarab yo’naladi. Demak <InlineMath math={`\\vec{Q}`} />, <InlineMath math={`\\vec{S}`} />, <InlineMath math={`\\vec{T_1}`} /> va <InlineMath math={`\\vec{T_2}`} /> lar fazoda joylashgan O nuqtada kesishuvchi kuchlar sistemasini tashkil qiladi. Bu kuchlar uchun muvozanat tenglamalari:
        </p>

        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <BlockMath math={`\\sum F_{kx} = 0, \\quad \\sum F_{ky} = 0, \\quad \\sum F_{kz} = 0`} />
        </div>



        <p className="mb-4">
          O<sub>1</sub>yz tekisligini <InlineMath math={`\\vec{Q}`} /> va <InlineMath math={`\\vec{S}`} /> yotgan tekislik bilan ustma-ust tushadigan qilib olib, shaklda ko’rsatilganidek, koordinata o’qlarini o’tkazamiz. Bu holda <InlineMath math={`\\vec{T_1}`} /> va <InlineMath math={`\\vec{T_2}`} /> kuchlar O<sub>1</sub>xy koordinata tekisligida yotadi. Kuchlarning proeksiyalarini o’qlarga tushirib muvozanat tenglamalarini yozamiz.
        </p>

        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <BlockMath math={`T_1 \\cos(45^\\circ) - T_2 \\cos(45^\\circ) = 0`} />
          <BlockMath math={`F_{ky} = S \\sin(45^\\circ) - T_1 \\sin(45^\\circ) - T_2 \\sin(45^\\circ) = 0`} />
          <BlockMath math={`F_{kz} = Q - S \\cos(45^\\circ) = 0`} />
        </div>

        <p className="mb-4">
          Ma’lum kattaliklarni tenglamalarga qo’yib noma’lumlarni aniqlaymiz:
        </p>

        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <BlockMath math={`S = 141 \\text{ N}, \\quad T_1 = T_2 = 71 \\text{ N}`} />
        </div>

      </div>
    </>
  );
};

export default KesishuvchiKuchlarMuvozanatTenglamalari;
