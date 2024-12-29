import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Agar Navbar komponentingiz bo'lsa
import "katex/dist/katex.min.css";
import image3_17 from '../../assets/bolim@3image/image3_17.png'; 

const IshqalanishKoeffitsientiTajriba = () => {
  return (
    <>
      <Navbar /> {/* Agar Navbar komponentingiz bo'lsa */}
      <div className="p-6 max-w-[1940px] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">
          3.7 – §. Ishqalanish koeffitsientini tajriba yo’li bilan aniqlash
        </h2>

        <p className="mb-4">
          Ishqalanish burchagi <InlineMath math="\phi" /> va sirpanishdagi
          ishqalanish koeffitsienti <InlineMath math="f" /> larni tajriba yo’li
          bilan aniqlash uchun gorizontga nisbatan qiyalik burchagini o’zgartirish
          mumkin bo’lgan qiya tekislikdan foydalaniladi. Tekislikning o’ng tomonini
          asta ko’tarib, ustidagi yuk harakatga kelishi arafasida to’xtatiladi.
        </p>

        <p className="mb-4">
          Qiya tekislikka qo’yilgan yukka <InlineMath math="G" /> og’irlik kuchi,{" "}
          <InlineMath math="N" /> tekislikning normal reaksiya kuchi, hamda{" "}
          <InlineMath math="F_{ishq}" /> kuchlarini shakldagi <InlineMath math="x" />{" "}
          va <InlineMath math="y" /> o’qlariga proyeksiyalab, muvozanat
          tenglamalarini tuzamiz (3.17 – shakl).
        </p>

        {/* Rasm */}
        <div className="text-center py-6">
             <img
                src={image3_17}
                alt="3.17-shakl"
                className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
            />
        </div>

        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <BlockMath
            math="\begin{cases}
                F_{kx} = 0; & F_{ishq} - G \sin \alpha = 0; \\
                F_{ky} = 0; & N - G \cos \alpha = 0.
            \end{cases}"
          />
        </div>

        <p className="mb-4">
          Tenglamadan quyidagilarni aniqlaymiz:
        </p>

        <div className="bg-gray-200 p-4 rounded-md mb-4">
          <BlockMath math="F_{ishq} = G \sin \alpha; \quad N = G \cos \alpha;" />
        </div>

        <p className="mb-4">
          Bu tengliklarni Kulon qonuni ifodasiga keltirib qo’yamiz:
        </p>
        
        <div className="bg-gray-200 p-4 rounded-md mb-4">
            <BlockMath math="F_{ishq} = fN, \quad G \sin \alpha = f G \cos \alpha, \quad \frac{G \sin \alpha}{G \cos \alpha} = f" />
        </div>
          <p className="mb-4">
            Ma’lumki, <InlineMath math="f = \tg\phi" />, demak, <InlineMath math="\tg\alpha = \tg\phi" /> bo’lib, <InlineMath math="\alpha" /> burchak ishqalanish burchagiga teng bo’lar ekan.
        </p>
        <p className="mb-4">
          Shakldagi <InlineMath math="h"/> va <InlineMath math="a"/> uzunliklarni o’lchash orqali <InlineMath math="\alpha"/> ni aniqlash mumkin, natijada:
        </p>
          
        <div className="bg-gray-200 p-4 rounded-md mb-4">
            <BlockMath math="\frac{h}{a} = \tg\alpha = f" />
        </div>
          
        <p className="mb-4">
        Yoki, shakldan transportir yordamida <InlineMath math="\alpha" /> burchakni o’lchab, <InlineMath math="\tg\alpha = f" /> ishqalanish koeffisiyentining qiymatini topish mumkin.
        </p>

      </div>
    </>
  );
};

export default IshqalanishKoeffitsientiTajriba;