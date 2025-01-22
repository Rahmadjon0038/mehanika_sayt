import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";
import image7_4 from '../../assets/bolim@7image/image7_4.png';

const ModdiyNuqataDiferensialteng74 = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1940px] mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-4 text-center">
          7.4 – §. Moddiy nuqtaning harakat differensial tenglamalari.
        </h2>
        <p className="mb-4">
          Aytaylik, <InlineMath math={"M"} /> moddiy nuqtaning, biror
          inersial sanoq sistemasiga nisbatan holatini qo’zg’almas{" "}
          <InlineMath math={"O"} /> nuqtaga qo’yilgan <InlineMath math={"\\vec{r}"} />{" "}
          radius vektor aniqlab bersin (7.4 – shakl). <div className="text-center py-6">
            <img
              src={image7_4}
              alt="3.18-shakl"
              className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
            />
          </div> Moddiy nuqta{" "}
          <InlineMath math={"\\vec{F_1}, \\vec{F_2}, \\dots, \\vec{F_n}"} /> kuchlar sistemasi
          ta’sirida harakatda bo’lsin. Dinamikaning asosiy qonuniga ko’ra
          ta’sir qiluvchi kuchlar bilan nuqtaning radius vektori orasidagi
          bog’lanishni keltirib chiqarish mumkin:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"m\\vec{a}=\\sum_{k=1}^{n}\\vec{F_k}"} />
        </div>
        <p className="mb-4">
          Bu tenglikka <InlineMath math={"\\vec{a}"} /> tezlanishning{" "}
          <InlineMath math={"\\vec{a}=\\frac{d^2\\vec{r}}{dt^2}"} /> ko’rinishdagi ma’lum
          ifodasini keltirib qo’ysak,
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"m\\frac{d^2\\vec{r}}{dt^2}=\\sum_{k=1}^{n}\\vec{F_k}"} />
        </div>
        <p className="mb-4">
          moddiy nuqta massasi, tezlanishi va ta’sir qiluvchi kuchlar
          orasidagi munosabatni ifodalovchi ikkinchi tartibli defferensial
          tenglama hosil bo’ladi. <span className="te">7.10 formulaga moddiy nuqta harakat
            defferensial tenglamasining vektor ifodasi deyiladi.  </span>  Bu vektor
          tenglamani turli xildagi koordinata o’qlariga proeksiyalab, mazkur
          formulaga ekvivalent bo’lgan differensial tenglamalar sistemasini
          hosil qilish mumkin. Xususan, Dekart koordinata o’qlariga
          proeksiyalasak quyidagi uchta skalyar defferensial tenglamalar
          sistemasini olamiz:

        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"m\\vec{a_x}=\\sum_{k=1}^{n}F_{kx}, \\quad m\\vec{a_y}=\\sum_{k=1}^{n}F_{ky}, \\quad m\\vec{a_{z}}=\\sum_{k=1}^{n}F_{kz}"} />
        </div>
        <p className="mb-4">
          Bu yerda <InlineMath math={"F_{kx}, F_{ky}, F_{kz}"} /> lar moddiy
          nuqtaga ta’sir qiluvchi kuchlar sistemasining koordinata
          o’qlaridagi proeksiyalarining yig’indilari hamda{" "}
          <InlineMath math={"\\vec{a_x}=\\ddot{x}, \\vec{a_y}=\\ddot{y}, \\vec{a_z}=\\ddot{z}"} />,
          tezlanishning koordinata o’qlaridagi proeksiyalari ekanligi
          hisobga olinsa (6.11) tengliklarni boshqacha ko’rinishi kelib
          chiqadi:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"m\\ddot{x}=\\sum_{k=1}^{n}F_{kx}, \\quad m\\ddot{y}=\\sum_{k=1}^{n}F_{ky}, \\quad m\\ddot{z}=\\sum_{k=1}^{n}F_{kz}"} />
        </div>
        <p className="mb-4 te">
          (6.12) tenglamalar sistemasi moddiy nuqta harakat differensial
          tenglamasining Dekart koordinata o’qlaridagi proeksiyalari
          deyiladi.
        </p>
        <p className="mb-4">
          Agar moddiy nuqta <InlineMath math={"Oxy"} /> tekisligida
          harakatlansa, harakat differensial tenglamasining{" "}
          <InlineMath math={"Ox"} /> va <InlineMath math={"Oy"} /> o’qlardagi
          proyeksiyalari mavjud bo’ladi:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"m\\ddot{x}=\\sum_{k=1}^{n}F_{kx}, \\quad m\\ddot{y}=\\sum_{k=1}^{n}F_{ky}"} />
        </div>
        <p className="mb-4">
          Agar moddiy nuqta to'g'ri chiziqli harakatda bo'lsa, uning shu
          to’g’ri chiziq bo’ylab yo’nalgan <InlineMath math={"Ox"} />{" "}
          o’qdagi harakat differensial tenglamasini quyidagicha yozish
          mumkin:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath math={"m\\ddot{x}=\\sum_{k=1}^{n}F_{kx}"} />
        </div>
        <p className="mb-4">
          (7.14) tenglamani <InlineMath math={"M\\tau nb"} /> tabiiy
          koordinata o’qlariga ham proeksiyalash mumkin:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={"m\\vec{a_{\\tau}}=\\sum_{k=1}^{n}F_{k\\tau}, \\quad m\\vec{a_n}=\\sum_{k=1}^{n}F_{kn}, \\quad m\\vec{a_b}=\\sum_{k=1}^{n}F_{kb}"}
          />
        </div>
        <p className="mb-4">
          bu yerda{" "}
          <InlineMath math={"\\vec{a_{\\tau}}=\\frac{dv}{dt}, \\vec{a_n}=\\frac{v^2}{\\rho}, \\vec{a_b}=0,"} />{" "}
          tezlanishning tabiiy koordinata o’qlaridagi proeksiyalari
          qiymatlaridan foydalansak:
        </p>
        <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
          <BlockMath
            math={
              "m\\frac{dv}{dt}=\\sum_{k=1}^{n}F_{k\\tau}, \\quad m\\frac{v^2}{\\rho}=\\sum_{k=1}^{n}F_{kn}, \\quad 0=\\sum_{k=1}^{n}F_{kb}"
            }
          />
        </div>
        <p className="mb-4">
          <InlineMath math={"\\rho"} /> - trayektoriyaning berilgan vaqtga
          mos keluvchi nuqtasidagi egrilik radiusi,{" "}
          <InlineMath math={"\\sum_{k=1}^{n}F_{kb} =0"} /> ekanligi harakatlanayotgan
          moddiy nuqta trayektoriyasi yopishma tekislikda bo’lib, tezlanish
          binormal o’qqa proyeksiya bermaydi. (7.15 ) <span className="te"> ifoda moddiy nuqta
            harakat defferensial tenglamasining tabiiy koordinatalar
            sistemasidagi proeksiyalari deyiladi.
          </span>
        </p>
      </div>
    </>
  );
};

export default ModdiyNuqataDiferensialteng74;
;

