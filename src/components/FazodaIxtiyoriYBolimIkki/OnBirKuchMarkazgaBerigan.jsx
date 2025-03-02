import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import Navbar from "../Navbar"; // Navbar componentasini import qilish
import "katex/dist/katex.min.css"; // KaTeX CSS import qilish
import image2_10 from '../../assets/bolim@2Image/image2_.png';
import qr from '../../assets/qrcode/lesson5qr.png'

const KuchniKeltirish = () => {
    return (
        <>
            <Navbar />
            <div className="p-6 max-w-[1940px] mx-auto mt-20">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    2.11 – §. Kuchni berilgan markazga keltirish haqida lemma
                </h2>
               
                <div className="text-center mb-6">
                    <a href=" https://youtu.be/OUxwFfVtseQ">
                        <img

                            src={qr}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto rounded-lg shadow-lg w-48"
                        />
                    </a>
                </div>
                <h3 className="text-xl font-semibold mb-4">Lemma</h3>

                <p className="mb-4">
                    Jismning biror nuqtasidagi kuchni boshqa bir nuqtasiga, ya’ni keltirish markaziga ko’chirilsa, keltirish markazida xuddi shunday bitta kuch hamda, momenti berilgan kuchdan keltirish markaziga nisbatan olingan momentga teng bo’lgan bitta juft kuch hosil bo’ladi (2.10 – shakl).
                </p>

                <h3 className="text-xl font-semibold mb-4">Isbot</h3>

                <p className="mb-4">
                    Aytaylik, A nuqtadagi F kuchni O nuqtaga ko’chirish kerak bo’lsin. O nuqtaga miqdorlari teng, bir to’g’ri chiziq bo’ylab qarama-qarshi tomonga yo’nalgan ikkita kuchni, ya’ni (F1, F2) ~ 0 nol sistemani qo’yamiz. Bu kuchlarning miqdori va yo’nalishini belgilash bizning ixtiyorimizda bo’lganligi uchun, miqdorini berilgan F kuchning miqdoriga teng qilib, yonalishini esa shu kuchga parallel qilib olamiz. Shaklga e’tibor berilsa, (F, F2) kuchlar juft tashkil qiladi. Uning momenti dF ga, ya’ni berilgan kuchdan keltirish markaziga nisbatan olingan momentga teng. Bu yerda d keltirish markazidan berilgan kuchning ta’sir chizig’iga tuchirilgan perpendikulyar.
                </p>

                <div className="text-center py-6">
                    <img
                        src={image2_10}
                        alt="Kuchni keltirish"
                        className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
                    />
                </div>

                <p className="mb-4">
                    Demak, F kuchning o’rniga O nuqtaga qo’yilgan miqdori F kuchning miqdoriga teng va shu kuchga parallel F1 kuch, hamda momenti d ∙ F ga teng bo’lgan bitta juft kuch hosil bo’ldi.
                </p>

                <p className="mb-4">
                    Isbot qilingan lemma uning muallifi, fransuz mexanik olimi nomi bilan Lui Puanso (1777-1859) lemmasi deb yuritiladi.
                </p>
            </div>
        </>
    );
};

export default KuchniKeltirish;