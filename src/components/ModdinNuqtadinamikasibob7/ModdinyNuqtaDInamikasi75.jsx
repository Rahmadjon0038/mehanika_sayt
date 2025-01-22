import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";

const ModdinyNuqtaDInamikasi75 = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1940px] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">
          7.5– §. Moddiy nuqta dinamikasining ikki asosiy masalasi.
        </h2>
        <p className="mb-4">
          Moddiy nuqta harakati o’rganilar ekan, albatta dinamikaning asosiy
          qonunidan kelib chiqqan, ta’sir qiluvchi kuch bilan harakat qonuni
          orasidagi bog’lanishni ifodalovchi harakat differensial
          tenglamasini yechish masalasi kelib chiqadi. Klassik mexanikada,
          moddiy nuqta massasi o’zgarmas va berilgan kattalik deb hisoblash
          mumkinligidan differensial tenglamalarda bir biriga bog’liq
          bo’lgan ikkita kattalik kuch va bu kuch ta’sirida nuqtaning qanday
          harakatlanishini bilish talab qilinadi.
        </p>
        <p className="mb-4">
          Masalaning qo’yilishiga qarab dinamikaning quyidagi ikkita asosiy
          masalasi kelib chiqadi. 
        </p>
        <p className="mb-4">
          <strong className="text-lg">
            1. Agar moddiy nuqta massasi bilan harakat qonuni berilgan bo’lib,
            shu harakatni yuzaga keltiruvchi kuchni topish talab etilsa, bunga
            dinamikaning birinchi asosiy masalasi deyiladi.
          </strong>
        </p>
        <p className="mb-4">
          <strong className="text-lg">
            2. Agar moddiy nuqta massasi bilan ta’sir qiluvchi kuch ma’lum
            bo’lib, nuqtaning harakat qonunini topish talab etilsa, bunga
            dinamikaning ikkinchi asosiy masalasi deyiladi.
          </strong>
        </p>
        <p className="mb-4">
          <span className="font-bold">Masalan.</span> Dinamikaning birinchi
          asosiy masalasini yechish uchun nuqtaning kinematik harakat
          tenglamalari qanday usulda berilishiga qarab, nuqtaning vektor,
          Dekart koordinatalaridagi yoki tabiiy o’qlardagi proyeksiyalari
          ko’rinishidagi harakat differensial tenglamalaridan foydalaniladi.
        </p>
        <p className="mb-4">
          Agar <InlineMath math={"m"} /> massali moddiy nuqtaning harakat
          qonuni vektor usulda berilgan bo’lsa, ya’ni{" "}
          <InlineMath math={"\\vec{r}= \\vec{r}(t)"} /> ma’lum bo’lsa, bu
          vektordan vaqt bo’yicha ikki marta hosila olinadi va (7.10)
          formuladan ta’sir qiluvchi kuch aniqlanadi.
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"\\vec{F}=m\\cdot\\frac{d^2\\vec{r}}{dt^2}"} />
        </div>
        <p className="mb-4">
          Agar moddiy nuqta harakat tenglamalari
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={"x= f_1(t), \\quad y= f_2(t), \\quad z= f_3(t)"}
          />
        </div>
        <p className="mb-4">
          koordinatalar usulida berilgan bo’lsa (7.12) formuladan ta’sir
          qiluvchi kuchning
          </p>
          <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
            <BlockMath math={"F_x=m\\ddot{x}, \\quad F_y=m\\ddot{y}, \\quad F_z=m\\ddot{z}"} />
          </div>
          <p className="mb-4">
          proyeksiyalari aniqlanadi. Natijada teng ta’sir etuvchining moduli
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"F= \\sqrt{ F_x^2+ F_y^2+F_z^2}"} />
        </div>
        <p className="mb-4">
          ko’rinishda va yo’naltiruvchi kosinuslari quyidagi formulalardan
          aniqlanadi:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={
              "\\cos( \\vec{F},\\vec{x})=\\frac{ F_x}{F}, \\quad \\cos( \\vec{F},\\vec{y})=\\frac{ F_y}{F}, \\quad \\cos( \\vec{F},\\vec{z})=\\frac{ F_z}{F}"
            }
          />
        </div>
      </div>
    </>
  );
};

export default ModdinyNuqtaDInamikasi75;
