import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import image1_17 from '../../assets/image1_17.png'
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import NavigationButtons from "../home/ArrowButtons";

function MomentVector() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center mt-20 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        1.6 – §. Nuqtaga nisbatan kuch momentining vektori
                    </h1>
                    <p className="mb-4">
                        Fazoda joylashgan kuchlar sistemasi ta’siridagi jismlar holatini tekshirishda, kuch momentining vektor ifodasidan foydalanishga to‘g‘ri keladi.
                    </p>
                    <p className="mb-4">
                        Kuchning nuqtaga nisbatan moment vektori moment markaziga qo‘yilgan bo‘lib, markaz va kuchning ta’sir chizig‘idan o‘tgan tekislikka
                        perpendikulyar yo‘naladi. Uning uchidan qaraganimizda kuch jismni soat milining aylanishiga teskari aylantirayotgandek ko‘rinadi.
                    </p>
                    <p className="mb-4">
                        Kuch vektorining analitik ifodasini keltirib chiqarish uchun kuch momentining ta’rifidan foydalanamiz.
                        Moment markazi <InlineMath math={"O"} /> nuqta bo‘lib,
                        <InlineMath math={"\\vec{F}"} /> kuch qo‘yilish nuqtasining bu nuqtaga nisbatan radius vektori
                        <InlineMath math={"\\vec{r}"} /> bo‘lsin.
                    </p>
                    <p className="mb-4">
                        Shaklda <InlineMath math={"\\vec{F}"} /> kuchning
                        <InlineMath math={"O"} /> nuqtaga nisbatan moment vektorini
                        <InlineMath math={"O"} /> nuqtaga qo‘yilgan va shu markaz hamda kuchning ta’sir chizig‘i orqali o‘tgan tekislikka perpendikulyar
                        yo‘nalgan <InlineMath math={"\\vec{M}_o(\\vec{F})"} /> vektor bilan tasvirlaymiz.
                    </p>
                    <p className="mb-4">
                        Yo‘nalishni yuqorida aytilgandek, uchidan qaralganda moment markazi atrofida kuch soat miliga qarama-qarshi aylanayotgandek ko‘rinishda yo‘naltiramiz (1.17 - shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_17}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                        />
                    </div>
                    <p className="mb-4">
                        <InlineMath math={"\\vec{M}_o(\\vec{F}) = [\\vec{r}, \\vec{F}]"} /> (1.12)
                    </p>
                    <p className="mb-4">
                        Formula o‘rinli ekanligini vektor ko‘paytma xossasidan foydalanib, isbotlanadi.
                        Ma’lumki, vektorlarning vektor ko‘paytmasini quyidagicha yozish mumkin:
                    </p>
                    <BlockMath math={"[\\vec{r}, \\vec{F}] = rF \\sin ((\\vec{r}, \\vec{F})̂)"} />
                    <p className="mb-4">
                        Shakldan, <InlineMath math={"h = r \\sin ((\\vec{r}, \\vec{F})̂)"} /> bo‘lgani uchun quyidagi tenglik o‘rinli bo‘ladi:
                    </p>
                    <BlockMath math={"|[\\vec{r}, \\vec{F}]| = \\pm Fh = M_o(\\vec{F})"} />
                    <p className="mb-4">(1.13)</p>
                    <p className="mb-4">
                        Demak, biror nuqtaga nisbatan olingan kuch momenti vektorining analitik ifodasi
                        (1.13) ko‘rinishda yoziladi va quyidagicha o‘qiladi:
                    </p>
                    <p className="mb-4">
                        Kuchning nuqtaga nisbatan momenti vektor kattalik bo‘lib, kuch qo‘yilgan nuqtaning moment markaziga nisbatan radius vektori
                        bilan shu kuchning vektor ko‘paytmasiga teng.
                    </p>




                    <p className="mb-4">
                        Agar <InlineMath>{`O`}</InlineMath> nuqtani koordinata boshi qilib, o‘qlarni o‘tkazsak, va <InlineMath>{`\\vec{r}`}</InlineMath> radius vektorining koordinatalari <InlineMath>{`x, y, z`}</InlineMath>, hamda <InlineMath>{`\\vec{F}`}</InlineMath> kuchning o‘qlardagi proyeksiyalari <InlineMath>{`F_x, F_y, F_z`}</InlineMath> bo‘lsa, ya'ni <InlineMath>{`\\vec{r}(x, y, z)`}</InlineMath> va <InlineMath>{`\\vec{F}(F_x, F_y, F_z)`}</InlineMath> bo‘lsa, <InlineMath>{`O`}</InlineMath> nuqtaga nisbatan kuch momentini vektorini quyidagicha ifodalash mumkin:
                    </p>

                    <BlockMath math={"\\vec{M}_o(\\vec{F}) = [\\vec{r}, \\vec{F}] = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ x & y & z \\\\ F_x & F_y & F_z \\end{vmatrix}"} />
                    <p className="mb-4">
                        = <InlineMath math={"(yF_z - zF_y)\\hat{i} + (zF_x - xF_z)\\hat{j} + (xF_y - yF_x)\\hat{k}"} />.
                    </p>
                    <p className="mb-4">
                        Bu yerda <InlineMath math={"\\hat{i}, \\hat{j}, \\hat{k}"} /> – koordinata o‘qlarining birlik vektorlari.
                    </p>
                    <p className="mb-4">
                        Demak, kuchning hamda kuch qo‘yilgan nuqtaning koordinatalari ma’lum bo‘lsa, kuch momentining koordinata o‘qlaridagi
                        proyeksiyalarini quyidagi formulalardan aniqlash mumkin:
                    </p>
                    <BlockMath math={"\\begin{aligned} M_{ox}(\\vec{F}) &= yF_z - zF_y \\\\ M_{oy}(\\vec{F}) &= zF_x - xF_z \\\\ M_{oz}(\\vec{F}) &= xF_y - yF_x \\end{aligned}"} />
                    <p className="mb-4">(1.15)</p>
                    <p className="mb-4">
                        Kuch momenti vektorining koordinata o‘qlaridagi proyeksiyalari ma’lum bo‘lsa, uning miqdorini quyidagi formuladan aniqlash mumkin:
                    </p>
                    <BlockMath math={"M_o(\\vec{F}) = \\sqrt{(yF_z - zF_y)^2 + (zF_x - xF_z)^2 + (xF_y - yF_x)^2}"} />
                    <p className="mb-4">(1.16)</p>

                    <NavigationButtons/>
                </div>
            </div>
        </>
    );
}

export default MomentVector;
