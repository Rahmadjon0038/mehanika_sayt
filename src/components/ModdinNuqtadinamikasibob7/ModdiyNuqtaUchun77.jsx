import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";
import image7_7 from '../../assets/bolim@7image/image7_7.png';

const ModdiyNuqtaUchun77 = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    7.7– §. Moddiy nuqta uchun Dalamber prinsipi (Kinetostatika usuli)
                </h2>
                <p className="mb-4">
                    Dinamikaning birinchi asosiy masalasini yechishda, ayniqsa,
                    bog’lanish reaksiya kuchlarini topish talab etilgan holatlarda
                    kinetostatika usuli deb ataluvchi, Dalamber prinsipidan foydalanish
                    ancha qulay. Dalamber prinsipining mohiyati quyichagicha: Ma’lumki,
                    bog`lanishdagi jismlar uchun dinamikaning asosiy qonunini
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"m \\vec{a} = \\vec{F} + \\vec{R}"} />
                </div>
                <p className="mb-4">
                    ko’rinishida yozish mumkin. <InlineMath math={"\\vec{F}"} /> moddiy
                    nuqtaga qo’yilgan aktiv kuchlarning geometrik yig’indisi,{" "}
                    <InlineMath math={"\\vec{R}"} /> reaksiya kuchlarining geometrik
                    yig’indisi. Dalamber tomonidan miqdori massa bilan tezlanishning
                    ko’paytmasiga teng, yo’nalishi tezlanishga qarama – qarshi
                    bo’lgan kattalik inersiya kuchi deb belgilangan.
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"- m \\vec{a} = \\vec{J}"} />
                </div>
                <p className="mb-4">
                    belgilashdan foydalanib qonunni quyidagi ko’rinishda yozish
                    mumkin:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"\\vec{F} + \\vec{R} + \\vec{J}=0"} />
                </div>
                <p className="mb-4">
                    (7.18) tenglamaning ko’rinishi statika muvozanat fo’rmulalariga
                    o’xshaganligi uchun kinetostatika usuli deyilgan. U quyidagicha
                    o’qiladi va Dalamber prinsipi deb aytiladi.
                </p>
                <p className="mb-4">
                    <span className="font-bold">
                        Harakatlanayotgan moddiy nuqtaga ta’sir qiluvchi aktiv, reaksiya
                        va inersiya kuchlarining geometrik yig’indisi har onda nolga
                        teng.
                    </span>
                </p>
                <p className="mb-4">
                    Bu yerda, albatta, aktiv va reaksiya kuchlari nuqtaga ta’sir
                    qiluvchi kuchlar bo’lib inersiya kuchi fizik kuch emasligini
                    unutmaslik kerak.
                </p>
                <p className="mb-4">
                    Kinetostatika usuli dinamika masalalarini statika masalalariga
                    o’xshatib yechishning formal usuli hisoblansa ham ba’zi masalalarni
                    hal etishda ancha qulay. (7.18) tenglamani Dekart
                    koordinatalariga proyeksiyalab, skalyar tenglamalar sistemasini
                    hosil qilamiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "\\begin{cases} \\sum F_x+\\sum R_x+J_x=0 \\\\ \\sum F_y+\\sum R_y+J_y=0 \\\\ \\sum F_z+\\sum R_z+J_z=0 \\end{cases}"
                        }
                    />
                </div>
                <p className="mb-4">
                    Bu yerda <InlineMath math={"J_x= -ma_x= -m\\ddot{x}, \\quad J_y= -ma_y=-m\\ddot{y} \\quad J_z= -ma_z = -m\\ddot{z}"} />{" "}
                    inersiya kuchining koordinata o`qlaridagi proyeksiyalari.
                </p>
                <p className="mb-4">
                    Yoki, (7.19) tenglamani tabiiy koordinatalar sistemasiga
                    proyeksiyalab boshqacha ko’rinishdagi tenglamalar sistemasiga ega
                    bo’lamiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "\\begin{cases} \\sum F_n+\\sum R_n+J_n=0 \\\\ \\sum F_{\\tau}+\\sum R_{\\tau}+J_{\\tau}=0 \\\\ \\sum F_b+\\sum R_b=0 \\end{cases}"
                        }
                    />
                </div>
                <p className="mb-4">
                    Bu yerda <InlineMath math={"a_n= \\frac{v^2}{\\rho}"} /> - markazga
                    intilma tezlanish, <InlineMath math={"a_{\\tau}=\\frac{dv}{dt}"} /> -
                    urinma tezlanish bo’lib, ulardan foydalanib, inersiya kuchining
                    tabiiy o’qlardagi proyeksiyalarini{" "}
                    <InlineMath math={"J_n= -ma_n=-m \\frac{v^2}{\\rho}"} /> markazdan
                    qochma inersiya kuchi va{" "}
                    <InlineMath math={"J_{\\tau}= -ma_{\\tau}= -m \\frac{dv}{dt}"} /> urinma
                    inertsaya kuchlarining miqdorlari aniqlanadi.
                </p>
                <p className="mb-4 font-bold">
                    7.4 – masala. Massasi <InlineMath math={"1000 kg"} /> bo’lgan
                    avtomobil do’ng ko’prikda <InlineMath math={"\\upsilon=10 m/s"} />{" "}
                    tezlik bilan harakatlanadi, ko’prik o’rtasining egrilik radiusi{" "}
                    <InlineMath math={"\\rho=50 m"} />. Avtomobil ko’prik o’rtasidan
                    o’tgan paytda ko’prikka qancha bosim ko’rsatishi aniqlansin.
                </p>
                <p className="mb-4">
                    <span className="font-bold">Yechish.</span> Avtomobil do’ng
                    ko’prik ustida harakatlanayotganligi uchun uning traektoriyasi
                    egri chiziqdan iborat. Avtomobilni moddiy nuqta deb, ko’prikning
                    do’ng nuqtasiga joylashtiramiz (7.7 shakl).

                    <div className="text-center py-6">
                        <img
                            src={image7_7}
                            alt="3.18-shakl"
                            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                        />
                    </div>
                    Shu nuqtani sanoq
                    boshi deb, tabiiy koordinatalar sistemasini o’rnatamiz.
                </p>
                <p className="mb-4">
                    Bunda <InlineMath math={"M\\tau"} /> urinma o’q trayektoriyaga
                    urinma ravishda tezlik bilan bir xil yo’naltiriladi.{" "}
                    <InlineMath math={"Mn"} /> normal o’q ko’prikning botiqligi
                    tomonga, shu nuqtadagi egrilik radiusi bo’ylab yo’naladi. Ta’sir
                    qiluvchi kuchlarni ko’rsatamiz. <InlineMath math={"\\vec{G}"} />-
                    og’irlik kuchi <InlineMath math={"\\vec{N}"} />- tekislikning normal
                    reaksiya kuchi (bu kuch biz izlayotgan bosim kuchiga miqdor
                    jihatdan teng bo’ladi), hamda tezlanishga qarama – qarshi
                    yo’nalgan inersiya kuchini ham go’yoki, nuqtaga qo’yilganday
                    ko’rsatamiz. Bu yerda tezlanishning normal va urinma tashkil
                    etuvchilari mavjudligidan inersiya kuchining ham normal va urinma
                    tashkil etuvchilarini shaklda ko’rsatamiz.
                </p>
                <p className="mb-4">
                    Ular <InlineMath math={"J_n= -ma_n, \\quad J_{\\tau}= -ma_{\\tau}"} />{" "}
                    ko’rinishida bo’ladi.
                </p>
                <p className="mb-4">
                    Dalamber prinsipi bo’lgan formulani tabiiy o’qlardagi
                    proyeksiyalarini yozamiz:
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath
                        math={
                            "\\begin{cases} \\sum F_n+\\sum R_n+J_n=0 \\\\ \\sum F_{\\tau}+\\sum R_{\\tau}+J_{\\tau}=0  \\end{cases}"
                        }
                    />
                </div>
                <p className="mb-4">
                    Bizda topish talab qilingan noma’lumlar soni bitta bo’lib , u
                    kuch normal o’qqa proeksiya berganligi uchun, kuchlar
                    sistemasining normal o’qdagi proyeksiyalari yig’indisidan
                    foydalanish kifoya .
                </p>
                <div className="bg-gray-200 p-4 mb-4 flex justify-center overflow-x-auto">
                    <BlockMath math={"G_n-N_n-J_n=0."} />
                </div>
                <p className="mb-4">
                    Bu yerda <InlineMath math={"G=mg, \\quad J_n=m\\frac{v^2}{\\rho}"} />{" "}
                    ekanligini hisobga olsak:{" "}
                    <InlineMath math={"N=mg-m\\frac{v^2}{\\rho}=781 N"} />.
                </p>
                <p className="mb-4">
                    Demak, <InlineMath math={"P=N=781 N"} />. Do`ng ko`prikka
                    tushayotgan bosimga teng. Agar avtomobil to’g’ri chiiqli yo’lda
                    harakatlansa ko`prikka tushayotgan bosim kuchi,{" "}
                    <InlineMath math={"P=N=mg=981 N"} /> bo’lar edi.
                </p>

            
            </div>
        </>
    );
};

export default ModdiyNuqtaUchun77;
