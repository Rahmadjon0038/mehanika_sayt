import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
// Agar rasm kerak bo'lsa, quyidagi chiziqni yoqing va rasmni to'g'ri yo'l bilan import qiling
// import image3_5 from '../../assets/bolim@2Image/image3_5.png';

const IshqalanishniHisobgaOlgandaMuvozanat = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    3.5– §. Ishqalanishni hisobga olganda qattiq jismlar sistemasining muvozanatini tekshirish
                </h2>

                <h3 className="text-xl font-semibold mb-2">Sirpanishdagi ishqalanish</h3>
                <p className="mb-4">
                    Jism biror <span className="font-semibold">g’adir-budir sirt</span> bo’ylab harakatlanganda, jism bilan sirtning tegib turgan qismida
                    sirpanib harakatlanishiga qarshilik qiluvchi kuch hosil bo’ladi.
                </p>

                <p className="mb-4">
                    Agar silindrsimon <span className="font-semibold">g’ildirak (katok)</span> biror sirt ustida dumalab harakatlansa, sirpanib
                    ishqalanishdan tashqari, bosim tufayli sirtning ezilishi (<span className="font-semibold">deformatsiyasi</span>) natijasida g’ildirakning dumalashiga qarshilik qiluvchi
                    <span className="font-semibold">juft kuch</span> hosil bo’ladi.
                </p>

                <p className="mb-4">
                    Quyida jismning sirpanishiga qarshilik qiluvchi kuchni va dumalashiga qarshilik qiluvchi juft kuchni aniqlash masalalarini ko’rib chiqamiz.
                </p>

                <p className="mb-4">
                    Agar ikkita <span className="font-semibold">I</span> va <span className="font-semibold">II</span> jismlar <InlineMath math={`3.12`} />-shakldagidek <InlineMath math={`A`} /> nuqtasida bir-biriga tegib turса, <span className="font-semibold">II</span> jism tomanidan <span className="font-semibold">I</span> jismga qo’yilgan
                    <span className="font-semibold"> RA </span> reaksiya kuchini o’zarо perpendikulyar yo’nalgan ikkita tashkil etuvchiga ajratish mumkin: <span className="font-semibold">NA</span> - tegib turgan sirtlarning umumiy normali boʻyicha yo’nalgan normal reaksiya kuchi va <span className="font-semibold">FA</span> - urinma tekislikda yotuvchi kuch.
                </p>

                <p className="mb-4">
                    <span className="font-semibold">FA</span> - kuch <span className="font-semibold">I</span> jismning <span className="font-semibold">II</span> jism ustida sirpanishga qarshilik ko’rsatgani uchun
                    <span className="font-semibold">FA</span> - kuch <span className="font-semibold">ishqalanish kuchi</span> deyiladi.
                </p>

                <p className="mb-4">
                    Ta’sirning aks ta’sirga tenglik aksiomasi asosida <span className="font-semibold">I</span> jism ham <span className="font-semibold">II</span> jismga miqdori <span className="font-semibold">RA</span> ning
                    miqdoriga teng, yo’nalishi qarama-qarshi boʻlgan kuch bilan ta’sir qiladi. Bu kuchning normal tashkil etuvchisiga <span className="font-semibold">normal bosim kuchi</span> deyiladi. Demak, normal bosim kuchi normal reaksiya kuchiga miqdor jihatidan teng, yo’nalishi jihatidan qarama-qarshi boʻladi (<InlineMath math={`3.16`} /> - shakl).
                </p>

                <h3 className="text-xl font-semibold mb-2">Nazariy mexanikada ishqalanish</h3>
                <p className="mb-4">
                    Nazariy mexanikada jismlar orasidagi quruq sirpanib ishqalanish, ya’ni, ishqalanuvchi sirtlar yo’g’lanmagan holatdagi ishqalanish o’rganiladi.
                </p>
                <p className="mb-4">
                    Jismning tinch holatidagi sirpanib ishqalanishi qaralsa, bunda ishqalanish kuchi faqat ta’sir qilayotgan
                    <span className="font-semibold">aktiv kuchlarga bog’liq</span> bo’ladi. Ya’ni, berilgan kuchlarning
                    <span className="font-semibold">urinma o’qdagi proeksiyalarining yig’indisi</span> ko’rinishda ishqalanish kuchining miqdorini
                    aniqlash mumkin.
                </p>

                <p className="mb-4">
                    <span className="font-semibold">Ishqalanish kuchi:</span> <InlineMath math={`F_{ishqalanish} = F_{k\\tau}`} />
                </p>

                <p className="mb-4">
                    <span className="font-semibold">Normal reaksiya kuchi:</span> <InlineMath math={`N = F_{kn}`} />
                </p>

                {/* Agar siz ushbu bo'lim uchun yechim yoki qo'shimcha formulalar qo'shmoqchi bo'lsangiz, ularni shu yerga qo'shing */}

                {/* Agar rasm kerak bo'lsa, quyidagi divni yoqing */}
                {/*
                <div className="text-center py-6">
                    <img
                        src={image3_5}
                        alt="Ishqalanish kuchlari diagrammasi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                */}
            </div>
        </>
    );
};

export default IshqalanishniHisobgaOlgandaMuvozanat;