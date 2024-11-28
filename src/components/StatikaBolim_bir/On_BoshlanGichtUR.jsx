import React from "react";
import MathJax from "react-mathjax";
import image1_28 from '../../assets/image1_28.png'
import image1_29 from '../../assets/image1_29.png'
import image1_30 from '../../assets/image1_30.png'
import image1_31 from '../../assets/image1_31.png'
import image1_32 from '../../assets/image1_32.png'
import image1_33 from '../../assets/image1_33.png'
import image1_34 from '../../assets/image1_34.png'
import image1_35 from '../../assets/image1_35.png'
import image1_36 from '../../assets/image1_36.png'
import Navbar from "../Navbar";
function ConnectionsAndReactions() {
    return (
        <><Navbar />
            <MathJax.Provider>
                <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center mt-20 p-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-[1940px] w-full">
                        <h1 className="text-2xl font-bold mb-6 text-center">
                            1.10 – §. Bоg’lanish turlari va bоg’lanish reaksiyа kuchlari
                        </h1>
                        <p className="mb-4">
                            Fazоda jismning harakatlanishiga xech qanday chek qo’yilmagan bo’lsa, bunday jism erkin jism deyiladi.
                            Jismning harakatiga bоshqa bir jism tоmоnidan chek qo’yilgan bo’lsa, bunday jism bоg’lanishdagi jism deyiladi.
                            Harakatni cheklоvchi sababga <b>bоg’lanish</b> deyiladi. Bog’lanishning jismga ta’sirini beruvchi kuchga <b>bоg’lanish reaksiya kuchi</b> deyiladi.
                        </p>
                        <p className="mb-4">
                            Mexanikada bog’lanishdagi jismning harakatini, yoki muvozanatini o’rganish, erkin jismning harakati yoki muvozanatiga
                            keltirib tekshiriladi. Buning uchun quyidagi aksiomadan foydalaniladi.
                        </p>
                        <h2 className="text-lg font-semibold mb-4">5-aksioma:</h2>
                        <p className="mb-4">
                            Agar bog’lanishdagi jismga ta’sir etuvchi berilgan kuchlar qatoriga bog’lanish reaksiya kuchlarini qo’shilsa u erkin jismga aylanadi. Bu aksiomaga <b>bоg’lanishdan ozod qilish aksiomasi</b> deyiladi.
                        </p>
                        <p className="mb-4">
                            Reaksiya kuchining yo’nalishini va qo’yilish nuqtasini oldindan bilish statika masalalarini yechishda katta ahamiyatga ega bolib, kuchning
                            miqdorini analitik usullardan foydalanib aniqlash mumkin bo’ladi.
                        </p>
                        <p className="mb-4">
                            Umumiy holda, ta’sirning aks ta’sirga tenglik aksiоmasiga ko’ra jism bоg’lanishga qanday kuch bilan ta’sir qilsa, bоg’lanishlar ham jismga shunday kuch bilan aks ta’sir ko’rsatadi. Bоg’lanish jism harakatini qaysi tоmоndan cheklasa, reaksiya kuchi shunga qarama-qarshi yo’nalgan bo’ladi.
                        </p>
                        <p className="mb-4">
                            Quyida bоg’lanishning asоsiy turlari bilan tanishib chiqamiz. Agar jism silliq tekislikka tayanib turgan bo’lsa, bog’lanish reaksiya kuchi
                            jismning tekislikka tegib turgan nuqtasiga qo’yilgan bo’lib, tekislikning normali bo’ylab yo’naladi.
                        </p>
                        <p className="mb-4">
                            Ularga normal reaksiya kuchlari deyiladi. Odatda <MathJax.Node inline formula={"\\vec{N}"} /> harfi bilan belgilanadi (1.28 a, b- shakl)

                            <div className="text-center my-6">
                                <img
                                    src={image1_28}
                                    alt="Kuch ta'sir chizig'i"
                                    className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                                />
                            </div>
                            Agar tegishib turgan sirtlar silliq bo’lmasa normal reaksiya kuchidan tashqari urinma bo’ylab yo’nalgan kuch ham hosil bo’ladi. Bu kuchga <b>ishqalanish kuchi</b> deyiladi <MathJax.Node inline formula={"\\vec{F}"} /> (1.29 a, b - shakl)
                            <div className="text-center my-6">
                                <img
                                    src={image1_29}
                                    alt="Kuch ta'sir chizig'i"
                                    className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                                />
                            </div>
                        </p>
                        <p className="mb-4">
                            Agar jism cho’zilmaydigan arqonlar yordamida bog’langan bo’lsa, reaksiya kuchlari arqonlar bo’ylab yo’naladi. Ularga taranglik kuchlari deyiladi. <MathJax.Node inline formula={"\\vec{T}"} /> harfi bilan belgilanadi (1.30 - shakl).
                            <div className="text-center my-6">
                                <img
                                    src={image1_30}
                                    alt="Kuch ta'sir chizig'i"
                                    className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                                />
                            </div>
                        </p>
                        <p className="mb-4">
                            Agar jism qo’zg’aluvchi sharnirli tayanchda turgan bo’lsa, bog’lanishda hosil bo’ladigan qarshilik kuchi sharnir turgan tekislikka perpendikulyar ravishda yo’nalgan bo’ladi (1.31-shakl).
                            <div className="text-center my-6">
                                <img
                                    src={image1_31}
                                    alt="Kuch ta'sir chizig'i"
                                    className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                                />
                            </div>
                        </p>


                        <p className="mb-4">
                            <MathJax.Node inline formula={"\\vec{R}_B"} /> - B nuqtadagi qo’zg’aluvchi sharnir reaksiya kuchi deyiladi.
                        </p>
                        <p className="mb-4">
                            Agar jism qo’zg’almas sharnir yordamida mahkamlangan bo’lsa, jismga ta’sir qiluvchi kuchlar sistemasi
                            tekislikda yotsa, tayanch reaksiya kuchi ham shu tekislikda yotadi, lekin yo’nalishi noma’lum bo’lganligi uchun,
                            shu tekislikda qurilgan ikkita koordinata o’qlaridagi proeksiyalari orqali aniqlanadi.
                        </p>
                        <p className="mb-4">
                            <MathJax.Node inline formula={"\\vec{R}_{AZ}, \\vec{R}_{AY}"} /> - A nuqtadagi qo’zg’almas sharnirli tayanch reaksiya kuchning
                            mos ravishda <MathJax.Node inline formula={"z"} /> va <MathJax.Node inline formula={"y"} /> o’qlaridagi proeksiyalari deyiladi (1.32 – shakl).
                            <div className="text-center my-6">
                                <img
                                    src={image1_32}
                                    alt="Kuch ta'sir chizig'i"
                                    className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                                />
                            </div>
                        </p>
                        <p className="mb-4">
                            Agar ta’sir qiluvchi kuchlar sistemasi fazoda joylashgan bo’lsa, qo’zg’almas sharnir reaksiya kuchi ham
                            fazoda joylashadi. Yo’nalishi noma’lum bo’lganligi uchun uni ham fazodagi Dekart koordinata o’qlaridagi
                            tashkil etuvchilari orqali aniqlanadi:
                            <MathJax.Node inline formula={"\\vec{R}_{AX}, \\vec{R}_{AY}, \\vec{R}_{AZ}"} /> – A nuqtadagi qo’zg’almas
                            sharnirli tayanch reaksiya kuchining <MathJax.Node inline formula={"x, y, z"} /> o’qlaridagi proeksiyalari
                            deyiladi (1.33 – shakl).
                            <div className="text-center my-6">
                                <img
                                    src={image1_33}
                                    alt="Kuch ta'sir chizig'i"
                                    className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                                />
                            </div>
                        </p>


                        <p className="mb-4">
                            1.34 - shaklda jismning A nuqtasidagi bo’g’lanish pоdpiyatnik (turum) yoki tovontagi bog’lanish deyiladi, u yerdagi reaksiya kuchi ham fazoda tanlangan koordinata o’qlaridagi proeksiyalari{" "}
                            <MathJax.Node inline formula={"\\vec{R}_{AX}, \\vec{R}_{AY}, \\vec{R}_{AZ}"} /> – lar orqali aniqlanadi. Jism B nuqtasida podshipnikli bog’lanishda ko’rsatilgan. Podshipnikning ko’ndalang kesimi tasvirlangan.
                        </p>
                        <p className="mb-4">
                            Bu yerda <MathJax.Node inline formula={"z"} /> o’qi bo’ylab harakatga qarshilik yo’qligi uchun B nuqtadagi bog’lanish reaksiya kuchi{" "}
                            <MathJax.Node inline formula={"xy"} /> tekisligida yotadi, yo’nalishi noma’lum bo’lganligidan <MathJax.Node inline formula={"x"} /> va{" "}
                            <MathJax.Node inline formula={"y"} /> o’qlardagi{" "}
                            <MathJax.Node inline formula={"\\vec{R}_{BX}, \\vec{R}_{BY}"} /> tashkil etuvchilari orqali aniqlanadi (1.34 – shakl):
                            <div className="text-center my-6">
                                <img
                                    src={image1_34}
                                    alt="Kuch ta'sir chizig'i"
                                    className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                                />
                            </div>
                        </p>
                        <p className="mb-4">
                            Agar BC balkaning B uchi devorga qistirib mahkamlangan va ta’sir etuvchi kuchlar shakl tekisligida yotsa, B nuqtadagi bog’lanish reaksiya kuchining ikkita tashkil etuvchisidan tashqari,
                            balkaning B nuqta atrofida aylanishiga qarshilik qiluvchi moment <MathJax.Node inline formula={"m"} /> hosil bo’ladi. Bunda{" "}
                            <MathJax.Node inline formula={"\\vec{R}_{BX}, \\vec{R}_{BY}"} /> – reaksiya kuchning tashkil etuvchilari,{" "}
                            <MathJax.Node inline formula={"m"} /> – aylanishga qarshilik ko’rsatuvchi reaksiya momenti (1.35 – shakl) deyiladi.
                            <div className="text-center my-6">
                                <img
                                    src={image1_35}
                                    alt="Kuch ta'sir chizig'i"
                                    className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                                />
                            </div>
                        </p>
                        <p className="mb-4">
                            Jism (оg’irligi hisоbga оlinmaydigan) sterjen bilan sharnirlar оrqali bоg’langan bo’lsa, sterjenlarda hosil bo’ladigan zo’riqish kuchlari sterjen bo’ylab yo’nalgan bo’ladi. Ularga sterjenlarning zo’riqish kuchlari
                            deyiladi.
                        </p>
                        <p className="mb-4">
                            Odatda <MathJax.Node inline formula={"\\vec{S}"} /> harfi bilan belgilanadi. Shaklda{" "}
                            <MathJax.Node inline formula={"\\vec{S}_A, \\vec{S}_B, \\vec{S}_C"} /> lar A, B, C nuqtalaridagi sterjenlarning zo’riqish kuchlari (1.36 – shakl).
                            <div className="text-center my-6">
                                <img
                                    src={image1_36}
                                    alt="Kuch ta'sir chizig'i"
                                    className="mx-auto shadow-lg  sm:w-3/5 lg:w-1/3"
                                />
                            </div>
                        </p>
                        <p className="mb-4">
                            Jismga ta’sir qiluvchi, bоg’lanishlarga bоg’liq bo’lmagan kuchlar aktiv kuchlar yoki berilgan kuchlar deyiladi. Bоg’lanishlarning reaksiya kuchlari passiv kuchlar yoki reaksiya kuchlari deyiladi.
                        </p>
                        <p className="mb-4">
                            Mexanika masalalarini yechishda bоg’lanishdagi jismni bоg’liqligidan оzоd qilib, bоglanish ta’sirini reaksiya kuchi bilan almashtirib, aktiv va passiv kuchlar ta’siridagi erkin jism deb qaraladi.
                        </p>
                    </div>
                </div>
            </MathJax.Provider>
        </>
    );
}

export default ConnectionsAndReactions;
