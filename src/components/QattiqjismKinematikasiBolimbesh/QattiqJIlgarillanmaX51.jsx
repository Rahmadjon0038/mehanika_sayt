import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image5_1 from '../../assets/bolim@5image/image5_1.png';
import image5_2 from '../../assets/bolim@5image/image5_2.png';

const IlgarilanmaHarakat51 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    5.1 – §. Qattiq jismning ilgarilanma harakati
                </h2>

                <p className="mb-4 te">
                    Qattiq jismda olingan ixtiyoriy kesma, jismning harakati davomida
                    o‘z-o‘ziga parallel qolsa, bunday harakatga qattiq jismning ilgarilanma harakati
                    deyiladi.
                </p>

                <p className="mb-4">
                    Misol sifatida, vagon g‘ildiraklarini tutashtiruvchi{" "}
                    <InlineMath math={"AB"} /> sparnik (5.1-shakl)
                    <div className="text-center py-6">
                        <img
                            src={image5_1}
                            alt="Nuqta harakatining vektor usulda berilishi"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    harakatini, ichki yonuv dvigatelining
                    silindridagi porshen harakatini, yo‘lda harakatlanayotgan avtomobil kuzovlari
                    harakatini keltirish mumkin.
                </p>

                <p className="mb-4">
                    Misollardan ko‘rinadiki, ilgarilanma harakatdagi jism nuqtalarining trayektoriyalari
                    egri chiziqli yoki to‘g‘ri chiziqli, hatto aylanalardan iborat bo‘lishi mumkin.
                    Jismning ilgarilanma harakatini o‘rganish quyidagi teoremaga asoslanadi:
                </p>

                <h3 className="text-xl font-semibold mb-4">Teorema</h3>
                <p className="mb-4 te">
                    Ilgarilanma harakatdagi jism nuqtalari bir xil ko‘rinishdagi trayektoriya
                    chizadi, hamda har onda miqdor va yo‘nalish jihatidan bir xil tezlik va bir xil
                    tezlanishga ega bo‘ladi.
                </p>

                <h3 className="text-xl font-semibold mb-4">Isbot</h3>
                <p className="mb-4">
                    Jismda ixtiyoriy <InlineMath math={"A"} /> va{" "}
                    <InlineMath math={"B"} /> nuqtalarni olib, ularni{" "}
                    <InlineMath math={"Oxy"} /> koordinatalar sistemasidagi{" "}
                    <InlineMath math={"O"} /> markazga nisbatan radius vektorlarini{" "}
                    <InlineMath math={"r_A"} /> va <InlineMath math={"r_B"} /> deb belgilaymiz.
                    <InlineMath math={"AB"} /> va <InlineMath math={"A_1B_1"} /> kesmalar
                    parallel va teng bo‘lib, <InlineMath math={"ABB_1A_1"} /> figura
                    parallelogrammdan iborat. Shunday qilib,
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\Delta r_A = \\Delta r_B"} />
                </div>
                <p className="mb-4">
                    degan xulosa kelib chiqdi, ya’ni ilgarilanma harakatdagi jismning barcha nuqtalari bir
                    xil ko‘chish oladi. Traektoriyalari bir xil ko‘rinishda bo‘lib, bir-birlariga nisbatan
                    parallel surilgan bo‘ladi (5.2-shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image5_1}
                        alt="Nuqta harakatining vektor usulda berilishi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>
                <p className="mb-4">
                    Aytaylik <InlineMath math={"t"} /> vaqtda jism{" "}
                    <InlineMath math={"I"} /> holatni egallagan,{" "}
                    <InlineMath math={"t+\\Delta t"} /> vaqtda esa{" "}
                    <InlineMath math={"II"} /> holatda bo‘lsin. Bu{" "}
                    <InlineMath math={"\\Delta t"} /> vaqtda{" "}
                    <InlineMath math={"A"} /> nuqta{" "}
                    <InlineMath math={"\\Delta r_A"} /> ,{" "}
                    <InlineMath math={"B"} /> nuqta{" "}
                    <InlineMath math={"\\Delta r_B"} /> ko‘chish oladi.{" "}
                    <InlineMath math={"AB"} /> kesma esa ilgarilanma harakatda bo‘lgani uchun, hamda qattiq
                    jism ta’riflariga ko‘ra miqdor va yo‘nalish jihatidan o‘zgarmaydi, demak, shakldan:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"r_B = r_A + AB \\quad (5.1)"} />
                </div>

                <p className="mb-4">
                    Tenglikning ikki tomonini vaqt bo‘yicha differensiallab,{" "}
                    <InlineMath math={"B"} /> nuqtaning tezligini aniqlaymiz:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{dr_B}{dt} = \\frac{dr_A}{dt} + \\frac{dAB}{dt}"} />
                </div>

                <p className="mb-4">
                    Bu yerda <InlineMath math={"\\frac{dr_A}{dt}"} /> =
                    Bu yerda <InlineMath math={"\\frac{dr_A}{dt} = v_A"} />,{" "}
                    <InlineMath math={"\\frac{dr_B}{dt} = v_B"} /> belgilashlarni, hamda
                    <InlineMath math={"AB = const"} /> bo‘lgani uchun{" "}
                    <InlineMath math={"\\frac{dAB}{dt} = 0"} /> ekanligini hisobga olsak:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"v_B = v_A \\quad (5.2)"} />
                </div>

                <p className="mb-4 te" >
                    <InlineMath math={"A"} /> va <InlineMath math={"B"} /> nuqtalar
                    ixtiyoriy tanlangani uchun, aytish mumkinki, ilgarilanma harakatdagi
                    jismning barcha nuqtalari berilgan vaqtda bir xil tezlikka ega
                    bo‘ladi.
                </p>

                <p className="mb-4">
                    <InlineMath math={"(5.2)"} /> tenglamaning ikki tomonini yana bir
                    marta differensiallasak:
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\frac{dv_B}{dt} = \\frac{dv_A}{dt}, \\quad yoki \\quad a_B = a_A \\quad (5.3)"} />
                </div>

                <p className="mb-4 te">
                    Demak, ilgarilanma harakatdagi jism nuqtalari berilgan vaqtda bir xil
                    tezlanishga ega bo‘ladi.
                </p>

                <p className="mb-4">
                    Teorema isbotidan quyidagi natijalarga ega bo‘lamiz: Qattiq jism
                    barcha nuqtalarining tezligi va tezlanishlari berilgan onda bir xil
                    bo‘lgani uchun ularni jism tezligi yoki jism tezlanishi deyish
                    mumkin. Jismning barcha nuqtalarini emas, balki, bitta nuqtasining
                    tezlik va tezlanishini aniqlash yetarli bo‘ladi.
                </p>

                <p className="mb-4">
                    Ilgarilanma harakatdagi qattiq jismning{" "}
                    <InlineMath math={"Oxyz"} /> koordinatalar sistemasiga nisbatan
                    harakat tenglamasini yozish uchun, jismda ixtiyoriy{" "}
                    <InlineMath math={"M"} /> nuqta olib, uning koordinatalarini{" "}
                    <InlineMath math={"x_M, y_M, z_M"} /> lar bilan belgilaymiz. Jism
                    harakatlanganda bu koordinatalar vaqtning funksiyasi sifatida
                    o‘zgaradi. <span className="te"> Agar vaqt bilan mazkur nuqta koordinatalari orasidagi</span>
                </p>

                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto te">
                    <BlockMath math={"x_M = f_1(t), \\quad y_M = f_2(t), \\quad z_M = f_3(t) \\quad (5.4)"} />
                </div>

                <p className="mb-4 te">
                    ko‘rinishdagi bog‘lanishlar ma’lum bo‘lsa, bu tenglamalarga jismning
                    ilgarilanma harakat tenglamalari deyiladi.
                </p>
            </div>
        </>
    );
};

export default IlgarilanmaHarakat51;
