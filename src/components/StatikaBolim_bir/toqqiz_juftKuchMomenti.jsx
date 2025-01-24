import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import image1_25 from '../../assets/image1_25.png';
import image1_26 from '../../assets/image1_26.png';
import image1_27 from '../../assets/image1_27.png';
import Navbar from "../Navbar";
import NavigationButtons from "../home/ArrowButtons";

function CoupleMoment() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center mt-10 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        1.9 – §. Juft kuch. Juft momenti
                    </h1>
                    <p className="mb-4">
                        O‘zaro parallel, qarama-qarshi yo‘nalgan, bir to‘g‘ri chiziqda yotmagan, miqdorlari teng ikkita kuch
                        juft kuch yoki juft deyiladi. <InlineMath math="(\vec{F}_1, \vec{F}_2)" />
                    </p>
                    <p className="mb-4">
                        Agar biror to‘g‘ri chiziqqa bu kuchlarni proyeksiyalab qo‘shsak nolga teng bo‘ladi.
                        Demak, kuchlarning teng ta’sir etuvchisi nolga teng, ya’ni bunday kuchlarni bitta kuch bilan almashtirish fikri ma’noga ega emas.
                        Juft tashkil qiluvchi kuchlarning yig‘indisi nolga teng bo‘lsa ham, ularning jismga ta’siri mavjud bo‘lib, mazkur kattalik jismni aylantirishga
                        harakat qiladi.
                    </p>
                    <p className="mb-4">
                        Aylantiruvchi kattalikni juft momenti tushunchasi bilan ifodalash mumkin. Juft kuch tushunchasi nazariy mexanikaning asosiy mustaqil tushunchalaridan biri hisoblanadi. Juftni tashkil qiluvchi kuchlarning ta’sir chiziqlari orasidagi eng qisqa masofa juft yelkasi deyiladi.
                    </p>
                    <p className="mb-4">
                        Shaklda <InlineMath math="d" /> masofa <InlineMath math="(\vec{F}_1, \vec{F}_2)" /> juftning yelkasi. Juft yotgan tekislik juft tekisligi deyiladi (1.25 – shakl)
                        <div className="text-center my-6">
                            <img
                                src={image1_25}
                                alt="Kuch ta'sir chizig'i"
                                className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                            />
                        </div>
                        Juft tashkil etuvchi kuchlardan biri bilan juft yelkasining ko‘paytmasiga juft momenti deyiladi va u vektor kattalik bo‘lib, juft yotgan tekislikka perpendikulyar yo‘naladi (1.26 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_26}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                        />
                    </div>
                    <BlockMath math="M = m(\vec{F}_1, \vec{F}_2) = \pm dF_1 = \pm dF_2" />
                    <p className="mb-4">(1.10) ko‘rinishda yoziladi.</p>
                    <p className="mb-4">
                        Juft momenti shartli ravishda jismni soat miliga teskari aylantirayotganday ko‘rinsa musbat, soat mili bo‘ylab aylantirayotganday ko‘rinsa manfiy deb qabul qilingan.
                        Birligi kuch momenti birligi bilan bir xil. Masalalarda juft momenti berilgan bo‘lsa, ularni shartli ravishda
                        <InlineMath math="(↺) m" /> kabi belgilanadi (1.27 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_27}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                        />
                    </div>
                    <p className="mb-4">
                        Juft momenti vektori sirpanuvchi vektor bo‘lib, juft yotgan tekislikning ixtiyoriy nuqtasiga qo‘yilgan deb hisoblash mumkin.
                        Juft momentining xossasini o‘rganish uchun juftni tashkil qiluvchi kuchlardan ixtiyoriy nuqtaga nisbatan olingan momentlar yig‘indisini hisoblaylik:
                    </p>
                    <p className="mb-4">
                        <InlineMath math="A" /> va <InlineMath math="B" /> nuqtalarga qo‘yilgan
                        <InlineMath math="\vec{F}_1" /> va <InlineMath math="\vec{F}_2" /> juft tashkil qiluvchi kuchlar hamda,
                        ixtiyoriy tanlangan <InlineMath math="O" /> nuqta berilgan bo‘lsin (1.27 – shakl).
                    </p>
                    <p className="mb-4">
                        U holda:
                        <InlineMath math="\vec{M}_0(\vec{F}_1) = [\vec{OA}, \vec{F}_1], \; \vec{M}_0(\vec{F}_2) = [\vec{OB}, \vec{F}_2]" />
                        lar hosil bo‘ladi.
                    </p>
                    <p className="mb-4">
                        Ularning yig‘indisi:
                    </p>
                    <InlineMath math="\vec{M}_0(\vec{F}_1) + \vec{M}_0(\vec{F}_2) = [\vec{OA}, \vec{F}_1] + [\vec{OB}, \vec{F}_2]" />
                    <p className="mb-4">
                        kelib chiqadi. Hamda:
                        <InlineMath math="\vec{F}_1 = -\vec{F}_2" />
                        ekanliklari hisobga olinsa:
                    </p>
                    <InlineMath math="\vec{M}_0(\vec{F}_1) + \vec{M}_0(\vec{F}_2) = [\vec{OA}, \vec{F}_1] - [\vec{OB}, \vec{F}_1] = [(\vec{OA} - \vec{OB}), \vec{F}_1]" />
                    <p className="mb-4">
                        Shakldan:
                        <InlineMath math="\vec{OA} - \vec{OB} = \vec{BA}" />
                        bo‘lib:
                    </p>
                    <InlineMath math="\vec{M}_0(\vec{F}_1) + \vec{M}_0(\vec{F}_2) = [\vec{BA}, \vec{F}_1]" />
                    <p className="mb-4">(1.11) kelib chiqadi.</p>

                    <p className="mb-4">
                        Demak, biror nuqtaga nisbatan juft tashkil qiluvchi kuchlardan olingan momentlarning yig‘indisi tanlangan nuqtaning holatiga bog‘liq emas.
                    </p>
                    <InlineMath math="[(\vec{BA}), \vec{F}_1]" />
                    <p className="mb-4">
                        vektor ko‘paytma juft momenti deyiladi va
                        <InlineMath math="\vec{M}(\vec{F}_1, \vec{F}_2)" />
                        deb belgilanadi. Demak:
                    </p>
                    <InlineMath math="\vec{M}(\vec{F}_1, \vec{F}_2) = [(\vec{BA}), \vec{F}_1] = [(\vec{AB}), \vec{F}_2]" />
                    <p className="mb-4">(1.12)</p>
                    <p className="mb-4">
                        (1.12) ifodaning o‘ng tomonini o‘zgartirib, hamda 2.13-shakldan foydalanib quyidagicha yozish mumkin:
                    </p>
                    <p className="mb-4">
                        Shunday qilib, juft momenti formulalari asosida, juft kuchlarning ta'sirini va jismni aylantirishga bo'lgan harakatini tushunish mumkin. Agar juft momenti zero bo'lsa, kuchlar bir to'g'ri chiziqda yotadi.
                    </p>
                    <p className="mb-4">
                        <InlineMath math="M (\vec{F}_1, \vec{F}_2 ) = |[(\vec{BA}) \vec{F}_1]| = |(\vec{BA}) ||\vec{F}_1| sin( (\vec{BA}, \vec{F}_1) ) = Fd" />
                    </p>
                    <p className="mb-4">
                        (1.13) va (1.12) formulalaridan muhim natijaga ega bo'lamiz:
                    </p>
                    <p className="mb-4">
                        Juft momenti tekislikka perpendikulyar bo'lib, miqdori juft kuchlardan biri va yelkaning ko'paytmasiga teng bo'ladi. Yo'nalishi juft kuch jismni soat miliga teskari aylantirayotgandek bo'ladi.
                    </p>
                    <p className="mb-4">
                        Juft momenti juft yotgan tekislikka perpendikulyar vektor kattalik bo’lib, miqdori juft tashkil qiluvchi kuchlardan biri bilan juft yelkasining ko’paytmasiga teng, yo’nalishi uchidan qaralganda, juft kuch jismni soat miliga teskari aylantirayotgandek ko’rinishida yo’naltiriladi.
                        Ta’rifdan ko’rinadiki, juft momenti erkin vektor bo’lib, qo’yilish nuqtasi aniqlanmagan. Juft momenti nolga teng bo’lishi uchun yelkasi    d=0    bo’lishi kerak, bu holda   F ⃗1   va   F ⃗2     kuchlar bir to’g’ri chiziqda yotadi va muvozanatlashuvchi kuchlar sistemasini tashkil qiladi.
                    </p>
                </div>
            </div>
        </>
    );
}

export default CoupleMoment;
