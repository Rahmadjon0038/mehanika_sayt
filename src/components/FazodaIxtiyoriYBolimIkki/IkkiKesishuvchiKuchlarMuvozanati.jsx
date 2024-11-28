import React from "react";
import MathJax from "react-mathjax";
import Navbar from "../Navbar";

const KesishuvchiKuchlarMuvozanatTenglamalari = () => {
  return (
    <><Navbar/>
    <div className="p-6 max-w-[1940px] mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">2.2 – §. Kesishuvchi kuchlar sistemasining muvozanat tenglamalari</h2>
      <p className="mb-4">
        Bundan foydalanib, kesishuvchi kuchlar sistemasining geometrik muvozanat
        sharti quyidagicha o’qiladi va yoziladi.
      </p>
      <p className="text-blue-600 font-bold mb-4">
        Jism kesishuvchi kuchlar sistemasi ta’sirida muvozanatda bo’lishi uchun
        ularning teng ta’sir etuvchisi nolga teng bo’lishi zarur va yetarlidur.
      </p>
      <MathJax.Provider>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <MathJax.Node formula={`\\vec{R} = 0 \\quad \\text{yoki} \\quad \\sum \\vec{F}_k = 0`} />
        </div>
      </MathJax.Provider>
      <p className="mb-4">
        ya’ni, kuchlar sistemasiga qurilgan kuch ko’pburchagi yopiq bo’ladi.
      </p>
      <p className="mb-4">
        Kuchlar kesishgan nuqtani koordinata boshi deb,{" "}
        <MathJax.Provider>
          <MathJax.Node inline formula={`Oxyz`} />
        </MathJax.Provider>{" "}
        koordinata o’qlarini o’tkazamiz.{" "}
        <MathJax.Provider>
          <MathJax.Node inline formula={`(2.5)`} />
        </MathJax.Provider>{" "}
        ko’rinishdagi vektor modulini quyidagicha aniqlash mumkin:
      </p>
      <MathJax.Provider>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <MathJax.Node formula={`R = \\sqrt{(\\sum F_{kx})^2 + (\\sum F_{ky})^2 + (\\sum F_{kz})^2}`} />
        </div>
      </MathJax.Provider>
      <p className="mb-4">
        Bu yerda{" "}
        <MathJax.Provider>
          <MathJax.Node inline formula={`R = 0`} />
        </MathJax.Provider>{" "}
        bo’lishi uchun ildiz ostidagi qo’shiluvchilarning har biri alohida-alohida
        nolga teng bo’lishi zarur:
      </p>
      <MathJax.Provider>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <MathJax.Node
            formula={`\\begin{align*} 
\\sum F_{kx} &= F_{1x} + F_{2x} + \\dots + F_{nx} = 0, \\\\ 
\\sum F_{ky} &= F_{1y} + F_{2y} + \\dots + F_{ny} = 0, \\\\ 
\\sum F_{kz} &= F_{1z} + F_{2z} + \\dots + F_{nz} = 0.
\\end{align*}`}
          />
        </div>
      </MathJax.Provider>



      <p className="mb-4">
        <MathJax.Provider>
          <MathJax.Node inline formula="(2.7)" />
        </MathJax.Provider>{" "}
        tenglamalar sistemasi kesishuvchi kuchlar sistemasining analitik
        muvozanat sharti deyiladi va quyidagicha o’qiladi:
      </p>
      <p className="text-blue-600 font-bold mb-4">
        Kesishuvchi kuchlar ta’sirida jism muvozanatda bo’lishi uchun kuchlar
        sistemasining koordinata o’qlardagi proyeksiyalarining algebraik
        yig’indilari alohida-alohida nolga teng bo’lishi zarur va yetarlidir.
      </p>
      <MathJax.Provider>
      </MathJax.Provider>
      <p className="mb-4">
        Yoki quyidagicha ko’rinishda yozish mumkin:
      </p>
      <MathJax.Provider>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <MathJax.Node
            formula={`\\begin{align*} 
\\sum F_{kx} &= 0, \\\\ 
\\sum F_{ky} &= 0, \\\\ 
\\sum F_{kz} &= 0.
\\end{align*}`}
          />
        </div>
      </MathJax.Provider>
      <p className="mb-4">
        Kesishuvchi kuchlar bir tekislikda joylashgan bo’lsa, Ox va Oy
        koordinata o’qlarini mazkur tekislikda o’rnatilsa, uchinchisi ayniyatga
        aylanib ketadi va muvozanat tenglamalari quyidagicha bo’ladi:
      </p>
      <MathJax.Provider>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <MathJax.Node
            formula={`\\begin{align*} 
\\sum F_{kx} &= 0, \\\\ 
\\sum F_{ky} &= 0.
\\end{align*}`}
          />
        </div>
      </MathJax.Provider>
      <p className="mb-4">
        Bu tenglamalar tekislikda kesishuvchi kuchlar sistemasining muvozanat
        tenglamalari deyiladi. Muvozanat tenglamalari, berilgan kuchlar ta’sirida
        jismning muvozanat holatini tekshirish imkonini beradi.
      </p>
      <p className="mb-4">
        Tenglamalar sistemasi jismga qo’yilgan, yo’nalishi va qo’yilish nuqtasi
        ma’lum bo’lgan bog’lanish reaksiya kuchlarining miqdorini aniqlashda juda
        katta amaliy ahamiyatga ega.
      </p>
      <p className="text-blue-600 font-bold mb-4">
        Albatta, kesishuvchi kuchlar sistemasining muvozanat tenglamalaridan
        foydalanganda aniqlash lozim bo’lgan noma’lumlar soni va tenglamalar
        soni fazoda uchtadan, tekislikda ikkitadan ortiq bo’lmasligiga e’tibor
        berish kerak.
      </p>
      <p className="mb-4">
        Muvozanat tenglamalaridan foydalanib, noma’lumlarni aniqlashda quyidagi
        tartibda ish olib borish tavsiya etiladi:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>
          Muvozanati tekshirilayotgan jism alohida olib, ta’sir qilayotgan
          aktiv kuchlar shaklda tasvirlanadi.
        </li>
        <li>
          Jismni bog’lanishlardan ozod qilib, bog’lanish reaksiya kuchlari
          shaklda ko’rsatiladi.
        </li>
        <li>
          Koordinata o’qlarini tanlab, kuchlar sistemasining turiga qarab
          muvozanat tenglamalarining shu o’qlardagi proyeksiyalari tuziladi.
        </li>
        <li>Hosil bo’lgan tenglamalar sistemasidan noma’lumlar aniqlanadi.</li>
      </ul>
    </div>
    </>
  );
};

export default KesishuvchiKuchlarMuvozanatTenglamalari;
