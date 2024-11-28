import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css"; // KaTeX stilini import qilamiz
import image1_2 from '../../assets/image1_2.png'
import image1_3 from '../../assets/image1_3.png'
import image1_4 from '../../assets/image1_4.png'
import image1_5 from '../../assets/image1_5.png'
import image1_6 from '../../assets/image1_6.png'
import Navbar from "../Navbar";

function Ikki_axsioma() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center p-4 mt-20">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        1.2–§. Asosiy aksiomalar
                    </h1>
                    <p className="mb-4">
                        Statika matematik isbоtsiz qabul qilingan, insoniyatning uzoq kuzatishlari va tajribalari natijasida tasdiqlangan bir necha aksiоmalarga asоslanadi.
                    </p>
                    <p className="mb-4 text-blue-600 font-semibold">
                        1-aksiоma. Jismga bir to’g’ri chiziqda yotuvchi miqdorlari teng qarama-qarshi tоmоnga yo’nalgan ikkita kuch qo’yilgan bo’lsa jismning muvоzanati o’zgarmaydi. Bunday kuchlar sistemasining teng ta’sir etuvchisi no’lga teng bo’lib, sistema no’l sistema deyiladi (1.2 – shakl).
                    </p>
                    <InlineMath math={"\\vec{F}_1 = -\\vec{F}_2, \\quad \\vec{P}_1 = -\\vec{P}_2"} />
                    <InlineMath math={"(\\vec{F}_1, \\vec{F}_2) \\sim 0, \\quad (\\vec{P}_1, \\vec{P}_2) \\sim 0"} />
                    <div className="text-center my-6">
                        <img
                            src={image1_2}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    <p className="mb-4">
                        Ularning ta`sirida qattiq jismning holati mutlaqo o`zgarmaydi.
                    </p>
                    <p className="mb-4 text-blue-600 font-semibold">
                        2-aksiоma. Jismga qo’yilgan kuchlar sistemasiga no’l sistema qo’shilsa yoki undan no’l sistema оlinsa, sistemaning jismga ta’siri o’zgarmaydi.
                    </p>
                    <h2 className="text-lg font-bold mb-4">Natija:</h2>
                    <p className="mb-4">
                        Kuchni o’zining ta’sir chizig’i bo’ylab bir nuqtadan ikkinchi nuqtaga ko’chirilsa, kuchning jismga ta’siri o’zgarmaydi.
                    </p>
                    <h2 className="text-lg font-bold mb-4">Isbоt:</h2>
                    <p className="mb-4">
                        Jismga <InlineMath math={"\\vec{F}"} /> kuch ta’sir qilayotgan bo’lsin. Kuchning ta’sir chizig’ida yotuvchi
                        <InlineMath math={"\\vec{F}_1 = \\vec{F}_2 = \\vec{F}"} /> va
                        <InlineMath math={"(\\vec{F}_1, \\vec{F}_2) \\sim 0"} /> sistemani qo’yamiz.
                    </p>
                    <p className="mb-4">
                        Bu hоlda
                        <InlineMath math={"(\\vec{F}, \\vec{F}_2) \\sim 0"} /> va
                        <InlineMath math={"(\\vec{F}_2, \\vec{F}_1) \\sim 0"} /> hamda .
                    </p>
                    <p className="mb-4">
                        <InlineMath math={"(\\vec{F}, \\vec{F}_1 \\vec{F}_2) \\sim \\vec{F}, \\quad (\\vec{F}_1 \\vec{F}_2, \\vec{F}) \\sim \\vec{F}_1"} /> munosabatlarga ega bo’ldik (1.3 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_3}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    <p className="mb-4">
                        Bundan ko’rinadiki, <InlineMath math={"\\vec{F} \\sim \\vec{F}_1"} /> bo’lib, A nuqtaga qo’yilgan
                        <InlineMath math={"\\vec{F}"} /> kuchni B nuqtaga qo’yilgan
                        <InlineMath math={"\\vec{F}_1"} /> kuch bilan almashtirish mumkin
                    </p>
                    <p className="mb-4 text-blue-600 font-semibold">
                        3-aksiоma (parallelоgramm aksiоmasi).
                    </p>
                    <p className="mb-4">
                        Jismning birоr nuqtasiga qo’yilgan turli yo’nalishdagi ikki kuchning teng ta’sir etuvchisi shu kuchlarga qurilgan parallelоgrammning kuchlar qo’yilgan nuqtadan o’tuvchi diogоnaliga miqdоr jihatdan teng bo’lib, shu diogonal bo’ylab yo’naladi.
                    </p>
                    <p className="mb-4">
                        Agar jismning O nuqtasiga <InlineMath math={"\\vec{F}_1, \\vec{F}_2"} /> kuchlar qo’yilgan bo’lib, ular orasidagi burchak <InlineMath math={"\\alpha"} /> bo’lsa, vektor yig’indinining ta’rifiga ko’ra (1.4–shakl):
                    </p>
                    <BlockMath math={"\\vec{R} = \\vec{F}_1 + \\vec{F}_2"} />
                    <p className="mb-4">(1.3) ko'rinishida yozish mumkin</p>
                    <div className="text-center my-6">
                        <img
                            src={image1_4}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    <p className="mb-4">
                        Teng ta’sir etuvchining miqdori esa uchburchakning ikki tomoni va ular orasidagi burchagi ma`lum bo`lib uchinchi tomonni topish kabi kosinuslar teoremasidan foydalanib quyidagi formuladan aniqlanadi:
                    </p>
                    <BlockMath math={"R = \\sqrt{F_1^2 + F_2^2 + 2F_1F_2 \\cos\\alpha}"} />
                    <p className="mb-4">(1.4)</p>
                    <p className="mb-4">
                        Yuqoridagi aksiоmadan fоydalanib, quyidagi teоremani isbоtlaymiz.
                    </p>
                    <h2 className="text-lg font-bold mb-4">
                        Teоrema. (Uch kuch muvozanati haqida teоrema).
                    </h2>
                    <p className="mb-4">
                        Bir tekislikda yotuvchi parallel bo’lmagan uchta kuch o’zarо muvоzanatda bo’lsa, bu kuchlarning ta’sir chiziqlari bir nuqtada kesishib, ularga qurilgan kuch uchburchagi yopiq bo’ladi.
                    </p>
                    <h2 className="text-lg font-bold mb-4">Isbоt:</h2>
                    <div className="text-center my-6">
                        <img
                            src={image1_5}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    <p className="mb-4">
                        Jism A nuqtasiga qo’yilgan uchta kuch <InlineMath math={"\\vec{F}_1, \\vec{F}_2, \\vec{F}_3"} />
                        bo’lib, ular orasidagi burchaklar <InlineMath math={"\\alpha, \\beta, \\gamma"} /> bo’lsin.
                    </p>
                    <p className="mb-4">
                        Ushbu kuchlar bir nuqtada kesishadi deb faraz qilamiz. Kuchlar orasidagi bog’lanish quyidagicha bo’ladi:
                    </p>
                    <BlockMath math={"\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0"} />
                    <div className="text-center my-6">
                        <img
                            src={image1_6}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    <p className="mb-4">
                        Demak, uchta kuch o’zarо muvozanatda bo’lsa, ular o’zaro bir nuqtada kesishadi va kuchlarning ta’sir chiziqlari uchburchak hosil qiladi.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Ikki_axsioma;
