import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image3_15 from '../../assets/bolim@3image/image3_15.png';
import image3_16 from '../../assets/bolim@3image/image3_16.png';


const IshqalanishKonusi = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    3.6 – §. Ishqalanish konusi va ishqalanish burchagi
                </h2>

                <p className="mb-4">
                    Agar biror sirtda turgan jism aktiv kuchlar ta'sirida sirpanib harakatga kelish arafasida bo'lsa, sirtlar orasidagi ishqalanish kuchi maksimal qiymatiga erishadi.
                </p>

                <p className="mb-4">
                    Sirtning jismga ko'rsatayotgan reaksiya kuchi <InlineMath math="R_{max}" /> ham o'zining maksimal qiymatiga erishadi <InlineMath math="R_{max}" /> bilan <InlineMath math="N" /> normal reaksiya kuchi orasidagi <InlineMath math="\phi" /> burchak ishqalanish burchagi deyiladi (3.19 – shakl).
                </p>

                {/* Rasm */}


                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math="\phi = \frac{F_{max}}{N} = \frac{fN}{N} = f \quad (3.7)" />
                </div>

                <p className="mb-4">
                    bo'lib, quyidagicha o'qiladi:
                </p>
                <p className="pb-4 te">
                    Ishqalanish burchagining tangensi ishqalanish koeffitsiyentiga teng.
                </p>

                <p className="mb-4 te">
                    Jismni siljituvchi aktiv kuchlar turli yo'nalishlarda ta'sir etishi mumkin. Turli yo'nalishlardagi ta'sir kuchlarga mos ravishda <InlineMath math="R_{max}" /> reaksiya kuchining yo'nalishi o'zgarib turadi, uning barcha yo'nalishlar bo'yicha fazoda qoldirgan iziga ishqalanish konusi deyiladi.
                </p>

                <p className="mb-4">
                    Agar barcha yo'nalishlar uchun <InlineMath math="tg\phi" /> – ishqalanish koeffisienti bir xil bo'lsa, konus asosi aylanadan iborat bo'ladi. Tajribalarning ko'rsatishicha, yog'ochdan yasalgan jism yog'och ustida sirpanganda ishqalanish konusining asosi ellipsdan iborat bo'lar ekan.
                </p>

                <div className="text-center py-6">
                    <img
                        src={image3_15}
                        alt="Ishqalanish konusi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Agar ta'sir qiluvchi aktiv kuchlar bitta teng ta'sir etuvchi <InlineMath math="R_A" /> kuchga ega bo'lsa, teng ta'sir etuvchi kuchning normal reaksiya kuchi <InlineMath math="N" /> bilan tashkil qilgan burchagini <InlineMath math="\alpha" /> bilan belgilasak:
                </p>

                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math="\alpha = \phi_{max}" /> bo'lganda jism muvozanat chegarasida bo'ladi
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math="\alpha > \phi_{max}" /> bo'lsa, jism sirpana boshlaydi
                    </div>
                </div>

                <p className="mb-4">
                    Qo'zg'almas sirtga tayangan jism muvozanatda bo'lishi uchun bu jismga ta'sir etuvchi kuchlarning teng ta'sir etuvchisi ishqalanish konusidan tashqarida bo'lmasligi kerak.
                    <div className="mb-4">
                        <img
                            src={image3_16}
                            alt="Ishqalanish konusi"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    Jism muvozanatda bo'lganda <InlineMath math="R_A" /> teng ta'sir etuvchi kuchining ta'sir chizig'i ishqalanish konusi ichida, muvozanat chegarasida esa konus sirtida yotadi.
                </p >
            </div >
        </>
    );
};

export default IshqalanishKonusi;