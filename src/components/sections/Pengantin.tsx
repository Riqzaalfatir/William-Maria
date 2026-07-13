import React from "react";
import ResponsivePicture from "@/hooks/ResponsivePicture";

const Pengantin = () => {
  return (
    <section
      id="gallery"
      className="relative w-full bgb h-[360px] lg:h-[942px]"
    >
      <ResponsivePicture
        mobileSrc="/images/pengantin/Sl-Wima.webp"
        desktopSrc="/images/pengantin/SL-WIMAD.webp"
        alt="Nicholas & Clara"
        className="w-full h-full object-cover pointer-events-none"
        unoptimized
      />
    </section>
  );
};

export default Pengantin;


// SEBELUM DIBERIKAN LOGIC DOWNLOAD
// import React from "react";


// const Pengantin = () => {
//   return (
//     <section
//       id="gallery"
//       className="relative w-full h-[360px] lg:h-[942px] flex"
//     >
//       <img
//         src="/images/pengantin/Sl-Wima.webp"
//         alt="Nicholas & Clara"
//         className="w-full h-full object-cover pointer-events-none lg:hidden"
//       />
//       <img
//         src="/images/pengantin/Sl-WIMAD.webp"
//         alt="Nicholas & Clara"
//         className="w-full h-full object-cover pointer-events-none hidden lg:block"
//       />
//     </section>
//   );
// };

// export default Pengantin;
