import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image4_1 from '../../assets/bolim@4image/image4_1.png'; 
import image4_2 from '../../assets/bolim@4image/image4_2.png'; 
import image4_3 from '../../assets/bolim@4image/image4_3.png'; 
import image4_4 from '../../assets/bolim@4image/image4_4.png'; 

const NuqtaHarakati = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    4.1 – §. Nuqta harakatining berilish usullari. Nuqta harakatining  
                    vektor usulda berilishi. Tezlik va tezlanish vektorlari.
                </h2>

                <p className="mb-4">
                    Nuqta harakati o’rganilayotganda uning ko’chishi tushunchasiga duch kelinadi. Nuqtaning harakati va ko’chishi tushunchalari bir biridan farq qiladi. Nuqtaning ko’chishi uning boshlang’ich va oxirgi holatlari hamda vaqt oralig’i bilan aniqlanadi, bunda nuqtaning avvalgi holatdan oxirgi holatga qanday usul bilan o’tishi e’tiborga olinmaydi. 
                </p>

                <p className="mb-4">
                    Harakat tushunchasida esa nuqtaning birinchi holatdan ikkinchi holatga vaqtga bog’liq ravishda qanday usul bilan o’tgani, ya’ni boshlang’ich va oxirgi paytlar orasidagi istalgan vaqt uchun fazodagi o’rni hisobga olinadi. 
                </p>

                <p className="mb-4">
                    Nuqta kinematikasida quyidagi ikki asosiy masala ko’riladi:
                    <ol>
                        <li> berilgan sanoq sistemasiga nisbatan nuqtaning harakatini matematik usulda aniqlash; </li>
                        <li> nuqtaning berilgan harakat qonuniga ko’ra barcha kinematik xarakteristikalarini (trayektoriya, tezlik, tezlanish va h.k.)  aniqlash.   
                        </li>
                    </ol>
                </p>

                <p className="mb-4 te">
                    Traektоriya deb  nuqtaning vaqt  o’tishi bilan fazоda qоldirgan iziga aytiladi. Agar traektоriya  to’g’ri  chiziq  bo’lsa, harakat  to’gri  chiziqli, traektоriya egri chiziqdan ibоrat  bo’lsa  egri chiziqli harakat deyiladi.
                </p>

                <p className="mb-4">
                    Nuqta harakatining asоsan uch xil analitik usulda berilishini ko’rib chiqamiz.      
                    <ol>
                        <li> Vektоr usuli,  </li>
                        <li> Kооrdinatalar usuli,  </li>
                        <li> Tabiiy usul.  </li>
                    </ol>
                </p>

                <h3 className="text-xl font-semibold mb-2 te">a) Harakatning vektоr usulida berilishi.</h3>
                <p className="mb-4">
                    M nuqta birоr Oxyz kоordinatalar sistemasida harakatlanayotgan bo’lib, ixtiyoriy vaqt uchun bu nuqtaning holatini   О    kооrdinata bоshiga qo’yilgan  <InlineMath math={`r`} /> radius vektоr оrqali aniqlash mumkin bo’lsa, harakat vektоr usulida berilgan deyiladi  (4.1 – shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image4_1}
                        alt="Nuqta harakatining vektor usulda berilishi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div> 

                <p className="mb-4">
                    <InlineMath math={`r = r(t)`} />  formula bilan aniqlanadigan ifoda harakat vektor usulda berilganda, nuqtaning harakat qonuni yoki harakat tenglamasi deyiladi.
                </p>

                <p className="mb-4">
                    Vektorlar algebrasidan ma’lumki, boshi qo’zg’almas nuqtaga qo’yilgan vektor uchining vaqt o’tishi bilan fazoda qoldirgan iziga  godograf deyiladi. 
                    Bu holda, harakatlanayotgan moddiy nuqtaning radius vektori godografi uning trayektoriyasi bilan ustma – ust tushadi.
                </p>

                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`r = r(t)`} />
                    </div>
                </div>



















                <h2 className="text-xl  mb-4">
                    M nuqta harakati davоmida <InlineMath math={`\\vec{r}`} /> radius vektor, <InlineMath math={`t`} /> vaqtga bоg’liq ravishda ham miqdоr, ham yo’nalish jihatdan o’zgaradi
                </h2>

                <p className="mb-4">
                    M nuqta harakati davоmida <InlineMath math={`\\vec{r}`} /> radius vektor, <InlineMath math={`t`} /> vaqtga bоg’liq ravishda ham miqdоr, ham yo’nalish jihatdan o’zgaradi.
                </p>

                <h3 className="text-xl font-semibold mb-2">b) Nuqtaning tezlik vektоrini aniqlash.</h3>
                <p className="mb-4">
                    Nuqtaning asosiy kinematik xarakteristikalaridan biri tanlangan sanoq sistemasiga nisbatan tezlik tushunchasidir. Quyida tezlik vektorini aniqlash uchun vektorning skalyar argument bo’yicha olingan hosilasining hossalaridan foydalanamiz.
                </p>

                <p className="mb-4">
                    Aytaylik, harakatlanayotgan nuqta biror <InlineMath math={`t`} /> vaqtda <InlineMath math={`M`} /> hоlatda va <InlineMath math={`t_1`} /> vaqtda <InlineMath math={`M_1`} /> hоlatda, bo’lib, <InlineMath math={`\\Delta t = t_1 - t`} /> vaqtda esa <InlineMath math={`\\vec{MM_1} = \\vec{r_1} - \\vec{r} = \\Delta \\vec{r}`} /> ko’chishga erishsin. 
                </p>

                <p className="mb-4">
                    <InlineMath math={`\\Delta \\vec{r}`} /> radius vektor orttirmasining vaqt orttirmasi <InlineMath math={`\\Delta t`} /> ga nisbati o’rtacha tezlik deyiladi. <InlineMath math={`\\vec{v}^*`} /> harfi bilan belgilanadi. 
                </p>

                <BlockMath math={`\\vec{v}^* = \\frac{\\Delta \\vec{r}}{\\Delta t}`} />   (4.2)

                <p className="mb-4">
                    Ixtiyoriy <InlineMath math={`t`} /> vaqtdagi <InlineMath math={`\\vec{v}`} /> tezlik vektоri deganda <InlineMath math={`\\Delta t`} /> vaqt orttirmasining nolga intilgandagi o’rtacha tezlikning erishgan qiymati tushuniladi:
                </p>

                <BlockMath math={`\\vec{v} = \\lim_{{\\Delta t \\to 0}} \\frac{{\\Delta \\vec{r}}}{{\\Delta t}} = \\frac{{d\\vec{r}}}{{dt}}, \\quad \\vec{v} = \\frac{{d\\vec{r}}}{{dt}} = \\dot{\\vec{r}}`} />   (4.3)
{/* 
                <div className="text-center py-6">
                    <img
                        src={image4_2}
                        alt="Nuqta harakatining tezlik vektori"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>  */}

                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`\\vec{v}^* = \\frac{\\Delta \\vec{r}}{\\Delta t}`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`\\vec{v} = \\lim_{{\\Delta t \\to 0}} \\frac{{\\Delta \\vec{r}}}{{\\Delta t}} = \\frac{{d\\vec{r}}}{{dt}}, \\quad \\vec{v} = \\frac{{d\\vec{r}}}{{dt}} = \\dot{\\vec{r}}`} />
                    </div>
                </div>

                {/* Qo'shimcha formulalar yoki matnlar uchun */}
                {/* <p className="mb-4">
                    Qo'shimcha matn...
                </p> */}
                {/* Qo'shimcha formulalar yoki matnlar uchun */}
                {/* <p className="mb-4">
                    Qo'shimcha matn...
                </p> */}
            </div>
        </>
    );
};

export default NuqtaHarakati;