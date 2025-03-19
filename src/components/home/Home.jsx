import React from 'react';
import Navbar from '../Navbar';
import user from '../../assets/user.png';

function Home() {
    return (
        <div className="max-w-[1940px] mx-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white  ">
            <Navbar />
            <div className="pt-32">
                <div className="homeimg  flex items-center justify-center">
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 p-8 bg-white bg-opacity-10 backdrop-blur-3xl rounded-2xl shadow-xl ">
                        <img
                            src={user}
                            alt="User"
                            className="w-64 h-64 sm:w-72 sm:h-72 md:w-72 md:h-72 lg:w-[500px] lg:h-[500px] rounded-full mx-auto lg:mx-0 border-2 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                        <div className="text-center space-y-4 text-white">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                Namangan Davlat Texnika Universiteti
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
                                Mexanika fani
                            </h2>
                            <h3 className="text-lg sm:text-xl md:text-2xl">
                                Ustoz dotsent Shirin Jumaboyeva
                            </h3>
                        </div>
                    </div>
                </div>
                <div className=" bg-white text-[#333] p-8 sm:p-12 mt-12 rounded-xl  max-w-[80%] shadow-lg mx-auto ">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        MEXANIKA FANI TO'G'RISIDA
                    </h1>
                    <p className="text-2xl leading-8 text-justify">
                        Mexanika – insoniyatning hayotiy ehtiyojlari asosida paydo boʻlgan juda qadimiy fan boʻlishi bilan birga, zamonaviy matematika usullari, hisoblash texnikasi, axborotlar va materiallarning yuqori texnologiyasi taraqqiy etayotganligini hisobga olgan holda rivojlanayotgan ilmiy soha hisoblanadi.
                        Mexanika moddiy jismlarning mexanik harakatlari va ularning o'zaro ta'sirlari to'g'risidagi fandir.
                        <br /><br />
                        Mexanika grekcha so'z bo'lib, “mashinalar qurish san'ati” degan ma'noni bildiradi. Yuqori malakali mutaxassislar tayyorlashda mexanika fanining oʻrni beqiyos.
                        Respublikamiz Oliy ta'lim muassasalarining texnika yoʻnalishlarida mexanika fani bir necha qismlarga boʻlib oʻqitiladi:
                        <span className="font-semibold">Nazariy mexanika, materiallar qarshiligi, elastiklik nazariyasi, qurilish mexanikasi, mexanizm va mashinalar nazariyasi, mashina detallari</span>, hamda shu fanlar asosida yoʻnalishlar boʻyicha shakllangan maxsus fanlar.
                        <br /><br />
                        Respublikamiz OTM larida kredit-modul tizimining joriy etilishi sohada dars beruvchi professor-oʻqituvchilarning oʻz mehnat faoliyatlariga yangicha yondashuvni taqozo etdi. Maʼlumki, kredit-modul tizimining maqsadi, auditoriyada oʻqitiladigan dars soatlarini kamaytirib, talabalarni ortiqcha yuklamalardan ozod qilish, ularni mustaqil ishlashga yoʻnaltirishdan iborat.
                        <br /><br />
                        Mazkur maqsadni amalga oshirish uchun tizimga moslangan, oʻquv dasturlariga asoslangan yangi oʻquv adabiyotlar yaratildi. Bu adabiyotlarda mexanika har bir bo'limining maqsad va vazifalari keltirilgan.





                        <h1 className='text-3xl font-bold mt-12 mb-6 text-center'>NAZARIY MEXANIKA ASOSLARI</h1>
                        <p className='text-2xl leading-10'>
                            Nazariy mexanikada moddiy jismlarning mexanik harakatlarining umumiy qonunlari o’rganiladi. Mexanik harakat moddiy jismlarning eng oddiy harakati hisoblanadi.

                            <p className='te '>Jismning vaqt o’tishi bilan biror qo’zg’almay turgan boshqa jismga nisbatan fazoda tutgan o’rnini yoki holatini o’zgarishi mexanik harakat deyiladi.</p>

                            Bunday harakat jismlarning o’zaro ta’siri natijasida yuzaga keladi. Harakat fazo va vaqtda sodir bo’ladi. Harakatni o’rganish uchun sanoq sistemasi tushunchasi kiritilgan. Sanoq sistemasi deganda, biror koordinatalar sistemasi hamda vaqtni o’lchovchi soat birgalikda tushiniladi.
                            Nazariy mexanikada vaqt jismning harakatiga bog’liq emas, ya’ni fazoning barcha nuqtalari uchun bir xil deb qabul qilinadi.

                            Nazariy mexanikada ingliz olimi Isaak Nyuton (1643-1727) tomonidan kashf qilingan qonunlar o’rinli bo’ladigan sistema <b>inersial sanoq sistemasida ish ko’riladi.</b>
                            <p className='te'> Ko’pgina texnika masalalarini yechishda, agar Yerning aylanishini hisobga olmaslik mumkin bo’lsa, Yer bilan bog’langan sistema qo’zg’almas inersial sistema deb qabul qilinadi.</p>
                            Nazariy mexanikada abstraksiyalash (cheklovlar qo’yish) usuli muhim ahamiyatga ega.
                            Masalan:
                            <p className='te'> biror jismning harakatida uning barcha nuqtalari, deyarli bir xil harakatda bo’lsa, jism o’lchamlarini hisobga olmasdan, moddiy nuqta deb qaraladi.</p>
                            Moddiy nuqta tushunchasi geometriyadagi nuqta tushunchasidan farq qilib, moddiy nuqta massaga ega bo’lib, barcha jismlar kabi inertlikka va o’zaro ta’sirlashish xususiyatiga ega.
                            Real jismni abstraksiyalashga yana bir misol, absolyut qattiq jism tushunchasidir.
                            <p className='te'>Jism tashqi ta’sirlar natijasida o’zining geometrik shaklini o’zgartirmasa, unga absolyut qattiq jism deyiladi.</p>
                            Albatta, absolyut qattiq jism tabiatda yo’q, jism tashqi ta’sirdan oz bo’lsa–da shaklini o’zgartiradi, lekin juda ko’p holatlarda bu o’zgarishni hisobga olmaslik mumkin.
                            Masalan. Biror mashina yoki mexanizm harakatini o’rganayotganda uning qismlaridagi shakl o’zgarishlarni hisobga olmaslik mumkin. Lekin, bu texnika uskunalarini mustahkamlikka hisob qilinayotganda albatta, u o’zgarishlarni hisobga olinadi.



                            Shuning uchun, u yoki bu cheklashlardan, gepotezalardan foydalanganda masala qaysi nuqtai nazardan ko’rilayotganligini inobatga olib ish ko’riladi. Aks holda, noto’gri xulosalarga, yechimlarga ega bo’lish mumkin.

                            <p className='te'>Nazariy mexanika qonunlari tezligi yorug’lik tezligi (300000 km/s) dan ancha kam, o’lchamlari molekula o’lchamlaridan ancha katta bo’lgan moddiy jismlar harakati uchun o’rinli hisoblanadi.</p>
                            Ba’zi hollarda, moddiy jismlar tashqi ta’sirlar natijasida tanlangan koordinatalar sistemasida harakatsiz qolishi mumkin. Bu holatni jismning tinch qolishi yoki <b> muvozanat holati</b> deyiladi. Jismlarning muvozanat holatlari harakatning xususiy ko’rinishi bo’lganligi uchun nazariy mexanikada jismlarning muvozanatda bo’lish qonuniyatlari ham o’rganiladi.
                            Nazariy mexanika masalalarning qanday nuqtai nazardan tekshirilishiga qarab uch qismga bo’lib o’rganiladi. <b>Statika, kinematika, dinamika.</b>
                            Quyida mexanikada jismlarning qayerda ishlatilayotganligiga, shakliga qarab belgilangan atamalar keltirilgan.
                            <b>Brus</b> -  bir o‘lchami qolgan ikki o‘lchamiga nisbatan ancha katta bo‘lgan moddiy jism. <b>Sterjen</b> –faqat uzunlikka ega bo‘lib, ko‘ndalang kesimini e’tiborga olinmaydigan brus. <b>Balka</b> – egilishga ishlaydigan brus. <b>Val</b> – ko`ndalang kesimi doiradan iborat, bralishga ishlaydigan brus. <b>Massiv</b> – uchala o‘lchami deyarli bir xil kattalikdagi jism. <b>Plastina</b> – ikki o‘lchami uchinchi o‘lchamiga nisbatan ancha katta bo‘lgan o‘zaro parallel ikkita tekislik bilan chegaralangan jism. <b>Obolochka</b> (qobiq) – ikki o‘lchami uchinchi o‘lchamiga nisbatan ancha katta bo‘lgan, o‘zaro parallel ikkita egri chiziqli sirt bilan chegaralangan jism.</p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
