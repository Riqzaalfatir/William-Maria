import React from "react";
import Image from "next/image";
import ResponsivePicture from "@/hooks/ResponsivePicture";

const Hero = () => {
  return (
    <div id="hero">
      <div className="relative w-full overflow-hidden [aspect-ratio:390/844] lg:h-screen lg:aspect-[1512/945]">
        <ResponsivePicture
          mobileSrc="/images/hero/Pengantin-Wm3.webp"
          desktopSrc="/images/hero/PengantinD.webp"
          alt="Jusuf & Evelyn"
          objectPositionMobile="center"
          objectPositionDesktop="top"
          priority
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center text-center pt-[20.77vw] lg:pt-0 lg:justify-center">
          <p className="text-white font-athelas text-[10px] lg:text-[18px] uppercase">
            The Wedding of
          </p>

          <div className="absolute top-[25.9vw] left-1/2 -translate-x-1/2 w-[255px] h-auto z-30 lg:static lg:translate-x-0 lg:w-[411px] lg:mt-[20px]">
            <Image
              src="/images/hero/Logo-WmD.png"
              alt="Provite Logo"
              width={450}
              height={450}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// VERSI TANPA LOGIC DOWNLOAD
// import React from "react";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <div id="hero">
//       <div className="relative w-full overflow-hidden [aspect-ratio:390/844] lg:min-h-screen lg:aspect-[1512/945]">
//         <Image
//           src="/images/hero/Pengantin-Wm3.webp"
//           alt="Jusuf & Evelyn"
//           fill
//           className="object-cover lg:hidden"
//           priority
//         />
//         <Image
//           src="/images/hero/Pengantin-Dekstop.webp"
//           alt="Jusuf & Evelyn"
//           fill
//           className="object-cover object-[10%_17%] hidden lg:block"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-start pt-[20.77vw] lg:pt-[7.7%] text-center z-10">
//           <p className="text-white font-athelas text-[10px] lg:text-[18px] uppercase">
//             The Wedding of
//           </p>
//         </div>

//         <div className="absolute top-[25.9vw] left-1/2 -translate-x-1/2 w-[255px] lg:top-[15.8%] lg:w-[411px] h-auto z-30">
//           <Image
//             src="/images/hero/Logo-WmD.png"
//             alt="Provite Logo"
//             width={450}
//             height={450}
//             className="w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
