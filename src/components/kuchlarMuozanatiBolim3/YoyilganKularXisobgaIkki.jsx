import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar";
import "katex/dist/katex.min.css";
import image3_2 from '../../assets/bolim@3image/image3_2.png'; 
import image3_3 from '../../assets/bolim@3image/image3_3.png'; 
import image3_4 from '../../assets/bolim@3image/image3_4.png'; 

const YoyilganKuchlarniHisobgaOlish = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    3.2 – §. Yoyilgan kuchlarni hisobga olish
                </h2>

                <p className="mb-4">
                    Texnikada turli inshootlarning muvozanatini tekshirishda ularning turli nuqtalariga qo’yilgan kuchlar bilan bir qatorda hajm, sirt yoki uzunliklar bo’yicha ma’lum qonunlar asosida yoyilgan kuchlarni hisobga olishga to’g’ri keladi.
                </p>

                <p className="mb-4">
                    Bunday kuchlar hajm, sirt yoki uzunlik birligiga to’g’ri keladigan yoyilgan kuchlarning intensivligi <InlineMath math={`q`} /> bilan xarakterlanadi, <InlineMath math={`N/m^3`} />, <InlineMath math={`N/m^2`} />, <InlineMath math={`N/m`} /> larda o’lchanadi.
                </p>
                <div className="text-center py-6">
                    <img
                        src={image3_2}
                        alt="Yoyilgan kuchlar diagrammasi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div> 
                <p className="mb-4">
                    Masalan, jism zarralarining og’irlik kuchi hajm bo’yicha, suvning to’g’on sirtiga bosim kuchi sirt bo’yicha yoyilgan parallel kuchlarni ifodalaydi.
                </p>

                <p className="mb-4">
                    Bir tekislikda joylashgan, berilgan uzunliklar bo’yicha yoyilgan kuchlarning ayrimlari bilan quyida tanishasiz. Bunday kuchlarning intensivligi <InlineMath math={`N/m`} /> larda o’lchanadi.
                </p>

                <h3 className="text-xl font-semibold mb-2">1. To’g’ri chiziq kesmasi bo’yicha tekis yoyilgan kuchlar</h3>
                <p className="mb-4">
                    Bunday kuchlarning intensivligi <InlineMath math={`q`} /> o’zgarmas kattalik bo’ladi. <InlineMath math={`Q = aq`} /> (3.2)
                </p>
              
                <p className="mb-4">
                    1 bo’lgan teng ta’sir etuvchi bilan almashtirish mumkin, <InlineMath math={`Q_{AB}`} /> kesmani o’rtasiga qo’yilgan bo’ladi (3.4 – shakl).
                </p>

                <h3 className="text-xl font-semibold mb-2">2. To’g’ri chiziq kesmasi bo’yicha chiziqli qonun bo’yicha yoyilgan kuchlar</h3>
                <p className="mb-4">
                    Uzunligi <InlineMath math={`a`} /> ga teng <InlineMath math={`AB`} /> sterjenga chiziqli qonun bo’yicha yoyilgan kuchlar ta’sir etsin. Bunday kuchlarga misol tariqasida suv bosim kuchining to’g’on balandligi bo’yicha taqsimlanishini olish mumkin.
                </p>
                <p className="mb-4">
                    Bunday kuchlarning intensivligi <InlineMath math={`q`} /> o’zgartirib, <InlineMath math={`0`} /> dan to maksimal qiymati <InlineMath math={`q_{max}`} /> gacha o’zgaradi. Ko‘rilayotgan holda yoyilgan kuchlarning teng ta’sir etuvchisi <InlineMath math={`ABC`} /> uchburchakning <InlineMath math={`BA`} /> tomoniga <InlineMath math={`B`} /> nuqtadan <InlineMath math={`a/3`} /> masofaga qo’yilgan hamda miqdori <InlineMath math={`Q = \\frac{1}{2}a q_{max}`} /> (3.7) ga teng bo’ladi (3.3 – shakl).
                </p>
                <div className="text-center py-6">
                    <img
                        src={image3_3}
                        alt="Yoyilgan kuchlar diagrammasi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div> 
                <h3 className="text-xl font-semibold mb-2">3. To’g’ri ciziq kesmasi bo’yicha ixtiyoriy qonun asosida yoyilgan kuchlar</h3>
                <p className="mb-4">
                    Bunday kuchlarning teng ta’sir etuvchisi <InlineMath math={`Q`} /> miqdor jihatdan mos masshtabda o’lchangan <InlineMath math={`ABCD`} /> shakl yuzasiga teng bo’lib, berilgan yuzaning og’irlik markaziga qo’yiladi. Bunga metro va boshqa yerosti inshootlariga tuproqning ta’sir kuchi misol bo’ladi (3.4– shakl).
                </p>

                <div className="text-center py-6">
                    <img
                        src={image3_4}
                        alt="Yoyilgan kuchlar diagrammasi"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div> 
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`Q = aq \\quad (3.2)`} />
                    </div>
                    <div className="flex-1 bg-gray-200 p-4 rounded-md">
                        <BlockMath math={`Q = \\frac{1}{2} a q_{max} \\quad (3.7)`} />
                    </div>
                </div>

                {/* Qo'shimcha formulalar yoki matnlar uchun */}
                {/* <p className="mb-4">
                    Qo'shimcha matn...
                </p> */}
            </div>
        </>
    );
};

export default YoyilganKuchlarniHisobgaOlish;