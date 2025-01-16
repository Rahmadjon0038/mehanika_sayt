import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";
import image5_7 from '../../assets/bolim@5image/image5_7.png';


const QozgalmasAylanmamain55 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-10 pt-20">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    5.5 – §. Qo’zg’almas o’q atrofidagi aylanma harakatdagi jism nuqtalarining tezlanishi
                </h1>

                <p className="mb-4">
                    Qo’zg’almas o’q atrofida aylanma harakatdagi jism ixtiyoriy nuqtasining
                    tezlanishini aniqlashda jism nuqtalarining trayektoriyalari aylanalardan iborat
                    bo’lganligi uchun nuqtaning tabiiy usulda harakat qonuni berilganda tezlanishlarni
                    aniqlash formulalaridan foydalanamiz. Ma’lumki, nuqtaning harakati tabiiy usulda
                    berilganda tezlanishi quyidagi <InlineMath math={"a"} /> formulalardan aniqlanadi:
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a = a_n + a_\\tau"} />
                </div>

                <p className="mb-4">
                    Bu yerda: <InlineMath math={"a_\\tau = \\frac{dv}{dt}"} />,{" "}
                    <InlineMath math={"a_n = \\frac{v^2}{R}"} />.
                </p>

                <p className="mb-4">
                    Yuqoridagi formulalarga qo’zg’almas o’q atrofidagi aylanayotgan qattiq jism
                    ixtiyoriy nuqtasining ma’lumotlari{" "}
                    <InlineMath math={"v = h\\omega"} /> va <InlineMath math={"R = h"} />{" "}
                    qiymatlarni qo’yib, quyidagi formulalarni hosil qilamiz (5.4b – shakl):
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_\\tau = \\frac{dv}{dt} = h \\frac{d\\omega}{dt} = h\\varepsilon \\quad (5.17)"} />
                </div>

                <p className="mb-4">
                    <InlineMath math={"a_\\tau"} /> - qo’zg’almas o’q atrofidagi aylanayotgan jism
                    ixtiyoriy nuqtasining **urinma tezlanishi** deyiladi.
                </p>

                <p className="mb-4 te">
                    **Aylanma harakatidagi jism ixtiyoriy nuqtasining urinma tezlanishi** jism
                    burchak tezlanishi bilan nuqtadan aylanish o’qigacha bo’lgan masofa
                    ko’paytmasiga teng.
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"a_n = \\frac{v^2}{R} = \\frac{(h\\omega)^2}{h} = h\\omega^2 \\quad (5.18)"} />
                </div>

                <p className="mb-4">
                    (5.18) formuladagi <InlineMath math={"a_n"} /> - qo’zg’almas o’q atrofida
                    aylanayotgan jism ixtiyoriy nuqtasining **normal yoki markazga intilma tezlanishi**
                    deyiladi. Bu quyidagicha o’qiladi:
                </p>

                <p className="mb-4 te">
                    **Aylanma harakatdagi jism ixtiyoriy nuqtasining normal (yoki markazga
                    intilma) tezlanishi** jism burchak tezligi kvadrati bilan nuqtadan aylanish
                    o’qigacha bo’lgan masofa ko’paytmasiga teng.
                </p>

                <p className="mb-4">
                    Normal tezlanish vektori nuqtadan aylanish o’qigacha bo’lgan masofa bo’ylab,
                    aylanish o’qiga qarab yo’nalgan bo’ladi (5.7 a,b– shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image5_7}
                        alt="Qo'zg'almas o'q atrofida aylanma harakat"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Jism ixtiyoriy nuqtasining **to’la tezlanishi** urinma va normal
                    tezlanishlarning geometrik yig’indisi ko’rinishida aniqlanadi va miqdori
                    quyidagiga teng:
                </p>




















                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{a} = h^4 + 2 \\quad (5.19)"} />
                </div>

                <p className="mb-4">
                    To'la tezlanish bilan normal tezlanish orasidagi burchakni <InlineMath math={"\\mu"} /> deb belgilasak, 
                    5.7 – shakldan,
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\mu = \\vec{a}\\vec{a}_n = 2 \\quad (5.20)"} />
                </div>

                {/* ... o'rta qism o'zgarmaydi ... */}

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d\\vec{\\omega} \\times \\vec{r}}{dt} = \\frac{d\\vec{\\omega}}{dt} \\times \\vec{r} + \\vec{\\omega} \\times \\frac{d\\vec{r}}{dt}"} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math={"\\frac{d\\vec{\\omega}}{dt} = \\vec{\\varepsilon}"} /> va <InlineMath math={"\\frac{d\\vec{r}}{dt} = \\vec{v}"} /> bo'lgani uchun
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{a} = \\vec{\\varepsilon} \\times \\vec{r} + \\vec{\\omega} \\times \\vec{v} \\quad (5.21)"} />
                </div>

                <p className="mb-4">
                    Bu formulada
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{\\varepsilon} \\times \\vec{r} = \\vec{a}_\\tau \\quad (5.22)"} />
                </div>

                <p className="mb-4">
                    urinma tezlanishni ifodalaydi. Chunki, bu vektornng qiymati 5.4b-shakldan
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{\\varepsilon} \\times \\vec{r} = \\varepsilon r \\sin (\\vec{\\varepsilon}, \\vec{r}) = \\varepsilon h"} />
                </div>

                <p className="mb-4">
                    bo'lib, yo'nalishi <InlineMath math={"\\vec{\\varepsilon}"} /> va <InlineMath math={"\\vec{r}"} /> vektorlar bir tomonga yo'nalganda mazkur nuqta 
                    tezligi bilan bir tomonga yo'nalgan bo'ladi. <InlineMath math={"\\vec{\\varepsilon}"} /> va <InlineMath math={"\\vec{r}"} /> qarama-qarshi yo'nalsa, 
                    tezlikka qarama-qarshi yo'nalgan bo'ladi.
                </p>

                <p className="mb-4">
                    (5.21) dagi ikkinchi qo'shiluvchi
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"\\vec{\\omega} \\times \\vec{v} = \\vec{a}_n \\quad (5.23)"} />
                </div>

                <p className="mb-4">
                    markazga yoki o'qqa intilma tezlanish deyiladi. Bu vektorning miqdori <InlineMath math={"\\vec{\\omega} \\perp \\vec{v}"} /> hamda 
                    <InlineMath math={"\\vec{v} = \\omega h"} /> bo'lgani uchun <InlineMath math={"\\omega v = \\omega^2 h"} /> ga teng bo'ladi.
                </p>






                <p className="mb-4">
                    Demak, <InlineMath math={"a_n = \\omega^2h"} /> bo'lib, <InlineMath math={"\\vec{a}_n"} /> vektor 
                    <InlineMath math={"\\vec{\\omega}"} /> va <InlineMath math={"\\vec{v}"} /> vektorlarga perpendikulyar ravishda, 
                    mazkur nuqtadan aylanish o'qiga qarab trayektoriyaning ichki normali bo'ylab yo'nalgan bo'ladi (5.4 b-shakl).
                </p>

                <p className="mb-4">
                    Natijada qo'zg'almas o'q atrofida aylanayotgan jism ixtiyoriy nuqtasining tezlanishi uchun keltirib 
                    chiqarilgan (5.19) formulani hosil qildik.
                </p>

                <p className="mb-4">
                    Bir jism aylanma harakatini, shu jism bilan bog'lanishdagi ikkinchi jism aylanma harakatiga tadbiq 
                    etish mumkin.
                </p>

                <p className="mb-4 te">
                    Ikkita, yetaklovchi va yetaklanuvchi tishli g'ildiraklar burchak tezliklarining nisbati uzatishlar 
                    soni deyiladi.
                </p>

                <p className="mb-4">
                    Ularning burchak tezliklarini <InlineMath math={"\\omega_1, \\omega_2"} />, tishlar sonini 
                    <InlineMath math={"z_1, z_2"} />, aylanishlar sonini <InlineMath math={"n_1, n_2"} />, radiuslarini 
                    <InlineMath math={"r_1, r_2"} /> bilan belgilasak, uzatishlar soni orasida quyidagicha bog'lanishlar mavjud.
                </p>

                <div className="bg-gray-200 p-4 flex justify-center mb-6">
                    <BlockMath math={"i_{12} = \\frac{\\omega_1}{\\omega_2} = \\frac{z_2}{z_1} = \\frac{n_1}{n_2} = \\frac{r_2}{r_1} \\quad (5.24)"} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math={"1"} /> – yetaklovchi g'ildirak, <InlineMath math={"2"} /> – yetaklanuvchi g'ildirak, 
                    <InlineMath math={"i_{12}"} /> – uzatishlar soni.
                </p>



            </div >
        </>
    );
};

export default QozgalmasAylanmamain55;
