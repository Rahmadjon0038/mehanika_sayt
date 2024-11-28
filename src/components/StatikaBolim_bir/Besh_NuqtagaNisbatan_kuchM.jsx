import React from "react";
import MathJax from "react-mathjax";
import image1_15Qr from '../../assets/image1_15Qr.png'
import image1_15 from '../../assets/image1_15.png'
import image1_16 from '../../assets/image1_16.png'
import Navbar from "../Navbar";

function ForceMoment() {
    return (
        <><Navbar/>
        <MathJax.Provider>
            <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center mt-20 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-[1940px] w-full">
                    <h1 className="text-2xl font-bold text-center mb-6">
                        1.5 – §. Nuqtaga nisbatan kuch momenti
                    </h1>
                    <div className="text-center my-6">
                        <img
                            src={image1_15Qr}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/5"
                        />
                    </div>
                    <p className="mb-4">
                        Jism biror nuqtasi bilan bog‘lanishda bo‘lib, unga kuch ta’sir etsa, jism mazkur nuqta atrofida aylanishga harakat qiladi. 
                        Kuchning jismga bunday ta’sirini kuch momenti degan mexanikaning asosiy tushunchalaridan biri xarakterlab beradi. 
                        Agar jismga ta’sir qiluvchi kuchlar sistemasi tekislikda joylashgan bo‘lsa, nuqtaga nisbatan (algebraik) kuch momenti tushunchasidan foydalanish mumkin.
                    </p>
                    <p className="mb-4">
                        Kuchning nuqtaga nisbatan (algebraik) momenti deb, kuch miqdori bilan kuch yelkasining mos ishora bilan olingan ko‘paytmasiga aytiladi. 
                        <MathJax.Node inline formula={"\\vec{F}"} /> kuchning <MathJax.Node inline formula={"O"} /> nuqtaga nisbatan kuch momenti 
                        <MathJax.Node inline formula={"M_o(\\vec{F})"} /> yoki  
                        <MathJax.Node inline formula={" mom_o(\\vec{F})"} /> deb belgilanadi:
                    </p>
                    <MathJax.Node formula={"M_o(\\vec{F}) = mom_o(\\vec{F}) = \\pm Fh"} />
                    <p className="mb-4">(1.10)</p>
                    <p className="mb-4">
                        Bu yerda, <MathJax.Node inline formula={"O"} /> nuqta moment markazi deyiladi, 
                        <MathJax.Node inline formula={"h"} /> esa moment markazidan kuchning ta’sir chizig‘iga tushirilgan perpendikulyar bo‘lib, kuch yelkasi deyiladi.
                    </p>
                    <p className="mb-4">
                        Agar kuch moment markazi atrofida jismni soat miliga teskari aylantirayotgandek ko‘rinsa, bu nuqtaga nisbatan kuch momenti musbat deb, 
                        agar soat mili bo‘yicha aylantirayotgandek ko‘rinsa, bu nuqtaga nisbatan kuch momenti manfiy deb yuritiladi (1.15 a, b – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_15}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/2"
                        />
                    </div>
                    <p className="mb-4">
                        Kuch momentining xalqaro birliklar sistemasida birligi <MathJax.Node inline formula={"N \\cdot m"} />, 
                        texnik birliklar sistemasida esa <MathJax.Node inline formula={"kG \\cdot m"} /> deb qabul qilingan.
                    </p>
                    <h2 className="text-lg font-bold mb-4">Kuchning nuqtaga nisbatan momenti xossalari:</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            Kuchning miqdori va yo‘nalishini o‘zgartirmay ta’sir chizig‘i bo‘ylab istalgan nuqtaga ko‘chirilsa, kuch momenti o‘zgarmaydi.
                        </li>
                        <li>
                            Agar kuchning ta’sir chizig‘i moment markazidan o‘tsa, uning shu nuqtaga nisbatan momenti nolga teng bo‘ladi (1.15 c – shakl).
                        </li>
                    </ul>
                    <p className="mb-4">
                        Yana bir xossani 1.16 – shakldan foydalanib, keltirib chiqaramiz. 
                        <MathJax.Node inline formula={"\\vec{F}"} /> kuchning qo‘yilish nuqtasi 
                        <MathJax.Node inline formula={"A"} />, oxirgi nuqtasi 
                        <MathJax.Node inline formula={"B"} />, va moment markazi 
                        <MathJax.Node inline formula={"O"} /> nuqtalarni tutashtirib uchburchak yasalsa, bu uchburchakning yuzasi 
                        <MathJax.Node inline formula={"S_{\\Delta AOB} = \\frac{1}{2} Fh"} /> ekanligini ko‘ramiz. 
                        Bu ifodani quyidagi formula bilan solishtirsak:
                    </p>
                    <MathJax.Node formula={"M_o(\\vec{F}) = 2 S_{\\Delta AOB}"} />
                    <p className="mb-4">(1.11)</p>
                    <p className="mb-4">
                        Demak, kuchning nuqtaga nisbatan momenti kuchning qo‘yilishi va oxirgi nuqtalarini moment markazi bilan tutashtirib yasalgan 
                        uchburchak yuzasining ikkilanganiga teng (1.16 – shakl).
                    </p>
                    <div className="text-center my-6">
                        <img
                            src={image1_16}
                            alt="Kuch ta'sir chizig'i"
                            className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                        />
                    </div>
                </div>
            </div>
        </MathJax.Provider>
        </>

    );
}

export default ForceMoment;
