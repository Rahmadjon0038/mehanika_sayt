import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "../Navbar";
import image5_10 from '../../assets/bolim@5image/image5_10.png';
import image5_10a from '../../assets/bolim@5image/image5_10a.png';

const QattiqJismningHarakati56 = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1940px] mx-auto mt-10 pt-20">
        <h1 className="text-2xl font-bold mb-6 text-center">
          5.6 – §. Qattiq jismning tekis parallel harakati
        </h1>

        <p className="mb-4">
          Jismning har bir nuqtasi doimo biror qo'zg'almas tekislikka parallel tekislikda
          harakatlansa, bunday harakatga qattiq jismning tekis parallel harakati deyiladi.
        </p>
        <div className="text-center py-6">
          <img
            src={image5_10}
            alt="Qo'zg'almas o'q atrofida aylanma harakat"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <div className="text-center py-6">
          <img
            src={image5_10a}
            alt="Qo'zg'almas o'q atrofida aylanma harakat"
            className="mx-auto rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/3"
          />
        </div>
        <p className="mb-4">
          To'g'ri chiziqli relsda g'ildirakning dumalashi, krivoship shatunli mexanizmda
          tekislikdagi shatun harakati tekis parallel harakatga misol bo'ladi. G'ildirak va
          <InlineMath math={"AB"} /> shatun doimo shakl tekisligida harakatlanadi (5.10 – shakl).
        </p>

      </div>
    </>
  );
};

export default QattiqJismningHarakati56;