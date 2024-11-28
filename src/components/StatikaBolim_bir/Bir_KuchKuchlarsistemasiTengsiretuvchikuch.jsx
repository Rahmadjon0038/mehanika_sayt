import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import image1 from '../../assets/image1.png';
import Navbar from "../Navbar";

function MechanicsComponent() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center p-4 mt-20">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                    <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                        1.1–§. Kuch. Kuchlar sistemasi. Teng ta’sir etuvchi kuch.
                    </h1>

                    {/* Matn bo'limi */}
                    <p className="mb-4">
                        Mexanikaning asоsiy tushunchalaridan biri kuch tushunchasi. Biz buni kundalik tajribamizdan va tabiat xоdisalarini kuzatish orqali sezamiz.
                    </p>
                    <p className="mb-4">
                        Bir jismning ikkinchi jismga ta`sirini miqdor va yo’nalish jihatdan belgilovchi vektor kattalik <InlineMath math="F" /> deb ataladi.
                    </p>
                    <p className="mb-4">
                        Biror jism harakatga keltirilarkan, unga qo’yilgan kuch manbai boshqa jismda bo’lib, bularga harakatlantiruvchi yoki ta’sir etuvchi kuch deyiladi. (Og’irlik kuchi, shamolning ta’sir kuchi va h.k.)
                    </p>
                    <p className="mb-4">
                        Harakatlanuvchi jismning kuch manbaiga ta’siri aks ta’sir yoki qarshilik kuchi deyiladi.
                    </p>
                    <p className="mb-4">
                        <span className="text-blue-600 font-semibold">Kuchning jismga ta’siri:</span> 1) kuchning miqdоri, 2) kuchning yo’nalishi, 3) kuch qo’yilgan nuqta bilan aniqlanadi:
                    </p>
                    <p className="mb-4">
                        Jismning bevosita kuch qo’yilgan nuqtasi kuch qo’yilgan nuqta deyiladi.
                    </p>
                    <p className="mb-4">
                        1.1 – shaklda kuch A nuqtaga qo’yilgan.
                    </p>

                    {/* Rasm */}
                    <div className="text-center mb-6">
                        <img
                            src={image1}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2"
                        />
                    </div>

                    {/* Yangi qo'shilgan ma'lumotlar */}
                    <div className="mb-6">
                        <p className="text-lg">
                            Kuch vektori yotgan chiziq kuchning ta’sir chizig’i deyiladi. Shakldagi a to’g’ri chiziq – kuchning ta’sir chizig’ini bildiradi.
                        </p>
                    </div>

                    {/* Birliklar sistemasidagi izohlar */}
                    <p className="mb-4">
                        <span className="text-blue-600 font-semibold">Mexanikada asosan ikkita birliklar sistemasida ish ko`riladi:</span>
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li><span className="text-blue-600">Kuch birligi qilib texnik birliklar sistemasida 1 kGk (kilogramm kuch),</span></li>
                        <li><span className="text-blue-600">Xalqaro birliklar sistemasida 1 N (Nyuton) qabul qilingan.</span></li>
                    </ul>
                    <p className="mb-4">
                        Birliklar sistemasining biridan ikkinchisiga <InlineMath math="1 \, \text{kGk} = 9.8 \, \text{N}, \, 1 \, \text{N} = 0.102 \, \text{kGk}" /> munosabatlar orqali o’tish mumkin.
                    </p>
                    <p className="mb-4">
                        Kuchni katta o’lchov birliklari, kilonyuton (1 kN = <InlineMath math="10^3 \, \text{N}" />) yoki, tonna (1 T = <InlineMath math="10^3 \, \text{kGk}" />) larda ham o’lchash mumkin.
                    </p>
                    <p className="mb-4">
                        Kuch <InlineMath math="F" /> lotin alifbosining bosh harflari bilan belgilanadi. Misol uchun <InlineMath math="F \, \vec{}" /> kabi belgilasak uning modulini <InlineMath math="F" /> deb yoziladi.
                    </p>
                    <p className="mb-4">
                        Nazariy mexanikada faqat absolyut qattiq jismlar bilan ish ko’riladi, bundan keyin jism deb fikr yuritsak, absolyut qattiq jism deb tushunish kerak.
                    </p>
                    <p className="mb-4">
                        Biror jismga bir qancha kuchlar qo’yilgan bo’lsa, ularga kuchlar sistemasi deyiladi va <InlineMath math="(\vec{R}_1, \vec{R}_2, \dots, \vec{R}_n)" /> ko’rinishda yoziladi.
                    </p>
                    <p className="mb-4">
                        Berilgan <InlineMath math="(\vec{R}_1, \vec{R}_2, \dots, \vec{R}_n)" /> kuchlar sistemasining ta’sirini boshqa <InlineMath math="(\vec{Q}_1, \vec{Q}_2, \dots, \vec{Q}_k)" /> kuchlar sistemasi bilan almashtirish mumkin bo’lsa, bularga ekvivalent kuchlar sistemasiga deyiladi va quyidagicha yoziladi:
                    </p>
                    <BlockMath math="(\vec{R}_1, \vec{R}_2, \dots, \vec{R}_n) \sim (\vec{Q}_1, \vec{Q}_2, \dots, \vec{Q}_k) \quad \text{(1.1)}" />
                    <p className="mb-4">
                        Kuchlar sistemasining jismga ko’rsatadigan ta’sirini bitta, yagona kuch bilan almashtirish mumkin bo’lsa, bunday kuch teng ta’sir etuvchi deb ataladi, ya’ni <InlineMath math="\vec{R}" /> kuch <InlineMath math="(\vec{R}_1, \vec{R}_2, \dots, \vec{R}_n)" /> kuchlar sistemasining teng ta’sir etuvchisi
                    </p>
                    <BlockMath math="(\vec{R}_1, \vec{R}_2, \dots, \vec{R}_n) \sim \vec{R} \quad \text{(1.2)}" />
                    <p className="mb-4">
                        ko’rinishda yoziladi.
                    </p>

                   
                </div>
            </div>
        </>
    );
}

export default MechanicsComponent;
