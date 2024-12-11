import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Navbar componentasini import qilish
import "katex/dist/katex.min.css"; // KaTeX CSS import qilish
import image2_10 from '../../assets/bolim@2Image/image2_9.png'

const ParallelKuchlarMarkazi = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.6-§. Parallel kuchlar markazi
                </h2>

                <p className="mb-4">
                    Bu paragrafda fazoda o‘zaro parallel, bir tomonga qarab yo’nalgan kuchlar sistemasining teng ta’sir etuvchiga keltirish va uning qo‘yilish nuqtasini aniqlash masalasi ko‘riladi. Bu holda, albatta, ta’sir etuvchi kuchlar noldan farqli deb qabul qilinadi va uning qo‘yilish nuqtasi uchun parallel kuchlar markazi degan tushuncha kiritiladi.
                </p>

                <p className="mb-4">
                    Aytaylik, jismning A<sub>1</sub>, A<sub>2</sub>,..., A<sub>n</sub> nuqtalariga bir tomonga qarab, o‘zaro parallel yo’nalgan <InlineMath math={`\\vec{F_1}, \\vec{F_2},..., \\vec{F_n}`} /> kuchlar sistemasi qo‘yilgan bo‘lsin.
                </p>

                <p className="mb-4">
                    Mazkur kuchlar sistemasining teng ta’sir etuvchisi <InlineMath math={`\\vec{R}`} /> kuchni va uning C qo‘yilish nuqtasini aniqlaymiz. Buning uchun Oxyz Dekart koordinatalar sistemasini o‘rnatamiz. Kuchlar qo‘yilgan A<sub>1</sub>, A<sub>2</sub>,..., A<sub>n</sub> nuqtalarning koordinata boshiga nisbatan radius vektorlarini <InlineMath math={`\\vec{r_1}, \\vec{r_2},..., \\vec{r_n}`} /> bilan belgilaymiz. Bir tomonga qarab yo‘nalgan o‘zaro parallel ikkita kuchni qo‘shish mavzusi 2.4-§ dagi (2.10) va (2.11) formulalarmda xulosalardan foydalanamiz (2.10-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image2_10}
                        alt="Kuch ta'sir chizig'i"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>


                <p className="mb-4">
                    Avvalo, <InlineMath math={`\\vec{F_1}`} /> va <InlineMath math={`\\vec{F_2}`} /> kuchlarni qo‘shamiz. Ularning modullarining yig‘indisi
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`R_1 = F_1 + F_2 \\qquad (2.14)`} />
                </div>

                <p className="mb-4">
                    C<sub>1</sub> qo‘yilish nuqtasini shakldan aniqlaymiz.
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\frac{F_1}{C_1A_2} = \\frac{F_2}{C_1A_1} \\quad \\text{yoki} \\quad \\frac{\\vec{A_1C_1}}{F_2} = \\frac{\\vec{C_1A_2}}{F_1} \\qquad (2.15)`} />
                    <BlockMath math={`\\vec{A_1C_1} = \\vec{r_{C1}} - \\vec{r_1}, \\quad \\vec{C_1A_2} = \\vec{r_2} - \\vec{r_{C1}} \\qquad (2.16)`} />
                </div>

                <p className="mb-4">
                    (2.16) ifodani (2.15) ga qo‘ysak, C<sub>1</sub> nuqtaning radius vektori kelib chiqadi.
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\frac{\\vec{r_{C1}} - \\vec{r_1}}{F_2} = \\frac{\\vec{r_2} - \\vec{r_{C1}}}{F_1} \\quad \\text{bundan} \\quad \\vec{r_{C1}} = \\frac{F_1\\vec{r_1} + F_2\\vec{r_2}}{F_1 + F_2} \\qquad (2.17)`} />
                </div>



                <p className="mb-4">
                    Endi C<sub>1</sub> nuqtaga qo‘yilgan <InlineMath math={`\\vec{R_1}`} /> kuch bilan <InlineMath math={`\\vec{F_3}`} /> kuchni qo‘shamiz. Bular ham o‘zaro parallel va bir tomonga yo‘nalganligi uchun quyidagi yig‘indi o‘rinli bo‘ladi:
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`R_2 = R_1 + F_3 = F_1 + F_2 + F_3`} />
                </div>

                <p className="mb-4">
                    uning qo‘yilish nuqtasi ham yuqoridagi (2.17) formulaga o‘xshash, shakldan foydalanib aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\vec{r_{C2}} = \\frac{R_1\\vec{r_{C1}} + F_3\\vec{r_3}}{R_1 + F_3} = \\frac{(F_1 + F_2)\\frac{F_1\\vec{r_1} + F_2\\vec{r_2}}{F_1 + F_2} + F_3\\vec{r_3}}{F_1 + F_2 + F_3}`} />
                    <p className="mt-2">yoki</p>
                    <BlockMath math={`\\vec{r_{C3}} = \\frac{F_1\\vec{r_1} + F_2\\vec{r_2} + F_3\\vec{r_3}}{F_1 + F_2 + F_3} \\qquad (2.18)`} />
                </div>

                <p className="mb-4">
                    Shu tarzda qo‘shishni davom ettirsak, C nuqtaga qo‘yilgan bitta
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`R = \\sum F_k \\qquad (2.19)`} />
                </div>

                <p className="mb-4">
                    kuchga ega bo‘lamiz. Uning qo‘yilish nuqtasi C nuqtaning radius vektori
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`\\vec{r_C} = \\frac{\\sum F_k\\vec{r_k}}{\\sum F_k} \\qquad (2.20)`} />
                </div>

                <p className="mb-4">
                    formuladan aniqlanadi.  C nuqtaga parallel kuchlar markazi deyiladi.
                </p>

                <p className="mb-4">
                    Agar Dekart koordinatalar sistemasida C nuqtaning <InlineMath math={`\\vec{r_C}`} /> radius vektorining koordinatalarini x<sub>c</sub>, y<sub>c</sub>, z<sub>c</sub>, <InlineMath math={`\\vec{r_k}`} /> radius vektor koordinatalarini x<sub>k</sub>, y<sub>k</sub>, z<sub>k</sub> deb belgilasak, C nuqtaning koordinatalarini quyidagicha yozish mumkin:
                </p>

                <div className="bg-gray-200 p-4 rounded-md mb-4">
                    <BlockMath math={`x_c = \\frac{\\sum F_kx_k}{\\sum F_k}, \\quad y_c = \\frac{\\sum F_ky_k}{\\sum F_k}, \\quad z_c = \\frac{\\sum F_kz_k}{\\sum F_k} \\qquad (2.21)`} />
                </div>

                <p className="mb-4">
                    (2.20) va (2.21) formulalardan ko‘rinib turibdiki, C nuqtaning holati kuchlarning yo‘nalishiga bog‘liq bo‘lmay, faqat kuchlarning miqdori va kuch qo‘yilgan nuqtaning koordinatalariga bog‘liq bo‘lar ekan.
                </p>

                <p className="mb-4">
                    Demak, kuchlar sistemasi biror burchakka burilsa ham, C nuqtaning, ya’ni parallel kuchlar markazining holati o‘zgarmaydi.
                </p>

                <p className="mb-4">
                    (2.20) formuladagi <InlineMath math={`\\sum F_k\\vec{r_k}`} /> kattalik berilgan kuchlar sistemasining C markazga nisbatan statik momenti deyiladi.
                </p>

                <p className="mb-4">
                    (2.21) formuladagi <InlineMath math={`\\sum F_kx_k`} />, <InlineMath math={`\\sum F_ky_k`} />, <InlineMath math={`\\sum F_kz_k`} /> kattaliklar berilgan kuchlar sistemasining mos ravishda yOz, xOz, xOy koordinata tekisliklariga nisbatan statik momenti deyiladi.
                </p>

                <p className="mb-4">
                    Agar koordinatalar boshi parallel kuchlar markazida joylashgan bo‘lsa, x<sub>C</sub> = 0, y<sub>C</sub> = 0, z<sub>C</sub> = 0 bo‘lib, kuchlar sistemasining markazga nisbatan statik momenti nolga teng bo‘ladi.
                </p>
            </div>
        </>
    )
}
export default ParallelKuchlarMarkazi