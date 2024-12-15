import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Navbar componentasini import qilish
import "katex/dist/katex.min.css"; // KaTeX CSS import qilish
import image2_17 from '../../assets/bolim@2Image/image2_17.png';
import image2_18 from '../../assets/bolim@2Image/image2_18.png'; // Yangi rasm
import image2_19 from '../../assets/bolim@2Image/image2_19.png'; // Yangi rasm

const YangiMalumot = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.10-§. Oddiy shakilli, bir jinsli ba'zi jismlarning og‘irlik markazlarini aniqlash
                </h2>

                <h3 className="text-xl font-semibold mb-4">1. Uchburchak yuzasining og‘irlik markazi</h3>

                <p className="mb-4">
                    Yuzaga ega Oxy tekislikda ABD uchburchak berilgan bo‘lsin. Uning og‘irlik markazini topish uchun, avvalo, uchburchak yuzasini BD tomonga parallel kichik bo‘laklarga bo‘lib chiqamiz. Bu bo‘laklar har birining og‘irlik markazi uning o‘rtasida yotadi, har bir bo‘lak og‘irlik markazlarini tutashtirib chiqsak, bu chiziq uchburchakning BD tomoniga tushirilgan AE medianani bildiradi. Shu tarzda uchburchak yuzasini AD tomonga parallel bo‘laklarga ajratsak, ularning og‘irlik markazi BL medianada yotadi (2.17-shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image2_17}
                        alt="Uchburchak yuzasining og‘irlik markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Demak, uchburchak yuzasining og‘irlik markazi medianalari kesishgan nuqtaga yotadi.
                </p>

                <h3 className="text-xl font-semibold mb-4">2. Aylana yoyining og‘irlik markazi</h3>

                <p className="mb-4">
                    Radiusi r, markaziy burchagi 2α bo‘lgan ADB aylana yoyining og‘irlik markazini aniqlaymiz. Koordinatalar boshini aylananing markazi O nuqtada olib, Ox o‘qni AB vatarga perpendikulyar yo’naltiramiz, aylana yoyi Ox o‘qqa nisbatan simmetrik bo‘lgani uchun uning og‘irlik markazi x о‘qda yotadi. Demak, 2.18-shakldan y<sub>C</sub> = 0, y<sub>C</sub> = r cos α, dl = r dφ.
                </p>

                <div className="text-center py-6">
                    <img
                        src={image2_18}
                        alt="Aylana yoyining og‘irlik markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    l = 2rα ekanini e’tiborga olib, uzunlikka ega bo‘lgan jism og‘rilik markazini topish formulasini qo‘llaymiz. 2.35 formulaga ko‘ra
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`x = \\frac{\\int x \\, dl}{\\int dl} = \\frac{\\int_{-\\alpha}^{\\alpha} r^2 \\cos \\phi \\, d\\phi}{2r\\alpha} = \\frac{r \\sin \\alpha}{\\alpha} \\qquad (2.36)`} />
                </div>

                <p className="mb-4">
                    Xususiy holda, yarim aylana uchun α = π/2 desak,
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`x_C = \\frac{2r}{\\pi} \\approx 0.637 \\cdot r \\qquad (2.37)`} />
                </div>

                <h3 className="text-xl font-semibold mb-4">3. Doira sektori yuzasining og‘irlik markazi</h3>

                <p className="mb-4">
                    Radiusi r, markaziy burchagi 2α ga teng doira sektori yuzasining og‘irlik markazini aniqlash uchun Ox o‘qni sektor yuzasining simmetriya o‘qi bo‘ylab yo‘naltiramiz. 2.19-shaklda ko‘rsatilgandek sektor yuzasini bir qancha elementar sektorlardan tashkil topgan deb qaraymiz. Har bir elementar sektorning balandligi r ga teng uchburchak deb, qarasak, uning og‘irlik markazi O nuqtadan 2/3r masofada yotadi. Ya’ni doira sektori yuzasining og‘irlik markazi quyidagi formuladan aniqlanadi
                </p>

                <div className="text-center py-6">
                    <img
                        src={image2_19}
                        alt="Doira sektori yuzasining og‘irlik markazi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`x_C = \\frac{2}{3} r \\sin \\alpha \\qquad (2.38)`} />
                </div>

                <p className="mb-4">
                    Yarim doira uchun α = π/2 ekani nazarda tutilsa, uning og‘irlik markazi quyidagi formuladan aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`x_C = \\frac{4}{3\\pi} r \\approx 0.424 \\cdot r \\qquad (2.39)`} />
                </div>
            </div>
        </>
    );
};

export default YangiMalumot;