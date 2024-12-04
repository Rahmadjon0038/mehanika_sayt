import React from "react";
import { BlockMath, InlineMath } from 'react-katex';
import Navbar from "../Navbar";
import image1_28 from '../../assets/image1_28.png';
import image1_29 from '../../assets/image1_29.png';
import image1_30 from '../../assets/image1_30.png';
import image1_31 from '../../assets/image1_31.png';
import image1_32 from '../../assets/image1_32.png';
import image1_33 from '../../assets/image1_33.png';
import image1_34 from '../../assets/image1_34.png';
import image1_35 from '../../assets/image1_35.png';
import image1_36 from '../../assets/image1_36.png';

function ConnectionsAndReactions() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center mt-20 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-[1940px] w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">
            1.10 – §. Bоg’lanish turlari va bоg’lanish reaksiyа kuchlari
          </h1>
          <p className="mb-4">
            Fazоda jismning harakatlanishiga xech qanday chek qo’yilmagan bo’lsa, bunday jism erkin jism deyiladi.
            Jismning harakatiga bоshqa bir jism tоmоnidan chek qo’yilgan bo’lsa, bunday jism bоg’lanishdagi jism deyiladi.
            Harakatni cheklоvchi sababga <b>bоg’lanish</b> deyiladi. Bog’lanishning jismga ta’sirini beruvchi kuchga <b>bоg’lanish reaksiya kuchi</b> deyiladi.
          </p>
          <p className="mb-4">
            Mexanikada bog’lanishdagi jismning harakatini, yoki muvozanatini o’rganish, erkin jismning harakati yoki muvozanatiga
            keltirib tekshiriladi. Buning uchun quyidagi aksiomadan foydalaniladi.
          </p>

          <h2 className="text-lg font-semibold mb-4">5-aksioma:</h2>
          <p className="mb-4">
            Agar bog’lanishdagi jismga ta’sir etuvchi berilgan kuchlar qatoriga bog’lanish reaksiya kuchlarini qo’shilsa, u erkin jismga aylanadi.
            Bu aksiomaga <b>bоg’lanishdan ozod qilish aksiomasi</b> deyiladi.
          </p>

          <p className="mb-4">
            Reaksiya kuchining yo’nalishini va qo’yilish nuqtasini oldindan bilish statika masalalarini yechishda katta ahamiyatga ega bo’lib,
            kuchning miqdorini analitik usullardan foydalanib aniqlash mumkin bo’ladi.
          </p>

          <h3 className="text-lg font-semibold mb-4">Normal reaksiya kuchlari</h3>
          <p className="mb-4">
            Agar jism silliq tekislikka tayanib turgan bo’lsa, bog’lanish reaksiya kuchi jismning tekislikka tegib turgan nuqtasiga qo’yilgan bo’lib,
            tekislikning normali bo’ylab yo’naladi.
            <InlineMath math={"\\vec{N}"} />
            <div className="text-center my-6">
              <img src={image1_28} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
            </div>
          </p>

          <p className="mb-4">
            Agar tegishib turgan sirtlar silliq bo’lmasa, normal reaksiya kuchidan tashqari urinma bo’ylab yo’nalgan kuch ham hosil bo’ladi.
            Bu kuchga <b>ishqalanish kuchi</b> deyiladi <InlineMath math={"\\vec{F}"} />
            <div className="text-center my-6">
              <img src={image1_29} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
            </div>
          </p>

          <h3 className="text-lg font-semibold mb-4">Taranglik kuchlari</h3>
          <p className="mb-4">
            Agar jism cho’zilmaydigan arqonlar yordamida bog’langan bo’lsa, reaksiya kuchlari arqonlar bo’ylab yo’naladi.
            Ularga taranglik kuchlari deyiladi.
            <InlineMath math={"\\vec{T}"} />
            <div className="text-center my-6">
              <img src={image1_30} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
            </div>
          </p>

          <h3 className="text-lg font-semibold mb-4">Qarshilik kuchlari</h3>
          <p className="mb-4">
            Agar jism qo’zg’aluvchi sharnirli tayanchda turgan bo’lsa, bog’lanishda hosil bo’ladigan qarshilik kuchi sharnir turgan tekislikka perpendikulyar ravishda yo’nalgan bo’ladi.
            <div className="text-center my-6">
              <img src={image1_31} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
            </div>
          </p>

          <h3 className="text-lg font-semibold mb-4">Qo’zg’almas sharnirli tayanch reaksiya kuchlari</h3>
          <p className="mb-4">
            Agar jism qo’zg’almas sharnir yordamida mahkamlangan bo’lsa, jismga ta’sir qiluvchi kuchlar sistemasi tekislikda yotsa, tayanch reaksiya kuchi ham shu tekislikda yotadi.
            <InlineMath math={"\\vec{R}_{AZ}, \\vec{R}_{AY}"} />
            <div className="text-center my-6">
              <img src={image1_32} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
            </div>
          </p>

          <h3 className="text-lg font-semibold mb-4">Dekart koordinatalari bo’yicha reaksiya kuchi</h3>
          <p className="mb-4">
            Agar ta’sir qiluvchi kuchlar sistemasi fazoda joylashgan bo’lsa, qo’zg’almas sharnir reaksiya kuchi ham fazoda joylashadi.
            <InlineMath math={"\\vec{R}_{AX}, \\vec{R}_{AY}, \\vec{R}_{AZ}"} />
            <div className="text-center my-6">
              <img src={image1_33} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
            </div>
          </p>

          <h3 className="text-lg font-semibold mb-4">Podshipnikli bog’lanish reaksiya kuchlari</h3>
          <p className="mb-4">
            1.34 - shaklda jismning A nuqtasidagi bo’g’lanish podshipnik (turum) yoki tovontagi bog’lanish deyiladi.
            <InlineMath math={"\\vec{R}_{AX}, \\vec{R}_{AY}, \\vec{R}_{AZ}"} />
            <div className="text-center my-6">
              <img src={image1_34} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
            </div>
          </p>

          <h3 className="text-lg font-semibold mb-4">Momentga qarshilik ko’rsatuvchi reaksiya kuchi</h3>
          <p className="mb-4">
            Agar BC balkaning B nuqtasidan bog’langan ikkita boshqa jismga tushadigan kuchlarning har biri momentga qarshilik ko’rsatsin, ularni <InlineMath math={"\\vec{N}_B"} />
            <div className="text-center my-6">
              <img src={image1_35} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default ConnectionsAndReactions;
