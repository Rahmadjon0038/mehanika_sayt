import React from "react";
import { MathJax, MathJaxContext } from "react-mathjax";
import image2_4 from '../../assets/image2_4.png'
const KesishuvchiKuchlar = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h2 className="text-center text-2xl font-bold mb-4">
          2.3–§. Kesishuvchi kuchlar sistemasining muvozanatiga doir masalalar
        </h2>
        <h3 className="text-lg font-semibold">2.1-masala</h3>
        <p className="mt-4">
          Radiusi <b>r=1 m</b>, og’irligi <b>P=40 kN</b> bo’lgan silindrsimon suv
          isitgich g’isht devorning chiqiqlarida turadi. Uning o’g’irligi devor
          bo’ylab tekis taqsimlangan. Devorlar orasidagi masofa <b>1,6 m</b>.
          Ishqalanishni hisobga olmay <b>A</b> va <b>B</b> nuqtalarga tushadigan
          bosim aniqlansin (2.6 – shakl).
        </p>
        <h3 className="text-lg font-semibold mt-4">Yechish:</h3>
        <p className="mt-2">
          Silindr, og’irlik markaziga qo’yilgan{" "}
          <MathJaxContext>
            <MathJax.Node inline formula="P \vec{}" />
          </MathJaxContext>{" "}
          kuch va g’isht devor chiqiqlarining{" "}
          <MathJaxContext>
            <MathJax.Node inline formula="N \vec{}_A" />
          </MathJaxContext>
          ,{" "}
          <MathJaxContext>
            <MathJax.Node inline formula="N \vec{}_B" />
          </MathJaxContext>{" "}
          normal reaksiya kuchlari ta’sirida muvozanatda turibdi.
        </p>
        <p className="mt-2">
          <MathJaxContext>
            <MathJax.Node inline formula="N \vec{}_A" />
          </MathJaxContext>
          ,{" "}
          <MathJaxContext>
            <MathJax.Node inline formula="N \vec{}_B" />
          </MathJaxContext>{" "}
          kuchlar devor chiqiqlariga qo’yilgan bo’lib, silindr aylanasining ichki
          normali bo’ylab yo’nalgan bo’ladi. Bu kuchlar radius bo’ylab, aylana
          markazidan o’tadi (2.6 b – shakl).
        </p>
        <p className="mt-2">
          Demak,{" "}
          <MathJaxContext>
            <MathJax.Node inline formula="P \vec{}, N \vec{}_A, N \vec{}_B" />
          </MathJaxContext>{" "}
          kuchlar tekislikda kesishuvchi kuchlar sistemasini tashkil qiladi.
          Shuning uchun{" "}
          <MathJaxContext>
            <MathJax.Node inline formula="\sum F_{kx} = 0, \sum F_{ky} = 0" />
          </MathJaxContext>{" "}
          tenglamalardan foydalanib masalani echamiz.
        </p>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <MathJaxContext>
            <MathJax.Node formula={`\\begin{cases} N_A \\sin \\alpha - N_B \\sin \\alpha = 0, \\\\ N_A \\cos \\alpha + N_B \\cos \\alpha - P = 0. \\end{cases}`} />
          </MathJaxContext>
        </div>
        <p className="mt-4">
          Shaklda <b>r=1 m</b> ekanligini hisobga olsak:
          <MathJaxContext>
            <MathJax.Node inline formula="\sin \alpha = \\frac{0.8}{r} = 0.8" />
          </MathJaxContext>
          ,
          <MathJaxContext>
            <MathJax.Node inline formula="\cos \alpha = \\frac{\\sqrt{1^2 - 0.8^2}}{1} = 0.6" />
          </MathJaxContext>
          larni aniqlaymiz. Birinchi tenglamadan{" "}
          <MathJaxContext>
            <MathJax.Node inline formula="N_A = N_B" />
          </MathJaxContext>
          , ikkinchisidan{" "}
          <MathJaxContext>
            <MathJax.Node inline formula="N_A = \\frac{P}{2 \\cos \\alpha}" />
          </MathJaxContext>
          ,{" "}
          <MathJaxContext>
            <MathJax.Node inline formula="N_A = N_B = \\frac{P}{2 \\cos \\alpha} = 33.3 kN" />
          </MathJaxContext>
          .
        </p>
      </div>
    );
};

export default KesishuvchiKuchlar;
