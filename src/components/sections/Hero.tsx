import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero">
      <div className="relative w-full overflow-hidden [aspect-ratio:390/844] lg:min-h-screen lg:aspect-[1512/945]">
        <Image
          src="/images/hero/Pengantin4.webp"
          alt="Jusuf & Evelyn"
          fill
          className="object-cover lg:hidden"
          priority
        />
        <Image
          src="/images/hero/Pengantin-Dekstop.webp"
          alt="Jusuf & Evelyn"
          fill
          className="object-cover object-[90%_27%] hidden lg:block"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[20.77vw] lg:pt-[7.5%] text-center z-10">
          <p className="text-white font-athelas text-[10px] lg:text-[18px] tracking-widest uppercase lg:tracking-normal">
            The Wedding of
          </p>
        </div>

        <div className="absolute top-[25.64vw] left-1/2 -translate-x-1/2 w-[255px] lg:top-[15.4%] lg:w-[411px] h-auto z-30">
          <Image
            src="/images/hero/Logo-WmD.png"
            alt="Provite Logo"
            width={450}
            height={450}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
