import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Navbar componentasini import qilish
import "katex/dist/katex.min.css"; // KaTeX CSS import qilish
import image2_11 from '../../assets/bolim@2Image/image2_11.png'

const OgirlikMarkazi = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.7-§. Qattiq jismning og‘irlik markazi
                </h2>
                <p className="mb-4">
                    Samolyot, raketa, kosmik apparatlar, yerdagi, suvdagi transport vositalari harakatlari qaralayotganda ularning og‘irlik markazini bilish, hisobga olish, baland bino va inshootlar, ko‘priklar qurilishida ham mazkur arxitektura qurilmalarining og‘irlik markazini, simmetriya o‘qlarini hisobga olish katta ahamiyatga ega.
                </p>

                <p className="mb-4">
                    Bu paragrafda statika formulalaridan foydalanib, jismlarning og‘irlik markazini aniqlash masalalari ko‘riladi. Ma’lumki, biror qattiq jismning og‘irligini <InlineMath math={`\\vec{G}`} /> desak, u gorizontga perpendikulyar va yer markaziga qarab yo‘nalgan bo‘ladi.
                </p>

                <p className="mb-4">
                    Agar jism mayda bo‘laklardan tashkil topgan deb, bo‘lakchalar og‘irliklarini <InlineMath math={`\\vec{G_1}, \\vec{G_2},..., \\vec{G_n}`} /> desak, yerning radiusiga nisbatan jism bo‘lakchalari juda kichik bo‘lganidan, ularni o‘zaro parallel kuchlar sistemasi deb qarash mumkin. Jismning og‘irligi <InlineMath math={`G = \\sum G_k`} /> bo‘lib, mazkur kuch qo‘yilgan nuqta jismning og‘irlik markazi bo‘ladi (2.11-shakl).
                    <div className="text-center py-6">
                        <img
                            src={image2_11}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    Jismning og‘irlik markazini parallel kuchlar markazini aniqlash formulalaridan foydalanib, quyidagicha yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\vec{r_c} = \\frac{\\sum G_k\\vec{r_k}}{G}, \\quad \\begin{cases} x_c = \\frac{\\sum G_kx_k}{G} \\\\ y_c = \\frac{\\sum G_ky_k}{G} \\\\ z_c = \\frac{\\sum G_kz_k}{G} \\end{cases} \\qquad (2.22)`} />
                </div>

                <p className="mb-4">
                    Bu yerda x<sub>c</sub>, y<sub>c</sub>, z<sub>c</sub> lar jism og‘irlik markazining Dekart koordinatalar sistemasidagi koordinatalari. x<sub>k</sub>, y<sub>k</sub>, z<sub>k</sub> lar jism bo‘lakchalarining koordinatalari. Jismning og‘irlik markazi geometrik nuqtadan iborat bo‘lib, ba’zida bu nuqta jismga tegishli bo‘lmasligi ham mumkin.
                </p>

                <p className="mb-4">
                    Masalan, r<sub>1</sub> va r<sub>2</sub> radiusli silindrlar bilan chegaralangan chambarakning og‘irlik markazi silindr markazida joylashgan bo‘lib, chambarakka tegishli bo‘lmaydi.
                </p>

                <p className="mb-4">
                    Agar jism bir jinsli bo‘lsa, og‘irlik markazi uning qanday materialdan yasalganiga bog‘liq bo‘lmay, uning shakliga bog‘liq bo‘ladi.
                </p>
            </div>
        </>
    );
};

export default OgirlikMarkazi;