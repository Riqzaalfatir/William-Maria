import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero">
      <div className="relative w-full overflow-hidden [aspect-ratio:390/844] lg:min-h-screen lg:aspect-auto">
        <Image
          src="/images/hero/Pengantin4.webp"
          alt="Jusuf & Evelyn"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[20.77vw] lg:pt-[17%] text-center z-10">
          <p className="text-white font-athelas text-[10px] lg:text-[20px] tracking-widest uppercase">
            The Wedding of
          </p>
        </div>

        <div className="absolute top-[25.64vw] left-1/2 -translate-x-1/2 w-[255px] lg:top-[16%] lg:w-[79px] h-auto z-30">
          <Image
            src="/images/hero/Logo-Wm.png"
            alt="Provite Logo"
            width={250}
            height={250}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;