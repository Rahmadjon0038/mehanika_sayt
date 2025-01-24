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
import NavigationButtons from "../home/ArrowButtons";

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
          <p className="mb-4 text-blue-500">
            Umumiy holda, ta’sirning aks ta’sirga tenglik aksiоmasiga ko’ra jism bоg’lanishga qanday kuch bilan ta’sir qilsa, bоg’lanishlar ham jismga shunday kuch bilan aks  ta’sir ko’rsatadi. Bоg’lanish jism harakatini qaysi tоmоndan cheklasa, reaksiya kuchi shunga qarama-qarshi yo’nalgan bo’ladi.
          </p>
          <p className="mb-4">
            Quyida bоg’lanishning asоsiy turlari bilan tanishib chiqamiz. Agar jism silliq tekislikka tayanib turgan bo’lsa, bog’lanish reaksiya kuchi jismning tekislikka tegib turgan nuqtasiga qo’yilgan bo’lib, tekislikning normali bo’ylab yo’naladi.
          </p>

          <div className="text-center my-6">
            <img src={image1_28} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
          </div>
          <div className="text-center my-6">
            <img src={image1_29} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
          </div>







          <p className="mb-4">
            Ularga <b>normal reaksiya kuchlari</b> deyiladi. Odatda
            <InlineMath math="\vec{N}" /> harfi bilan belgilanadi (<b>1.28 a, b- shakl</b>).
          </p>
          <div className="text-center my-6">
            <img src={image1_28} alt="Normal reaksiya kuchlari" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
          </div>

          <p className="mb-4">
            Agar tegishib turgan sirtlar silliq bo’lmasa, normal reaksiya kuchidan tashqari urinma bo’ylab yo’nalgan kuch ham hosil bo’ladi.
            Bu kuchga <InlineMath math="\vec{F}" /> (<b>ishqalanish kuchi</b>) deyiladi (<b>1.29 a, b - shakl</b>).
          </p>
          <div className="text-center my-6">
            <img src={image1_29} alt="Ishqalanish kuchlari" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
          </div>

          <p className="mb-4">
            Agar jism cho’zilmaydigan arqonlar yordamida bog’langan bo’lsa, reaksiya kuchlari arqonlar bo’ylab yo’naladi.
            Ularga <b>taranglik kuchlari</b> deyiladi. <InlineMath math="\vec{T}" /> harfi bilan belgilanadi (<b>1.30 - shakl</b>).
          </p>
          <div className="text-center my-6">
            <img src={image1_30} alt="Taranglik kuchlari" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
          </div>

          <p className="mb-4">
            Agar jism qo’zg’aluvchi sharnirli tayanchda turgan bo’lsa, bog’lanishda hosil bo’ladigan qarshilik kuchi sharnir turgan
            tekislikka perpendikulyar ravishda yo’nalgan bo’ladi (<b>1.31 - shakl</b>).
          </p>
          <div className="text-center my-6">
            <img src={image1_31} alt="Qo’zg’aluvchi sharnirli tayanch" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
          </div>

          <p className="mb-4">
            Agar jism qo’zg’almas sharnir yordamida mahkamlangan bo’lsa, jismga ta’sir qiluvchi kuchlar sistemasining reaksiya kuchlari
            z va y o’qlaridagi proeksiyalari orqali aniqlanadi.
            <InlineMath math="\vec{R}_{AZ}" />, <InlineMath math="\vec{R}_{AY}" /> (<b>1.32 – shakl</b>).
          </p>
          <div className="text-center my-6">
            <img src={image1_32} alt="Qo’zg’almas sharnir" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
          </div>

          <p className="mb-4">
            Agar ta’sir qiluvchi kuchlar sistemasi fazoda joylashgan bo’lsa, qo’zg’almas sharnir reaksiya kuchi ham fazoda joylashadi,
            yo’nalishi noma’lum bo’lganligi uchun uni ham fazodagi Dekart koordinata o’qlaridagi tashkil etuvchilari orqali aniqlanadi:
            <InlineMath math="\vec{R}_{AX}, \vec{R}_{AY}, \vec{R}_{AZ}" /> – lar
            A nuqtadagi qo’zg’almas sharnirli tayanch reaksiya kuchining
            <InlineMath math="x, y, z" /> o’qlaridagi proeksiyalari deyiladi (<b>1.33-shakl</b>).
          </p>
          <div className="text-center my-6">
            <img src={image1_33} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
          </div>
          <p className="mb-4">
            <b>1.34-shaklda</b> jismning A nuqtasidagi bog’lanish podshipnik (turum) deyiladi.

            <div className="text-center my-6">
              <img src={image1_34} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
            </div>
            Reaksiya kuchlari fazoda <InlineMath math="\vec{R}_{AX}, \vec{R}_{AY}, \vec{R}_{AZ}" /> orqali aniqlanadi.
            B nuqtadagi bog’lanishda esa, z o’qi bo’ylab harakatga qarshilik yo’q va reaksiya kuchlari xy tekisligida bo’ladi:
            <InlineMath math="\vec{R}_{BX}, \vec{R}_{BY}" />.
          </p>

          <p className="mb-4">
            Agar BC balkaning B uchi devorga qistirib mahkamlangan va ta’sir etuvchi kuchlar tekislikda yotsa,
            <InlineMath math="\vec{R}_{BX}, \vec{R}_{BY}" /> reaksiya kuchlaridan tashqari aylanishga qarshilik ko’rsatuvchi moment <InlineMath math="m" /> hosil bo’ladi (<b>1.35-shakl</b>).
          </p>
          <div className="text-center my-6">
            <img src={image1_35} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
          </div>
          <p className="mb-4">
            Jism sterjen bilan sharnirlar orqali bog’langan bo’lsa, sterjenlarda hosil bo’ladigan zo’riqish kuchlari sterjen bo’ylab yo’nalgan bo’ladi.
            Ularga sterjenlarning zo’riqish kuchlari deyiladi va odatda
          </p>
          <div className="text-center my-6">
            <img src={image1_36} alt="Kuch ta'sir chizig'i" className="mx-auto shadow-lg sm:w-3/5 lg:w-1/3" />
          </div>

          <p className="mb-4">
            Odatda <InlineMath math="\vec{S}" /> harfi bilan belgilanadi.
            Shaklda <InlineMath math="\vec{S}_A, \vec{S}_B, \vec{S}_C" /> lar
            A, B, C nuqtalaridagi sterjenlarning zo’riqish kuchlari (<b>1.36-shakl</b>).
          </p>

          <p className="mb-4">
            Jismga ta’sir qiluvchi, bog’lanishlarga bog’liq bo’lmagan kuchlar **aktiv kuchlar** yoki **berilgan kuchlar** deyiladi.
            Bog’lanishlarning reaksiya kuchlari esa **passiv kuchlar** yoki **reaksiya kuchlari** deyiladi.
          </p>

          <p className="mb-4">
            Mexanika masalalarini yechishda, bog’lanishdagi jismni bog’liqligidan ozod qilib, bog’lanish ta’sirini reaksiya kuchi bilan almashtirib,
            aktiv va passiv kuchlar ta’siridagi **erkin jism** deb qaraladi.
          </p>
         
        </div>
      </div>
    </>
  );
}

export default ConnectionsAndReactions;
